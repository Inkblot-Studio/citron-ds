const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const bundleRoot = path.join(root, 'dist', 'bundle');

function copyFileIfExists(src, dest) {
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function copyDirIfExists(src, dest) {
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.cpSync(src, dest, { recursive: true });
  }
}

fs.rmSync(bundleRoot, { recursive: true, force: true });
fs.mkdirSync(bundleRoot, { recursive: true });

copyFileIfExists(
  path.join(root, 'dist', 'ai', 'inkblot-tokens-resolved.json'),
  path.join(bundleRoot, 'tokens.resolved.json'),
);
copyFileIfExists(
  path.join(root, 'dist', 'js', 'inkblot-tokens.json'),
  path.join(bundleRoot, 'tokens.flat.json'),
);
copyFileIfExists(
  path.join(root, 'dist', 'css', 'inkblot-variables.css'),
  path.join(bundleRoot, 'variables.css'),
);
copyFileIfExists(
  path.join(root, 'dist', 'scss', '_inkblot-variables.scss'),
  path.join(bundleRoot, 'variables.scss'),
);
copyFileIfExists(
  path.join(root, 'dist', 'ai', 'inkblot-ai-reference.json'),
  path.join(bundleRoot, 'ai-reference.json'),
);
copyFileIfExists(
  path.join(root, 'dist', 'ai', 'inkblot-tokens-schema.json'),
  path.join(bundleRoot, 'tokens-schema.json'),
);

copyDirIfExists(path.join(root, 'tokens'), path.join(bundleRoot, 'tokens'));
copyDirIfExists(path.join(root, 'system'), path.join(bundleRoot, 'system'));
copyDirIfExists(path.join(root, 'dist', 'brand'), path.join(bundleRoot, 'brand'));

const readme = `# Citron design bundle (desktop / Rust / native)

Single folder with design tokens, system metadata, and brand assets. Generated on \`npm run build\`; published inside \`@citron-systems/citron-ds\` under \`dist/bundle\`.

## Layout

| Path | Contents |
|------|----------|
| \`tokens.resolved.json\` | Flat map of resolved token keys → values (good for \`serde_json\` / codegen). |
| \`tokens.flat.json\` | Same flat format from the JS build (duplicate pipeline output). |
| \`variables.css\` | CSS custom properties (\`:root\`). |
| \`variables.scss\` | SCSS variables. |
| \`ai-reference.json\` | Inkblot / Citron AI and product reference. |
| \`tokens-schema.json\` | Present when Style Dictionary emits it. |
| \`tokens/\` | Authoritative DTCG-style source JSON (primitive + semantic). |
| \`system/\` | Extra system JSON (foundations, motion, icons, etc.). |
| \`brand/\` | SVG logos / mascot. |

## Rust / Tauri / egui

- **Tokens:** \`include_str!("node_modules/@citron-systems/citron-ds/dist/bundle/tokens.resolved.json")\` (adjust path to your vendored copy).
- **WebView UI:** load \`variables.css\` or parse JSON and map to your theme struct.
- **Icons / logos:** embed files from \`brand/\`.

## npm subpath imports

Use \`@citron-systems/citron-ds/bundle/<file>\` (see package \`exports\`).
`;

fs.writeFileSync(path.join(bundleRoot, 'README.md'), readme, 'utf8');
