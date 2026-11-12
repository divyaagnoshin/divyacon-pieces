/**
 * check-activepieces-versions.mjs
 *
 * Checks if the upstream @activepieces/piece-* version has changed
 * compared to the `agnocon.originVersion` stored in each local package.json.
 *
 * If a newer version is found on Activepieces npm, it bumps the local
 * @divyacon package version (patch) so ci-publish.mjs will pick it up.
 *
 * Outputs a JSON summary of what was bumped to stdout at the end.
 *
 * Usage:
 *   node scripts/check-activepieces-versions.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

console.log('====================================================');
console.log('  DivyaCon — Activepieces Version Sync Checker      ');
console.log('====================================================\n');

// No patch bump needed — we mirror the Activepieces version directly

/** Fetch the latest published version of an npm package */
async function getLatestNpmVersion(pkgName) {
  try {
    const encoded = encodeURIComponent(pkgName);
    const res = await fetch(`https://registry.npmjs.org/${encoded}/latest`, {
      headers: { 'User-Agent': 'divyacon-version-checker' }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.version || null;
  } catch {
    return null;
  }
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
  .filter(name => name.startsWith('piece-') && fs.statSync(path.join(rootDir, name)).isDirectory())
  .sort();

console.log(`Local connectors: ${localPieces.length}\n`);

const bumped = [];
const upToDate = [];
const skipped = [];

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

  // The upstream Activepieces package name mirrors the piece folder name
  const apPkgName = `@activepieces/${piece}`;
  const originVersion = pkg?.agnocon?.originVersion || null;
  const localVersion = pkg.version;

  if (!originVersion) {
    skipped.push({ piece, reason: 'No agnocon.originVersion set' });
    continue;
  }

  // Fetch the latest from Activepieces on npm
  const latestApVersion = await getLatestNpmVersion(apPkgName);

  if (!latestApVersion) {
    console.log(`  ⚠  ${piece}: @activepieces package not found on npm — skipping`);
    skipped.push({ piece, reason: 'Activepieces package not found on npm' });
    continue;
  }

  console.log(`  ${piece}:`);
  console.log(`     @activepieces latest: ${latestApVersion}  |  our originVersion: ${originVersion}  |  our version: ${localVersion}`);

  if (isNewer(latestApVersion, originVersion)) {
    // Mirror the Activepieces version directly (e.g. AP 0.18.6 → @divyacon version 0.18.6)
    const newVersion = latestApVersion;
    pkg.version = newVersion;
    pkg.agnocon = { ...pkg.agnocon, originVersion: latestApVersion };

    fs.writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');

    console.log(`     ✅ UPDATED: ${localVersion} → ${newVersion}  (mirrors AP: ${originVersion} → ${latestApVersion})`);
    bumped.push({
      piece,
      divyaconPkg: `@divyacon/${piece}`,
      oldVersion: localVersion,
      newVersion,
      apOldVersion: originVersion,
      apNewVersion: latestApVersion
    });
  } else {
    console.log(`     — Up to date`);
    upToDate.push(piece);
  }
}

console.log('\n====================================================');
console.log('SUMMARY:');
console.log(`  Checked:    ${localPieces.length}`);
console.log(`  Bumped:     ${bumped.length}`);
console.log(`  Up to date: ${upToDate.length}`);
console.log(`  Skipped:    ${skipped.length}`);
console.log('====================================================\n');

if (bumped.length > 0) {
  console.log('Bumped packages:');
  bumped.forEach(b => {
    console.log(`  ${b.divyaconPkg}: v${b.oldVersion} → v${b.newVersion}  (AP ${b.apOldVersion} → ${b.apNewVersion})`);
  });
  console.log();
}

// Write result to a file so the GitHub Actions step can read it
const summary = { bumped, upToDate, skipped, timestamp: new Date().toISOString() };
fs.writeFileSync(path.join(rootDir, '.version-check-result.json'), JSON.stringify(summary, null, 2) + '\n');
console.log('Result written to .version-check-result.json');

// Exit code 0 always; the CI workflow decides what to do based on bumped.length
process.exit(0);
