import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

/**
 * DivyaCon Connector Installer
 * 
 * Fetches all live @divyacon/piece-* packages from the npm registry
 * and installs them into a specified directory or a dedicated install cache.
 * 
 * Usage:
 *   node scripts/install-all-connectors.mjs
 *   node scripts/install-all-connectors.mjs --target=D:/path/to/project
 */

const targetDir = process.argv.find(a => a.startsWith('--target='))?.split('=')[1] || path.join(process.cwd(), 'installed-connectors');

async function getLiveConnectors() {
  const packages = [];
  let from = 0;
  const size = 250;
  while (true) {
    const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=@divyacon&size=${size}&from=${from}`);
    if (!res.ok) break;
    const data = await res.json();
    for (const obj of (data.objects || [])) {
      if (obj.package?.name?.startsWith('@divyacon/piece-')) {
        packages.push({
          name: obj.package.name,
          version: obj.package.version
        });
      }
    }
    from += size;
    if (from >= (data.total || 0) || (data.objects || []).length === 0) break;
  }
  return packages;
}

async function main() {
  console.log('====================================================');
  console.log('  DivyaCon Connectors Automated Installer           ');
  console.log('====================================================\n');
  
  console.log(`Target install location: ${targetDir}`);
  fs.mkdirSync(targetDir, { recursive: true });

  console.log('Fetching live connectors from npm registry (@divyacon)...');
  const connectors = await getLiveConnectors();
  console.log(`Found ${connectors.length} published connectors on npm.\n`);

  if (connectors.length === 0) {
    console.log('No @divyacon connectors found on npm yet.');
    return;
  }

  // Create or update package.json in target directory
  const pkgPath = path.join(targetDir, 'package.json');
  let pkg = { name: 'divyacon-installed-connectors', version: '1.0.0', private: true, dependencies: {} };
  if (fs.existsSync(pkgPath)) {
    try {
      pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      pkg.dependencies = pkg.dependencies || {};
    } catch (e) {}
  }

  for (const c of connectors) {
    pkg.dependencies[c.name] = `^${c.version}`;
  }

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');
  console.log(`Updated ${pkgPath} with ${connectors.length} connectors as dependencies.`);

  console.log('Running npm install...');
  try {
    execSync('npm install --prefer-online', {
      cwd: targetDir,
      stdio: 'inherit'
    });
    console.log('\n✅ All live DivyaCon connectors installed successfully!');
  } catch (err) {
    console.error('\n❌ npm install encountered an error:', err.message);
  }
}

main();
