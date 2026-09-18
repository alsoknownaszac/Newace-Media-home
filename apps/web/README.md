# Newace Media — website (`@newace/web`)

Next.js App Router implementation of the Newace Media wedding photography site,
migrated from the Vite + Express implementation in `artifacts/figma-design`
(kept in the repo as the visual reference until the port is signed off).

## Commands

```bash
pnpm install --filter @newace/web   # install (pnpm is the package manager)
pnpm --filter @newace/web dev       # http://localhost:3000
pnpm --filter @newace/web build     # production build
pnpm --filter @newace/web start     # serve the production build
pnpm --filter @newace/web typecheck # tsc --noEmit
pnpm --filter @newace/web lint      # eslint (flat config)
```

From the repo root the same commands are available as `pnpm dev:web`,
`pnpm build:web` and `pnpm lint:web`.

## Pages

| Route | File | Rendering |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Static |
| `/about` | `src/app/about/page.tsx` | Static |
| `/portfolio` | `src/app/portfolio/page.tsx` | Static + click-to-overlay viewer |
| `/wedding-stories` | `src/app/wedding-stories/page.tsx` | Static |
| `/wedding-stories/[slug]` | `src/app/wedding-stories/[slug]/page.tsx` | SSG (`generateStaticParams`) |
| `/behind-the-scenes` | `src/app/behind-the-scenes/page.tsx` | Static + click-to-overlay viewer |
| `/contact` | `src/app/contact/page.tsx` | Static shell + `POST /api/inquiries` |

Plus `not-found.tsx`, `sitemap.ts`, `robots.ts` and `api/inquiries/route.ts`.

The photo overlay (`src/components/media/photo-lightbox.tsx`) is shared: the
portfolio grid, the behind-the-scenes cards and a story's gallery all open it.
Add `interactive` to `PortfolioGallery` / `JournalCards` to switch it on.

## Structure

```
src/
├── app/                    routes, layout, metadata, API handlers
│   ├── globals.css         Figma design tokens + Tailwind v4 theme bridge
│   └── layout.tsx          fonts, metadata, header/footer shell, skip link
├── components/
│   ├── layout/             site-header, site-footer
│   ├── sections/           one component per Figma frame
│   ├── forms/              inquiry-form (client)
│   ├── seo/                structured data
│   └── ui/                 shadcn/ui primitives (ported, "use client")
├── content/                all copy and data, typed, no JSX
├── hooks/                  use-toast (used by the Toaster)
└── lib/                    utils (cn), inquiries (Zod schema + delivery)
public/
├── images/                 WebP photos, original Figma file names
└── icons/                  logo, social + decorative SVGs
```

**Content lives in `src/content/*`, never inline in components.**

## Design system

`src/app/globals.css` starts with the Figma token export (colours + the full web
and mobile type scale) and maps it into Tailwind v4 through `@theme inline`. The
previous Tailwind 3 config file is therefore gone, and the existing utility names
still work:

```
bg-primary-systembeige   text-primary-systemcoal   border-primary-systemwarm-gray
font-web-display-XXL     font-web-body-s           font-web-label-s
```

Type tokens are also available as CSS variables, which is how the ported sections
express exact Figma type:
`text-[length:var(--web-body-s-font-size)]` etc.

## Environment

Copy `.env.example` to `.env.local`. Nothing is required for local development:
without `RESEND_API_KEY` the inquiry handler logs submissions instead of emailing.

## Notes for the next engineer

- Images use `next/image` with the real intrinsic dimensions from
  `src/content/media.ts`. The old `-960.webp` srcset twins were dropped.
- Fonts are self-hosted via `next/font`; there is no Google Fonts request.
- The header/footer are rendered once, in `src/app/layout.tsx`.
- `TODO(content)` comments mark the copy decisions the studio still has to make.
