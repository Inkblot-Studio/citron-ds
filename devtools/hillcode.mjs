#!/usr/bin/env node
/** Hillcode · Citron DS — token build + preview TUI + CLI */
import { spawn, spawnSync } from "node:child_process";
import { createInterface } from "node:readline";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const injectScript = join(repoRoot, "devtools", "inject.mjs");

function style(t, k) {
  if (process.env.NO_COLOR) return t;
  return k === "brand" ? "\x1b[38;2;217;188;88m" + t + "\x1b[0m" : k === "muted" ? "\x1b[2m" + t + "\x1b[0m" : t;
}

function parseArgs(argv) {
  const o = { help: false, client: null, cmd: null };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "-h" || argv[i] === "--help") o.help = true;
    else if (argv[i] === "-c" || argv[i] === "--client") o.client = argv[++i];
    else if (argv[i] === "--cmd") o.cmd = argv[++i];
  }
  return o;
}

function inject(c) {
  return spawnSync(process.execPath, [injectScript, c], { cwd: repoRoot, stdio: "inherit" }).status === 0;
}

function npm(args) {
  const w = process.platform === "win32";
  return spawn(w ? "npm.cmd" : "npm", args, { cwd: repoRoot, stdio: "inherit", shell: w });
}

const CMDS = {
  run: ["run", "dev"],
  web: ["run", "build"],
  preview: ["run", "preview"],
  tokens: ["run", "build:tokens"],
  mascot: ["run", "mascot"],
};

async function runCmd(cmd, client) {
  if (!CMDS[cmd]) { console.error(`unknown cmd: ${cmd}`); process.exit(1); }
  if (!inject(client)) process.exit(1);
  const p = npm(CMDS[cmd]);
  return new Promise((r) => p.on("close", (c) => r(c ?? 1)));
}

async function tui() {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q) => new Promise((r) => rl.question(q, r));
  for (;;) {
    console.clear();
    console.log("\n  " + style("hillcode · Citron DS", "brand") + "\n");
    console.log(`  ${style("1", "brand")}  run      ${style("dev (watch + vite preview site)", "muted")}`);
    console.log(`  ${style("2", "brand")}  web      ${style("full token + preview build", "muted")}`);
    console.log(`  ${style("3", "brand")}  preview  ${style("vite preview (after build)", "muted")}`);
    console.log(`  ${style("4", "brand")}  tokens   ${style("style-dictionary only", "muted")}`);
    console.log(`  ${style("q", "muted")}  exit\n`);
    const ch = (await ask(style("  > ", "brand"))).trim();
    if (ch === "q" || !ch) { rl.close(); process.exit(0); }
    const cmd = { "1": "run", "2": "web", "3": "preview", "4": "tokens" }[ch];
    if (!cmd) continue;
    rl.close();
    process.exit(await runCmd(cmd, "citron"));
  }
}

async function main() {
  if (!existsSync(join(repoRoot, "package.json"))) process.exit(1);
  const o = parseArgs(process.argv);
  if (o.help) { console.log("npm run hillcode -- --cmd run|web|preview|tokens"); process.exit(0); }
  if (o.cmd) process.exit(await runCmd(o.cmd, o.client ?? "citron"));
  await tui();
}

main().catch((e) => { console.error(e); process.exit(1); });
