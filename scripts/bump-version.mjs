import fs from 'fs';
import path from 'path';

/**
 * DivyaCon Version Bumper
 * 
 * Usage:
 *   node scripts/bump-version.mjs <connector-name | all> <patch | minor | major | explicit-version>
 * 
 * Examples:
 *   node scripts/bump-version.mjs piece-google-docs patch    (0.1.0 -> 0.1.1)
 *   node scripts/bump-version.mjs piece-microsoft-teams 0.2.0
 *   node scripts/bump-version.mjs all patch                  (bumps all connectors)
 *   node scripts/bump-version.mjs all 0.2.0                  (sets all to 0.2.0)
 */

const rootDir = process.cwd();
const targetPiece = process.argv[2];
const bumpType = process.argv[3] || 'patch';

if (!targetPiece) {
  console.log(`
Usage:
  node scripts/bump-version.mjs <connector-name | all> [patch | minor | major | explicit-version]

Examples:
  node scripts/bump-version.mjs piece-google-docs patch
  node scripts/bump-version.mjs all patch
  node scripts/bump-version.mjs all 0.2.0
`);
  process.exit(1);
}

function nextVersion(currentVer, type) {
  if (/^\d+\.\d+\.\d+.*$/.test(type)) {
    return type; // Explicit version provided
  }

  const parts = currentVer.split('.').map(n => parseInt(n, 10));
  if (parts.length < 3 || parts.some(isNaN)) {
    return '0.1.1';
  }

  let [major, minor, patch] = parts;
  if (type === 'major') {
    major += 1;
    minor = 0;
    patch = 0;
  } else if (type === 'minor') {
    minor += 1;
    patch = 0;
  } else {
    // default patch
    patch += 1;
  }

  return `${major}.${minor}.${patch}`;
}

function bumpPackage(pieceName) {
  const pkgPath = path.join(rootDir, pieceName, 'package.json');
  if (!fs.existsSync(pkgPath)) {
    console.error(`❌ Connector folder not found: ${pieceName}`);
    return null;
  }

  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const oldVer = pkg.version || '0.1.0';
    const newVer = nextVersion(oldVer, bumpType);
    pkg.version = newVer;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
    console.log(`  ✅ ${pkg.name}: ${oldVer} ➔ ${newVer}`);
    return { name: pkg.name, oldVer, newVer };
  } catch (err) {
    console.error(`❌ Error updating ${pieceName}: ${err.message}`);
    return null;
  }
}

function main() {
  console.log('====================================================');
  console.log('  DivyaCon Connectors Version Bumper                ');
  console.log('====================================================\n');

  if (targetPiece === 'all') {
    const allPieces = fs.readdirSync(rootDir)
      .filter(name => name.startsWith('piece-') && fs.statSync(path.join(rootDir, name)).isDirectory())
      .sort();

    console.log(`Bumping ${allPieces.length} connectors (${bumpType})...\n`);
    let count = 0;
    for (const piece of allPieces) {
      if (bumpPackage(piece)) count++;
    }
    console.log(`\n🎉 Successfully bumped ${count} connectors!`);
  } else {
    const piece = targetPiece.startsWith('piece-') ? targetPiece : `piece-${targetPiece}`;
    bumpPackage(piece);
  }

  console.log('\nNext steps:');
  console.log('  1. Review status: git status');
  console.log('  2. Commit:        git commit -am "Bump version"');
  console.log('  3. Push to CI:    git push origin main (triggers GitHub publish)');
}

main();
