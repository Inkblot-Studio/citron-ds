/**
 * One-shot brand asset generator (dev-time only, not part of npm build).
 * Generates: wordmark SVG (Space Grotesk outlines), lockup SVG, favicon PNGs.
 * Run: node scripts/generate-brand.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as fontkit from 'fontkit';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const brandDir = path.join(root, 'assets', 'brand');

const CITRON = '#c9a227';
const INK = '#0a0908';

// ---------------------------------------------------------------- wordmark

// Full variable TTF for outline extraction (dev-time only; ships nothing).
// Fetch first: curl -sL -o /tmp/SpaceGrotesk.ttf "https://github.com/google/fonts/raw/main/ofl/spacegrotesk/SpaceGrotesk%5Bwght%5D.ttf"
const fontFile = '/tmp/SpaceGrotesk.ttf';
const base = fontkit.openSync(fontFile);
const font = base.getVariation ? base.getVariation({ wght: 500 }) : base;

function textToPath(text, size) {
  const run = font.layout(text);
  const scale = size / font.unitsPerEm;
  let x = 0;
  let d = '';
  for (let i = 0; i < run.glyphs.length; i++) {
    const glyph = run.glyphs[i];
    const pos = run.positions[i];
    const p = glyph.path.scale(scale, -scale).translate(x + pos.xOffset * scale, 0);
    d += `<path d="${p.toSVG()}"/>`;
    x += pos.xAdvance * scale;
  }
  return { d, width: x, ascent: font.ascent * scale, descent: font.descent * scale, capHeight: font.capHeight * scale };
}

const SIZE = 100;
const { d, width, capHeight } = textToPath('citron', SIZE);

// tight viewBox: baseline at y=0, cap height above, small descender margin below
const descMargin = SIZE * 0.28; // 'citron' has no descenders but keep optical margin
const vbH = capHeight + descMargin;
const pad = SIZE * 0.06;

function wordmarkSvg(fill) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${(width + pad * 2).toFixed(1)} ${(vbH + pad * 2).toFixed(1)}" role="img" aria-label="Citron">
  <g transform="translate(${pad.toFixed(1)}, ${(capHeight + pad).toFixed(1)})" fill="${fill}">
    ${d}
  </g>
</svg>
`;
}

fs.writeFileSync(path.join(brandDir, 'citron-wordmark.svg'), wordmarkSvg('var(--citron-wordmark-fill, #1d1c19)'));
fs.writeFileSync(path.join(brandDir, 'citron-wordmark-citron.svg'), wordmarkSvg(CITRON));

// ------------------------------------------------------------------ lockup
// mascot (square) + wordmark, baseline-aligned, mascot height = cap height * 1.35

const mascotRaw = fs.readFileSync(path.join(brandDir, 'citron-mascot.svg'), 'utf8');
const mascotInner = mascotRaw.match(/<g id="citron-mascot">([\s\S]*?)<\/g>\s*<\/svg>/)[1];

const mH = capHeight * 1.35;
const mScale = mH / 100;
const gap = SIZE * 0.34;
const lockW = mH + gap + width + pad * 2;
const lockH = Math.max(mH, vbH) + pad * 2;
const mascotY = pad + (lockH - pad * 2 - mH) / 2;
const textY = pad + (lockH - pad * 2 - vbH) / 2 + capHeight;

function lockupSvg(markFill, textFill) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${lockW.toFixed(1)} ${lockH.toFixed(1)}" role="img" aria-label="Citron">
  <g transform="translate(${pad.toFixed(1)}, ${mascotY.toFixed(1)}) scale(${mScale.toFixed(4)})">
    <g style="--citron-mascot-fill: ${markFill}">${mascotInner}</g>
  </g>
  <g transform="translate(${(pad + mH + gap).toFixed(1)}, ${textY.toFixed(1)})" fill="${textFill}">
    ${d}
  </g>
</svg>
`;
}

fs.writeFileSync(path.join(brandDir, 'citron-lockup.svg'), lockupSvg(CITRON, 'var(--citron-wordmark-fill, #1d1c19)'));
fs.writeFileSync(path.join(brandDir, 'citron-lockup-ink.svg'), lockupSvg(CITRON, '#f5f2ea'));

// ---------------------------------------------------------------- favicons
// mascot on ink rounded tile — crisp at small sizes

const tile = (size, radiusPct = 0.22) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${size}" height="${size}">
  <rect width="100" height="100" rx="${100 * radiusPct}" fill="${INK}"/>
  <g transform="translate(14,14) scale(0.72)" style="--citron-mascot-fill: ${CITRON}">${mascotInner.replaceAll('var(--citron-mascot-fill, #c4a030)', CITRON)}</g>
</svg>`;

for (const size of [16, 32, 180, 512]) {
  const name = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}.png`;
  await sharp(Buffer.from(tile(size)), { density: 300 })
    .resize(size, size)
    .png()
    .toFile(path.join(brandDir, name));
}

fs.writeFileSync(path.join(brandDir, 'favicon.svg'), tile(512));

console.log('brand assets generated:', fs.readdirSync(brandDir).join(', '));
