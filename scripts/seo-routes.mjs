// Per-route <head> metadata used to prerender static HTML at build time.
//
// These mirror the values the app sets client-side via useSeo(). Keep them in
// sync when you change a page's title/description — prerender.mjs warns if a
// URL in public/sitemap.xml has no entry here, which catches new pages.

export const SITE_URL = "https://www.hooop.in";

const OG_IMAGE = `${SITE_URL}/THE-HOOO-COLLECTIVEP_without-shadow.png`;

const post = (slug, title, description) => [
  `/thinking/${slug}`,
  { title: `${title} | HOOOP`, description, type: "article" },
];

export const ROUTES = Object.fromEntries([
  ["/", {
    title: "HOOOP Collective — Sustainable Marketing & Growth Strategy for Indian Brands",
    description: "A marketing and strategy collective for climate and circular businesses — sustainable marketing, brand strategy, market intelligence and behavioural insight.",
  }],
  ["/manifesto", {
    title: "Our Manifesto | HOOOP",
    description: "Marketing has the power to change behaviour. HOOOP partners with businesses that push the world forward while helping brands outpace the market.",
  }],
  ["/sense", {
    title: "Sense — Free Greenwashing Checker for Indian Brands | HOOOP",
    description: "Paste any sustainability claim and Sense scans it against CCPA 2024 and ASCI greenwashing rules, flagging vague, absolute, or unsubstantiated environmental language before you publish it.",
  }],
  ["/greenwashing", {
    title: "Greenwashing in India: Risks, Regulations & The Playbook | HOOOP",
    description: "Why greenwashing is now a legal and financial risk in India, how CCPA and ASCI enforce green claims, and a practical playbook for honest sustainability communication.",
  }],
  ["/esg-media-index", {
    title: "ESG Media Index India — Sustainable Media Planning | HOOOP × The GoodNet",
    description: "India's first ESG Media Index. Score every placement on carbon, content and corporate signals — and use them to cut CPC and wasted spend, not just to report afterwards.",
  }],
  ["/prvaah", {
    title: "Prvaah — India, UK & EU ESG Market Entry Program | HOOOP",
    description: "Prvaah guides enterprises across India, the EU, and the UK through ESG compliance, funding readiness, and responsible market expansion.",
  }],
  ["/offerings", {
    title: "What We Do — Sustainable Marketing, Media & ESG Consulting | HOOOP",
    description: "Marketing-led consulting, ESG media planning and measurement, policy and stakeholder engagement, and market access for climate and circular businesses in India.",
  }],
  ["/thinking", {
    title: "Our Thinking — Climate, Capital & Culture | HOOOP Blog",
    description: "Essays on greenwashing, circular economy, climate finance, and India-UK ESG market entry from the HOOOP Collective.",
  }],
  ["/collective", {
    title: "The Collective — Our Sustainability & Brand Strategy Team | HOOOP",
    description: "Meet the thinkers, technologists, communicators, and policy experts behind HOOOP's sustainable marketing and strategy work.",
  }],
  ["/research", {
    title: "Research & Reports | HOOOP",
    description: "Data-driven reports on greenwashing in Indian marketing, the sustainability consumer paradox, circular economy, and sustainable media.",
  }],
  ["/contact", {
    title: "Contact HOOOP | Sustainable Marketing & Growth Strategy",
    description: "Get in touch with the HOOOP Collective to talk climate innovation, ESG strategy, or brand credibility.",
  }],
  ["/privacy", {
    title: "Privacy Notice | HOOOP Collective",
    description: "How the HOOOP Collective collects, uses, and protects personal data provided through Sense, in line with India's Digital Personal Data Protection Act, 2023.",
  }],

  post("how-indian-brands-verify-sustainability-claims",
    "We Asked Indian Marketers How They Verify Green Claims. 15% Said They Don't.",
    "Our survey of Indian marketing professionals found that around a third of sustainability claims reach the public without any independent check. The interesting part is why — it is far more often process than intent."),
  post("commercialising-ocean-bound-plastic-supply-chains",
    "From Beach Clean-Ups to Supply Chains: Commercialising Ocean-Bound Plastic",
    "Corporate beach clean-ups are great for CSR, but true marine circularity requires integrating ocean-bound plastics into viable, scalable supply chains."),
  post("ocean-friendly-trap-greenwashing-marine-circularity",
    "The 'Ocean-Friendly' Trap: Greenwashing and Marine Circularity",
    "As consumer awareness of marine pollution grows, the 'ocean-friendly' label is being widely abused. How brands can verify their marine circularity claims to avoid regulatory backlash."),
  post("financing-blue-economy-marine-conservation-venture-capital",
    "Financing the Blue Economy: Marine Conservation and Venture Capital",
    "The 'Blue Economy' represents a multi-trillion dollar opportunity, but marine tech startups struggle for funding. Why investors must look to the oceans."),
  post("scaling-seaweed-marine-biomaterials-plastic-alternatives",
    "Scaling Seaweed: Marine Biomaterials as Plastic Alternatives",
    "Seaweed-based packaging is hailed as the ultimate solution to plastic waste. But how do we scale it from niche pilot projects to global FMCG supply chains?"),
  post("commercialisation-gap-circular-economy-india",
    "The Commercialisation Gap in India's Circular Economy",
    "Many sustainable startups fail not because their technology is flawed, but because they cannot secure offtake agreements. Here is how to cross the commercialisation gap."),
  post("cross-border-market-entry-esg-compliance-india-uk",
    "Cross-Border Market Entry: ESG Compliance Across India and the UK",
    "Expanding climate solutions across the India-UK-EU corridor requires more than a good product. It requires navigating a labyrinth of ESG compliance and regulatory standards."),
  post("alpha-in-authenticity-greenwashing-kills-valuation",
    "Alpha in Authenticity: How Greenwashing Kills Valuation",
    "Investors are no longer just looking at returns; they are looking at risk. Misleading environmental claims are a material threat to enterprise value."),
  post("brand-strategy-age-of-cynical-consumer",
    "Brand Strategy in the Age of the Cynical Consumer",
    "How to build a narrative that survives the scrutiny of Gen Z. It's not about being perfect; it's about being transparent."),
  post("era-of-green-media-buying",
    "The Era of Green Media Buying",
    "A new framework for measuring the carbon footprint of your digital ad spend."),
  post("decoding-india-uk-climate-corridor",
    "Decoding the India-UK Climate Corridor",
    "Analyzing the flow of capital and compliance between two major economies, and how Prvaah is bridging the gap."),
  post("from-storytelling-to-storydoing",
    "From Storytelling to Storydoing",
    "Moving beyond 'raising awareness'. How effective climate communication drives measurable behavioural change."),
  post("circular-economy-playbook-fashion",
    "The Circular Economy Playbook for Fashion",
    "A practical guide to shifting from linear extraction to circular value creation without alienating your core customer."),
]);

export { OG_IMAGE };
