/**
 * deprecate-extra-packages.mjs
 *
 * Deprecates all @divyacon/* packages on npm that do NOT have a matching
 * piece-* folder in this local repo. Run with:
 *   node scripts/deprecate-extra-packages.mjs
 *
 * Requires npm to be authenticated (NODE_AUTH_TOKEN env var or local .npmrc).
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

console.log('====================================================');
console.log('  DivyaCon — Deprecate Extra npm Packages           ');
console.log('====================================================\n');

// 1. Build the set of local connectors
const localPieces = new Set(
  fs.readdirSync(rootDir)
    .filter(name => name.startsWith('piece-') && fs.statSync(path.join(rootDir, name)).isDirectory())
    .map(name => `@divyacon/${name}`)
);

console.log(`Local connectors in this repo: ${localPieces.size}`);
localPieces.forEach(p => console.log(`  ✓ ${p}`));
console.log();

// 2. Fetch all @divyacon packages from npm
async function getAllNpmPackages() {
  const packages = new Map(); // name -> version
  let from = 0;
  const size = 250;
  while (true) {
    const url = `https://registry.npmjs.org/-/v1/search?text=%40divyacon&size=${size}&from=${from}`;
    const res = await fetch(url, { headers: { 'User-Agent': 'divyacon-deprecate-script' } });
    if (!res.ok) {
      console.warn(`npm registry returned ${res.status}. Stopping pagination.`);
      break;
    }
    const data = await res.json();
    for (const item of (data.objects || [])) {
      const name = item.package?.name;
      if (name && name.startsWith('@divyacon/')) {
        packages.set(name, item.package.version);
      }
    }
    from += size;
    if (from >= (data.total || 0) || (data.objects || []).length === 0) break;
  }
  return packages;
}

console.log('Fetching all @divyacon/* packages from npm registry...');
const npmPackages = await getAllNpmPackages();
console.log(`Packages live on npm: ${npmPackages.size}\n`);

// 3. Find the extras (on npm but NOT in local repo)
const extras = [...npmPackages.keys()].filter(name => !localPieces.has(name)).sort();

if (extras.length === 0) {
  console.log('✅ No extra packages to deprecate. npm is in sync with this repo.');
  process.exit(0);
}

console.log(`Packages to deprecate (${extras.length}):`);
extras.forEach(p => console.log(`  ✗ ${p} (v${npmPackages.get(p)})`));
console.log();

// 4. Deprecate each one
let successCount = 0;
let failCount = 0;

for (const pkgName of extras) {
  const deprecateMsg = `This connector is no longer maintained under @divyacon. It has been removed from the DivyaCon connector suite.`;
  const cmd = `npm deprecate "${pkgName}@*" "${deprecateMsg}"`;

  try {
    console.log(`→ Deprecating ${pkgName}...`);
    execSync(cmd, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`  ✅ Deprecated successfully.`);
    successCount++;
  } catch (err) {
    const msg = (err.stderr || err.stdout || err.message || '').split('\n')[0];
    console.error(`  ❌ Failed: ${msg}`);
    failCount++;
  }
}

console.log('\n====================================================');
console.log('SUMMARY:');
console.log(`  Total on npm:              ${npmPackages.size}`);
console.log(`  Local connectors:          ${localPieces.size}`);
console.log(`  Extra (deprecated):        ${successCount}`);
console.log(`  Failed:                    ${failCount}`);
console.log('====================================================\n');
