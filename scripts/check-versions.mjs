import fs from 'fs';
import path from 'path';

/**
 * DivyaCon Version Checker
 * Checks local package versions against the live versions on the npm registry.
 */

const rootDir = process.cwd();

async function getLiveVersions() {
  const versions = new Map();
  let from = 0;
  const size = 250;
  while (true) {
    const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=@divyacon&size=${size}&from=${from}`, {
      headers: { 'User-Agent': 'divyacon-version-checker' }
    });
    if (!res.ok) break;
    const data = await res.json();
    for (const obj of (data.objects || [])) {
      if (obj.package?.name?.startsWith('@divyacon/')) {
        versions.set(obj.package.name, obj.package.version);
      }
    }
    from += size;
    if (from >= (data.total || 0) || (data.objects || []).length === 0) break;
  }
  return versions;
}

async function main() {
  console.log('====================================================');
  console.log('  DivyaCon Connectors Version Status Check          ');
  console.log('====================================================\n');

  const liveVersions = await getLiveVersions();
  const pieces = fs.readdirSync(rootDir)
    .filter(name => name.startsWith('piece-') && fs.statSync(path.join(rootDir, name)).isDirectory())
    .sort();

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
