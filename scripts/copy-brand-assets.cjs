const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'assets', 'brand');
const dest = path.join(__dirname, '..', 'dist', 'brand');

if (!fs.existsSync(src)) {
  process.exit(0);
}

fs.mkdirSync(dest, { recursive: true });

for (const name of fs.readdirSync(src)) {
  if (name.endsWith('.svg') || name.endsWith('.png')) {
    fs.copyFileSync(path.join(src, name), path.join(dest, name));
  }
}
