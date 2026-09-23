import type { APIRoute } from "astro";
import { theme } from "../data/portfolio.js";
import { brandIco, hexToRgb } from "../lib/brand.js";

export const prerender = true;

// Fallback for browsers that ignore the SVG favicon.
export const GET: APIRoute = () =>
  new Response(brandIco(hexToRgb(theme.accent)), {
    headers: { "Content-Type": "image/x-icon" },
  });
