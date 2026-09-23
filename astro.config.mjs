// @ts-check
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';

// Your details are read straight from the content file, so there is only ever
// one place to edit them. See block 10 of src/data/portfolio.js.
import { site } from './src/data/portfolio.js';

/* ---------------------------------------------------------------------------
   Work out where this site will be served from.

   You should not need to touch any of this. Anything you set explicitly in
   src/data/portfolio.js always wins; the rest is worked out automatically when
   GitHub Actions builds the site:

     - Custom domain (a CNAME file in public/)  ->  served from the root
     - Repository named <you>.github.io         ->  served from the root
     - Any other repository name                ->  served from /<repo-name>

   That last case is the one that silently breaks sites, which is why it is
   detected rather than left to be filled in by hand.
--------------------------------------------------------------------------- */

/** The domain from public/CNAME, if a custom domain is set up. */
function customDomain() {
  try {
    return readFileSync(new URL('./public/CNAME', import.meta.url), 'utf8').trim() || null;
  } catch {
    return null;
  }
}

/** True when a URL is not a github.io address, i.e. it is served from a root. */
function servedFromRoot(url) {
  try {
    return !/\.github\.io$/i.test(new URL(url).hostname);
  } catch {
    return false;
  }
}

const domain = customDomain();
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];

// --- url --------------------------------------------------------------------
let url = (site.url || '').trim().replace(/\/$/, '');

if (!url) {
  if (domain) url = `https://${domain}`;
  else if (owner) url = `https://${owner.toLowerCase()}.github.io`;
}

// --- base -------------------------------------------------------------------
const baseWasSet = typeof site.base === 'string' && site.base.trim() !== '';
let base = baseWasSet ? site.base.trim() : '';

if (!baseWasSet) {
  const isUserSite = repo && owner && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

  if (domain || (url && servedFromRoot(url)) || isUserSite) {
    base = '';
  } else if (repo) {
    base = `/${repo}`;
  }
}

// https://astro.build/config
export default defineConfig({
  // Astro needs a real URL to build absolute links (sitemap, canonical, social
  // previews). Without one it still builds fine — it leaves those tags out
  // rather than guessing.
  site: url || undefined,

  // GitHub Pages serves project repositories from a sub-folder. `base` tells
  // Astro about it so every stylesheet, image and icon still resolves.
  base: base || undefined,

  build: {
    // Small stylesheets go straight into the HTML, which saves a round trip.
    inlineStylesheets: 'auto',
  },
});
