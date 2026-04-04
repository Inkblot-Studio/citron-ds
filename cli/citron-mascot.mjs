#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = join(__dirname, '..', 'package.json');
const version = JSON.parse(readFileSync(pkgPath, 'utf8')).version ?? '0.0.0';

const CITRON = '\x1b[38;2;196;160;48m';
const DIM = '\x1b[2m';
const RESET = '\x1b[0m';

/**
 * Compact ASCII: small pause eyes + stepped block smile (diagonal “wings”, solid base only).
 * No extra rows that cross the mouth — avoids a busy / intersecting look. All lines = CANVAS_W.
 */
export const MASCOT_CANVAS_W = 28;

export const SMILE_FRAMES = [
  [
    '',
    '',
    '',
    '            ██  ██           ',
    '            ██  ██           ',
    '      ██              ██      ',
    '        ██          ██        ',
    '          ██████████         ',
    '',
    '           Citron           ',
    '',
  ],
  [
    '',
    '',
    '',
    '           ██  ██           ',
    '           ██  ██           ',
    '',
    '    ██                ██    ',
    '      ██            ██      ',
    '       ██████████           ',
    '',
    '           Citron           ',
    '',
  ],
];

const ASCII = SMILE_FRAMES[0];

function usage() {
  return `citron-mascot — Citron mascot in the terminal (${version})

Usage:
  citron-mascot [options]
  npm run mascot   (in this repo)
  npx --package @citron-systems/citron-ds citron-mascot

Options:
  --animate    Alternate smile frames a few times (TTY: clears screen between frames)
  --no-color   Plain text (also respects NO_COLOR=1)
  --help, -h   Show this message

Browser preview (no terminal): open dist/preview/mascot.html, or after npm install:
  node_modules/@citron-systems/citron-ds/dist/preview/mascot.html
`;
}

function printMascot(lines, noColor) {
  for (const line of lines) {
    if (line === '' || noColor) {
      process.stdout.write(line + '\n');
      continue;
    }
    if (line.includes('Citron')) {
      process.stdout.write(DIM + line + RESET + '\n');
      continue;
    }
    process.stdout.write(CITRON + line + RESET + '\n');
  }
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('--help') || argv.includes('-h')) {
    process.stdout.write(usage());
    process.exit(0);
  }

  const noColor =
    argv.includes('--no-color') ||
    process.env.NO_COLOR === '1' ||
    process.env.NO_COLOR === 'true' ||
    !process.stdout.isTTY;

  if (argv.includes('--animate')) {
    const cycles = SMILE_FRAMES.length * 5;
    for (let i = 0; i < cycles; i++) {
      if (process.stdout.isTTY && !noColor) {
        process.stdout.write('\x1b[2J\x1b[H');
      }
      printMascot(SMILE_FRAMES[i % SMILE_FRAMES.length], noColor);
      if (i < cycles - 1) {
        await new Promise((r) => setTimeout(r, 380));
      }
    }
    return;
  }

  printMascot(ASCII, noColor);
}

main().catch((err) => {
  process.stderr.write(String(err) + '\n');
  process.exit(1);
});
