# uvie-web

Landing page for the [UVie project](https://github.com/uvie-project) —
a fast, lightweight, open-source Vietnamese input method.

- **uvie-rs** — the Rust input engine (Telex / VNI, `no_std`, zero deps)
- **uvie-mac** — the macOS menu bar app
- **uvie-win** — planned Windows port

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

Deployed to **GitHub Pages** at https://uvie-project.github.io via
`.github/workflows/deploy.yml` (push to `main`). Repo settings must
have Pages → Build and deployment → Source: **GitHub Actions**.

If this site ever moves to a project repo (`uvie-project.github.io/<repo>`),
set `NEXT_PUBLIC_BASE_PATH=/<repo>` at build time.

## License

MIT OR Apache-2.0
