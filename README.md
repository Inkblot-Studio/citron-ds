# Citron Design System

**Package:** `@citron-systems/citron-ds` · **Studio:** Inkblot Studio

Design tokens — Apple-inspired, accessible, AI-ready. Warmly minimal, quietly distinctive.

Brand accent (Citron **500**): `#c4a030`. Mascot and lockups ship as SVG under `brand/` (see [Brand assets](#brand-assets)).

[![npm](https://img.shields.io/npm/v/@citron-systems/citron-ds?style=flat-square&logo=npm&logoColor=white&color=c4a030)](https://www.npmjs.com/package/@citron-systems/citron-ds)
[![License: MIT](https://img.shields.io/badge/License-MIT-c4a030?style=flat-square)](https://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/badge/repo-Inkblot--Studio%2Fcitron--ds-1a1814?style=flat-square&logo=github&logoColor=f5f0e6)](https://github.com/Inkblot-Studio/citron-ds)

[Repository](https://github.com/Inkblot-Studio/citron-ds) · [npm](https://www.npmjs.com/package/@citron-systems/citron-ds)

---

## Install

```bash
npm install @citron-systems/citron-ds
```

### CDN (no build step)

```html
<link rel="stylesheet" href="https://unpkg.com/@citron-systems/citron-ds/dist/css/inkblot-variables.css">
```

---

## Quick Start

### CSS (recommended)

```css
@import '@citron-systems/citron-ds/css';

.button {
  background: var(--inkblot-semantic-color-interactive-primary);
  color: var(--inkblot-semantic-color-text-inverse);
  padding: var(--inkblot-spacing-3) var(--inkblot-spacing-6);
  border-radius: var(--inkblot-radius-lg);
  font-weight: var(--inkblot-typography-font-weight-medium);
  min-height: var(--inkblot-size-touch-target-min);
  transition: all var(--inkblot-duration-fast) var(--inkblot-easing-default);
}
```

### SCSS

```scss
@use '@citron-systems/citron-ds/scss' as *;

.card {
  background: var(--inkblot-semantic-color-background-secondary);
  border: 1px solid var(--inkblot-semantic-color-border-default);
  border-radius: var(--inkblot-radius-xl);
  padding: var(--inkblot-spacing-6);
}
```

### JavaScript / ESM

```javascript
import {
  InkblotColorAccentCitron500,
  InkblotSpacing4,
  InkblotRadiusLg,
} from '@citron-systems/citron-ds';

// Use in JS-driven styling (e.g. React inline, Canvas, etc.)
const styles = {
  backgroundColor: InkblotColorAccentCitron500,
  padding: InkblotSpacing4,
  borderRadius: InkblotRadiusLg,
};
```

### JSON (for tooling, build scripts, AI)

```javascript
import tokens from '@citron-systems/citron-ds/tokens';
// Flat resolved values: { "inkblot.color.accent.citron.500": "#c4a030", ... }
```

---

## Package exports

| Import path | Contents |
|-------------|----------|
| `@citron-systems/citron-ds` | ESM JS tokens (default) |
| `@citron-systems/citron-ds/css` | CSS variables (`:root`) |
| `@citron-systems/citron-ds/scss` | SCSS variables |
| `@citron-systems/citron-ds/tokens` | Flat JSON (resolved values) |
| `@citron-systems/citron-ds/ai-reference` | AI agent reference (token map, patterns, rules) |
| `@citron-systems/citron-ds/brand/citron-mascot.svg` | Citron mascot (full color; optional `--citron-mascot-fill`) |
| `@citron-systems/citron-ds/brand/citron-mascot-mono.svg` | Mascot lockup (`currentColor`) |
| `@citron-systems/citron-ds/bundle` | Bundle entry (`dist/bundle/README.md`) |
| `@citron-systems/citron-ds/bundle/*` | Resolved tokens, CSS/SCSS bundles, system JSON, etc. |
| `@citron-systems/citron-ds/preview/mascot.html` | Static mascot preview page |

---

## Brand assets

Source SVGs live in `assets/brand/`; `npm run build` copies them into `dist/brand/` for publishing. Import from the package as in the table above, or copy from `dist/brand/` in a checkout.

| File | Use |
|------|-----|
| `citron-mascot.svg` | Full-color mark (`#c4a030` citron **500**) |
| `citron-mascot-mono.svg` | Single-color / `currentColor` lockups |

**GitHub (maintainers):** For **Social preview** (Settings → General), use any **1280×640** image you export yourself (PNG) from the mascot or your own layout — GitHub does not reliably show SVG in README `<img>` tags. For the repo or org **avatar**, `citron-mascot-mono.svg` stays readable at small sizes.

---

## CLI

The **citron-mascot** binary prints the ASCII Citron mascot (with a short color animation in supported terminals).

From a project that already depends on this package:

```bash
npx citron-mascot
```

One-off without adding a dependency:

```bash
npx --package=@citron-systems/citron-ds citron-mascot
```

---

## Principles

- **Radical Clarity** — One correct interpretation per rule. No ambiguity.
- **Composable Independence** — Every component is self-contained and works in isolation.
- **Universal Access** — WCAG AAA. 7:1 contrast. 44px touch targets. Full keyboard nav.
- **AI-First** — Every token, component, and rule is machine-parseable JSON.
- **Deliberate Restraint** — Minimum visual complexity. Every element earns its place.

---

## Color modes

Light mode is default. Dark mode activates via:

- `[data-theme="dark"]` on a parent element, or
- `prefers-color-scheme: dark` (system preference)

---

## For AI agents

**Primary reference** (include in context): `@citron-systems/citron-ds/ai-reference`

- CSS variable map for all semantic tokens
- Composite patterns (form, card, modal, table, list item)
- Breakpoints, grid, easing (in CSS format)
- Icon semantics, CSS snippets, component spacing
- Validation and ARIA patterns

**Rule**: Always use semantic tokens (`var(--inkblot-semantic-color-*)`), never primitives.

---

## Standards

- **Tokens**: [W3C Design Tokens Community Group](https://www.designtokens.org/)
- **Build**: [Style Dictionary](https://styledictionary.com/) v4
- **Accessibility**: WCAG 2.2 AAA
- **Contrast**: 7:1 normal text, 4.5:1 large text, 3:1 UI components

---

## Development

```bash
git clone https://github.com/Inkblot-Studio/citron-ds.git
cd citron-ds
npm install
npm run build
npm run dev        # Live preview at localhost:5173
```

- **`npm run build`** — Style Dictionary outputs plus copy steps for brand assets, mascot preview, and desktop bundle (`dist/`).
- **`prepublishOnly`** runs `npm run build` before `npm publish`.

### Publish note (maintainers)

If you publish with **npm provenance** from GitHub Actions, `package.json` **`repository.url`** must point at the **same** GitHub repository as the workflow (otherwise the registry returns `422` provenance validation errors). Run `npm pkg fix` if npm warns about normalized fields during publish.

---

## Deploy preview to Vercel

1. Push to GitHub and [import the repo](https://vercel.com/new) in Vercel.
2. Vercel will auto-detect the build from `vercel.json`.
3. Deploy — the preview site will be live.

Or deploy from the CLI:

```bash
npm install -g vercel
npm run build:deploy
vercel --prod
```

---

## License

MIT © Inkblot Studio
