/**
 * check-activepieces-versions.mjs
 *
 * Checks if the upstream @activepieces/piece-* version has changed
 * compared to the `agnocon.originVersion` stored in each local package.json.
 *
 * If a newer version is found on Activepieces npm, the local @divyacon
 * package version is mirrored to that exact version so ci-publish.mjs
 * will publish it.
 *
 * IMPORTANT: a failed npm lookup is reported as an ERROR, not silently
 * treated as "up to date". This prevents a rate-limit / network glitch
 * from making CI skip the publish job.
 *
 * Outputs a JSON summary to .version-check-result.json and stdout.
 *
 * Usage:
 *   node scripts/check-activepieces-versions.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const MAX_ATTEMPTS = 4;
const RETRY_DELAY_MS = 1500;
const BETWEEN_REQUEST_DELAY_MS = 150;

console.log('====================================================');
console.log('  DivyaCon — Activepieces Version Sync Checker      ');
console.log('====================================================\n');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch the latest published version of an npm package.
 * Retries transient failures (429 / 5xx / network errors).
 * Returns { version, error }.
 */
async function getLatestNpmVersion(pkgName) {
  const encoded = encodeURIComponent(pkgName);
  const url = `https://registry.npmjs.org/${encoded}/latest`;
  let lastError = 'unknown error';

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'divyacon-version-checker',
          Accept: 'application/vnd.npm.install-v1+json'
        }
      });

      if (res.ok) {
        const data = await res.json();
        if (data.version) return { version: data.version, error: null };
        lastError = 'response contained no version';
      } else if (res.status === 404) {
        // Package genuinely does not exist on npm — no point retrying.
        return { version: null, error: `npm 404 (package not published upstream)` };
      } else {
        lastError = `npm returned HTTP ${res.status}`;
      }
    } catch (err) {
      lastError = err?.message || String(err);
    }

    if (attempt < MAX_ATTEMPTS) {
      console.log(`     retry ${attempt}/${MAX_ATTEMPTS - 1} for ${pkgName}: ${lastError}`);
      await sleep(RETRY_DELAY_MS * attempt);
    }
  }

  return { version: null, error: lastError };
}

/** Compare two semver strings. Returns true if a > b */
function isNewer(a, b) {
  if (!a || !b) return false;
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if ((pa[i] || 0) > (pb[i] || 0)) return true;
    if ((pa[i] || 0) < (pb[i] || 0)) return false;
  }
  return false;
}

// Find all local piece-* folders
const localPieces = fs.readdirSync(rootDir)
  .filter((name) => name.startsWith('piece-') && fs.statSync(path.join(rootDir, name)).isDirectory())
  .sort();

console.log(`Local connectors: ${localPieces.length}\n`);

const bumped = [];
const upToDate = [];
const skipped = [];
const fetchErrors = [];
let fetchAttempts = 0;

for (const piece of localPieces) {
  const pkgJsonPath = path.join(rootDir, piece, 'package.json');
  if (!fs.existsSync(pkgJsonPath)) {
    skipped.push({ piece, reason: 'No package.json' });
    continue;
  }

  let pkg;
  try {
    pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
  } catch {
    skipped.push({ piece, reason: 'Invalid package.json' });
    continue;
  }

  const apPkgName = `@activepieces/${piece}`;
  const originVersion = pkg?.agnocon?.originVersion || null;
  const localVersion = pkg.version;

  if (!originVersion) {
    skipped.push({ piece, reason: 'No agnocon.originVersion set' });
    continue;
  }

  // Fetch the latest from Activepieces on npm
  fetchAttempts++;
  const { version: latestApVersion, error } = await getLatestNpmVersion(apPkgName);

  if (!latestApVersion) {
    console.log(`  ERROR ${piece}: could not read upstream version — ${error}`);
    fetchErrors.push({ piece, package: apPkgName, error });
    continue;
  }

  console.log(`  ${piece}:`);
  console.log(`     @activepieces latest: ${latestApVersion}  |  our originVersion: ${originVersion}  |  our version: ${localVersion}`);

  if (isNewer(latestApVersion, originVersion)) {
    const newVersion = latestApVersion;
    pkg.version = newVersion;
    pkg.agnocon = { ...pkg.agnocon, originVersion: latestApVersion };

    fs.writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');

    console.log(`     UPDATED: ${localVersion} -> ${newVersion}  (mirrors AP: ${originVersion} -> ${latestApVersion})`);
    bumped.push({
      piece,
      divyaconPkg: `@divyacon/${piece}`,
      oldVersion: localVersion,
      newVersion,
      apOldVersion: originVersion,
      apNewVersion: latestApVersion
    });
  } else {
    console.log('     - Up to date');
    upToDate.push(piece);
  }

  await sleep(BETWEEN_REQUEST_DELAY_MS);
}

console.log('\n====================================================');
console.log('SUMMARY:');
console.log(`  Checked:      ${localPieces.length}`);
console.log(`  Bumped:       ${bumped.length}`);
console.log(`  Up to date:   ${upToDate.length}`);
console.log(`  Skipped:      ${skipped.length}`);
console.log(`  Fetch errors: ${fetchErrors.length}`);
console.log('====================================================\n');

if (bumped.length > 0) {
  console.log('Bumped packages:');
  bumped.forEach((b) => {
    console.log(`  ${b.divyaconPkg}: v${b.oldVersion} -> v${b.newVersion}  (AP ${b.apOldVersion} -> ${b.apNewVersion})`);
  });
  console.log();
}

if (fetchErrors.length > 0) {
  console.log('FETCH ERRORS (these packages were NOT checked):');
  fetchErrors.forEach((e) => console.log(`  ${e.piece}: ${e.error}`));
  console.log();
}

// Write result to a file so the GitHub Actions step can read it
const summary = {
  bumped,
  upToDate,
  skipped,
  fetchErrors,
  timestamp: new Date().toISOString()
};
fs.writeFileSync(path.join(rootDir, '.version-check-result.json'), JSON.stringify(summary, null, 2) + '\n');
console.log('Result written to .version-check-result.json');

// A total lookup failure means we cannot trust "0 bumps" — fail loudly so CI shows it.
if (fetchAttempts > 0 && fetchErrors.length === fetchAttempts) {
  console.error('\nFATAL: every upstream npm lookup failed. Refusing to report "no updates".');
  process.exit(1);
}

process.exit(0);
