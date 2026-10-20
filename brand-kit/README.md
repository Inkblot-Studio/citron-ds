# Citron brand kit

Upload-ready logo files for tools that don't take SVG. Generated from the
vector sources in `assets/brand/` by `npm run brand:kit`; don't edit these
files by hand, change the SVGs and regenerate.

Brand rules are in `docs/brand.md` (brand v2, "the Slice").

## Which file goes where

| Where | Upload | Notes |
|---|---|---|
| Jira, Confluence, Atlassian site logo | `03-lockup/citron-lockup-128h.png` | Transparent; shows in the header on white |
| Jira or Confluence project / space avatar | `01-avatar/citron-avatar-ink-512.png` | Square, survives a circle crop |
| Slack workspace icon | `01-avatar/citron-avatar-ink-1024.png` | Slack asks for at least 512 px |
| Google Workspace (Admin, custom logo) | `05-services/google-workspace-logo-320x132.png` | Google's exact size |
| Google account / Gmail profile picture | `01-avatar/citron-avatar-ink-512.jpg` | |
| GitHub organization avatar | `01-avatar/citron-avatar-ink-512.png` | |
| npm organization avatar | `01-avatar/citron-avatar-ink-256.png` | |
| LinkedIn page logo | `01-avatar/citron-avatar-ink-512.png` | Shown at 300 × 300 |
| LinkedIn page cover | `05-services/linkedin-cover-1128x191.jpg` | |
| X (Twitter) profile picture | `01-avatar/citron-avatar-ink-512.jpg` | |
| X (Twitter) header | `05-services/x-header-1500x500.jpg` | |
| Link preview / Open Graph image | `05-services/share-card-1200x630.jpg` | |
| Email signature | `05-services/email-signature-lockup-96h.png` | Set its width to 120 px in the signature editor |
| Slides, documents on white | `03-lockup/citron-lockup-256h.png` | |
| Slides, documents on dark | `03-lockup/citron-lockup-inverse-256h.png` | |
| A tool that needs a background colour | `03-lockup/citron-lockup-on-white-1200x400.jpg` or `-on-ink-` | |
| App stores, docs, app icon | `01-avatar/citron-app-icon-1024.png` | Rounded tile, transparent corners |
| Browser tab icon | `06-favicon/` | |
| Anything that accepts SVG | `07-svg/` | Always the best choice when allowed |

`-light` avatars are the same mark on porcelain, for places where a dark
square would be too heavy. `-inverse` files are for dark backgrounds.

## Folders

| Folder | What |
|---|---|
| `01-avatar` | Square avatars (ink or light ground), the rounded app icon |
| `02-mark` | The mark alone, transparent |
| `03-lockup` | Mark plus wordmark, the default logo |
| `04-wordmark` | Wordmark alone |
| `05-services` | Exact sizes specific services ask for |
| `06-favicon` | Browser tab icons |
| `07-svg` | Vector sources |

## Colours

| Name | Hex | Use |
|---|---|---|
| Ink | `#121212` | Text, the rind, dark grounds |
| Porcelain | `#FBFAF7` | Light ground |
| Citron | `#FF5A1F` | The one accent: the segment and the dot of the i |
| Citron on dark | `#FF6A2B` | The accent on ink |

## Don't

- Recolour the mark, add a second accent, a gradient, a shadow or an outline.
- Rotate the mark: the opening always faces right.
- Retype the wordmark in a font or capitalise it.
- Put the logo on a photo or a mid-tone; use porcelain, white or ink grounds.
