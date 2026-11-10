import fs from 'fs';
import path from 'path';

/**
 * DivyaCon Version Checker
 * Checks local package versions against the live versions on the npm registry.
 */

const rootDir = process.cwd();

async function getLiveVersions(pieces) {
  const versions = new Map();
  // Fetch latest version tags concurrently in chunks of 10
  const chunkSize = 10;
  for (let i = 0; i < pieces.length; i += chunkSize) {
    const chunk = pieces.slice(i, i + chunkSize);
    await Promise.all(chunk.map(async (piece) => {
      const pkgName = `@divyacon/${piece}`;
      try {
        const res = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkgName)}`);
        if (res.ok) {
          const data = await res.json();
          const latest = data['dist-tags']?.latest || Object.keys(data.versions || {}).pop();
          if (latest) versions.set(pkgName, latest);
        }
      } catch (e) {}
    }));
  }
  return versions;
}

async function main() {
  console.log('====================================================');
  console.log('  DivyaCon Connectors Version Status Check          ');
  console.log('====================================================\n');

  const pieces = fs.readdirSync(rootDir)
    .filter(name => name.startsWith('piece-') && fs.statSync(path.join(rootDir, name)).isDirectory())
    .sort();

  const liveVersions = await getLiveVersions(pieces);

  const report = [];
  let upToDate = 0;
  let needsPublish = 0;
  let notOnNpm = 0;

  for (const piece of pieces) {
    const pkgJsonPath = path.join(rootDir, piece, 'package.json');
    let localVer = 'unknown';
    let pkgName = `@divyacon/${piece}`;
    if (fs.existsSync(pkgJsonPath)) {
      try {
        const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
        localVer = pkg.version || 'unknown';
        pkgName = pkg.name || pkgName;
      } catch (e) {}
    }

    const remoteVer = liveVersions.get(pkgName);
    let status = '';

    if (!remoteVer) {
      status = '⚠️  Not on npm (Unpublished)';
      notOnNpm++;
    } else if (localVer !== remoteVer) {
      status = `🚀 Version Bumped (${remoteVer} -> ${localVer})`;
      needsPublish++;
    } else {
      status = '✅ Up to date';
      upToDate++;
    }

    report.push({
      Connector: piece,
      'Local Ver': localVer,
      'npm Ver': remoteVer || 'None',
      Status: status
    });
  }

  console.table(report);
  console.log('\n----------------------------------------------------');
  console.log(`Total Local Connectors: ${pieces.length}`);
  console.log(`Live on npm (@divyacon): ${liveVersions.size}`);
  console.log(`  - ✅ Up to date with npm:    ${upToDate}`);
  console.log(`  - 🚀 Needs Publish (New Ver): ${needsPublish}`);
  console.log(`  - ⚠️  Not on npm yet:         ${notOnNpm}`);
  console.log('----------------------------------------------------\n');
}

main();
