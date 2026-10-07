# uvie-web

Landing page for the [UVie project](https://github.com/uvie-project) —
a fast, lightweight, open-source Vietnamese input method.

- **uvie-rs** — the Rust input engine (Telex / VNI, `no_std`, zero deps)
- **uvie-mac** — the macOS menu bar app
- **uvie-win** — the Windows app (Rust + WinUI 3)

## Stack

Next.js 16 (static export) · Tailwind CSS v4 · shadcn/ui · Motion ·
TypeScript. Vietnamese is the primary language; English is available at
[`/en`](https://uvie-project.github.io/en/).

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build (static export)

```bash
npm run build    # outputs to out/
npx serve out    # preview locally
```

## Deployment

Deployed to **GitHub Pages** at https://uvie-project.github.io/uvie-web/
via `.github/workflows/deploy.yml` (push to `main`). Repo settings must
have Pages → Build and deployment → Source: **GitHub Actions**.

The build sets `NEXT_PUBLIC_BASE_PATH=/uvie-web` (project-page sub-path).
When moving to the org site repo (`uvie-project.github.io` root), change
it to `""` in the workflow.

## License

MIT OR Apache-2.0
