# How to get the remaining pages built (Replit prompt + alternatives)

## Why the first two pages came out exact — and why that matters

The existing pages are not the result of a model "looking at a screenshot". The
Replit Figma integration talks to the **Figma REST API** with your Figma login and
receives the real node tree: x/y, width/height, fills, font family/weight/size,
line-height, letter-spacing and every text run. That is where the odd-looking class
names in the existing code come from:

```
font-web-label-s
text-[length:var(--web-label-s-font-size)]
leading-[var(--web-label-s-line-height)]
tracking-[var(--web-label-s-letter-spacing)]
```

Those are Figma variables exported to CSS, generated per text style. **No screenshot
was involved.** So "build the other pages" is only possible at that fidelity when the
agent has the same API access.

I have no Figma access (HTTP 403) and no image input, so my equivalent is a token,
the Dev Mode MCP server, or you pasting SVG/code. Details in
[`page-build-status.md`](page-build-status.md#the-blocker-stated-plainly).

## Prompt to paste into Replit (or any agent)

Fill in the node IDs for the frames you want and paste as-is. The important parts are:
give it the design access, point it at the existing conventions, and tell it **not**
to touch what is already built.

```text
You are continuing an existing project. Read these files first, in full, before
writing anything:
  apps/web/src/app/globals.css              <- the Figma token layer + Tailwind theme
  apps/web/src/content/media.ts             <- every image with real dimensions
  apps/web/src/content/site.ts              <- brand, nav, contact
  apps/web/src/components/sections/portfolio-gallery.tsx
  apps/web/src/components/media/photo-lightbox.tsx
  apps/web/src/app/portfolio/page.tsx
  apps/web/src/app/behind-the-scenes/page.tsx
  docs/page-build-status.md                 <- what is done and what is not

Stack: Next.js 15 App Router, TypeScript, Tailwind v4, shadcn/ui, pnpm.
Deploy target: apps/web. Do not touch apps/web/src/app/page.tsx (Home) or
apps/web/src/app/about/page.tsx (About) - they are approved.

LINK THESE FIGMA FRAMES (use your Figma integration; read the real node data,
do not guess):
  portfolio page        desktop 154-917   /   mobile 344-2014
  portfolio overlay     desktop 390-4967  /   mobile 390-5239
  wedding stories       desktop 178-738   /   mobile 344-2312
  wedding story detail  desktop 178-1035  /   mobile 344-2553
  behind the scenes     desktop 181-1478  /   mobile 344-3243
  behind the scenes ovl desktop 393-6961  /   mobile 393-6740

For each frame:
1. Use the exact node ids so node names, copy and geometry come from the file.
2. Map every text style to the existing CSS variables in globals.css. Do NOT
   hardcode font-family, font-size, line-height, letter-spacing or colours. If a
   token is missing, add it to globals.css in section 1, then map it in section 2.
3. Map every colour to the existing tokens (bg-primary-systembeige, ...).
4. Images: use next/image with the real width/height from src/content/media.ts.
   Never invent an asset. If a frame needs an image that is not in
   public/images, stop and tell me instead of substituting one.
5. All copy goes into src/content/*.ts, never inline in JSX.
6. Desktop + mobile are the SAME component with responsive classes. There are no
   separate mobile pages.
7. The overlays (390-4967 / 390-5239 and 393-6961 / 393-6740) reuse
   src/components/media/photo-lightbox.tsx. Do not create a second lightbox.
8. Keep accessibility: real <button>/<Link>, alt text, focus rings, Escape and
   arrow keys in the overlay.
9. Mark anything you cannot verify with a comment:
   TODO(design): <node id> - <what>
   Never invent copy or dimension to fill a gap.

When done run and report:
  pnpm --filter @newace/web typecheck
  pnpm --filter @newace/web lint
  pnpm --filter @newace/web build
  and list every route and its HTTP status.
```

## If you stay off Replit

| Route | What you need | Fidelity |
| --- | --- | --- |
| Figma REST token handed to me | generate a read-only token, paste it here | highest — I read the same data Replit used |
| Figma Dev Mode MCP server | Figma desktop → Preferences → Enable Dev Mode MCP Server, then tell me | highest, and no token leaves your machine |
| Copy as code / Copy as SVG per frame | right-click a frame in Figma → Copy as code (React + Tailwind) or Export → SVG, save into `docs/figma/` | high — I read the SVG geometry and text directly |
| Screenshots | — | **cannot work**: I have no image input |

Cheapest thing that unblocks everything: **one** frame exported as SVG, e.g.
`390-4967` (the portfolio overlay). That tells me the exact overlay chrome, and the
same pattern then applies to the behind-the-scenes overlay.

## What to send in the message so the agent does not redo work

```
Repo context: pnpm monorepo, the site is apps/web (Next.js 15 App Router).
Home and About are DONE - do not rebuild. Portfolio, wedding stories (+ detail),
contact and behind the scenes exist as pages; the overlays for portfolio and
behind the scenes are built and must be reused, not rewritten.
Open questions already logged: founder name conflict, testimonial attribution,
social URLs, story slugs/dates. Read docs/page-build-status.md.
```
