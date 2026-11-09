import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const baseDir = 'D:/Downloads/divyacon-publish';
const pieces = fs.readdirSync(baseDir)
  .filter(name => name.startsWith('piece-') && fs.statSync(path.join(baseDir, name)).isDirectory())
  .sort();

console.log(`Found ${pieces.length} connectors in total.`);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function isPublished(packageName) {
  try {
    const out = execSync(`npm view ${packageName} version`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    return out.trim();
  } catch (err) {
    return null;
  }
}

async function publishPackage(pieceName) {
  const pkgDir = path.join(baseDir, pieceName);
  const pkgName = `@divyacon/${pieceName}`;

  const currentVer = isPublished(pkgName);
  if (currentVer) {
    console.log(`[SKIP] ${pkgName} is already published (v${currentVer}).`);
    return { status: 'already_published', version: currentVer };
  }

  console.log(`\n==========================================`);
  console.log(`[PUBLISHING] ${pkgName}...`);
  console.log(`==========================================`);

  while (true) {
    try {
      execSync('npm publish --access public', { cwd: pkgDir, stdio: 'inherit' });
      console.log(`[SUCCESS] Published ${pkgName}@0.1.0!`);
      // Wait 15 seconds to avoid burst limits
      await sleep(15000);
      return { status: 'success' };
    } catch (err) {
      const errMsg = err.message || '';
      console.error(`[FAILED] Error publishing ${pkgName}`);
      
      // Check for rate limit / 429
      if (errMsg.includes('429') || errMsg.includes('rate limited')) {
        console.log(`[RATE LIMIT] Hit npm rate limit (429). Waiting 30 minutes before retrying...`);
        console.log(`Current time: ${new Date().toLocaleTimeString()}`);
        await sleep(30 * 60 * 1000); // 30 minutes
        console.log(`Resuming publishing for ${pkgName}...`);
        continue; // Retry this package
      } else {
        return { status: 'error', error: errMsg };
      }
    }
  }
}

async function main() {
  let publishedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i];
    console.log(`\n[${i + 1}/${pieces.length}] Processing ${piece}...`);
    const result = await publishPackage(piece);

    if (result.status === 'success') publishedCount++;
    else if (result.status === 'already_published') skippedCount++;
    else errorCount++;

    console.log(`Status so far: ${skippedCount} already live, ${publishedCount} newly published, ${errorCount} errors.`);
  }

  console.log(`\n==========================================`);
  console.log(`ALL DONE!`);
  console.log(`Total Connectors: ${pieces.length}`);
  console.log(`Already Live:     ${skippedCount}`);
  console.log(`Newly Published:  ${publishedCount}`);
  console.log(`Errors:           ${errorCount}`);
  console.log(`==========================================`);
}

main();
