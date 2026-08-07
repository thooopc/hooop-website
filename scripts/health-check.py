#!/usr/bin/env python3
"""
Daily health check for hooop.in.

Run:  python3 scripts/health-check.py

Covers everything that can be verified without a login: reachability, the
regressions we have actually hit before, payload weight, and the SEO
fundamentals. Search Console and GA4 need a signed-in browser and are not
checked here — those are pulled separately.

Exit code is 0 when everything passes, 1 when any FAIL is recorded, so this can
gate a deploy later if that becomes useful.
"""

import json
import re
import ssl
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone

SITE = "https://www.hooop.in"

# Pages that must serve real prerendered content, with a phrase that only
# appears when the right page rendered. Guards against the whole site
# silently reverting to an empty <div id="root">, which is exactly what
# happened between July and 5 Aug 2026 without anyone noticing.
PAGES = {
    "/": "Marketing Science",
    "/sense": "greenwashing checker",
    "/greenwashing": "greenwashing",
    "/offerings": "Marketing-Led",
    "/collective": "The Collective",
    "/prvaah": "Prvaah",
    "/esg-media-index": "ESG Media Index",
    "/thinking": "Our Thinking",
    "/research": "Research",
    "/contact": "Talk",
    "/manifesto": "Manifesto",
    "/privacy": "Privacy",
    "/thinking/fssai-label-crackdown-sustainability-claims": "no provision for a 100%",
}

REDIRECTS = {
    "/our-thinking": "/thinking",
    "/what-we-do": "/offerings",
    "/thinking/era-of-green-media-buying": "/thinking/sustainable-media-planning-india",
}

MIN_INTERNAL_LINKS = 12   # sitewide footer nav; below this, linking has regressed
MIN_POST_LINKS = 14       # /thinking must link to every post
MAX_PAGE_BYTES = 400_000  # a single HTML document
MAX_ASSET_BYTES = 400_000 # any one image or script

results = []


def record(status, area, message):
    results.append((status, area, message))


def fetch(path, headers=None, redirect=True):
    url = path if path.startswith("http") else SITE + path
    req = urllib.request.Request(url, headers=headers or {"User-Agent": "hooop-healthcheck/1.0"})
    opener = urllib.request.build_opener()
    if not redirect:
        class NoRedirect(urllib.request.HTTPRedirectHandler):
            def redirect_request(self, *a, **k):
                return None
        opener = urllib.request.build_opener(NoRedirect)
    try:
        with opener.open(req, timeout=30) as r:
            return r.status, dict(r.headers), r.read()
    except urllib.error.HTTPError as e:
        return e.code, dict(e.headers), e.read()


def body_text(html):
    m = re.search(rb"<body.*?>(.*?)</body>", html, re.S)
    inner = re.sub(rb"<script.*?</script>", b"", m.group(1) if m else b"", flags=re.S)
    return re.sub(rb"\s+", b" ", re.sub(rb"<[^>]+>", b" ", inner)).strip()


def check_pages():
    for path, needle in PAGES.items():
        try:
            status, _, html = fetch(path)
        except Exception as e:
            record("FAIL", "reachability", f"{path} — {e}")
            continue
        if status != 200:
            record("FAIL", "reachability", f"{path} returned {status}")
            continue

        text = body_text(html)
        if len(text) < 500:
            record("FAIL", "prerender", f"{path} served only {len(text)} chars of body text — prerender may have regressed")
        elif needle.lower().encode() not in html.lower():
            record("WARN", "prerender", f"{path} rendered but '{needle}' is missing — content may have changed")

        if len(html) > MAX_PAGE_BYTES:
            record("WARN", "weight", f"{path} is {len(html)//1024} KB of HTML")


def check_links():
    _, _, home = fetch("/")
    internal = {m.decode() for m in re.findall(rb'href="(/[^"]*)"', home)}
    internal = {u for u in internal if not u.startswith(("/assets", "/favicon"))}
    if len(internal) < MIN_INTERNAL_LINKS:
        record("FAIL", "crawlability", f"homepage exposes {len(internal)} internal links, expected >= {MIN_INTERNAL_LINKS}")
    else:
        record("PASS", "crawlability", f"homepage exposes {len(internal)} internal links")

    _, _, blog = fetch("/thinking")
    posts = {m.decode() for m in re.findall(rb'href="(/thinking/[^"]+)"', blog)}
    if len(posts) < MIN_POST_LINKS:
        record("FAIL", "crawlability", f"/thinking links to {len(posts)} posts, expected >= {MIN_POST_LINKS}")
    else:
        record("PASS", "crawlability", f"/thinking links to {len(posts)} posts")


def check_head():
    canonicals = {}
    for path in PAGES:
        _, _, html = fetch(path)
        c = re.search(rb'rel="canonical" href="([^"]+)"', html)
        t = re.search(rb"<title>(.*?)</title>", html, re.S)
        if not c:
            record("FAIL", "seo", f"{path} has no canonical")
            continue
        canonical = c.group(1).decode()
        canonicals.setdefault(canonical, []).append(path)
        if not t or len(t.group(1)) < 10:
            record("FAIL", "seo", f"{path} has no usable <title>")
    for canonical, paths in canonicals.items():
        if len(paths) > 1:
            record("FAIL", "seo", f"{len(paths)} pages share canonical {canonical}: {', '.join(paths)}")


def check_redirects():
    for src, dest in REDIRECTS.items():
        status, headers, _ = fetch(src, redirect=False)
        # Header casing varies by origin, so match case-insensitively.
        loc = next((v for k, v in headers.items() if k.lower() == "location"), "")
        if status not in (301, 308):
            record("FAIL", "redirects", f"{src} returned {status}, expected 301/308")
        elif not loc.endswith(dest):
            record("FAIL", "redirects", f"{src} -> {loc}, expected {dest}")


def check_infra():
    status, _, robots = fetch("/robots.txt")
    if status != 200 or b"Sitemap:" not in robots:
        record("FAIL", "infra", "robots.txt missing or has no Sitemap directive")
    if b"Disallow: /" in robots.replace(b"Disallow: /\n", b"").replace(b"Allow: /", b""):
        record("FAIL", "infra", "robots.txt contains a Disallow rule — check it is intentional")

    status, _, sitemap = fetch("/sitemap.xml")
    urls = re.findall(rb"<loc>([^<]+)</loc>", sitemap)
    if status != 200 or not urls:
        record("FAIL", "infra", "sitemap.xml missing or empty")
        return
    record("PASS", "infra", f"sitemap lists {len(urls)} URLs")
    for u in urls:
        s, _, _ = fetch(u.decode(), redirect=False)
        if s != 200:
            record("FAIL", "infra", f"sitemap URL {u.decode()} returns {s}")


def check_assets():
    _, _, home = fetch("/")
    assets = {m.decode() for m in re.findall(rb'(?:src|href)="(/[^"]+\.(?:js|css|png|jpg|jpeg|webp|svg))"', home)}
    for a in sorted(assets):
        try:
            _, headers, blob = fetch(a)
        except Exception:
            record("WARN", "assets", f"could not fetch {a}")
            continue
        if len(blob) > MAX_ASSET_BYTES:
            record("WARN", "weight", f"{a} is {len(blob)//1024} KB")


def main():
    for fn in (check_pages, check_links, check_head, check_redirects, check_infra, check_assets):
        try:
            fn()
        except Exception as e:
            record("FAIL", fn.__name__, f"check crashed: {e}")

    fails = [r for r in results if r[0] == "FAIL"]
    warns = [r for r in results if r[0] == "WARN"]
    passes = [r for r in results if r[0] == "PASS"]

    stamp = datetime.now(timezone.utc).astimezone().strftime("%a %d %b %Y, %H:%M %Z")
    print(f"\nhooop.in health check — {stamp}")
    print("=" * 64)
    if not fails and not warns:
        print(f"All clear. {len(PAGES)} pages, {len(passes)} positive checks.")
    for status, area, msg in fails + warns:
        print(f"  {status:4} [{area}] {msg}")
    for status, area, msg in passes:
        print(f"  {status:4} [{area}] {msg}")
    print("=" * 64)
    print(f"{len(fails)} failing, {len(warns)} warnings, {len(passes)} passing\n")
    sys.exit(1 if fails else 0)


if __name__ == "__main__":
    main()
