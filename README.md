# Inkblot Studio Design Tokens

Design token system for **Inkblot Studio** — simple, sophisticated, Apple-inspired. Built for AI training, AI integration, and component libraries.

## Philosophy

- **Clean**: Minimal palette, restrained use of color and shadow
- **Accessible**: WCAG 2.1 AA contrast, 44px minimum touch targets
- **Semantic**: Use semantic tokens in components, never raw primitives
- **AI-ready**: Structured for AI training, integration, and code generation

## Quick Start

```bash
npm install
npm run build
```

### Live Preview

Preview tokens in the browser with hot reload — edit any file in `tokens/` and see changes instantly:

```bash
npm run dev
```

Opens http://localhost:5173 with a visual showcase of colors, typography, spacing, shadows, and components.

## Output Formats

| Format | Path | Use Case |
|--------|------|----------|
| CSS Variables | `dist/css/inkblot-variables.css` | Web apps, import in CSS |
| SCSS | `dist/scss/_inkblot-variables.scss` | Sass/SCSS projects |
| JavaScript | `dist/js/inkblot-tokens.js` | JS/TS component libraries |
| JSON (flat) | `dist/ai/inkblot-tokens-resolved.json` | AI training, integrations |

## Usage

### CSS

```css
@import '@inkblot-studio/design-tokens/css';

.button {
  background: var(--inkblot-semantic-color-interactive-primary);
  color: var(--inkblot-semantic-color-text-inverse);
  padding: var(--inkblot-spacing-2) var(--inkblot-spacing-4);
  border-radius: var(--inkblot-radius-md);
  transition: background var(--inkblot-duration-fast) var(--inkblot-easing-default);
}
```

### JavaScript/TypeScript

```javascript
import tokens from '@inkblot-studio/design-tokens';
// tokens.InkblotColorAccentBlue500 → "#007aff"
```

### AI Integration

For AI training and component generation:

1. **Token reference**: `dist/ai/inkblot-tokens-resolved.json` — flat, resolved values
2. **Schema**: `dist/ai/inkblot-tokens-schema.json` — token structure and component guidelines
3. **Source tokens**: `tokens/` — W3C DTCG format with descriptions

**Component generation rules for AI:**
- Use semantic tokens: `inkblot.semantic.color.*`, not primitives
- Spacing: 4pt grid (4, 8, 12, 16, 24, 32px)
- Touch targets: minimum 44px
- Border radius: 8px for cards/inputs
- Primary accent: `#007aff` (Apple system blue)

## Token Structure

```
inkblot/
├── color (primitive)
│   ├── neutral (white, gray 50-950)
│   ├── accent (blue 50-900)
│   └── semantic (success, warning, error, info)
├── semantic (use in components)
│   ├── color (background, text, border, interactive, status)
│   └── typography (heading 1-4, body, label)
├── spacing (0, 1-32)
├── typography (fontFamily, fontSize, fontWeight, lineHeight)
├── radius (none, sm, md, lg, xl, 2xl, full)
├── shadow (none, xs, sm, md, lg, xl)
├── duration (instant, fast, normal, slow, slower)
├── easing (default, in, out, inOut, bounce)
└── breakpoint (sm, md, lg, xl, 2xl)
```

## Standards

- **Format**: [W3C Design Tokens Community Group (DTCG)](https://www.designtokens.org/)
- **Build**: [Style Dictionary](https://styledictionary.com/) v4
- **Accessibility**: WCAG 2.1 AA

## License

MIT © Inkblot Studio
