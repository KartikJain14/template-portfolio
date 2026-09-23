import type { APIRoute } from "astro";
import { theme } from "../data/portfolio.js";
import { brandIcon, hexToRgb } from "../lib/brand.js";

export const prerender = true;

// Generated from theme.accent, so changing your colour changes your icons.
export const GET: APIRoute = () => {
  const accent = hexToRgb(theme.accent);
  return new Response(brandIcon(512, accent), {
    headers: { "Content-Type": "image/png" },
  });
};
