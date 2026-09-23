import type { APIRoute } from "astro";
import { profile, theme } from "../data/portfolio.js";

export const prerender = true;

// The tab icon is drawn from your initial and your accent colour, so it stays
// yours without you having to open an image editor.
export const GET: APIRoute = () => {
  const letter = (profile.name.trim()[0] || "P").toUpperCase();

  // A generic serif keeps this readable everywhere; favicons cannot load webfonts.
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="${letter}">
  <rect width="64" height="64" rx="14" fill="${theme.accent}"/>
  <text x="32" y="33" fill="#fff" font-family="Georgia, 'Times New Roman', serif"
        font-size="42" text-anchor="middle" dominant-baseline="central">${letter}</text>
</svg>
`;

  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8" },
  });
};
