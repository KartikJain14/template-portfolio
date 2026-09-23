// @ts-check
import { defineConfig } from 'astro/config';

// The address is read straight from your content file, so there is only ever
// one place to edit it. See block 10 of src/data/portfolio.js.
import { site } from './src/data/portfolio.js';

// https://astro.build/config
export default defineConfig({
  // Astro needs a real URL to build absolute links (sitemap, canonical, social
  // previews). Until you have deployed, this stays undefined and the site still
  // builds fine — it just leaves those tags out rather than guessing.
  site: site.url || undefined,

  // GitHub Pages serves project repositories from a sub-folder. `base` tells
  // Astro about it so every stylesheet, image and icon still resolves.
  base: site.base || undefined,

  build: {
    // Small stylesheets go straight into the HTML, which saves a round trip.
    inlineStylesheets: 'auto',
  },
});
