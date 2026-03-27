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
```

## Replace placeholder content

1. Open [`src/content/caseStudy.ts`](src/content/caseStudy.ts) and replace bracketed placeholders (`[Replace]`, etc.) with your real project details.
2. The **Challenge** section includes a current vs. future diagram; edit the `challengeComparison` object in the same file for titles, tool labels, and pillar copy. Product marks use [Simple Icons](https://simpleicons.org/) (see [`simple-icons`](https://www.npmjs.com/package/simple-icons) in `package.json`).
3. Add screenshots to `public/images/` (create the folder if needed).
4. In `caseStudy.ts`, set `imageSrc` on each item in `iteration.frames` (for example: `'/images/overview.png'`). Use leading slashes so paths resolve from the site root.
5. Update [`index.html`](index.html) `<title>` if you want a different browser tab title.

## Design tokens

Theme colors and fonts are defined in [`src/index.css`](src/index.css) under `@theme`. Body copy uses **DM Sans**; headings use **Syne** (loaded in [`src/main.tsx`](src/main.tsx)).
