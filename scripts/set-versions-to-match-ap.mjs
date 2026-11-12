/**
 * set-versions-to-match-ap.mjs
 *
 * One-time script: sets each @divyacon connector's npm version
 * to exactly match the latest @activepieces version.
 *
 * e.g. piece-gmail → v0.18.6, piece-google-sheets → v0.20.0
 *
 * Run once: node scripts/set-versions-to-match-ap.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

console.log('====================================================');
console.log('  DivyaCon — Set Versions to Mirror Activepieces    ');
console.log('====================================================\n');

async function getLatestNpmVersion(pkgName) {
  try {
    const res = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkgName)}/latest`, {
      headers: { 'User-Agent': 'divyacon-version-sync' }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.version || null;
  } catch {
    return null;
  }
}

const localPieces = fs.readdirSync(rootDir)
  .filter(n => n.startsWith('piece-') && fs.statSync(path.join(rootDir, n)).isDirectory())
  .sort();

console.log(`Syncing ${localPieces.length} connectors...\n`);

const results = [];

for (const piece of localPieces) {
  const pkgJsonPath = path.join(rootDir, piece, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));

  const apPkgName = `@activepieces/${piece}`;
  const apVersion = await getLatestNpmVersion(apPkgName);

  if (!apVersion) {
    console.log(`  ⚠  ${piece}: @activepieces package not found — keeping current version`);
    continue;
  }

  const oldVersion = pkg.version;
  pkg.version = apVersion;
  pkg.agnocon = { ...pkg.agnocon, originVersion: apVersion };

  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  results.push({ piece, old: oldVersion, new: apVersion });
  console.log(`  ✅  @divyacon/${piece}: ${oldVersion} → ${apVersion}`);
}

console.log('\n====================================================');
console.log(`Updated ${results.length} / ${localPieces.length} connectors`);
console.log('====================================================\n');
console.log('Now commit + push — GitHub Actions will publish the new versions to npm.');
