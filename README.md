# Citron Design System

**Package:** `@citron-systems/citron-ds` · **Studio:** Inkblot Studio

**v2: warm ink, luminous citron, engineered typography.** Design tokens, self-hosted brand fonts (Space Grotesk + IBM Plex), a signature motion language, a token-driven component layer, and full brand assets. Accessible, AI-ready.

Brand accent (Citron **500**): `#c9a227` · Ink: `#0a0908` · Leaf **500**: `#478239`. The logo is brand v2, "the Slice" (see [Brand assets](#brand-assets) and `docs/brand.md`); upload-ready PNG/JPG files are in [`brand-kit/`](brand-kit/README.md).

[![npm](https://img.shields.io/npm/v/@citron-systems/citron-ds?style=flat-square&logo=npm&logoColor=white&color=c9a227)](https://www.npmjs.com/package/@citron-systems/citron-ds)
[![License: MIT](https://img.shields.io/badge/License-MIT-c9a227?style=flat-square)](https://opensource.org/licenses/MIT)
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
@import '@citron-systems/citron-ds/fonts';       /* self-hosted brand fonts (@font-face) */
@import '@citron-systems/citron-ds/css';         /* token variables */
@import '@citron-systems/citron-ds/components';  /* optional: ready-made component layer */

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
| `@citron-systems/citron-ds/components` | Component layer (buttons, cards, forms, badges, reveals) |
| `@citron-systems/citron-ds/fonts` | `@font-face` layer for the self-hosted brand fonts |
| `@citron-systems/citron-ds/fonts/*` | Individual woff2 files |
| `@citron-systems/citron-ds/scss` | SCSS variables |
| `@citron-systems/citron-ds/tokens` | Flat JSON (resolved values) |
| `@citron-systems/citron-ds/ai-reference` | AI agent reference (token map, patterns, rules) |
| `@citron-systems/citron-ds/brand/*` | Brand v2 mark, wordmark, lockups, app icon, favicon (SVG); v1 files under `brand/legacy/` |
| `@citron-systems/citron-ds/bundle` | Bundle entry (`dist/bundle/README.md`) |
| `@citron-systems/citron-ds/bundle/*` | Resolved tokens, CSS/SCSS bundles, fonts, system JSON, etc. |
| `@citron-systems/citron-ds/preview/mascot.html` | Static mascot preview page |

---

## Brand assets

Brand v2 ("the Slice", adopted 2026-09; rules in [`docs/brand.md`](docs/brand.md)). Source SVGs live in `assets/brand/`; `npm run build` copies them into `dist/brand/`.

| File | Use |
|------|-----|
| `citron-lockup.svg` / `-inverse` | Default logo: mark + wordmark (light / on ink) |
| `citron-mark.svg` / `-inverse` | Mark alone: small spots, avatars |
| `citron-wordmark.svg` / `-inverse` | Wordmark where the mark already shows nearby |
| `citron-app-icon.svg` / `-light` | Rounded tile: app icon, social avatar |
| `citron-favicon.svg`, `safari-pinned-tab.svg` | Browser tab |
| `legacy/` | Brand v1 (gold mascot, Space Grotesk wordmark), kept for anything still on it |

**Need a PNG or JPG** (Jira, Slack, Google Workspace, GitHub, LinkedIn, X, email signatures)? Use [`brand-kit/`](brand-kit/README.md): every file at the size each service asks for, with a table of which file goes where. Regenerate it with `npm run brand:kit` after changing a source SVG. The kit is in the repo, not in the npm package.

### Brand fonts

| Face | Role | Weights |
|------|------|---------|
| **Space Grotesk** (variable) | Display, headlines, wordmark | 300–700 |
| **IBM Plex Sans** (variable) | UI and body | 100–700 + italic |
| **IBM Plex Mono** | Code, data, eyebrow labels | 400/500/600 + italic |

All self-hosted (≈244 KB woff2 total, latin + latin-ext, `font-display: swap`). OFL licensed, with no tracking and no CDN dependency.

**GitHub (maintainers):** for **Social preview** use `brand-kit/05-services/share-card-1200x630.jpg`; for the repo or org **avatar** use `brand-kit/01-avatar/citron-avatar-ink-512.png`.

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

- **Radical Clarity**: One correct interpretation per rule. No ambiguity.
- **Composable Independence**: Every component is self-contained and works in isolation.
- **Universal Access**: WCAG AAA. 7:1 contrast. 44px touch targets. Full keyboard nav.
- **AI-First**: Every token, component, and rule is machine-parseable JSON.
- **Deliberate Restraint**: Minimum visual complexity. Every element earns its place.

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

- **`npm run build`**: Style Dictionary outputs plus copy steps for brand assets, mascot preview, and desktop bundle (`dist/`).
- **`prepublishOnly`** runs `npm run build` before `npm publish`.

### Publish note (maintainers)

If you publish with **npm provenance** from GitHub Actions, `package.json` **`repository.url`** must point at the **same** GitHub repository as the workflow (otherwise the registry returns `422` provenance validation errors). Run `npm pkg fix` if npm warns about normalized fields during publish.

---

## Deploy preview to Vercel

1. Push to GitHub and [import the repo](https://vercel.com/new) in Vercel.
2. Vercel will auto-detect the build from `vercel.json`.
3. Deploy. The preview site goes live.

Or deploy from the CLI:

```bash
npm install -g vercel
npm run build:deploy
vercel --prod
```

---

## License

MIT © Inkblot Studio
