import type { APIRoute } from "astro";
import { contact, site } from "../../data/portfolio.js";

export const prerender = true;

// RFC 9116. Tells anyone who finds a problem with the site how to tell you.
// The expiry is regenerated on every build, so it never goes stale.
export const GET: APIRoute = ({ site: siteUrl }) => {
  // On GitHub Pages the site may live in a sub-folder, which has to be part of
  // every absolute URL below.
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  const lines = [
    `Contact: mailto:${contact.email}`,
    `Expires: ${expires.toISOString()}`,
    `Preferred-Languages: ${site.language || "en"}`,
  ];

  if (siteUrl) {
    lines.push(`Canonical: ${new URL(`${base}/.well-known/security.txt`, siteUrl).href}`);
  }

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
