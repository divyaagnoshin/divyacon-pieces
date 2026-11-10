import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const logFile = path.join(rootDir, 'publisher.log');

function log(msg) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const line = `[${timestamp} IST] ${msg}`;
  console.log(line);
  try {
    fs.appendFileSync(logFile, line + '\n');
  } catch (e) {}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getAllPublished() {
  const published = new Set();
  let from = 0;
  const size = 250;
  try {
    while (true) {
      const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=@divyacon&size=${size}&from=${from}`, {
        headers: { 'User-Agent': 'divyacon-auto-publisher' }
      });
      if (!res.ok) break;
      const data = await res.json();
      for (const item of (data.objects || [])) {
        if (item.package && item.package.name && item.package.name.startsWith('@divyacon/')) {
          published.add(item.package.name);
        }
      }
      from += size;
      if (from >= (data.total || 0) || (data.objects || []).length === 0) break;
    }
  } catch (err) {
    log(`Warning querying npm search: ${err.message}`);
  }
  return published;
}

async function attemptPublishOne(pkgDir, pkgName) {
  try {
    execSync('npm publish --access public', {
      cwd: pkgDir,
      encoding: 'utf8',
      stdio: 'pipe'
    });
    return { success: true };
  } catch (err) {
    const output = (err.stdout || '') + '\n' + (err.stderr || '') + '\n' + (err.message || '');
    if (output.includes('429') || output.includes('rate limited')) {
      return { success: false, rateLimited: true };
    }
    if (output.includes('previously published') || output.includes('cannot publish over') || output.includes('E403')) {
      return { success: true, alreadyDone: true };
    }
    const firstLine = (err.stderr || err.message || '').split('\n').filter(Boolean)[0] || 'Unknown error';
    return { success: false, error: firstLine };
  }
}

async function main() {
  log('====================================================');
  log('  DivyaCon Auto-Retry Background Publisher Started  ');
  log('====================================================');

  while (true) {
    const allPieces = fs.readdirSync(rootDir)
      .filter(name => name.startsWith('piece-') && fs.statSync(path.join(rootDir, name)).isDirectory())
      .sort();

    const published = await getAllPublished();
    const remaining = allPieces.filter(p => !published.has(`@divyacon/${p}`));

    log(`Connectors in repository: ${allPieces.length} | Live on npm: ${published.size} | Remaining: ${remaining.length}`);

    if (remaining.length === 0) {
      log('🎉 ALL CONNECTORS ARE PUBLISHED SUCCESSFULLY! Job complete.');
      try {
        log('Installing all connectors into installed-connectors cache...');
        execSync('node scripts/install-all-connectors.mjs', { cwd: rootDir, stdio: 'inherit' });
        log('✅ Installation complete!');
      } catch (e) {
        log(`Warning during install: ${e.message}`);
      }
      break;
    }

    // Test first unpublished connector
    const testPiece = remaining[0];
    const testPkgName = `@divyacon/${testPiece}`;
    const testDir = path.join(rootDir, testPiece);

    log(`Testing npm server with ${testPkgName}...`);
    const testResult = await attemptPublishOne(testDir, testPkgName);

    if (testResult.rateLimited) {
      log(`🔒 npm 24-hour rate limit is still active.`);
      log(`Next check in 15 minutes. Waiting...`);
      await sleep(15 * 60 * 1000); // 15 minutes
      continue;
    }

    if (testResult.success) {
      log(`🔓 npm is UNLOCKED! Successfully published ${testPkgName}!`);
      // Publish the rest in this unlocked session
      for (let i = 1; i < remaining.length; i++) {
        const piece = remaining[i];
        const pkgName = `@divyacon/${piece}`;
        const pkgDir = path.join(rootDir, piece);

        log(`Publishing [${i + 1}/${remaining.length}] ${pkgName}...`);
        const res = await attemptPublishOne(pkgDir, pkgName);

        if (res.success) {
          log(`  ✅ Published ${pkgName}!`);
          await sleep(5000); // 5s buffer between packages
        } else if (res.rateLimited) {
          log(`⚠️ Hit quota after publishing batch. Will resume in next interval.`);
          break;
        } else {
          log(`  ❌ Failed ${pkgName}: ${res.error}`);
        }
      }
    } else {
      log(`Unexpected error testing ${testPkgName}: ${testResult.error}`);
      await sleep(5 * 60 * 1000); // 5 min retry
    }
  }
}

main().catch(err => log(`Fatal error: ${err.message}`));
