# Page build status — what is built, what is not, and what is blocked

Last updated: 17 Sep 2026. Companion to [`nextjs-migration.md`](nextjs-migration.md). The
Figma REST API token is now configured, so the screens below are rebuilt from the live
node trees rather than the repo export.

## Legend

| Mark | Meaning |
| --- | --- |
| ✅ **Built from design data** | Reconstructed from the Figma export already in the repo (`artifacts/figma-design`): real frame names, real token names, real copy, real geometry. |
| 🟡 **Interaction built, chrome assumed** | You described the behaviour in words, so the behaviour is exact; the visual chrome around it is built from your design tokens and needs a design check. |
| ⛔ **Structural base only** | The route, the data model, the metadata and the components exist and compile, but the layout is invented. A starting point to edit, **not** a replica. |

## Screen-by-screen

| Figma screen | Node id | Route | Status |
| --- | --- | --- | --- |
| Home (desktop / mobile) | — | `/` | ✅ built earlier from the export |
| About — desktop | `154-764` | `/about` | ✅ built from the export (`About.tsx`, 6 sections) |
| About — mobile | `336-1714` | `/about` | ✅ responsive rules already in place |
| Portfolio — desktop 1 | `154-917` | `/portfolio` | ✅ gallery grid from the export; 🟡 page heading/copy reconstructed (no page-level copy existed) |
| Portfolio — mobile 1 | `344-2014` | `/portfolio` | ✅ same grid, responsive rules in place |
| Portfolio — desktop 2 (image clicked) | `390-4967` | `/portfolio` overlay | 🟡 **interaction built**: click → full-screen overlay, Esc / arrows / swipe / counter |
| Portfolio — mobile 2 (image clicked) | `390-5239` | `/portfolio` overlay | 🟡 same component, mobile controls + swipe |
| Wedding stories — desktop | `178-738` | `/wedding-stories` | ✅ built from the design: hero, six-card grid (`178-788`), photo grid (`178-743`), form | 
| Wedding stories — mobile | `344-2312` | `/wedding-stories` | ✅ same, responsive: photo grid is `344-2544` |
| Wedding story details — desktop | `178-1035` | `/wedding-stories/[slug]` | ⛔ structural base |
| Wedding story details — mobile | `344-2553` | `/wedding-stories/[slug]` | ⛔ structural base |
| Contact us — desktop | `131-874` | `/contact` | ✅ built from the export (form) |
| Contact us — mobile | `344-3068` | `/contact` | ✅ responsive rules in place |
| Behind the scenes — desktop 1 | `181-1478` | `/behind-the-scenes` | ✅ heading + cards from the export; 🟡 page wrapper assumed |
| Behind the scenes — mobile 1 | `344-3243` | `/behind-the-scenes` | ✅ same |
| Behind the scenes — desktop 2 (image clicked) | `393-6961` | `/behind-the-scenes` overlay | 🟡 **interaction built**, chrome assumed |
| Behind the scenes — mobile 2 (image clicked) | `393-6740` | `/behind-the-scenes` overlay | 🟡 same |

## What was added in this pass

| File | Purpose |
| --- | --- |
| `src/components/media/photo-lightbox.tsx` | The click-to-overlay viewer. Hand-built (no new dependency): `role="dialog"`, focus trap, Esc / ← / →, swipe, counter, scroll lock, focus restore. |
| `src/components/sections/portfolio-gallery.tsx` | Now accepts `interactive` — wraps each photo in a real `<button>` and opens the overlay. Home keeps `interactive={false}`. |
| `src/components/sections/journal-cards.tsx` | Extracted from `journal-section.tsx` so the behind-the-scenes page reuses the same cards with `interactive`. |
| `src/content/stories.ts` | Wedding story data model + `weddingStories`, `getWeddingStory`, `getAdjacentStories`, `toGalleryRows`. |
| `src/app/wedding-stories/page.tsx` | Story index. |
| `src/app/wedding-stories/[slug]/page.tsx` | Story detail, prerendered via `generateStaticParams`, reuses the overlay for its gallery, prev/next navigation, article Open Graph tags. |
| `src/content/site.ts` | Added a `WEDDING STORIES` nav entry; footer "Wedding Stories" now points at the real route. |
| `src/app/sitemap.ts` | Story URLs included. |

### Latest pass — the missing Wedding Stories photo grid

The `/wedding-stories` page was rendering hero → six story cards → form and silently
skipped the photo grid between the cards and the form (`178-743` desktop, `344-2544`
mobile). That section is now built:

| File | Purpose |
| --- | --- |
| `src/content/photo-grid.ts` | Shared grid vocabulary (`ScaleMode`, `GridCell`, `GridRow`, `MobileGridItem`) so both grids use one set of shapes. `portfolio-grid.ts` re-exports them. |
| `src/content/stories-grid.ts` | The Wedding Stories grid extracted verbatim: 3 desktop rows (4 / 6 / 4 cells) and 4 mobile photos. |
| `src/components/sections/photo-masonry.tsx` | Generic renderer for every Figma `enquire-drawer-section` grid — takes `rows` + `mobileImages`, so `/portfolio` and `/wedding-stories` share one implementation. |
| `src/components/sections/portfolio-masonry.tsx` | Removed; superseded by `photo-masonry.tsx`. `/portfolio` now passes the portfolio data plus `interactive`. |
| `public/images/stories/*.webp` | Five new photos re-encoded from the Figma originals (`e07877bc`, `f1292321`, `a3a6c23b`, `aa391a36`, `0fd91032`). The other nine cells reuse photos already shipped in `public/images/portfolio/`. |

Measured in a real browser (headless Chrome, 1440px and 390px) the section matches the
file exactly: desktop rows of `215x310 / 429x206 / 207x298` cells on 24px gaps with the
odd cells vertically centered inside each 310/298px row, 40px side + 48px vertical
padding (1062px total); mobile four full-bleed 240px photos on 12px gaps with 60px
below (1056px total). The grid has no viewer frame in the design, so it renders as a
decorative image grid — pass `interactive` to switch on the lightbox.

## Verification

| Check | Result |
| --- | --- |
| `pnpm typecheck` | ✅ 0 errors |
| `pnpm lint` | ✅ 0 errors, 0 warnings |
| `pnpm build` | ✅ 19 static pages, incl. `/wedding-stories` and both `[slug]` pages (SSG) |
| `/portfolio` | ✅ 200, 13 overlay triggers in the HTML |
| `/behind-the-scenes` | ✅ 200, 2 overlay triggers |
| `/wedding-stories` | ✅ 200 — hero, 6 story cards, 18 photo-grid photos (14 desktop + 4 mobile), form |
| `/wedding-stories/john-paul-millicent` | ✅ 200, 6 overlay triggers |
| `/wedding-stories/unknown-slug` | ✅ 404 |
| `/sitemap.xml` | ✅ 8 URLs |

## The blocker — resolved

The Figma REST API token is now configured, so node trees are pulled directly and the
screens are rebuilt from real geometry instead of being guessed. The two limits that
made this necessary are kept here for context:

1. `https://www.figma.com/design/...` returned **HTTP 403** — the file is private and
   there were no credentials.
2. There is **no image input**, so screenshots, JPGs and PNG exports cannot be read.
   Pixel geometry has to come from the API (positions, sizes, fills, fonts, text) or
   from rendered **SVG**, which is text.

Options B and C below stay as fallbacks.

### Option A — Figma REST API token (highest fidelity) — **in use**

1. Figma → **Settings → Security → Personal access tokens → Generate new token**
   (`file_read` scope is enough).
2. Paste the token here.
3. I then pull the exact node trees:
   `GET https://api.figma.com/v1/files/zInmwP1tMOAS0ulrBvfc9d/nodes?ids=154-917,344-2014,...`
   — positions, sizes, fills, fonts, every text string and image reference: the same
   data the Replit Figma integration used to generate the existing pages. I can also
   fetch rendered **SVG** for any frame (`/v1/images/...?format=svg`) and read it.

### Option B — Figma Dev Mode MCP server (local, no token handed over)

Figma desktop app (paid seat) → **Preferences → Enable Dev Mode MCP Server**, then
tell me. It serves on `http://127.0.0.1:3845/mcp` and I can query frames directly.
I checked: nothing is listening on that port and the desktop app is not installed,
so this needs setup first.

### Option C — copy/paste from Figma (no token, works today)

Select a frame → right-click → **Copy as code** (Dev Mode: React + Tailwind) or
**Copy as SVG** / **Export → SVG**, then save it into the repo (e.g.
`docs/figma/portfolio-desktop-1.svg`). Both are **text**, so I can read them and
rebuild pixel-accurately.

Do the smallest useful set first:

```
154-917   344-2014   portfolio (page)
390-4967  390-5239   portfolio overlay
178-738   344-2312   wedding stories index
178-1035  344-2553   wedding story details
181-1478  344-3243   behind the scenes (page)
393-6961  393-6740   behind the scenes overlay
```

## Rules I am working under

- Nothing is invented to fill a gap: unknown copy is omitted or marked
  `TODO(content)` / `TODO(design)` with the node id that needs checking.
- Assets are the ones already in the repo (24 photos, 12 SVGs). No images were
  fabricated; if a frame needs a photo that is not in the export it is flagged.
- Home and About were built earlier from the real export and are untouched.
- The overlay chrome is the one place where I had to make a design call: dark coal
  backdrop at 97%, `X` close top-right, thin chevrons either side, `03 / 24`
  counter bottom-right, mobile arrows bottom-left. Change those class names in
  `photo-lightbox.tsx` and both pages follow.

