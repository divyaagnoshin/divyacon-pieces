/**
 * vendor-ap.mjs
 *
 * Rebuilds @divyacon/piece-* packages from the REAL upstream
 * @activepieces/piece-* npm package for the matching version.
 *
 * Activepieces publishes a fully self-contained bundle (src/index.js + i18n)
 * with zero dependencies. We copy that bundle into the local piece folder and
 * point package.json "main" at it, so a version bump also brings the actual
 * upstream features/fixes — not just a new version number.
 *
 * Usage:
 *   node scripts/vendor-ap.mjs                 # all local pieces
 *   node scripts/vendor-ap.mjs piece-gmail     # one piece
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchJson(url, attempts = 3) {
  let lastError;
  for (let i = 1; i <= attempts; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'divyacon-vendor' } });
      if (res.ok) return await res.json();
      lastError = new Error(`HTTP ${res.status} for ${url}`);
      if (res.status === 404) throw lastError;
    } catch (err) {
      lastError = err;
    }
    if (i < attempts) await sleep(1000 * i);
  }
  throw lastError;
}

/** Copy a directory recursively. */
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

async function vendorPiece(piece) {
  const pieceDir = path.join(rootDir, piece);
  const pkgPath = path.join(pieceDir, 'package.json');
  if (!fs.existsSync(pkgPath)) throw new Error('no package.json');

  const localPkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const apName = `@activepieces/${piece}`;
  const meta = await fetchJson(`https://registry.npmjs.org/${encodeURIComponent(apName)}/latest`);
  if (!meta?.version || !meta?.dist?.tarball) throw new Error('no upstream version/tarball');

  console.log(`  ${piece}: upstream ${apName}@${meta.version}`);

  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'divyacon-vendor-'));
  try {
    const tgz = path.join(tmp, 'piece.tgz');
    const unpacked = path.join(tmp, 'package');
    const res = await fetch(meta.dist.tarball, { headers: { 'User-Agent': 'divyacon-vendor' } });
    if (!res.ok) throw new Error(`tarball download HTTP ${res.status}`);
    fs.writeFileSync(tgz, Buffer.from(await res.arrayBuffer()));
    execFileSync('tar', ['-xzf', tgz, '-C', tmp], { stdio: 'pipe' });

    const bundledEntry = path.join(unpacked, 'src', 'index.js');
    if (!fs.existsSync(bundledEntry)) throw new Error('upstream bundle src/index.js not found');

    // Replace the local source with the real upstream bundle.
    const localSrc = path.join(pieceDir, 'src');
    fs.rmSync(localSrc, { recursive: true, force: true });
    copyDir(path.join(unpacked, 'src'), localSrc);

    // Remove the stale compiled dist so nothing loads old code by mistake.
    fs.rmSync(path.join(pieceDir, 'dist'), { recursive: true, force: true });

    // Repoint the Divyacon package at the fresh bundle.
    localPkg.version = meta.version;
    localPkg.main = 'src/index.js';
    localPkg.exports = {
      '.': {
        default: './src/index.js',
        require: './src/index.js',
      },
    };
    localPkg.files = ['src', 'LICENSE.MIT-AP', 'README.md'];
    localPkg.agnocon = {
      ...(localPkg.agnocon || {}),
      originVersion: meta.version,
      ...(meta.gitHead ? { originCommit: meta.gitHead } : {}),
    };
    // The upstream bundle is self-contained — no runtime deps required.
    localPkg.dependencies = {};
    delete localPkg.types;
    delete localPkg.devDependencies;
    delete localPkg.scripts;

    fs.writeFileSync(pkgPath, `${JSON.stringify(localPkg, null, 2)}\n`, 'utf8');
    console.log(`    OK -> ${piece} now contains upstream ${meta.version} code`);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

async function main() {
  const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  const pieces = args.length
    ? args
    : fs.readdirSync(rootDir).filter(
        (name) => name.startsWith('piece-') && fs.statSync(path.join(rootDir, name)).isDirectory(),
      );

  console.log(`Vendoring ${pieces.length} connector(s) from Activepieces npm\n`);
  let failed = 0;
  for (const piece of pieces) {
    try {
      await vendorPiece(piece);
    } catch (err) {
      failed++;
      console.error(`  FAILED ${piece}: ${err?.message || err}`);
    }
    await sleep(150);
  }
  console.log(`\nVendored: ${pieces.length - failed}, failed: ${failed}`);
  if (failed) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
