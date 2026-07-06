#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const clientId = process.argv[2] ?? "citron";
writeFileSync(join(repoRoot, ".hillcode-client"), `${clientId}\n`, "utf8");
console.error(`inject: ${clientId} (design tokens)`);
