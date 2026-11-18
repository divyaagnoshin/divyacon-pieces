import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const maxPublishCount = parseInt(process.env.BATCH_SIZE || '50', 10);

console.log('====================================================');
console.log('  DivyaCon Connectors Automated CI Fast Publisher   ');
console.log(`  Batch Limit per Run: ${maxPublishCount}`);
console.log('====================================================\n');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Redact anything that looks like an npm token before writing reports/logs. */
function redact(text) {
  return String(text || '')
    .replace(/npm_[A-Za-z0-9]{20,}/g, 'npm_***REDACTED***')
    .replace(/_authToken\s*=\s*\S+/gi, '_authToken=***REDACTED***');
}

/** Fetch with retries for registry metadata. Returns version or null. */
async function fetchPublishedVersion(pkgName) {
  const url = `https://registry.npmjs.org/${encodeURIComponent(pkgName)}/latest`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'divyacon-ci-publisher' } });
      if (res.ok) {
        const data = await res.json();
        return data.version || null;
      }
      if (res.status === 404) return null;
    } catch (err) {
      // retry
    }
    if (attempt < 3) await sleep(1000 * attempt);
  }
  return null;
}

async function getAllPublished() {
  const published = new Map();
  let from = 0;
  const size = 250;
  try {
    while (true) {
      const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=@divyacon&size=${size}&from=${from}`, {
        headers: { 'User-Agent': 'divyacon-ci-publisher' }
      });
      if (!res.ok) {
        console.warn(`npm search query returned status ${res.status}. Falling back to direct lookup.`);
        break;
      }
      const data = await res.json();
      for (const item of (data.objects || [])) {
        if (item.package && item.package.name && item.package.name.startsWith('@divyacon/')) {
          published.set(item.package.name, item.package.version);
        }
      }
      from += size;
      if (from >= (data.total || 0) || (data.objects || []).length === 0) break;
    }
  } catch (err) {
    console.warn('Could not query npm search API:', err.message);
  }
  return published;
}

const report = {
  runAt: new Date().toISOString(),
  auth: null,
  totalLocal: 0,
  liveOnNpm: 0,
  pending: [],
  published: [],
  failures: [],
  rateLimited: false,
  fatal: null
};

function writeReport() {
  try {
    fs.writeFileSync(path.join(rootDir, 'publish-report.json'), JSON.stringify(report, null, 2) + '\n', 'utf8');
  } catch (e) {
    console.warn('Could not write publish-report.json:', e.message);
  }
}

function checkAuth() {
  try {
    const out = execSync('npm whoami', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    report.auth = { ok: true, user: out.trim() };
    console.log(`npm auth OK: ${out.trim()}`);
    return true;
  } catch (err) {
    const msg = redact((err.stderr || err.stdout || err.message || '').toString().split('\n').filter(Boolean)[0]);
    report.auth = { ok: false, error: msg };
    console.error(`npm auth FAILED: ${msg}`);
    return false;
  }
}

async function run() {
  console.log('Scanning local connectors...');
  const allPieces = fs.readdirSync(rootDir)
    .filter((name) => name.startsWith('piece-') && fs.statSync(path.join(rootDir, name)).isDirectory())
    .sort();
  report.totalLocal = allPieces.length;
  console.log(`Total local connectors found: ${allPieces.length}\n`);

  // Preflight: if the npm token is invalid, fail loudly instead of silently
  // "succeeding" with zero publishes.
  if (!checkAuth()) {
    report.fatal = 'npm authentication failed — update the NPM_TOKEN GitHub secret';
    writeReport();
    process.exitCode = 1;
    return;
  }

  console.log('Checking currently published packages on npm registry...');
  const published = await getAllPublished();

  // Authoritative per-package lookup: npm search can be stale.
  for (const piece of allPieces) {
    const pkgName = `@divyacon/${piece}`;
    if (!published.has(pkgName)) {
      const v = await fetchPublishedVersion(pkgName);
      if (v) published.set(pkgName, v);
    }
  }
  report.liveOnNpm = published.size;
  console.log(`Currently live on npm (@divyacon): ${published.size}`);

  const toPublish = allPieces.filter((piece) => {
    const pkgName = `@divyacon/${piece}`;
    const pkgJsonPath = path.join(rootDir, piece, 'package.json');
    if (!fs.existsSync(pkgJsonPath)) return false;
    let localVer = '0.1.0';
    try {
      localVer = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8')).version || '0.1.0';
    } catch (e) {}

    const liveVer = published.get(pkgName);
    if (!liveVer) return true;
    return localVer !== liveVer;
  });

  report.pending = toPublish.map((p) => {
    let v = null;
    try { v = JSON.parse(fs.readFileSync(path.join(rootDir, p, 'package.json'), 'utf8')).version; } catch (e) {}
    return { piece: p, version: v, live: published.get(`@divyacon/${p}`) || null };
  });

  console.log(`Connectors remaining/pending publish: ${toPublish.length}\n`);

  if (toPublish.length === 0) {
    console.log('All connectors are up to date on npm under @divyacon! Nothing to do.');
    writeReport();
    return;
  }

  let publishedThisRun = 0;

  for (let i = 0; i < toPublish.length; i++) {
    if (publishedThisRun >= maxPublishCount) {
      console.log(`\nBatch limit of ${maxPublishCount} reached for this run.`);
      break;
    }

    const piece = toPublish[i];
    const pkgName = `@divyacon/${piece}`;
    const pkgDir = path.join(rootDir, piece);

    console.log(`--> [${publishedThisRun + 1}/${maxPublishCount}] Publishing ${pkgName}...`);

    try {
      const out = execSync('npm publish --access public', {
        cwd: pkgDir,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      publishedThisRun++;
      report.published.push(pkgName);
      console.log(`    SUCCESS: ${pkgName} published!`);
      await sleep(3000);
    } catch (err) {
      const output = redact((err.stdout || '') + '\n' + (err.stderr || '') + '\n' + (err.message || ''));
      const firstLine = output.split('\n').map((l) => l.trim()).filter(Boolean)[0] || 'Unknown error';

      if (output.includes('429') || output.toLowerCase().includes('rate limited')) {
        console.warn('\n[NPM RATE LIMIT REACHED] Stopping this run cleanly.');
        report.rateLimited = true;
        writeReport();
        break;
      } else if (output.includes('previously published') || output.includes('cannot publish over') || output.includes('E403')) {
        console.log(`    SKIPPED: already published on npm.`);
        report.failures.push({ package: pkgName, error: firstLine, kind: 'already-published' });
      } else {
        console.error(`    FAILED: ${firstLine}`);
        report.failures.push({ package: pkgName, error: firstLine, kind: 'error' });
        process.exitCode = 1;
      }
    }
  }

  console.log('\n====================================================');
  console.log('SUMMARY:');
  console.log(`  Total Connectors:      ${allPieces.length}`);
  console.log(`  Live on npm:           ${published.size + publishedThisRun}`);
  console.log(`  Published in this run: ${publishedThisRun}`);
  console.log(`  Failures:              ${report.failures.length}`);
  console.log(`  Rate limited:          ${report.rateLimited ? 'YES' : 'NO'}`);
  console.log('====================================================\n');

  writeReport();
}

run().catch((err) => {
  report.fatal = redact(err?.stack || err?.message || String(err));
  console.error(report.fatal);
  writeReport();
  process.exitCode = 1;
});
