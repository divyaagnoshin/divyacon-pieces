import https from 'https';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const sourcePackagesDir = 'D:/Downloads/agnocon-pieces/Agnocon-pieces/packages';
const targetBaseDir = 'D:/Downloads/divyacon-publish';

const allPieces = fs.readdirSync(sourcePackagesDir)
  .filter(name => name.startsWith('piece-') && fs.statSync(path.join(sourcePackagesDir, name)).isDirectory());

console.log(`Found ${allPieces.length} connectors in total.`);

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        res.resume();
        return resolve(null);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', (err) => resolve(null));
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  if (stats && stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((child) => {
      copyRecursiveSync(path.join(src, child), path.join(dest, child));
    });
  } else if (exists) {
    fs.copyFileSync(src, dest);
  }
}

async function preparePiece(pieceName, index, total) {
  const targetDir = path.join(targetBaseDir, pieceName);
  const targetPkgJson = path.join(targetDir, 'package.json');

  // Check if already prepared
  if (fs.existsSync(targetPkgJson)) {
    try {
      const existing = JSON.parse(fs.readFileSync(targetPkgJson, 'utf8'));
      if (existing.name === `@divyacon/${pieceName}`) {
        // already prepared
        return { status: 'skipped', pieceName };
      }
    } catch (e) {}
  }

  fs.mkdirSync(targetDir, { recursive: true });

  // Try downloading pre-built from npm @agnocon
  let downloaded = false;
  try {
    const meta = await fetchJson(`https://registry.npmjs.org/@agnocon/${pieceName}`);
    if (meta && meta['dist-tags'] && meta['dist-tags'].latest) {
      const latestVer = meta['dist-tags'].latest;
      const tarballUrl = meta.versions[latestVer]?.dist?.tarball;
      if (tarballUrl) {
        const tempTgz = path.join(targetDir, `temp_${Date.now()}.tgz`);
        await downloadFile(tarballUrl, tempTgz);
        execSync(`tar -xzf "${path.basename(tempTgz)}" --strip-components=1`, { cwd: targetDir, stdio: 'ignore' });
        if (fs.existsSync(tempTgz)) fs.unlinkSync(tempTgz);
        downloaded = true;
      }
    }
  } catch (err) {
    // fallback to local source copy
  }

  // If not on npm, copy from local repository
  if (!downloaded) {
    const localSrcDir = path.join(sourcePackagesDir, pieceName);
    if (fs.existsSync(localSrcDir)) {
      copyRecursiveSync(localSrcDir, targetDir);
    }
  }

  // Rebrand package.json for @divyacon
  if (fs.existsSync(targetPkgJson)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(targetPkgJson, 'utf8'));
      pkg.name = `@divyacon/${pieceName}`;
      pkg.version = '0.1.0';
      pkg.description = `DivyaCon ${pieceName.replace('piece-', '')} connector`;
      pkg.publishConfig = { access: 'public', tag: 'latest' };
      fs.writeFileSync(targetPkgJson, JSON.stringify(pkg, null, 2), 'utf8');
      return { status: 'prepared', pieceName };
    } catch (err) {
      return { status: 'error', pieceName, error: err.message };
    }
  }

  return { status: 'error', pieceName, error: 'No package.json found' };
}

async function run() {
  console.log(`Starting preparation of ${allPieces.length} connectors...`);
  const concurrency = 8;
  let preparedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (let i = 0; i < allPieces.length; i += concurrency) {
    const chunk = allPieces.slice(i, i + concurrency);
    const results = await Promise.all(
      chunk.map((p, idx) => preparePiece(p, i + idx + 1, allPieces.length))
    );

    for (const res of results) {
      if (res.status === 'prepared') preparedCount++;
      else if (res.status === 'skipped') skippedCount++;
      else {
        errorCount++;
        console.error(`Error on ${res.pieceName}: ${res.error}`);
      }
    }

    const processed = Math.min(i + concurrency, allPieces.length);
    if (processed % 40 === 0 || processed === allPieces.length) {
      console.log(`Progress: ${processed}/${allPieces.length} (Prepared: ${preparedCount}, Skipped: ${skippedCount}, Errors: ${errorCount})`);
    }
  }

  console.log(`\n==========================================`);
  console.log(`Preparation complete!`);
  console.log(`Total Connectors: ${allPieces.length}`);
  console.log(`Newly Prepared:   ${preparedCount}`);
  console.log(`Already Present:  ${skippedCount}`);
  console.log(`Errors:           ${errorCount}`);
  console.log(`==========================================`);
}

run();
