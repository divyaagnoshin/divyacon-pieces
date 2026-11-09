import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const maxPublishCount = parseInt(process.env.BATCH_SIZE || '25', 10);

console.log('====================================================');
console.log('  DivyaCon Connectors Automated CI Fast Publisher   ');
console.log(`  Batch Limit per Run: ${maxPublishCount}`);
console.log('====================================================\n');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Fetch all currently published @divyacon packages from npm in fast batch requests
async function getAllPublished() {
  const published = new Set();
  let from = 0;
  const size = 250;
  try {
    while (true) {
      const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=@divyacon&size=${size}&from=${from}`, {
        headers: { 'User-Agent': 'divyacon-ci-publisher' }
      });
      if (!res.ok) {
        console.warn(`npm search query returned status ${res.status}. Falling back.`);
        break;
      }
      const data = await res.json();
      for (const item of (data.objects || [])) {
        if (item.package && item.package.name && item.package.name.startsWith('@divyacon/')) {
          published.add(item.package.name);
        }
      }
      from += size;
      if (from >= (data.total || 0) || (data.objects || []).length === 0) {
        break;
      }
    }
  } catch (err) {
    console.warn('Could not query npm search API:', err.message);
  }
  return published;
}

async function run() {
  console.log('Scanning local connectors...');
  const allPieces = fs.readdirSync(rootDir)
    .filter(name => name.startsWith('piece-') && fs.statSync(path.join(rootDir, name)).isDirectory())
    .sort();

  console.log(`Total local connectors found: ${allPieces.length}`);

  console.log('Checking currently published packages on npm registry...');
  const published = await getAllPublished();
  console.log(`Currently live on npm (@divyacon): ${published.size}`);

  const toPublish = allPieces.filter(piece => !published.has(`@divyacon/${piece}`));
  console.log(`Connectors remaining to publish: ${toPublish.length}\n`);

  if (toPublish.length === 0) {
    console.log('🎉 All connectors are already published to npm under @divyacon! Nothing to do.');
    return;
  }

  let publishedThisRun = 0;
  let rateLimited = false;

  for (let i = 0; i < toPublish.length; i++) {
    if (publishedThisRun >= maxPublishCount) {
      console.log(`\n✅ Batch limit of ${maxPublishCount} reached for this run.`);
      break;
    }

    const piece = toPublish[i];
    const pkgName = `@divyacon/${piece}`;
    const pkgDir = path.join(rootDir, piece);

    console.log(`--> [${publishedThisRun + 1}/${maxPublishCount}] Publishing ${pkgName}...`);

    try {
      execSync('npm publish --access public', {
        cwd: pkgDir,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      publishedThisRun++;
      console.log(`    ✅ SUCCESS: ${pkgName} published!`);
      // Wait 3 seconds between publishes
      await sleep(3000);
    } catch (err) {
      const output = (err.stdout || '') + '\n' + (err.stderr || '') + '\n' + (err.message || '');
      
      if (output.includes('429') || output.includes('rate limited')) {
        console.warn(`\n⚠️  [NPM RATE LIMIT REACHED]`);
        console.warn(`npm limits new package creations (~25-30 per rolling 24 hours).`);
        console.warn(`Stopping this run cleanly. Next scheduled daily run will automatically continue.`);
        rateLimited = true;
        break;
      } else if (output.includes('previously published') || output.includes('cannot publish over') || output.includes('E403')) {
        console.log(`    ⏭️  Already published on npm.`);
      } else {
        const firstLine = (err.stderr || err.message || '').split('\n').filter(Boolean)[0] || 'Unknown error';
        console.error(`    ❌ Publish failed: ${firstLine}`);
      }
    }
  }

  console.log('\n====================================================');
  console.log('SUMMARY:');
  console.log(`  Total Connectors:          ${allPieces.length}`);
  console.log(`  Live on npm:               ${published.size + publishedThisRun}`);
  console.log(`  Published in this run:     ${publishedThisRun}`);
  console.log(`  Remaining to publish:      ${toPublish.length - publishedThisRun}`);
  console.log(`  Rate limited for today:    ${rateLimited ? 'YES (will resume tomorrow)' : 'NO'}`);
  console.log('====================================================\n');
}

run();
