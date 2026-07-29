// Post-build step: emit a static HTML file per route so crawlers get correct
// per-page <title>, <meta description>, canonical, and Open Graph tags.
//
// Without this every URL served the same index.html, whose canonical pointed at
// the homepage — telling Google every page was a duplicate of "/" — and whose
// og: tags made every LinkedIn/WhatsApp share render as the generic homepage
// card. Social crawlers do not run JS, so client-side useSeo() cannot fix that.
//
// Body content is still rendered client-side; this fixes the <head> only, which
// is where the indexing and social-preview damage was.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE_URL, OG_IMAGE } from "./seo-routes.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const shell = readFileSync(join(dist, "index.html"), "utf8");

// Strip the placeholder head tags from the shell; each route re-adds its own.
const stripped = shell
  .replace(/<title>[\s\S]*?<\/title>/i, "")
  .replace(/<meta\s+name="description"[^>]*>/gi, "")
  .replace(/<link\s+rel="canonical"[^>]*>/gi, "")
  .replace(/<meta\s+property="og:(?:type|url|title|description|image)"[^>]*>/gi, "")
  .replace(/<meta\s+name="twitter:(?:title|description|image)"[^>]*>/gi, "");

const headFor = (path, meta) => {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="${meta.type || "website"}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:image" content="${esc(OG_IMAGE)}" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(OG_IMAGE)}" />`,
  ].join("\n    ");
};

let written = 0;
for (const [path, meta] of Object.entries(ROUTES)) {
  const html = stripped.replace(/<\/head>/i, `  ${headFor(path, meta)}\n  </head>`);
  const outDir = path === "/" ? dist : join(dist, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html, "utf8");
  written++;
}

// Warn if a sitemap URL has no metadata entry (i.e. a new page was added and
// this table was not updated) — it would silently fall back to the SPA shell.
const sitemapPath = join(root, "public", "sitemap.xml");
if (existsSync(sitemapPath)) {
  const urls = [...readFileSync(sitemapPath, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace(SITE_URL, "").replace(/\/$/, "") || "/");
  const missing = urls.filter((u) => !(u in ROUTES));
  if (missing.length) {
    console.warn(`\n  prerender: ${missing.length} sitemap URL(s) missing from seo-routes.mjs:`);
    missing.forEach((u) => console.warn(`    - ${u}`));
  }
}

console.log(`prerender: wrote ${written} static route(s)`);
