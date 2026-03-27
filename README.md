# Agent-hub — portfolio case study

Single-page case study built with Vite, React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
# Open the URL printed in the terminal (relative base works at any path)
```

## Deploy to GitHub Pages

Live site: **https://toshigupta17.github.io/wfm-casestudy/**

1. Push to GitHub (`main`).
2. **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions** (the workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
3. Open the **Actions** tab and confirm the latest **Deploy to GitHub Pages** run is **green**. The first time, you may need to **approve** the `github-pages` environment (Actions will show “Waiting for approval”).
4. After a successful deploy, wait a minute and reload the site.

### Blank page but the tab title shows “Agent-hub”?

That usually means GitHub Pages is serving the **wrong files**: the **repository root** (`main` branch) instead of the **built** site.

- **Wrong:** Source = **Deploy from a branch** → **main** → **/ (root)**. The root [`index.html`](index.html) is the Vite **dev** template (`<script src="/src/main.tsx">`). GitHub Pages does not run Vite, so that script **404s** and React never starts → **blank page**.
- **Right:** Source = **GitHub Actions**, so the published site is the **`dist/`** output from the workflow (has `./assets/...` bundles).

Fix: switch Pages to **GitHub Actions**, push again, wait for the workflow to finish.

[`vite.config.ts`](vite.config.ts) uses `base: './'` so asset URLs stay correct under `/wfm-casestudy/`. [`public/.nojekyll`](public/.nojekyll) is copied into `dist` so GitHub Pages does not run Jekyll on the build output.

## Replace placeholder content

1. Open [`src/content/caseStudy.ts`](src/content/caseStudy.ts) and replace bracketed placeholders (`[Replace]`, etc.) with your real project details.
2. The **Challenge** section includes a current vs. future diagram; edit the `challengeComparison` object in the same file for titles, tool labels, and pillar copy. Product marks use [Simple Icons](https://simpleicons.org/) (see [`simple-icons`](https://www.npmjs.com/package/simple-icons) in `package.json`).
3. Add screenshots to `public/images/` (create the folder if needed).
4. In `caseStudy.ts`, set `imageSrc` on each item in `iteration.frames` (for example: `'/images/overview.png'`). Use leading slashes so paths resolve from the site root.
5. Update [`index.html`](index.html) `<title>` if you want a different browser tab title.

## Design tokens

Theme colors and fonts are defined in [`src/index.css`](src/index.css) under `@theme`. Body copy uses **DM Sans**; headings use **Syne** (loaded in [`src/main.tsx`](src/main.tsx)).
