# @citron-systems/citron-ds

> Inkblot Studio design token system — Apple-inspired, accessible, AI-ready. The **Citron** design language: warmly minimal, quietly distinctive.

[![npm version](https://img.shields.io/npm/v/@citron-systems/citron-ds.svg)](https://www.npmjs.com/package/@citron-systems/citron-ds)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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

## Package Exports

| Import path | Contents |
|-------------|----------|
| `@citron-systems/citron-ds` | ESM JS tokens (default) |
| `@citron-systems/citron-ds/css` | CSS variables (`:root`) |
| `@citron-systems/citron-ds/scss` | SCSS variables |
| `@citron-systems/citron-ds/tokens` | Flat JSON (resolved values) |
| `@citron-systems/citron-ds/ai-reference` | AI agent reference (token map, patterns, rules) |

---

## Principles

- **Radical Clarity** — One correct interpretation per rule. No ambiguity.
- **Composable Independence** — Every component is self-contained and works in isolation.
- **Universal Access** — WCAG AAA. 7:1 contrast. 44px touch targets. Full keyboard nav.
- **AI-First** — Every token, component, and rule is machine-parseable JSON.
- **Deliberate Restraint** — Minimum visual complexity. Every element earns its place.

---

## Color Modes

Light mode is default. Dark mode activates via:

- `[data-theme="dark"]` on a parent element, or
- `prefers-color-scheme: dark` (system preference)

---

## For AI Agents

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
git clone https://github.com/GHDryanovski19/inkblot-studio-design-tokens.git
cd inkblot-studio-design-tokens
npm install
npm run build
npm run dev        # Live preview at localhost:5173
```

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
