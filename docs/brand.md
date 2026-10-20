# Citron brand book (v2)

Status: adopted 2026-09. Applies to the Citron console, the CitronOS identity portal,
the Citron Dashboard, email and anything that says "Citron". The console-level UI
rules are in `docs/redesign/15-signature.md`; this book is the brand above them.

Assets: `public/brand/` (SVG). In React: `src/admin/components/citron-brand.tsx`
(`CitronMark`, `CitronWordmark`, `CitronLockup`, `CitronMotif`, `PoweredByCitron`).

---

## 1. Essence

**Citron is the calm back office behind a client's website.** Agencies run many
clients from it; each client sees their own logo and a product that feels made
for them. Citron is the quiet, exact instrument underneath.

- **Promise:** everything a small business publishes, answers and books, in one
  calm place.
- **Personality:** precise, warm, unhurried, confident, a little editorial.
  Never loud, never cute, never "techy".
- **Reference points:** the typographic confidence of Stripe, the restraint of
  Aesop, the density discipline of Linear, the warmth of printed paper.
- **Family resemblance (why we kept Porcelain and Ink):** the console already reads
  as paper and ink with one spot colour. A premium brand is a consistent one;
  v2 sharpens that system (mark, motif, motion, voice) instead of replacing it.

## 2. Voice and tone

Plain, specific, short. Say what happened or what to do; never apologise twice,
never exclaim, never joke about data.

| Situation | Do (EN) | Do (BG) | Don't |
|---|---|---|---|
| Empty list | "No enquiries yet" · "Enquiries from the website will appear here" | „Все още няма запитвания" · „Запитванията от сайта ще се появяват тук" | "Nothing to see here! 🎉" |
| No results | "No enquiries match “oak”" · [Clear filters] | „Няма запитвания за „oak"" · [Изчисти филтрите] | offering "Create" |
| Outcome toast | "Enquiry archived" · [Undo] | „Запитването е архивирано" · [Отмени] | "Success! Your enquiry was archived successfully." |
| Error | "Couldn't load enquiries. Try again." | „Запитванията не се заредиха. Опитайте отново." | "Oops! Something broke 😬" |
| 404 | "This page doesn't exist" | „Тази страница не съществува" | "Lost in space?" |

Rules: sentence case; Bulgarian uses the formal „Вие" form and „…" quotes; no
toast for routine saves (the screen already shows it); numbers in mono.

## 3. Logo system

### The mark: "the Slice"
A **C drawn as a citrus rind**, open to the right, with **one segment lifted into
its opening**. It is a C for Citron, a citrus cross-section, and the product's one
rule made visible: everything is ink except the one thing that matters, in orange.

- Geometry (32-unit grid): rind radius 10.4, stroke 5, opening 84°; segment radius
  11.2 from (17.2, 16), ±30°, rounded 2 units.
- Colours: rind ink `#121212` on light, porcelain `#F2F0EA` on dark; segment citron
  `#FF5A1F` (light) / `#FF6A2B` (dark). Inline React uses `currentColor` + `--accent`.

### The wordmark
Lowercase **citron**, constructed monoline geometry (stroke 3.3 on a 32-unit body,
x-height 15), with the **i's dot in citron orange**: the segment again, at text size.
It is drawn, not typeset, so it renders identically everywhere and needs no font.

### Lockup
Mark at 75% of the wordmark height, centred on the x-height, gap = 7 units
(about the width of the wordmark's "i" plus its sidebearings). File: `citron-lockup.svg`.

| File | Use |
|---|---|
| `citron-mark.svg` / `-inverse` | favicon-sized spots, collapsed sidebar, avatars |
| `citron-wordmark.svg` / `-inverse` | where the mark already appears nearby |
| `citron-lockup.svg` / `-inverse` | default: sidebar brand cell, auth, 404, email header |
| `citron-app-icon.svg` (ink tile) / `-light` | PWA, app icon, social avatar |
| `citron-favicon.svg` | browser tab (ink tile, tighter crop for 16 px) |

### Clear space and minimum size
- Clear space on every side = the **height of the segment** (≈ 1/3 of the mark).
- Minimum: mark **14 px**; lockup **13 px** tall (footnotes); wordmark 12 px.
  Below 16 px prefer the app-icon tile, which reads as a solid shape.

### Misuse (don't)
- Recolour the rind orange, or the segment anything but citron.
- Add a second accent, a gradient, a shadow, an outline or a glow.
- Rotate the mark (the opening always faces right, toward what follows).
- Retype the wordmark in a font, change its spacing, or capitalise it.
- Put the lockup on a photo or a mid-tone; use porcelain or ink grounds only.
- Pair the Citron lockup with a client logo side by side. The client leads; Citron
  is credited in the "Powered by Citron" footnote (workspace menu, auth screens).

## 4. Colour

| Name | Light | Dark | Role | Notes |
|---|---|---|---|---|
| Porcelain | `#FBFAF7` | (paper `#161616`) | canvas | |
| Paper | `#FFFFFF` | `#161616` | surfaces | |
| Ink | `#121212` | `#F2F0EA` | text, primary action, the rind | 18.1:1 / 15.9:1 |
| Graphite | `#6B675F` | `#9A968D` | muted text floor | 5.6:1 / 6.1:1 |
| Hairline | `#E6E2DA` | `#262626` | dividers | |
| **Citron** | `#FF5A1F` | `#FF6A2B` | the one accent: marker, focus, selection, the segment | fill only on light (3.1:1) |
| Rind | `#B83A0A` | `#FF8A57` | orange as text | 5.8:1 / 7.8:1 |
| Pith | `#FFF1EA` | 12% citron | washes | |
| **Yuzu** | `#E9A23B` | `#F2B54F` | **data only** (charts, legends) | never text, never UI |

Ratios of use on any screen: ~90% porcelain/paper, ~9% ink, ≤1% citron. Data
series order (`--data-1…5`): graphite, citron, yuzu, info blue, success green.
Semantic colours (success, warning, danger, info) are unchanged from 15-signature.

## 5. Typography

| Voice | Family | Role |
|---|---|---|
| Display | Source Serif 4 (opsz, 500/600) | naming: titles, empty-state headlines, 404, big numbers |
| UI | IBM Plex Sans | operating: labels, body, buttons |
| Data | IBM Plex Mono | counting: eyebrows, counts, dates, codes |

Kept deliberately: all three have full Cyrillic, are open-licence and self-hosted,
and the serif/sans/mono split already gives the console its editorial voice. The
wordmark is drawn, so it does not depend on any of them. Serif never below 16 px.

**Scripts.** The console speaks English, Bulgarian, Romanian and Greek, so every
voice ships latin-ext (ș ț ă â î), Cyrillic and Greek. Source Serif 4 and IBM Plex
Sans cover all three. IBM Plex Mono has no Greek, so **Source Code Pro** (Adobe,
the mono sibling of Source Serif 4, same proportions and open licence) sits right
after it in `--font-mono` and draws only the Greek letters Plex lacks; it loads
its Greek subset alone, on demand (`src/app/layout.tsx`).

## 6. Motif: the section

A citrus cross-section drawn in **hairlines**: a double rind, ten segments, **one
segment marked** in citron with a pith wash (`CitronMotif`). It is the only
decorative element in the brand.

- Where: auth screens, the 404 and crash screens, first-run/onboarding moments,
  marketing and email headers. **Not** inside working screens, lists or empty states.
- How: large, cropped off a corner (`.brand-stage`), behind content, hairline
  colour only. One marked segment, never more.
- Don't: animate it, fill it, colour more than one segment, use it as a loader.

## 7. Iconography

Lucide, 1.75 px stroke at 15–18 px, ink greys (`--ink-500` rest, `--ink-900` active).
Icons are never orange except when they are the marker (active org check). No
icon tiles on orange washes; no icons in empty states.

## 8. Motion

Arrive from the source, settle, leave faster. Nothing bounces, overshoots or loops
except progress.

| Token | Value | Use |
|---|---|---|
| `--motion-fast` | 120 ms | hover, press, colour, focus |
| `--motion-base` | 180 ms | menus, popovers, tabs, rows, disclosure |
| `--motion-sheet` | 240 ms | dialogs, drawers, sidebar rail |
| `--motion-exit` | 130 ms | exits (dialogs 160, drawers 180) |
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | every entrance |
| `--ease-in` | `cubic-bezier(.5,0,.75,0)` | every exit |

Patterns: menus scale 0.98→1 + fade from the trigger's corner; dialogs fade + rise
6 px; drawers slide 24 px + fade; toasts rise; tab underlines draw in; disclosures
animate height (grid rows); the sidebar rail eases its width; new rows fade in.
`prefers-reduced-motion` removes movement and exit delays everywhere.

## 9. Imagery and illustration

No stock illustration, no 3D, no mascots in product UI. Photography (marketing
only) is natural light, real work, warm neutrals, never tinted orange. Diagrams use
hairlines, ink and one citron mark. The earlier face mascot (`/images/citron-mascot.svg`)
is retired from product surfaces; keep it only for informal community use.

## 10. Applications

- **Console:** lockup in the sidebar brand cell when the org has no logo (mark when
  collapsed); client logo otherwise, with "Powered by Citron" in the workspace menu.
- **Auth (callback, 2FA, gate):** porcelain stage, motif off the corner, panel with
  the lockup (or the client logo plus the footnote).
- **404 / crash:** `BrandMoment`: lockup, mono code, serif line, one ink button.
- **Favicon / app icon:** ink tile with the porcelain Slice.

## 11. Follow-ups outside this repo

- **Identity portal** (`citronos/citron-identity`): adopt tokens, lockup, motif
  stage and voice; it is the first screen most users see.
- **Emails** (API repo): lockup header on porcelain, ink text, citron only on the
  one link; plain-text-first copy per §2.
- ~~**PNG exports** of the app icon (180/192/512) for iOS/Android, which ignore SVG.~~ Done:
  `npm run brand:icons` (`scripts/brand-icons.mjs`, the same file in citron-identity and
  citron-web) regenerates the whole set from the SVGs above: `favicon.ico` (16/32/48),
  the SVG favicon with its own dark variant, `brand/icons/favicon-{16,32,48}.png`,
  `brand/pwa/citron-{apple-180,192,512,maskable-512}.png` (maskable keeps the mark inside
  the 80% safe zone; apple is full bleed because iOS rounds it), the Safari pinned tab,
  email PNGs (`brand/email/`) and the 1200×630 share card (`brand/og/citron-console.png`,
  only on Citron's own hosts). `npm run check:brand` fails when a file is stale. A client
  build (Ermax) and a client org's own favicon are untouched.
- **Citron Dashboard** and marketing site: same assets and motif rules.

## 12. White-label for agencies (L8.7)

An agency on the Agency plan may switch on white-label (`Agency → Clients`,
`settings.agency.whiteLabel`). It applies only inside client workspaces the
agency manages and keeps access to. The console still looks like Citron; the
agency takes Citron's *credit*, never its *design*.

**The agency's logo/name replaces Citron's in exactly these places:**
- **Sidebar brand cell** of a managed client with no logo of its own: the agency
  logo (dark variant in dark mode, square mark when collapsed) where the Citron
  lockup would be. A client logo always leads; the two are never shown together.
- **Workspace menu footnote**: "Managed by {Agency}" replaces "Powered by Citron".
- **Auth screens on the client's custom domain (L1.4)**: the client logo, else
  the agency logo, in the panel head; "Managed by {Agency}" as the footnote.

**Never changes:** colours and the citron accent, type, radius, motion, the
motif, icons, the favicon (client's or Citron's), product copy, 404/crash
`BrandMoment`, billing and legal pages, Citron system emails, the Citron
Dashboard. No agency colours, no second accent, no co-branded lockups.

Revoking agency access (client, Settings → Organization) ends white-label for
that workspace immediately (≤ 5 min cache).
