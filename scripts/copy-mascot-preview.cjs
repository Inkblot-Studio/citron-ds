const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const src = path.join(root, 'preview', 'mascot.html');
const dest = path.join(root, 'dist', 'preview', 'mascot.html');

if (!fs.existsSync(src)) {
  process.exit(0);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
