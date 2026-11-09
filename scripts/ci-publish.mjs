import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const maxPublishCount = parseInt(process.env.BATCH_SIZE || '25', 10);

console.log(`==========================================`);
console.log(`DivyaCon Connectors Automated Publisher`);
console.log(`Batch Limit per Run: ${maxPublishCount}`);
console.log(`==========================================\n`);

const allPieces = fs.readdirSync(rootDir)
  .filter(name => name.startsWith('piece-') && fs.statSync(path.join(rootDir, name)).isDirectory())
  .sort();

console.log(`Discovered ${allPieces.length} connectors in repository.\n`);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function checkPublished(packageName) {
  try {
    const out = execSync(`npm view ${packageName} version`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    return out.trim();
  } catch (err) {
    return null;
  }
}

async function run() {
  let publishedThisRun = 0;
  let alreadyPublishedCount = 0;
  let skippedPieces = [];

  for (let i = 0; i < allPieces.length; i++) {
    const piece = allPieces[i];
    const pkgName = `@divyacon/${piece}`;
    const pkgDir = path.join(rootDir, piece);

    const ver = checkPublished(pkgName);
    if (ver) {
      alreadyPublishedCount++;
      // Print first 5 and then every 50 to keep logs clean
      if (alreadyPublishedCount <= 5 || alreadyPublishedCount % 50 === 0) {
        console.log(`[ALREADY LIVE] ${pkgName} is published (v${ver}).`);
      }
      continue;
    }

    if (publishedThisRun >= maxPublishCount) {
      skippedPieces.push(piece);
      continue;
    }

    console.log(`\n--> [${publishedThisRun + 1}/${maxPublishCount}] Publishing ${pkgName}...`);
    try {
      execSync('npm publish --access public', { cwd: pkgDir, stdio: 'inherit' });
      publishedThisRun++;
      console.log(`[SUCCESS] Published ${pkgName}!`);
      // 10s delay to avoid burst limits
      await sleep(10000);
    } catch (err) {
      const msg = err.message || '';
      if (msg.includes('429') || msg.includes('rate limited')) {
        console.warn(`\n[NOTICE] npm daily/hourly new package quota reached for today.`);
        console.warn(`Stopping current run cleanly. Next scheduled run will continue automatically.`);
        break;
      } else {
        console.error(`[ERROR] Failed to publish ${pkgName}: ${msg}`);
      }
    }
  }

  console.log(`\n==========================================`);
  console.log(`SUMMARY:`);
  console.log(`Total Connectors Checked:   ${allPieces.length}`);
  console.log(`Already Live on npm:        ${alreadyPublishedCount}`);
  console.log(`Published in this run:      ${publishedThisRun}`);
  console.log(`Remaining to publish later: ${allPieces.length - alreadyPublishedCount - publishedThisRun}`);
  console.log(`==========================================\n`);
}

run();
