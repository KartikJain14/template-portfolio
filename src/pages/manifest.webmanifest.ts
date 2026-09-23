import type { APIRoute } from "astro";
import { profile, site, theme } from "../data/portfolio.js";

export const prerender = true;

// Built from your details, so saving the site to a phone home screen shows
// your name rather than the template's.
export const GET: APIRoute = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const asset = (path: string) => `${base}${path}`;

  const manifest = {
    name: `${profile.name} — Portfolio`,
    short_name: profile.shortName || profile.name,
    description: site.description,
    start_url: `${base}/`,
    scope: `${base}/`,
    display: "standalone",
    background_color: "#FBFAF7",
    theme_color: theme.accent,
    lang: site.language || "en",
    icons: [
      { src: asset("/favicon.svg"), sizes: "any", type: "image/svg+xml" },
      { src: asset("/icon-192.png"), sizes: "192x192", type: "image/png" },
      { src: asset("/icon-512.png"), sizes: "512x512", type: "image/png" },
      { src: asset("/icon-maskable-512.png"), sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { "Content-Type": "application/manifest+json; charset=utf-8" },
  });
};
