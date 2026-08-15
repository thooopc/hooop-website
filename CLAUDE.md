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

**Verify mobile first.** Every UI change is checked at a 375px viewport before
desktop, and the mobile result is what gets shown in the report. Resize, then
reload — load-time device gates re-run on reload. Watch for fixed-height slots
that align rows on desktop but leave dead space once cards stack, and for
anything that scrolls horizontally.

## Crawlability (fixed 7 Aug 2026)

Until 7 Aug the served HTML contained **no internal links at all**. Every nav
control was a `<button onClick>`, so Googlebot could only discover pages through
`sitemap.xml`, no authority flowed between pages, and `/collective`, `/contact`,
`/offerings`, `/research` and `/thinking` had **never been crawled once**.
Google's own URL inspection said it plainly: *"Referring page: None detected."*

`AppLink` in `App.jsx` now renders a real `<a href>` and still navigates
client-side; modified clicks fall through so open-in-new-tab works. It is used by
the sidebar, both mobile navs, hero CTAs, blog cards, in-post CTAs, the offerings
cards, and a sitewide footer link block so every page links to every other.

**If you add a navigation control, use `AppLink`.** A `<button onClick>` is
invisible to a crawler and silently undoes this.

Result: 15 indexed pages → 25 within a week, with "Discovered – currently not
indexed" falling 6 → 2.

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

## Monitoring

`python3 scripts/health-check.py` checks reachability, prerendered body content,
crawlable internal link counts, canonical uniqueness, redirects, robots/sitemap
integrity and asset weight. Exit 0 = clean. **Update its constants when the site
shape changes** — it correctly failed after the blog consolidation because
`MIN_POST_LINKS` still expected 14.

A scheduled task `hooop-daily-health-check` runs it weekly (Mondays 9am) plus
Vercel deploy state and Search Console, and drafts the report to
arvind@hooop.in. The Gmail connector is on `arvindbnair@gmail.com` and has **no
send tool**, so it creates a draft; Arvind confirmed that is fine. It also means
Search Console notification emails are not readable — use the GSC message centre
(bell icon) instead.

Images: check weight before committing. A 5.2 MB portrait was rendering in a
40px circle, sixteen times the weight of the entire JS bundle.

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

### The register pass — completed 13 Aug 2026

All 11 remaining posts were rewritten, and the four thin marine posts were
consolidated into `/thinking/marine-circularity-india` with 301s.

Before → after, measured across the posts that needed it:

- *must / should / needs to*: 22 → 7 across the whole blog
- Posts closing on an aphorism: 11 of 11 → **0 of 11**. Every post now ends on
  an invitation to compare notes.
- Every post now carries ownership language and at least one honest concession.
- Average length 265 → ~540 words. Still shorter than the model post; expanding
  further is the remaining lever if these need to rank rather than just exist.

Rejected framing is gone: zero instances of *venture lab* remain, and *valley of
death* survives only where it is the sector's own term, never as HOOOP's model.
Four stale "in 2025" references were updated.

## SEO baseline (28 Apr – 27 Jul 2026, pre-changes)

- **10 clicks, 192 impressions.** Every query branded: "hooop", "aravind nair hooop".
- Zero commercial queries. No toehold on any non-brand term.
- `/greenwashing` — **crawled 6 Apr 2026, not indexed**. Best page on the site.
- Never crawled: `/collective`, `/contact`, `/offerings`, `/research`, `/thinking`.
- Conclusion at the time: content depth and authority are the constraint, not
  technical SEO. **Partly wrong.** On 5 Aug 2026 every route was found to be
  serving zero body text to non-JS clients — fixed by the prerender work above.
  Authority is still the larger constraint, but "technical SEO is done" was an
  overstatement and the recrawl baseline should be read with that in mind.

GA4, 9 Jul – 5 Aug 2026: 75 active users, 49s avg engagement. Against 10 search
clicks in three months, that means essentially all traffic is direct/LinkedIn.
No key events are configured, so Sense consent submissions — the most valuable
action on the site — are invisible in analytics. Still open.

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

## Sense detection engine

`SENSE_TERMS` in `App.jsx` is the ruleset; `analyze()` runs every pattern against
the whole normalised string. Two flags on a rule modify that:

- `needsContext: true` — only counts if `ENV_CONTEXT` also matches. Use it for
  any word that is only a green claim in an environmental setting (*best,
  certified, offset, totally, 100%*). Without it, "industry best practices" and
  "certified accountants" get reported as greenwashing.
- `suppressIf: /re/` — skip when the claim already carries what the rule asks
  for, e.g. a named scheme (`NAMED_SCHEME`) or a disclosed percentage.

**Never end an alternation containing `100%` with `\b`.** `%` is not a word
character, so `\b(100%|…)\b` cannot match "100% recycled". That bug shipped for
months and made the tool silently miss its own headline term.

Audited 5 Aug 2026: *eco-friendly*, *zero waste* and *greener* had no rule at
all, while our own marketing named them as the words Sense flags most often.
When the marketing claims a behaviour, test the behaviour.

## Open (as of 15 Aug 2026)

**Blocked on Arvind**

- **GoodNet has not cleared the 350g vs 1,050g CO₂ figures.** Blocks the drafted
  carbon post and leaves `/esg-media-index` arguing entirely from assertion, on a
  site that runs a greenwashing checker. Highest-leverage unblock on the list.
- **GA4 key event** — `sense_consent_submitted` fires correctly but is not marked
  as a key event, so it is recorded and not counted. `analytics.google.com` is
  blocked at the tool level.
- **Unconfirmed:** Google flagged `a***r@gmail.com` added as a Search Console
  owner on 8 Aug. Matches Arvind's own gmail; asked twice, never confirmed.

**Next up**

- **ESG Media Index lead generation.** The offer is now bounded and live — "your
  top 20 domains, scored", with a mailto that pre-fills the questions. Arvind
  explicitly does **not** want a form. Still to do: content in the language
  buyers actually search (wasted ad spend, made-for-advertising sites, media
  quality audit, ad fraud India — nobody searches "ESG media index"), and
  outbound, where the ET Brand Equity and ExchangeWire coverage is the opener.

**Handled in a separate conversation**

From 6 Aug Arvind split design and content *creation* into its own chat. Blogs
came back here on 10 Aug because they are an SEO asset. Still elsewhere:
LinkedIn company About (drafted, never shipped), the GoodNet carbon post
(blocked on figures), the four-week LinkedIn cadence artifact.

**Watching**

- Indexing validation for "Crawled – currently not indexed" started 7 Aug; Google
  messages when it completes.
- `/thinking/era-of-green-media-buying` still draws the odd impression on the
  old 301'd slug. Expected to decay; no action unless it persists past September.

## Current numbers (15 Aug 2026)

- **25 indexed, 7 not** — 3 of those 7 are intentional 301s, plus the 4 marine ones.
- Search: **8 clicks, branded queries only** (`hooop`, plus junk and one
  misspelling). No commercial toehold yet.
- The honest read: crawlability and content quality are fixed; **rankings are
  not**, and will not move on this timescale. Authority and depth are what is
  left. Do not read three days of data as a trend at this volume.

## What I can and cannot reach

Search Console **works** via the Chrome extension at `search.google.com` —
performance, indexing and per-page reports are all readable. `linkedin.com` and
`analytics.google.com` are **blocked at the tool level**, so LinkedIn engagement
and GA4 both require Arvind to read them out. Vercel Web Analytics is **not
enabled** on the project, so that route is closed too unless he turns it on.
