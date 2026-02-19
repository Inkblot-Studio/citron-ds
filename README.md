# Inkblot Studio Design System

The canonical design system for **Inkblot Studio**. Built for AI agents, autonomous workers, and humans collaborating with AI. Every rule is explicit, every constraint defined, every edge case handled.

## Principles

- **Radical Clarity** — One correct interpretation per rule. No ambiguity.
- **Composable Independence** — Every component is self-contained and works in isolation.
- **Universal Access** — WCAG AAA. 7:1 contrast. 44px touch targets. Full keyboard nav.
- **AI-First** — Every token, component, and rule is machine-parseable JSON.
- **Deliberate Restraint** — Minimum visual complexity. Every element earns its place.

## Quick Start

```bash
npm install
npm run build
npm run dev        # Live preview at localhost:5173
```

## Architecture

```
inkblot-studio-design-tokens/
├── tokens/                         # W3C DTCG format (source of truth)
│   ├── primitive/                  # Raw design values
│   │   ├── color.tokens.json       # Neutral + accent + semantic palettes
│   │   ├── typography.tokens.json  # Font stacks, scale, weights
│   │   ├── spacing.tokens.json     # 4pt grid, icon sizes, touch targets
│   │   ├── radius.tokens.json      # Border radius + widths
│   │   ├── shadow.tokens.json      # Elevation + opacity
│   │   ├── duration.tokens.json    # Animation timing + easing curves
│   │   ├── breakpoint.tokens.json  # Responsive breakpoints
│   │   ├── grid.tokens.json        # Column counts, gutters, margins, max-widths
│   │   └── zindex.tokens.json      # Layering hierarchy
│   └── semantic/                   # Mapped meanings (use in components)
│       ├── inkblot.semantic.tokens.json  # Light mode
│       └── dark.tokens.json              # Dark mode overrides
├── system/                         # Design system specification (JSON)
│   ├── index.json                  # Master index — start here
│   ├── foundations.json            # Principles, accessibility, tech stack
│   ├── grid.json                   # Grid system, breakpoints, layout patterns
│   ├── components.json             # Full component library spec
│   ├── motion.json                 # Animation, transitions, micro-interactions
│   ├── content.json                # Data display, states, iconography, imagery
│   └── ai.json                     # AI agent consumption rules + examples
├── dist/                           # Generated outputs
│   ├── css/inkblot-variables.css
│   ├── scss/_inkblot-variables.scss
│   ├── js/inkblot-tokens.js
│   └── ai/inkblot-tokens-resolved.json
└── preview/                        # Live preview (Vite)
```

## For AI Agents

1. Read `system/ai.json` — deterministic rules for rendering components
2. Read `system/components.json` — anatomy, states, behavior, accessibility for every component
3. Reference `dist/ai/inkblot-tokens-resolved.json` — flat resolved token values
4. **Always use semantic tokens** (`inkblot.semantic.*`), never primitives

## For Developers

```css
@import '@inkblot-studio/design-tokens/css';

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

## System Specifications

| File | What it covers |
|------|---------------|
| `system/foundations.json` | Core principles, WCAG AAA rules, color modes, tech stack |
| `system/grid.json` | 4–24 column grid, breakpoints, z-index, layout patterns |
| `system/components.json` | Button, input, checkbox, toggle, select, modal, tooltip, card, chip, table, toast, slider, avatar, skeleton, empty state |
| `system/motion.json` | Durations, easings, transition patterns, micro-interactions, reduced motion |
| `system/content.json` | Tables, lists, cards, feeds, loading/empty/error states, iconography, imagery, truncation |
| `system/ai.json` | Component rendering rules, layout assembly steps, edge cases, testing requirements |

## Color Modes

Light mode is default. Dark mode activates via `[data-theme="dark"]` or `prefers-color-scheme: dark`.

## Standards

- **Tokens**: [W3C Design Tokens Community Group](https://www.designtokens.org/)
- **Build**: [Style Dictionary](https://styledictionary.com/) v4
- **Accessibility**: WCAG 2.2 AAA
- **Contrast**: 7:1 normal text, 4.5:1 large text, 3:1 UI components

## License

MIT - Inkblot Studio
