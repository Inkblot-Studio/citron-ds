# Citron design bundle (desktop / Rust / native)

Single folder with design tokens, system metadata, and brand assets. Generated on `npm run build`; published inside `@citron-systems/citron-ds` under `dist/bundle`.

## Layout

| Path | Contents |
|------|----------|
| `tokens.resolved.json` | Flat map of resolved token keys → values (good for `serde_json` / codegen). |
| `tokens.flat.json` | Same flat format from the JS build (duplicate pipeline output). |
| `variables.css` | CSS custom properties (`:root`). |
| `variables.scss` | SCSS variables. |
| `ai-reference.json` | Inkblot / Citron AI and product reference. |
| `tokens-schema.json` | Present when Style Dictionary emits it. |
| `tokens/` | Authoritative DTCG-style source JSON (primitive + semantic). |
| `system/` | Extra system JSON (foundations, motion, icons, `cli.json` for terminal/TUI/AI CLIs, etc.). |
| `brand/` | Logos / mascot (SVG + PNG readme banner). |
| `preview/mascot.html` | Double-click mascot preview in a browser (no server). |

## Rust / Tauri / egui

- **Tokens:** `include_str!("node_modules/@citron-systems/citron-ds/dist/bundle/tokens.resolved.json")` (adjust path to your vendored copy).
- **WebView UI:** load `variables.css` or parse JSON and map to your theme struct.
- **Icons / logos:** embed files from `brand/`.

## npm subpath imports

Use `@citron-systems/citron-ds/bundle/<file>` (see package `exports`).
