// Post-build step: emit a static HTML file per route containing both the right
// <head> tags and the page's actual rendered content.
//
// Two problems, fixed in two stages.
//
// First (July): every URL served the same index.html, whose canonical pointed at
// the homepage — telling Google every page was a duplicate of "/" — and whose
// og: tags made every LinkedIn/WhatsApp share render as the generic homepage
// card. Social crawlers do not run JS, so client-side useSeo() cannot fix that.
//
// Second (August): the <head> was correct but the <body> was still an empty
// <div id="root">. Anything that does not execute JavaScript — GPTBot,
// PerplexityBot, ClaudeBot, and Googlebot before its deferred render pass —
// received a page with zero words on it. Measured: 3,298 bytes, no body text.
// Now every route is rendered to HTML here via dist-ssr/entry-server.js.
//
// main.jsx still uses createRoot rather than hydrateRoot, so React discards this
// markup and re-renders on the client. That is deliberate: it costs one extra
// paint and makes hydration mismatches structurally impossible, which matters in
// an app this size with animation and date-dependent content. Crawlers get the
// content; users get the same interactive app as before.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
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

// Load the SSR bundle. This used to fall back to head-only output and let the
// build pass, on the reasoning that a site with correct metadata beats no
// deploy. That reasoning was wrong twice over, and on 24 Oct 2026 it cost us a
// deployment that reported READY while every page served 4.5 KB of head and an
// empty <div id="root">.
//
// Wrong first because the same module error that stops the SSR bundle loading
// usually stops the browser bundle too, so the fallback ships a blank page
// rather than a JS-only one. Wrong second because a failed build leaves the
// previous good deployment serving, which beats a green deploy of nothing.
//
// So this is now fatal. If you are tempted to soften it again, read the two
// incidents in CLAUDE.md first.
let renderRoute = null;
const ssrEntry = join(root, "dist-ssr", "entry-server.js");
if (existsSync(ssrEntry)) {
  try {
    ({ render: renderRoute } = await import(pathToFileURL(ssrEntry).href));
  } catch (err) {
    console.error(`\n  prerender: could not load the SSR bundle — ${err.message}`);
  }
} else {
  console.error(`\n  prerender: no SSR bundle at dist-ssr/entry-server.js`);
}
if (!renderRoute) {
  console.error("  prerender: refusing to emit head-only pages. Body content would be invisible to non-JS crawlers,");
  console.error("  and a module-level error here usually means the browser bundle is broken too.\n");
  process.exit(1);
}

const ROOT_DIV = /<div id="root">\s*<\/div>/;

let written = 0;
const failed = [];

for (const [path, meta] of Object.entries(ROUTES)) {
  let html = stripped.replace(/<\/head>/i, `  ${headFor(path, meta)}\n  </head>`);

  if (renderRoute) {
    try {
      const body = renderRoute(path);
      if (!ROOT_DIV.test(html)) throw new Error('no empty <div id="root"> in the shell');
      html = html.replace(ROOT_DIV, `<div id="root">${body}</div>`);
    } catch (err) {
      failed.push([path, err.message]);
    }
  }

  const outDir = path === "/" ? dist : join(dist, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html, "utf8");
  written++;
}

if (failed.length) {
  console.warn(`\n  prerender: ${failed.length} route(s) rendered head-only because SSR threw:`);
  failed.forEach(([p, m]) => console.warn(`    - ${p}: ${m}`));
  console.warn("");
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

const mode = renderRoute ? `${written - failed.length} with content` : "head-only";
console.log(`prerender: wrote ${written} static route(s) (${mode})`);
