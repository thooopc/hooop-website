# HOOOP Collective — hooop.in

Vite + React SPA, single-file app (`src/App.jsx`, ~3k lines), deployed on Vercel
from `main`. Content lives in the `SITE_CONTENT` object at the top of `App.jsx`,
not in a CMS.

## Deploy workflow

Work on a branch → push → Vercel builds a **preview** → verify → merge to `main`.

**Two traps, both hit in practice:**

1. **A fast-forward merge onto `main` will not deploy.** Vercel dedupes on commit
   SHA, so if the branch commit was already built as a preview, merging produces
   no production build — and the preview URL keeps serving, so it looks fine.
   Always follow the merge with `git commit --allow-empty` and push.
2. **A failed build still serves the previous deployment.** Check the deployment
   `state` is `READY`, not just that the URL loads. A broken branch looked
   healthy for several minutes because of this.

No Node locally on this machine — Vercel does all building. Verify in the browser
against the deployed preview, never by assuming.

## When adding or renaming a page

Four places, all required:

- `src/App.jsx` — the section render, `navItems`, and `APP_SECTION_SEO`
- `scripts/seo-routes.mjs` — per-route title/description for the prerender
- `public/sitemap.xml`
- `vercel.json` — a 301 if a URL changed

`scripts/prerender.mjs` writes static HTML per route at build time — both the
`<head>` tags and the page's rendered body. Without an entry in `seo-routes.mjs`
a page falls back to generic metadata; the build prints a warning naming any
sitemap URL that's missing.

## Prerendering (August 2026)

The build is `vite build` → `vite build --ssr src/entry-server.jsx` →
`node scripts/prerender.mjs`. The SSR pass exists only to give the prerender a
`render(path)` function; nothing is server-rendered at request time.

Routing therefore has to work without a browser. `resolveRoute(pathname)` lives
at module scope in `App.jsx` and is used in three places: seeding `useState` on
the server (via the `initialPath` prop), seeding it in the browser, and handling
`popstate`. **Anything that changes routing must change `resolveRoute`, not the
effect** — state seeded in an effect is invisible to the prerender, because
effects never run during `renderToString`.

The same rule applies to new components: browser globals belong in effects or
event handlers, never in render. The Sense consent modal calls `createPortal`
into `document.body`, so it early-returns when `document` is undefined.

`main.jsx` uses `createRoot`, not `hydrateRoot` — React throws the prerendered
markup away and re-renders. That is deliberate: it costs one paint and makes
hydration mismatches impossible. Don't "fix" it to `hydrateRoot` without
checking every date, animation and random value in the tree.

If the SSR bundle fails to load, the build still succeeds and emits head-only
pages, with a loud warning. **Read the build log** — head-only is the exact
failure this was written to escape, and it looks fine in a browser.

`public/llms.txt` is what AI assistants read about HOOOP — keep it in sync with
positioning changes. It was briefing every LLM that HOOOP was a "venture lab"
long after the site said otherwise.

## Positioning (settled July 2026)

**Marketing Science for Circular and Sustainable Commerce** — the hero H1, taken
from their own credentials deck.

> A marketing and strategy collective helping climate and circular businesses
> bridge the gap between innovation and commercial adoption.

**Words that were deliberately removed. Do not reintroduce:**

- *venture lab*, *venture studio*, *venture building*, *valley of death*, *cohorts*
- *ESG consulting* — a domain they explicitly do not operate in
- *established* businesses — rejected as a qualifier
- *scale-ups* / *startups* in positioning copy. They are senior practitioners
  (two decades each) serving operating businesses, not a startup accelerator.

Blog **articles** about the climate-tech sector may still use "startup" and
"valley of death" — those are the subject matter, not claims about HOOOP.

Four practices, in this order: Marketing-Led Consulting → Media Sustainability →
Policy, Advocacy & Stakeholder Engagement → Venture Growth & Market Access.
Engagement models: CONSULT / PARTNER / COLLECTIVE.

## Writing register for the blog

The existing posts read machine-generated. Measured across 4,310 words: 22
instances of "must/needs to", 14 sentence-initial imperatives, 4 hedges, and
**zero** first person. Twelve of thirteen posts close on an aphorism.

The approved register (see `/thinking/sustainable-media-planning-india`, the
model post):

- Short declarative sentences. Fact first, then why it matters.
- Claims owned as ours — "we would argue", not "brands must".
- A real section on what we do not know.
- **No aphorism endings.** End on an invitation or an open question.
- Close by asking to compare notes.

A more anecdotal, meandering essay style was tried and rejected. Terse and
concrete, not literary.

## SEO baseline (28 Apr – 27 Jul 2026, pre-changes)

- **10 clicks, 192 impressions.** Every query branded: "hooop", "aravind nair hooop".
- Zero commercial queries. No toehold on any non-brand term.
- `/greenwashing` — **crawled 6 Apr 2026, not indexed**. Best page on the site.
- Never crawled: `/collective`, `/contact`, `/offerings`, `/research`, `/thinking`.
- Conclusion: content depth and authority are the constraint, not technical SEO.
  Do not propose further technical work before the recrawl lands.

Search Console and GA4 are not connected. Read exports from Google Drive instead
— Drive access is authorised for `arvindbnair@gmail.com`. `google.com` domains
are blocked in the browser tooling, so Search Console can be driven via the
Chrome extension but Google Search itself cannot.

## Client-sensitive material

Case-study metrics from The GoodNet decks (Samsung, Lego, Amazon, Mastercard,
UNICEF, Nestlé, Dyson, BYD) are **not cleared for publication**. `/esg-media-index`
lists brand names only, no performance figures — deliberately, since the site
also runs a greenwashing checker and unsubstantiated claims would be indefensible.
The 350g vs 1,050g CO₂ figures are GoodNet's, pending their sign-off.

## Open

- Maya D'Souza's bio — the only one not rewritten; she is absent from the team deck
- Tonality pass across the remaining 11 blog posts
- The Collective page redesign was built and **rejected** — production is unchanged.
  Note the live page clips every bio at 80px (`h-20 overflow-hidden`).
- LinkedIn: company About drafted, GoodNet carbon post drafted
