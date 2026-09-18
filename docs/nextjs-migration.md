# Vite (React SPA) → Next.js App Router migration

**Status:** complete and verified on 16 Sep 2026. `@newace/web` builds, lints and
typechecks with zero errors; all five pages are prerendered as static HTML.

The legacy implementation in `artifacts/figma-design` was **not deleted** — it is
kept as the visual reference until the port is signed off against the Figma file.
Nothing in the repo was removed to make this migration work.

---

## 1. What existed before

A pnpm workspace containing a Vite 7 + React 18 SPA served by an
Express 5 wrapper, plus scaffolding that was never connected to the product:

```
artifacts/figma-design     Vite SPA + Express  → the actual site (2 routes)
artifacts/api-server       Express 5, only GET /api/healthz
artifacts/mockup-sandbox   Vite component-preview canvas (design tooling)
lib/db                     Drizzle + pg, empty schema
lib/api-spec               openapi.yaml (/healthz only) + orval config
lib/api-client-react       orval-generated React Query hooks
lib/api-zod                orval-generated Zod validators
scripts/                   hello.ts
```

The site itself was 2 routes (`/`, `/about`) while its navigation advertised six
destinations, all resolved by `scrollIntoView()` plus a module-level
`pendingSectionId` variable. The inquiry form validated with react-hook-form +
Zod and then **faked submission with a 1-second `setTimeout`** — nothing was ever
sent anywhere. ~50 of its dependencies were pulled in by shadcn/ui primitives that
no code referenced, alongside an unused auth/session/DB stack (passport,
express-session, connect-pg-simple, memorystore, drizzle).

## 2. What exists now

```
apps/web                        Next.js 15.5 App Router (the site)
├── src/app/                    5 pages + API route + sitemap/robots/404/icon
├── src/components/{layout,sections,forms,seo,ui}
├── src/content/                all copy + data, typed
├── src/lib/                    cn(), inquiry schema + delivery
├── public/{images,icons}       WebP photos + SVGs
└── next.config.ts, postcss.config.mjs, eslint.config.mjs, components.json
artifacts/ · lib/ · scripts/    unchanged (see §7)
```

`pnpm-workspace.yaml` now includes `apps/*`, and the root `package.json` gained
`dev:web`, `build:web` and `lint:web` shortcuts.

## 3. The five pages

| # | Route | Source of content | Rendering |
| --- | --- | --- | --- |
| 1 | `/` | `Home.tsx` + 9 Figma sections | Static |
| 2 | `/about` | `About.tsx` (6 sections) | Static |
| 3 | `/portfolio` | `LoveStoryGallerySection` promoted to a page | Static |
| 4 | `/behind-the-scenes` | `BehindTheLensShowcaseSection` promoted to a page | Static |
| 5 | `/contact` | `WeddingInquiryFormSection` promoted to a page | Static shell + `POST /api/inquiries` |

A page is also generated for `/_not-found`, `/sitemap.xml`, `/robots.txt` and
`/icon.png`. `Wedding Stories` (the couple-testimonial block) stays on the home
page, and the footer links to it at `/behind-the-scenes#stories`.

## 4. File-by-file mapping

| Old | New |
| --- | --- |
| `client/src/App.tsx` (wouter) | deleted — filesystem routes |
| `client/src/main.tsx` | deleted — `app/layout.tsx` |
| `client/index.html` | deleted — `app/layout.tsx` + `next/font` + `metadata` |
| `components/Navbar.tsx` | `components/layout/site-header.tsx` (client) |
| `sections/SiteFooterSection.tsx` | `components/layout/site-footer.tsx` |
| `sections/WeddingPhotographyHeroSection.tsx` | `sections/hero-section.tsx` |
| `sections/LoveStoryGallerySection.tsx` | `sections/portfolio-gallery.tsx` + `sections/portfolio-preview-section.tsx` |
| `sections/WeddingPhilosophyQuoteSection.tsx` | `sections/philosophy-section.tsx` |
| `sections/BehindTheLensShowcaseSection.tsx` | `sections/journal-section.tsx` |
| `sections/PhotographerPortfolioSection.tsx` | `sections/testimonials-section.tsx` |
| `sections/CustomWeddingPackagesSection.tsx` | `sections/experience-section.tsx` |
| `sections/CoupleTestimonialsSection.tsx` | `sections/founder-bio-section.tsx` |
| `sections/WeddingInquiryFormSection.tsx` | `components/forms/inquiry-form.tsx` + `app/contact/page.tsx` |
| `sections/WeddingStoryCallToActionSection.tsx` | `sections/closing-cta-section.tsx` |
| inline `const` arrays in every section | `src/content/*.ts` |
| `client/src/index.css` token layer | `app/globals.css` §1 |
| `tailwind.config.ts` | `app/globals.css` §2 (`@theme inline`) |
| `lib/queryClient.ts` + provider | deleted — no data fetching existed |
| `pages/not-found.tsx` | `app/not-found.tsx` (rebuilt) |

Section components were also **renamed to describe what they render**:
`CoupleTestimonialsSection` was the photographer bio, `PhotographerPortfolioSection`
was the couple testimonials, `CustomWeddingPackagesSection` was the experience
steps. Those names came from Figma frames and made the code misleading.

## 5. Deliberate changes (review these against the design)

Each item below is a behaviour or fidelity decision, not an accident.

1. **Navigation became real links.** The four "section" buttons and the
   `pendingSectionId` module variable are gone; every nav item is a `<Link>` to a
   page, with `aria-current="page"` and a 1px underline for the active page. This
   is what makes the URLs shareable, crawlable and back/forward-safe.
2. **The inquiry form actually submits.** `setTimeout` → `POST /api/inquiries`,
   re-validated on the server with the same Zod schema (`src/lib/inquiries.ts`),
   plus a honeypot field and field-level error messages. Delivery goes through
   Resend when `RESEND_API_KEY` is set; otherwise the submission is logged so the
   flow stays testable. **Nothing is emailed until that key is configured.**
3. **Header and footer are rendered once**, in `app/layout.tsx`. They were
   duplicated inside `Home.tsx` and `About.tsx`.
4. **Hero is a real image element.** It was a CSS `background-image` on a
   `role="img"` div, so the LCP image could not be prioritised. It is now
   `<Image priority fill sizes="100vw">`.
5. **All 25 hand-maintained `-960.webp` srcset twins were dropped.** `next/image`
   generates responsive variants; the duplicates (2 MB) were not copied into
   `public/`. `srcSet` string surgery (`src.replace(".webp","-960.webp")`) is gone.
6. **Fonts are self-hosted** via `next/font` (Cormorant Garamond 400 + italic,
   Inter variable, Geist variable). The old `index.html` made a blocking request
   for ~35 font families and also contained an invalid
   `<style>@import url(...var(--web-...))</style>` that could never work.
7. **Dead CSS removed:** the duplicated `@tailwind base/components/utilities`
   block (it was emitted twice), the duplicated `:root`, the unused dark-mode
   palette and the unused shadcn HSL defaults are now a single deliberate set.
   The animation utilities are kept intact — `animate-fade-in` is used by the form
   success overlay; `animate-fade-up`, `animate-marquee*`, `animate-shimmer` and
   the `image-glow` keyframes are currently unreferenced but retained as part of
   the design kit.
8. **Mobile type floor of 12px.** Three sections rendered body copy at 5–13px on
   small screens (`CoupleTestimonialsSection` was 6px, the testimonial quote 5px,
   the journal button 8px). The desktop compositions are unchanged; only the
   mobile sizes were normalised.
9. **The 404 page was rebuilt** — the previous one was the shadcn placeholder with
   the text "Did you forget to add the page to the router?" — and is `noindex`.
10. **SEO foundation added:** per-page `<title>`/description/canonical, Open Graph
    and Twitter tags, `metadataBase`, `sitemap.xml`, `robots.txt`, a self-hosted
    `icon.png`, and `LocalBusiness` JSON-LD built from existing site facts only.
11. **Footer fixes:** the contact block no longer renders a blank line (it printed
    an empty string entry as an extra `<br/>`); phone/email/address are real
    links; nav items are `<Link>`s instead of buttons that reassigned
    `window.location`.
12. **Testimonial copy de-duplicated.** The Figma/Vite text contained the same
    sentence twice plus a stray `"` mid-string. One copy remains.
13. **Accessibility:** the `maximum-scale=1` viewport (which blocked pinch-zoom) is
    gone, a "Skip to content" link was added, decorative images are `alt=""` +
    `aria-hidden`, and the mobile menu keeps `aria-expanded`/`aria-controls`.
14. **`data-testid` attributes were removed** — 13 of them existed and no test
    suite consumed any. Add them back with the e2e tests.
15. **shadcn/ui set pruned from 47 primitives to 10** (button, calendar, card,
    input, label, popover, select, textarea, toast, toaster). `components.json`
    is now `rsc: true` and Tailwind **v4** (`@tailwindcss/postcss` +
    `tw-animate-css`) replaces Tailwind 3 + `tailwindcss-animate`.
16. **Dependency stack replaced.** Removed: vite, express, express-session,
    passport, passport-local, connect-pg-simple, memorystore, ws, drizzle-orm,
    drizzle-zod, wouter, @tanstack/react-query, recharts, embla-carousel-react,
    cmdk, vaul, input-otp, next-themes, react-resizable-panels, 20+ Radix
    packages for deleted primitives, tailwindcss-animate. Added: next, sharp,
    `@tailwindcss/postcss`, `tw-animate-css`, eslint + eslint-config-next.

## 6. Blocking workspace fix

`pnpm-workspace.yaml` deleted the **macOS binaries of the native toolchain**
(`esbuild>@esbuild/darwin-*`, `lightningcss-darwin-*`,
`@tailwindcss/oxide-darwin-*`, `rollup>@rollup/rollup-darwin-*`) because the host
builds on linux-x64. On a Mac that makes `pnpm install` produce a toolchain that
cannot run — the first thing this migration hit. Those eight override lines were
removed (with a comment explaining why), and `sharp` + `@tailwindcss/oxide` were
added to `onlyBuiltDependencies`. The linux/win32 pruning and the
`minimumReleaseAge: 1440` supply-chain guard were left exactly as they were.

## 7. Left in place (cleanup decisions for you)

Nothing was deleted outside `apps/web`. These are still in the repo and are now
dead weight for the site — remove them once the port is signed off:

- `artifacts/figma-design` — the reference implementation (also the source of the
  `-960` assets if they are ever wanted back).
- `artifacts/api-server` — its single `/api/healthz` endpoint is available from the
  Next app as a route handler whenever it is needed.
- `artifacts/mockup-sandbox` — design-tooling canvas; unrelated to the product.
- `lib/api-spec`, `lib/api-client-react`, `lib/api-zod` — orval codegen for an API
  that does not exist. If the site never grows a public API, delete all three.
- `lib/db` — Drizzle client with an empty schema. Only keep it if inquiries or
  journal entries are going to be stored in Postgres.
- `.migration-backup/` — the pre-migration copy of the old app, including a
  308 KB `package-lock.json`. Safe to delete.
- `screenshots/` — the 8 design-reference JPGs. Consider moving them to
  `docs/design-references/`.

## 8. Content decisions the studio has to make

Every one of these is marked `TODO(content)` in the source, so nothing was
invented to fill a gap:

1. **Founder name/figures conflict.** The home bio says **"Samuel Orieka"**, "over
   a decade", "500+ weddings"; `/about` says **"Hi, I'm Newace"**, "8+ years",
   "250+ weddings", "10+ destinations". Exactly one version has to win
   (`src/content/founder.ts`, `src/content/about.ts`).
2. **Testimonial attribution.** The quote credits **"Geoff"**, who appears nowhere
   else on the site (`src/content/testimonials.ts`).
3. **Social + map URLs** are placeholders pointing at instagram.com/facebook.com
   (`src/content/site.ts`).
4. **Journal entries** are both titled "A dream come true, celebrating first loves"
   for "John-Paul & Millicent" — the Figma duplication. Real titles, dates and
   slugs unlock `/behind-the-scenes/[slug]`.
5. **Production domain.** `NEXT_PUBLIC_SITE_URL` defaults to
   `https://www.newacemedia.com`, inferred from the studio email address.
6. **SEO titles.** The home title (`Newace Media | Premium Wedding Photography in
   Warri, Delta State`) is assembled from existing copy and should be confirmed.
7. **Portfolio categories** — the gallery is one composition; there is no copy for
   collections or filters yet.

## 9. Verification evidence

Run from `/Users/tom/Desktop/Newace-Media-home`:

| Check | Command | Result |
| --- | --- | --- |
| Install | `pnpm install --filter @newace/web` | ✅ done in 1m 30s, exit 0 |
| Types | `pnpm --filter @newace/web typecheck` | ✅ exit 0, no output (`tsc --noEmit`) |
| Lint | `pnpm --filter @newace/web lint` | ✅ exit 0, 0 errors / 0 warnings |
| Build | `pnpm --filter @newace/web build` | ✅ Next.js 15.5.25, 12 static pages, 0 errors |
| Routes | `pnpm --filter @newace/web start` + curl | ✅ 200 on all 5 pages; 404 page returns 404 |
| Titles | curl → `<title>` | ✅ unique per page, e.g. `About \| Newace Media` |
| Tokens | grep the emitted CSS | ✅ `font-web-display-XXL`, `bg-primary-systemivory`, `border-primary-systemwarm-gray`, `animate-fade-in` all generated |
| Fonts | grep the emitted CSS | ✅ self-hosted (Cormorant + Inter present) |
| API — valid | `POST /api/inquiries` | ✅ `202 {"ok":true,"delivery":"log"}` + server log |
| API — invalid | `POST /api/inquiries` | ✅ `422` with per-field messages |
| API — honeypot | `POST` with `company` filled | ✅ `202 {"ok":true}`, nothing delivered |
| Sitemap | `GET /sitemap.xml` | ✅ 5 URLs with priorities |

Build output (first load JS): `/` 123 kB, `/about` 122 kB, `/portfolio` 122 kB,
`/behind-the-scenes` 123 kB, `/contact` 195 kB (the form ships the calendar +
Radix select), shared baseline 103 kB.

## 10. Suggested next steps

1. Visual QA of the five routes against `screenshots/figma-desktop.jpg`,
   `figma-mobile.jpg` and `figma-contact-375.jpg` at 375 / 768 / 1440 px.
2. Resolve the content items in §8, then delete the §7 leftovers.
3. Add e2e coverage for the inquiry flow (Playwright) — the `data-testid` hooks
   that were removed should come back with the tests.
4. Add `/behind-the-scenes/[slug]` with `generateStaticParams` + ISR once real
   stories exist, and add those URLs to `sitemap.ts`.
5. Configure `RESEND_API_KEY` (or an equivalent transactional provider) and a
   spam strategy beyond the honeypot if volume warrants it.
6. Deploy: the app is self-contained, so Vercel/Netlify work with no changes; on a
   Node host run `pnpm --filter @newace/web build && pnpm --filter @newace/web start`.
   The legacy app's own service definitions do not apply to the Next app.
7. Consider a sticky header and a scroll-reveal pass using the already-present
   `animate-fade-up` utility.

