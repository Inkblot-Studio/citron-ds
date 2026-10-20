#!/usr/bin/env node
/**
 * Citron brand kit: upload-ready PNG, JPG and WebP files for tools that
 * can't take an SVG (Jira, Confluence, Slack, Google Workspace, GitHub,
 * LinkedIn, X, email signatures).
 *
 *   npm run brand:kit
 *
 * Reads the v2 vector sources in assets/brand/ (docs/brand.md §3) and writes
 * brand-kit/. Never retypes geometry, so a change to those SVGs regenerates
 * everything. The kit is committed for people to download from GitHub; it
 * is not part of the npm package.
 */
import { mkdirSync, readFileSync, rmSync, copyFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'assets', 'brand');
const out = join(root, 'brand-kit');

const INK = '#121212';
const PORCELAIN = '#FBFAF7';
const WHITE = '#FFFFFF';

const svg = (name) => readFileSync(join(src, `${name}.svg`), 'utf8');

/** An SVG rendered to fit a box (keeps aspect), as a PNG buffer. */
function raster(name, { width, height }) {
  const doc = svg(name);
  const [, , vw, vh] = doc.match(/viewBox="([\d.\s-]+)"/)[1].trim().split(/\s+/).map(Number);
  const scale = Math.min(width ? width / vw : Infinity, height ? height / vh : Infinity);
  const r = new Resvg(doc, { fitTo: { mode: 'width', value: Math.round(vw * scale) } });
  return r.render().asPng();
}

/**
 * Put an SVG on a canvas: `fill` is the share of the shorter canvas side the
 * artwork may take (the rest is clear space), `bg` null means transparent.
 */
async function place(name, w, h, { bg = null, fill = 0.6 } = {}) {
  const box = Math.round(Math.min(w, h) * fill);
  const art = raster(name, { width: Math.round(w * fill), height: box });
  return sharp({
    create: { width: w, height: h, channels: 4, background: bg ?? { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: art, gravity: 'center' }])
    .png()
    .toBuffer();
}

const written = [];
async function save(buf, rel, format = 'png') {
  const file = join(out, rel);
  mkdirSync(dirname(file), { recursive: true });
  let img = sharp(buf);
  if (format === 'jpg') img = img.flatten({ background: WHITE }).jpeg({ quality: 92, mozjpeg: true });
  else if (format === 'webp') img = img.webp({ quality: 92 });
  else img = img.png({ compressionLevel: 9 });
  await img.toFile(file);
  written.push(rel);
}

rmSync(out, { recursive: true, force: true });

// 1. Avatars and app icons: square, full bleed, mark inside the circle-crop safe zone.
for (const size of [1024, 512, 256, 128, 64, 32]) {
  const dark = await place('citron-mark-inverse', size, size, { bg: INK, fill: 0.58 });
  await save(dark, `01-avatar/citron-avatar-ink-${size}.png`);
  if (size >= 256) {
    await save(dark, `01-avatar/citron-avatar-ink-${size}.jpg`, 'jpg');
    const light = await place('citron-mark', size, size, { bg: PORCELAIN, fill: 0.58 });
    await save(light, `01-avatar/citron-avatar-light-${size}.png`);
    await save(light, `01-avatar/citron-avatar-light-${size}.jpg`, 'jpg');
  }
}
await save(await place('citron-mark-inverse', 512, 512, { bg: INK, fill: 0.58 }), '01-avatar/citron-avatar-ink-512.webp', 'webp');
// Rounded app-icon tile (transparent corners), for app stores and docs.
for (const size of [1024, 512, 180]) {
  await save(raster('citron-app-icon', { width: size, height: size }), `01-avatar/citron-app-icon-${size}.png`);
}

// 2. Mark alone, transparent.
for (const size of [1024, 512, 256]) {
  await save(await place('citron-mark', size, size, { fill: 0.9 }), `02-mark/citron-mark-${size}.png`);
  await save(await place('citron-mark-inverse', size, size, { fill: 0.9 }), `02-mark/citron-mark-inverse-${size}.png`);
}

// 3. Lockup (mark + wordmark), the default logo. Transparent at fixed heights,
// plus padded versions on white and on ink for uploads that need a ground.
for (const h of [64, 128, 256]) {
  await save(raster('citron-lockup', { height: h }), `03-lockup/citron-lockup-${h}h.png`);
  await save(raster('citron-lockup-inverse', { height: h }), `03-lockup/citron-lockup-inverse-${h}h.png`);
}
await save(raster('citron-lockup', { height: 256 }), '03-lockup/citron-lockup-256h.webp', 'webp');
const onWhite = await place('citron-lockup', 1200, 400, { bg: WHITE, fill: 0.36 });
await save(onWhite, '03-lockup/citron-lockup-on-white-1200x400.png');
await save(onWhite, '03-lockup/citron-lockup-on-white-1200x400.jpg', 'jpg');
const onInk = await place('citron-lockup-inverse', 1200, 400, { bg: INK, fill: 0.36 });
await save(onInk, '03-lockup/citron-lockup-on-ink-1200x400.png');
await save(onInk, '03-lockup/citron-lockup-on-ink-1200x400.jpg', 'jpg');

// 4. Wordmark alone, for places where the mark already shows nearby.
for (const w of [512, 1024]) {
  await save(raster('citron-wordmark', { width: w }), `04-wordmark/citron-wordmark-${w}w.png`);
  await save(raster('citron-wordmark-inverse', { width: w }), `04-wordmark/citron-wordmark-inverse-${w}w.png`);
}

// 5. Exact sizes particular services ask for.
await save(await place('citron-lockup', 320, 132, { fill: 0.42 }), '05-services/google-workspace-logo-320x132.png');
await save(await place('citron-lockup', 1500, 500, { bg: PORCELAIN, fill: 0.3 }), '05-services/x-header-1500x500.jpg', 'jpg');
await save(await place('citron-lockup', 1128, 191, { bg: PORCELAIN, fill: 0.42 }), '05-services/linkedin-cover-1128x191.jpg', 'jpg');
await save(await place('citron-lockup', 1200, 630, { bg: PORCELAIN, fill: 0.22 }), '05-services/share-card-1200x630.jpg', 'jpg');
await save(raster('citron-lockup', { height: 96 }), '05-services/email-signature-lockup-96h.png');

// 6. Favicons.
for (const size of [16, 32, 48, 192]) {
  await save(raster('citron-favicon', { width: size, height: size }), `06-favicon/citron-favicon-${size}.png`);
}

// 7. The vector sources, for anyone who can use SVG.
mkdirSync(join(out, '07-svg'), { recursive: true });
for (const f of readdirSync(src).filter((n) => n.endsWith('.svg'))) {
  copyFileSync(join(src, f), join(out, '07-svg', f));
  written.push(`07-svg/${f}`);
}

writeFileSync(join(out, 'README.md'), readFileSync(join(root, 'scripts', 'brand-kit-readme.md'), 'utf8'));
console.log(`brand-kit: ${written.length} files written`);
