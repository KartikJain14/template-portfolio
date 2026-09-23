# AGENTS.md

Notes for anyone — human or agent — working on this repository.

## What this is

A one-page portfolio template built with Astro, aimed at students with no web
development experience. It is used at PFE by MPSTME ACM.

The whole design goal is that someone who has never written code can ship a
personal site by editing a single file. Keep that true.

## Commands

```
npm install        # once
npm run dev        # dev server on http://localhost:4321
npm run build      # static output into dist/
npm run preview    # serve the built output
```

When starting the dev server in an automated session, use background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status` and `astro dev logs`.

## The one rule

**All user-facing content lives in `src/data/portfolio.js`.** Nothing else should
need editing to personalise the site — not copy, not colours, not the site URL,
not the page title.

If you add a feature that needs configuration, add it to that file with a plain
English comment above it, not to a component.

## How it fits together

- `src/pages/index.astro` — decides section order and which sections exist.
- `src/layouts/Base.astro` — page shell: meta tags, JSON-LD, fonts, theme script.
- `src/components/` — one component per section, styles scoped inside each file.
- `src/styles/global.css` — design tokens, type scale, shared primitives.

Sections auto-hide. An empty array in `portfolio.js` removes the section from the
page, drops it from the nav, renumbers the remaining sections and retargets the
hero button. `index.astro` derives all of that from one `enabled` list — extend
that list rather than hard-coding a section anywhere.

### Generated routes

`robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `favicon.svg`,
`favicon.ico`, the app icons, `og.png` and `.well-known/security.txt` are Astro
endpoints, not static files, because they all read from `portfolio.js`.

`src/lib/brand.ts` rasterises the PNG and ICO icons from the accent colour using
signed distance fields and a small PNG encoder over `node:zlib` — no image
library. Keep it dependency-free. Nothing in `public/` should duplicate one of
these routes; a static file of the same name would shadow the endpoint.

### The base path

`site.url` and `site.base` in `portfolio.js` feed `astro.config.mjs`. GitHub Pages
serves project repositories from a sub-folder, so **every absolute URL must be
prefixed**:

```js
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
```

Any new endpoint or asset link needs this. Test it by temporarily setting
`base: "/portfolio"` and checking the built output — this has broken twice.

## Conventions

- No dependencies beyond Astro. No CSS framework, no component library.
- Styling is CSS custom properties plus Astro scoped `<style>` blocks.
- Animations use `[data-reveal]` with an IntersectionObserver, and must stay
  invisible-safe: content is only hidden when the `.js` class is present, and
  everything is disabled under `prefers-reduced-motion`.
- Comments in `portfolio.js` are written for a non-programmer. Comments elsewhere
  explain why, not what.

## Gotchas

- Astro collapses whitespace between text and an element across a newline. Use
  `{" "}` where a space matters, or keep it on one line.
- The hero name is scaled at build time from the longest word, and each word is
  clipped vertically with `clip-path` rather than `overflow: hidden` — the latter
  cut long names off sideways.
- Icons and `og.png` are routes, so `public/` must not contain files of the same
  name — a static file would shadow the endpoint and silently go stale.
- The marquee needs each copy of its list to be at least `100vw` wide. Without
  that, a short list runs out before the `-50%` slide completes and the strip
  visibly stops.
- Do not commit `CLAUDE.md` as a symlink to this file; GitHub renders it as a
  broken stub.

## Before calling a change done

Build it, then open it at 1440px and 390px. Check dark mode, check the section
auto-hiding still works with an emptied array, and check nothing overflows
horizontally.
