# AGENTS.md — uvie-web

Landing page for the UVie project (https://uvie-project.github.io).

## Stack

- **Next.js 16** (App Router, Turbopack) + TypeScript
- **Tailwind CSS v4** (CSS-first config in `src/app/globals.css`)
- **shadcn/ui** (radix base) — components in `src/components/ui/`
- **motion** (`motion/react`) — SSR-safe scroll reveals
- **lucide-react** — icons (note: no brand icons; GitHub logo is a local SVG in `src/components/github-icon.tsx`)

## Commands

```bash
npm run dev        # Dev server
npm run build      # Static export to out/ (output: "export")
npm run lint       # ESLint
npx serve out      # Serve the production export locally
```

## Architecture

- **i18n**: no i18n lib. Two route groups with their own root layouts
  (so `<html lang>` differs per locale):
  - `src/app/(vi)/` → `/` — Vietnamese (primary, default)
  - `src/app/(en)/en/` → `/en/`
  - Dictionaries: `src/lib/i18n.ts` (`getDict(locale)`); `en: typeof vi`
  keeps the two languages structurally in sync at compile time.
- **SEO**: all text is rendered in server components; client components
  (`motion.tsx` wrappers, typing demo) only animate around server-passed
  children, so the exported HTML contains everything. hreflang +
  canonical + OG tags via `siteMetadata()` in `src/lib/site-shell.tsx`.
- **Static export**: `next.config.ts` sets `output: "export"`,
  `trailingSlash: true`, `images.unoptimized`. `NEXT_PUBLIC_BASE_PATH`
  env var sets basePath/assetPrefix (empty for the org site,
  `/<repo>` for a project page).
- **Theme**: light/dark via `.dark` class; inline script in the layout
  applies `localStorage["uvie-theme"]` (or OS preference) before paint.
- **Logo**: `public/icon.png` copied from `uvie-mac/AppIcon.iconset/`.
- **Deployment**: `.github/workflows/deploy.yml` builds and publishes
  to GitHub Pages (org site `https://uvie-project.github.io`, so no
  basePath). Requires Pages → Source: GitHub Actions in repo settings.

## Conventions

- Vietnamese copy lives in `src/lib/i18n.ts` (`vi` dict) — keep `en`
  structurally identical; TypeScript enforces it.
- Internal links go through `href()` from `src/lib/site.ts` so a
  sub-path deployment keeps working.
- Animations must respect `prefers-reduced-motion` (the `Reveal`
  wrappers already do via `useReducedMotion`).
