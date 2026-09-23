import type { APIRoute } from "astro";
import { theme } from "../data/portfolio.js";
import { brandOgCard, hexToRgb } from "../lib/brand.js";

export const prerender = true;

// The card shown when your link is shared. To use your own picture instead,
// drop a 1200x630 image in public/ and point site.ogImage at it.
export const GET: APIRoute = () =>
  new Response(brandOgCard(hexToRgb(theme.accent)), {
    headers: { "Content-Type": "image/png" },
  });
