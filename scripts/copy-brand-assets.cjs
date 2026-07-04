const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function copyDir(src, dest, filter) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    if (!filter || filter(name)) {
      fs.copyFileSync(path.join(src, name), path.join(dest, name));
    }
  }
}

// Brand SVGs
copyDir(
  path.join(root, 'assets', 'brand'),
  path.join(root, 'dist', 'brand'),
  (n) => n.endsWith('.svg') || n.endsWith('.png') || n.endsWith('.ico'),
);

// Self-hosted brand fonts + @font-face layer
copyDir(path.join(root, 'assets', 'fonts'), path.join(root, 'dist', 'fonts'));

// Component CSS layer
copyDir(
  path.join(root, 'assets', 'css'),
  path.join(root, 'dist', 'css'),
  (n) => n.endsWith('.css'),
);
