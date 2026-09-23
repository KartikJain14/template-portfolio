import type { APIRoute } from "astro";

export const prerender = true;

// A one page site needs exactly one entry. If you ever add pages, add them here.
export const GET: APIRoute = ({ site }) => {
  // On GitHub Pages the site may live in a sub-folder, which has to be part of
  // every absolute URL below.
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  // Without a real address there is nothing truthful to list, so this stays a
  // valid but empty sitemap. robots.txt does not point at it until `url` is set.
  const body = site
    ? `  <url>
    <loc>${new URL(`${base}/`, site).href}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
`
    : "  <!-- Set `url` in src/data/portfolio.js to list your pages here. -->\n";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
