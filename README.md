# Newace Media — website

Wedding photography website for Newace Media (Warri, Delta State, Nigeria).

**The site is `apps/web`** — a Next.js 15 App Router application with five pages:
Home, About, Portfolio, Behind the Scenes and Contact.

```bash
pnpm install --filter @newace/web   # pnpm is the required package manager
pnpm dev:web                        # http://localhost:3000
pnpm build:web                      # production build
pnpm lint:web                       # eslint
pnpm --filter @newace/web typecheck # tsc --noEmit
```

See [`apps/web/README.md`](apps/web/README.md) for the app structure and
[`docs/nextjs-migration.md`](docs/nextjs-migration.md) for the migration record,
the decisions taken, the outstanding content questions and the verification log.

## Repository layout

```
apps/web                The Next.js site (deployable)
artifacts/figma-design  Previous Vite + Express implementation (reference only)
artifacts/api-server    Legacy Express scaffold (one health endpoint)
artifacts/mockup-sandbox Component preview canvas (design tooling)
lib/                    Shared workspace packages (db, api-spec, codegen)
scripts/                Workspace helper scripts
screenshots/            Design reference images
docs/                   Migration notes
```

## Package manager

**pnpm only.** The root `preinstall` script rejects `npm` and `yarn`, and
`pnpm-workspace.yaml` holds the shared version catalog, the
`minimumReleaseAge: 1440` supply-chain guard, and platform overrides.

> macOS note: native toolchain binaries (`esbuild`, `rollup`, `lightningcss`,
> `@tailwindcss/oxide`) must not be pruned from the `overrides` block or local
> installs break — see `docs/nextjs-migration.md` §6.

## Environment

`apps/web/.env.example` lists everything. Local development needs nothing:
without `RESEND_API_KEY` the inquiry handler logs submissions instead of emailing
them, so the whole flow is testable offline.
