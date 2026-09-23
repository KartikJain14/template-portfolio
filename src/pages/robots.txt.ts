import type { APIRoute } from "astro";

export const prerender = true;

// Generated so the sitemap line always matches your real address.
export const GET: APIRoute = ({ site }) => {
  // On GitHub Pages the site may live in a sub-folder, which has to be part of
  // every absolute URL below.
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const lines = ["User-agent: *", "Allow: /", ""];

  if (site) lines.push(`Sitemap: ${new URL(`${base}/sitemap.xml`, site).href}`, "");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
