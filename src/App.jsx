import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ArrowRight, ArrowLeft, Globe, Shield, Zap, TrendingUp, FileText, Anchor, Linkedin, ExternalLink, Users, Coins, Briefcase, ScanLine, BarChart3, Download, AlertCircle, Check, Leaf, Info, Scale, BookOpen, ChevronDown, ChevronUp, Tag, ShieldCheck, Wind, Gavel, MicOff, Lock, HelpCircle, Eye, AlertTriangle, CheckCircle, Mail, Copy, RefreshCw, ShieldAlert, Search, UserX, Flag, Instagram } from 'lucide-react';

// ==========================================
// 🛠️ EASY EDIT SECTION - CHANGE CONTENT HERE
// ==========================================

const SITE_CONTENT = {
  brand: {
    name: "HOOOP",
    est: "Est. 2025",
    logoImage: "/THE-HOOO-COLLECTIVEP_without-shadow.png",
    contactEmail: "hello@hooop.in",
  },
  hero: {
    titleLine1: "Marketing Science",
    titleLine2: "for Circular and Sustainable Commerce.",
    subtitle: "A marketing and strategy collective helping climate and circular businesses bridge the gap between innovation and adoption.",
    subtitleSecondary: "We combine brand and marketing strategy, market intelligence, commercial partnerships and behavioural insight to help businesses grow credibly and at scale.",
    buttonText: "Our Offerings",
    collectiveButtonText: "Meet the Collective", // Added this new text
    linkText: "Read our manifesto"
  },
   // NEW SECTION: Partners & Features
  homeExtras: {
    partners: [
      { name: "TERI SAS", url: "https://www.terisas.ac.in/" },
      { name: "The Good Net", url: "https://wearethegoodnet.com/" },
      { name: "Everloop", url: "https://www.everloop.agency/" }
    ],
    featured: [
      { name: "Brand Equity", headline: "Ad spends go green as HOOOP and The GoodNet launch India's first ESG media index", url: "https://brandequity.economictimes.indiatimes.com/news/research/advertising/ad-spends-go-green-as-the-hooop-collective-and-the-goodnet-to-launch-indias-first-esg-media-index/120510972" },
      { name: "ExchangeWire", headline: "HOOOP and The GoodNet partner to launch India's first ESG Media Index & Marketplace", url: "https://www.exchangewire.com/blog/2025/06/13/the-hooop-collective-the-goodnet-partner-to-launch-indias-first-esg-media-index-marketplace/" },
      { name: "afaqs!", headline: "A study by The HOOOP Collective highlights validation of claims by Indian brands", url: "https://www.afaqs.com/companies/a-study-by-the-hooop-collective-highlights-validation-claims-by-indian-brands-11100009" },
      { name: "IMPACT", headline: "HOOOP and Everloop launch Prvaah to bridge UK–India business", url: "https://www.impactonnet.com/more-from-impact/the-hooop-collective-and-everloopagency-launch-prvaah-to-bridge-ukindia-business-12144.html" },
      { name: "Media Infoline", headline: "HOOOP and Everloop launch Prvaah to enable businesses across the UK and India", url: "https://www.mediainfoline.com/alliances/the-hooop-collective-and-everloop-launch-prvaah-to-enable-businesses-across-the-uk-and-india" },
      { name: "Manifest", headline: "Report flags Indian brands' sustainability claims: 35% rely on internal checks or none", url: "https://www.manifest-media.in/marketing/130226/report-flags-indian-brands-sustainability-claims-35-rely-on-interna.html" },
      { name: "Exchange4Media", headline: "Former Mirum (WPP) leaders create The HOOOP Collective", url: "https://www.exchange4media.com/advertising-news/former-mirum-wpp-leaders-create-the-hooop-collective-142001.html" }
    ]
  },
  // OUR THINKING (The Blog)
  thinking: {
    title: "Our Thinking",
    subtitle: "Essays on the intersection of climate, capital, and culture.",
    featuredTool: {
        title: "Sense by HOOOP",
        desc: "Use our logic powered brand narrative tool to stress-test your claims against greenwashing risks.",
        cta: "Run Analysis"
    },
    posts: [
       {
          title: "We Asked Indian Marketers How They Verify Green Claims. 15% Said They Don't.",
          slug: "how-indian-brands-verify-sustainability-claims",
          category: "Greenwashing",
          date: "July 29, 2026",
          desc: "Our survey of Indian marketing professionals found that around a third of sustainability claims reach the public without any independent check. The interesting part is why — it is far more often process than intent.",
          content: [
            "When we ran the survey behind our Green Is the New Lie whitepaper, we expected to find a gap between what brands claim and what they can prove. What we did not expect was how many teams already know the gap exists and publish anyway.",
            "We asked Indian marketing professionals a deliberately plain question: how are your sustainability claims usually verified? The answers were more candid than we anticipated.",
            { heading: "What the survey found" },
            "Thirty per cent said third-party certifications. Twenty-two per cent said legal team approval. Twenty per cent said internal team assessment. Thirteen per cent said supplier data. And fifteen per cent told us, plainly, that they do not verify them at all.",
            "That last number gets the headline, and it should. But the number we keep returning to is thirty-five per cent — internal assessment plus no verification combined. That is the share of claims reaching the public with no independent check behind them at all. Roughly one in three.",
            "An internal assessment is not nothing. Someone looked. But it is the same organisation marking its own homework, and under India's current rules that is no longer a defensible position if a claim is challenged.",
            { heading: "This is usually process, not intent" },
            "It would be easy to read thirty-five per cent as evidence that a third of Indian brands are deliberately misleading people. We do not think that is what is happening, and the rest of the data does not support it either.",
            "Seventy per cent of companies with genuinely strong sustainability credentials told us they hold back from talking about them — what the industry has started calling greenhushing. These are not bad actors. They are teams who are doing real work and are frightened of being picked apart for the parts they have not solved yet.",
            "The most common barrier cited was not cost or cynicism. It was data. Marketers are asked to make claims about supply chains they cannot see into, using figures that sit with procurement, or with a supplier, or nowhere at all. The claim goes out because a campaign has a deadline and the substantiation does not have an owner.",
            "That is a process problem. Process problems are fixable, which is the more useful way to look at this.",
            { heading: "What changed, and why it matters now" },
            "Until recently, a vague green claim was a reputational risk. Since the CCPA's 2024 guidelines it is a legal one. Greenwashing is now classified as a misleading practice, liability extends to the brand, the agency and the endorser, and penalties run to ten lakh rupees for a first offence and fifty lakh for a repeat.",
            "ASCI has tightened alongside it, requiring that the scope of a claim be defined — product, packaging, process or company — and that evidence be verifiable and independent. SEBI has started scrutinising ESG claims in BRSR filings, which quietly links what marketing says to what the business reports.",
            "We have written up the full regulatory picture, including what each body now expects and where the common failure points sit.",
            { cta: "Read the greenwashing playbook", to: "greenwashing" },
            { heading: "What good verification actually looks like" },
            "The teams handling this well are not necessarily the ones with the biggest sustainability budgets. They tend to have three unglamorous things in place.",
            "First, someone owns substantiation. Not the campaign, the claim. One named person who can produce the evidence behind a line of copy without a three-day search.",
            "Second, the claim is scoped before it is written. Whether the recycled content refers to the bottle or the label is decided at brief stage, not in a legal review a week before launch.",
            "Third, the language is checked against the specific patterns regulators look for — absolutes, unqualified comparatives, future commitments without interim milestones. Most claims that get flagged are not lies. They are true statements phrased in a way that cannot be defended.",
            { heading: "A reasonable place to start" },
            "If you are not sure where your own messaging sits, the fastest check is to read your live claims the way a regulator would rather than the way a marketer does. That means asking, for each one: what specifically is being claimed, about what, and what evidence exists that someone outside this building could examine.",
            "We built Sense for exactly that first pass. It scans your wording against the patterns that attract scrutiny and tells you which phrases would need substantiation. It is not legal advice and it will not tell you whether your claim is true — only you have that. But it will tell you which sentences are going to be asked about.",
            { cta: "Check your claims with Sense", to: "sense" },
            "The rules here are new for everyone, ourselves included, and the guidance is still settling. We would rather compare notes with people working through the same questions than pretend we have this fully mapped. If you are wrestling with a claim you cannot quite substantiate, we are always up for that conversation.",
          ],
       },
       {
          title: "From Beach Clean-Ups to Supply Chains: Commercialising Ocean-Bound Plastic",
          slug: "commercialising-ocean-bound-plastic-supply-chains",
          category: "Circular Economy",
          date: "June 25, 2026",
          desc: "Corporate beach clean-ups are great for CSR, but true marine circularity requires integrating ocean-bound plastics into viable, scalable supply chains.",
          content: [
            "For years, corporate interaction with marine ecosystems has been relegated to the CSR budget. A coastal beach clean-up makes for great employee engagement and a solid LinkedIn post, but it does little to stem the systemic flow of plastic into our oceans. To achieve true marine circularity, we must shift our perspective from 'clean-up' to 'commercialisation'.",
            "The challenge of ocean-bound plastic is largely a supply chain and logistics issue, especially in nations with vast coastlines like India. Collecting the plastic is only step one. The 'valley of death' for marine circularity startups lies in sorting, washing, processing, and certifying this degraded material so it meets the strict quality standards of global FMCG and fashion brands.",
            "This is where the Venture lab model proves invaluable. Scaling a marine plastic venture requires locking in guaranteed offtake agreements. A startup cannot invest in a high-capacity extrusion facility without knowing a major brand will buy the recycled pellets. We help bridge this gap by connecting marine innovators directly with corporate procurement teams, designing pilot programs that de-risk the integration of ocean-bound materials into existing product lines.",
            "Furthermore, traceability is non-negotiable. With the rise of ESG scrutiny, brands using ocean-bound plastic must prove exactly where it came from. 'Washed up on a beach' is no longer sufficient; buyers require block-chain or tech-enabled tracking from the coastal collection point to the factory floor.",
            "By transforming coastal waste from an environmental hazard into a reliable, certified, and economically viable raw material, we can build a self-sustaining circular economy. When ocean-bound plastic becomes too valuable to leave on the beach, the market will naturally clean the oceans.",
          
            { cta: "How we support scale-ups", to: "offerings" },
          ]
      },
      {
          title: "The 'Ocean-Friendly' Trap: Navigating Greenwashing in Marine Claims",
          slug: "ocean-friendly-trap-greenwashing-marine-circularity",
          category: "Greenwashing",
          date: "June 10, 2026",
          desc: "As consumer awareness of marine pollution grows, the 'ocean-friendly' label is being widely abused. How brands can verify their marine circularity claims to avoid regulatory backlash.",
          content: [
            "The visual of a sea turtle trapped in plastic fundamentally changed consumer behavior. Consequently, marketing departments scrambled to slap 'Ocean-Friendly', 'Reef-Safe', and 'Made from Ocean Plastic' labels onto their packaging. However, as regulatory bodies like the ASCI in India and the CCPA globally tighten their grip, these vague marine claims are becoming a massive legal liability.",
            "The 'Ocean-Friendly' trap usually falls into one of three greenwashing sins. The first is *Vagueness*. What does 'Reef-Safe' actually mean? Without citing a specific, scientifically backed certification (like avoiding specific UV-blocking chemicals proven to cause coral bleaching), the claim is legally indefensible.",
            "The second is the *Hidden Trade-off*. A brand might boast about using '15% recycled ocean plastic' in a bottle, while ignoring that the remaining 85% is virgin plastic, and the bottle's design makes it unrecyclable at its end-of-life. The marketing highlights a marine benefit to mask a broader circularity failure.",
            "The third, and most egregious, is the *Misleading Source*. 'Ocean-bound plastic' is a highly specific term, generally defined as plastic waste recovered within 50 kilometers of a coastline in areas lacking formal waste management. If a brand uses plastic collected hundreds of miles inland but brands it with a blue wave logo to imply marine recovery, they are deceiving the consumer.",
            "For brands aiming to build authentic ESG credibility, marine claims require radical transparency. Use precise language, disclose the exact percentage of marine materials, provide open-source access to supply chain traceability, and ensure compliance with strict regulatory frameworks. If you are protecting the ocean, prove the math.",
          
            { cta: "Read the greenwashing playbook", to: "greenwashing" },
          ]
      },
      {
          title: "Financing the Blue Economy: Why Marine Conservation Needs Venture Capital",
          slug: "financing-blue-economy-marine-conservation-venture-capital",
          category: "Climate Finance",
          date: "May 20, 2026",
          desc: "The 'Blue Economy' represents a multi-trillion dollar opportunity, but marine tech startups struggle for funding. Why investors must look to the oceans.",
          content: [
            "When we talk about climate tech and decarbonization, the conversation disproportionately focuses on the land and the sky—solar grids, EVs, and terrestrial agriculture. Yet, the ocean absorbs roughly 30% of carbon dioxide produced by humans and acts as the planet's greatest carbon sink. The 'Blue Economy' is vital for our survival, but it remains woefully underfunded.",
            "Marine innovation—ranging from zero-emission maritime shipping and deep-sea monitoring tech to regenerative aquaculture and coral reef restoration—struggles to cross the commercialisation gap. Traditional venture capital often views marine tech as too capital-intensive, too heavily regulated, or possessing timelines that are too long for standard 10-year fund cycles.",
            "However, this hesitation ignores a massive, impending market shift. As global frameworks like the UN's High Seas Treaty take effect, and as corporations recognize the urgent need to address biodiversity and water-resilience in their ESG reporting (like SEBI's BRSR Core), demand for verified Blue Economy solutions will skyrocket.",
            "Venture labs play a critical role here by providing 'Investment & Funding Readiness'. We help marine scale-ups translate their deep-tech or ecological impact into compelling, derisked commercial propositions for investors. This includes identifying blended finance pathways, securing government grants for pilot coastal projects, and structuring early-stage offtake agreements that give VCs the confidence to invest.",
            "Capital must flow where the impact is highest. By bringing rigorous commercial structuring to marine conservation and blue tech, we can unlock the capital needed to protect our oceans while generating significant financial returns.",
          
            { cta: "How we support ventures", to: "offerings" },
          ]
      },
      {
          title: "The Biomaterial Frontier: Scaling Seaweed and Marine Alternatives to Plastic",
          slug: "scaling-seaweed-marine-biomaterials-plastic-alternatives",
          category: "Scale-Up Strategy",
          date: "May 05, 2026",
          desc: "Seaweed-based packaging is hailed as the ultimate solution to plastic waste. But how do we scale it from niche pilot projects to global FMCG supply chains?",
          content: [
            "Of all the innovations emerging in the circular economy, marine biomaterials—particularly seaweed-based alternatives to plastic—hold the most promise. Seaweed grows incredibly fast, requires no freshwater or fertilizer, absorbs carbon as it grows, and yields materials that are 100% home-compostable. It is the holy grail of sustainable packaging.",
            "Yet, walking down the aisle of a typical Indian supermarket, you won't see it. Why? Because the biomaterial sector is currently trapped in the 'valley of death'. Startups can successfully create biodegradable sachets or edible liquid pods in the lab, but integrating them into the high-speed, high-heat packaging lines of global FMCG giants is a monumental engineering and commercial challenge.",
            "Scaling marine biomaterials requires a Venture lab approach. It is not enough to hand a startup a check; they need deep operational integration. They require partnerships with machinery manufacturers to adapt legacy packaging lines. They need regulatory navigation to ensure new edible materials meet FSSAI or FDA food safety standards.",
            "Furthermore, there is the supply side challenge. Scaling seaweed packaging requires scaling regenerative seaweed aquaculture globally. This involves creating ethical, fair-trade supply chains with coastal farming communities, ensuring that the raw material is harvested without damaging existing marine ecosystems.",
            "The transition from fossil-fuel plastics to marine biomaterials will be one of the greatest wealth-generating shifts of the next two decades. But it will not happen through isolated innovation. It requires the orchestrated, strategic deployment of capital, corporate partnerships, and operational expertise to bring these oceanic solutions into the mainstream.",
          
            { cta: "How we support scale-ups", to: "offerings" },
          ]
      },
      {
          title: "Crossing the Valley of Death: Commercialising Circular Economy Solutions in India",
          slug: "commercialisation-gap-circular-economy-india",
          category: "Scale-Up Strategy",
          date: "May 28, 2026",
          desc: "Many sustainable startups fail not because their technology is flawed, but because they cannot secure offtake agreements. Here is how to cross the commercialisation gap.",
          content: [
            "The 'Valley of Death' is a well-known concept in venture capital, describing the perilous phase between initial funding and generating sustainable revenue. In the circular economy and climate tech sectors, this valley is incredibly wide. A startup might successfully create a low-carbon alternative to plastic in a lab, but getting a major FMCG brand to adopt it for millions of units involves a completely different set of challenges.",
            "This is the commercialisation gap. Pilot projects are celebrated, but scaling them up is where ventures stall. The friction doesn't usually lie in the technology; it lies in procurement pathways, financing structures, and risk aversion from corporate buyers. Corporate sustainability officers might love a new biomaterial, but procurement officers will block it if it disrupts existing supply chains or poses a perceived risk to unit economics.",
            "To cross this valley, circular economy scale-ups must radically shift their approach. First, they need 'Investment & Funding Readiness' that goes beyond venture capital. This means unlocking blended finance, government grants, and demonstration project funding that can subsidize the risk for early corporate adopters.",
            "Second, ventures need bulletproof 'Impact Credibility'. A corporate buyer cannot take a risk on a new sustainable material if there is a chance it will lead to greenwashing accusations. Providing verifiable, third-party audited lifecycle impact stories is a mandatory prerequisite for B2B commercial traction.",
            "Ultimately, crossing the valley of death requires a deep understanding of corporate inertia. By anticipating procurement roadblocks and offering de-risked, turnkey pilot integrations, sustainable ventures can move from being exciting 'innovation projects' to indispensable commercial partners.",
          
            { cta: "How we support scale-ups", to: "offerings" },
          ]
      },
      {
          title: "The ESG Passport: Navigating Cross-Border Market Entry for Climate Tech",
          slug: "cross-border-market-entry-esg-compliance-india-uk",
          category: "Market Access",
          date: "May 10, 2026",
          desc: "Expanding climate solutions across the India-UK-EU corridor requires more than a good product. It requires navigating a labyrinth of ESG compliance and regulatory standards.",
          content: [
            "Climate change is a global problem, which means climate solutions must scale globally. However, for a sustainable enterprise looking to expand from India to the UK/EU, or vice versa, the barriers to entry have evolved. Tariffs and traditional trade barriers have been replaced by stringent ESG compliance frameworks.",
            "We call this the need for an 'ESG Passport'. A biomaterials company in Pune looking to supply a fashion house in London doesn't just need to prove their product quality; they must prove their Scope 3 emissions compliance, their labor practices, and their alignment with the Carbon Border Adjustment Mechanism (CBAM).",
            "This regulatory labyrinth often prevents high-potential scale-ups from accessing lucrative international markets. A venture lab focusing on cross-border growth must prioritize 'International Expansion & Market Entry' through the lens of sustainability compliance. It involves mapping ESG disclosures, ensuring anti-greenwashing alignment with bodies like the CMA or ASCI, and developing a narrative that regulators trust.",
            "Beyond compliance, successful market entry requires strategic matchmaking. Startups need introductions to local investors who understand the specific thematic area—whether it's water resilience tech or waste-to-value solutions. They need local pilot partners to validate the technology in a new geographical context.",
            "The companies that will dominate the next decade of the green transition are those that view international ESG regulations not as a barrier, but as a competitive moat. By building operations that proactively comply with the highest global standards, these ventures unlock access to premium markets and dedicated impact capital.",
          
            { cta: "Explore Prvaah", to: "prvaah" },
          ]
      },
      {
          title: "The Alpha in Authenticity: Why Greenwashing Kills Valuation", 
          slug: "alpha-in-authenticity-greenwashing-kills-valuation",
          category: "Climate Finance", 
          date: "October 12, 2025", 
          desc: "Investors are no longer just looking at returns; they are looking at risk. Misleading environmental claims are becoming a primary liability in climate funding rounds.",
          content: [
            "In the high-stakes world of climate finance, the definition of 'alpha'—the excess return on an investment—is shifting. For decades, alpha was generated by information asymmetry or operational efficiency. Today, in the context of ESG (Environmental, Social, and Governance) investing, alpha is increasingly found in authenticity. Conversely, greenwashing has mutated from a PR nuisance into a tangible valuation killer.",
            "Recent regulatory crackdowns by bodies like the SEBI in India and the CMA in the UK have fundamentally altered the risk profile of sustainable investments. When a company exaggerates its environmental credentials, it isn't just misleading a consumer; it is mispricing an asset. Investors are waking up to the reality that a 'green premium' based on shaky claims is actually a 'green bubble' waiting to burst.",
            "Consider the due diligence process for Series A and B rounds in 2025. Funds are no longer satisfied with slide decks promising 'net-zero aspirations'. They are deploying forensic carbon accountants to audit supply chains. They are using satellite imagery to verify reforestation claims. In this environment, a brand narrative that outpaces actual impact is a liability. It suggests a management team that prioritizes optics over operations—a red flag for any serious investor.",
            "The financial implications of greenwashing allegations are severe. Beyond the immediate legal fines—which, under new guidelines like India's CCPA, are becoming substantial—there is the cost of the 'trust discount'. Once a brand is flagged for deceptive practices, the market applies a permanent discount to its future claims. Customer acquisition costs (CAC) spike as skepticism rises. Employee retention drops as purpose-driven talent exits. The brand equity, painstakingly built over years, evaporates overnight.",
            "For founders and CMOs, the lesson is clear: Authenticity is a competitive moat. Building a brand on verifiable, data-backed impact might be slower than spinning a green fairytale, but it builds a valuation that holds up under scrutiny. In the new economy, the most valuable asset on your balance sheet isn't just your IP; it's your integrity.",
          
            { cta: "Read the greenwashing playbook", to: "greenwashing" },
          ]
      },
      { 
          title: "Brand Strategy in the Age of the Cynical Consumer", 
          slug: "brand-strategy-age-of-cynical-consumer",
          category: "Brand Strategy", 
          date: "September 28, 2025", 
          desc: "How to build a narrative that survives the scrutiny of Gen Z. It's not about being perfect; it's about being transparent about your imperfections.",
          content: [
            "We have entered the age of the 'Cynical Consumer'. This isn't cynicism born of apathy, but of exhaustion. Gen Z and Millennial consumers have been bombarded with 'eco-friendly', 'natural', and 'sustainable' claims for the better part of a decade. They have seen oil giants claim to be green champions and fast fashion behemoths launch 'conscious' collections while doubling production. The result? A default setting of disbelief.",
            "For a brand strategist, this presents a terrifying challenge. How do you communicate impact when your audience assumes you are lying? The traditional marketing playbook—highlight the good, hide the bad, and polish the narrative—is dead. In 2025, perfection is suspicious. Vulnerability is the new currency of trust.",
            "The brands winning in this era are those practicing 'Radical Transparency'. They don't just publish a sustainability report; they publish their failures. They admit that their packaging is only 80% recyclable because the technology for the last 20% doesn't exist yet at scale. They openly discuss the carbon cost of their logistics and invite consumers to help solve it. This approach disarms the cynical consumer because it validates their skepticism.",
            "It shifts the dynamic from a brand preaching from a pedestal to a brand partnering with its community on a difficult journey. It transforms the brand promise from 'We are saving the world' to 'We are trying to do better, and here is the proof'.",
            "To build a narrative that survives scrutiny, marketers must move from 'storytelling' to 'truth-telling'. Every claim must be backed by accessible data (QR codes to supply chain maps, for instance). Adjectives must be replaced by nouns and numbers. 'Better for the planet' is a lie; '40% less water usage than industry average' is a fact. In the age of the cynical consumer, facts are the only story that sells.",
          
            { cta: "Stress-test your claims with Sense", to: "sense" },
          ]
      },
      {
          title: "Sustainable Media Planning in India: How Cutting Carbon Cuts Wasted Spend",
          slug: "sustainable-media-planning-india",
          category: "Sustainable Media",
          date: "July 30, 2026",
          desc: "Every rupee is being asked to justify itself. The inventory inflating your campaign's carbon footprint is usually the same inventory that was never going to perform.",
          content: [
            "Two publishers can serve the same creative to the same person. One does it at roughly three times the emissions of the other.",
            "That is a fact about the internet. What makes it useful is that the heavy one is usually also the expensive one.",
            { heading: "Where the rupee actually goes" },
            "The reason one placement burns more energy is rarely its content. It is the ad clutter on the page. The programmatic supply path with six intermediaries each taking a margin. The made-for-advertising site built to harvest impressions no human will ever look at. The invalid traffic. The ad that technically served but never entered anyone's viewport.",
            "Every one of those burns electricity. Every one of those was also paid for out of your budget, and returned nothing.",
            "So when you strip out the inventory inflating a campaign's footprint, you are mostly stripping out inventory that was never going to perform. Fewer intermediaries means more of each rupee reaching actual media. Higher viewability means you are paying for ads that were seen. Less invalid traffic means fewer impressions served to bots.",
            "None of that is a climate argument. It is a media efficiency argument that happens to have a climate consequence.",
            { heading: "Why this year in particular" },
            "Marketing budgets are under a kind of scrutiny they have not faced in a while. Every line is being asked what it returned. In that room, sustainability is usually the first thing cut, read as a cost you carry for reputational reasons rather than a lever that moves the number.",
            "We would argue that gets it backwards, and that the framing is what is wrong rather than the spend.",
            "If you told a CFO you had found a way to stop paying for impressions no human sees, that is not a sustainability initiative. That is competent buying. The fact that the same decision cuts emissions is real and worth reporting, but it is the second-order benefit, not the reason to do it.",
            { heading: "What the signals actually are" },
            "Carbon intensity, supply path length, inventory quality, invalid traffic rates, publisher governance. All of it is knowable before you commit budget. Used at planning stage they behave like performance signals. Used after the campaign they are just reporting.",
            "That is the whole shift: sustainability data as a planning input rather than a post-campaign PDF.",
            { heading: "What we still do not know" },
            "We do not have a defensible benchmark for what good looks like on an Indian media plan yet. The market average we are seeing sits around 45 out of 100 on the index we are building with The GoodNet. That is an early read on a small sample, and we would treat it as a starting point rather than a standard.",
            "We are also not certain how far the correlation holds. On the plans we have looked at, cleaner inventory has consistently been better inventory. Whether that stays true at every budget level and in every category, we genuinely do not know yet.",
            { heading: "Where we have got to" },
            "Enough plans in to think the trade-off most marketers assume, that responsible media costs you performance, mostly is not real. Not enough to call it settled.",
            "If you are weighing the same question, or you have seen data pointing the other way, we would like to hear it. Send us a site list and we will tell you what we see, including if the honest answer is that there is not much to gain.",
            { cta: "See the ESG Media Index", to: "esg-media-index" },
          ],
       },
      { 
          title: "Decoding the India-UK Climate Corridor", 
          slug: "decoding-india-uk-climate-corridor",
          category: "Climate Funding", 
          date: "August 30, 2025", 
          desc: "Analyzing the flow of capital and compliance between two major economies. How Prvaah is bridging the gap for MSMEs.",
          content: [
            "The economic corridor between India and the UK is undergoing a green transformation. With the Free Trade Agreement (FTA) negotiations placing a heavy emphasis on sustainability standards, a new 'Climate Corridor' is emerging. This represents a massive opportunity—and a significant barrier—for Indian enterprises, particularly MSMEs.",
            "Historically, trade barriers were tariffs. Today, they are non-tariff barriers rooted in ESG compliance. The UK's Carbon Border Adjustment Mechanism (CBAM) and strict disclosure requirements mean that Indian exporters can no longer compete on cost alone. They must compete on carbon. An Indian textile manufacturer is now effectively selling two products: the fabric itself, and the data proving its sustainable origin.",
            "This is where the funding gap becomes critical. Transitioning to renewable energy, auditing supply chains, and obtaining certifications requires capital. Yet, global climate finance has been slow to reach the 'missing middle'—the mid-sized enterprises that form the backbone of the Indian supply chain. UK investors are keen on green assets, but they struggle to verify the ESG credentials of Indian SMEs.",
            "This is the gap Prvaah was built to bridge. By standardizing compliance data and providing a credible 'ESG Passport' for Indian businesses, we unlock access to UK green finance. We are seeing a shift from generalist FDI to specialized 'Impact Capital' flows. UK funds are looking for Indian partners who are not just compliant with today's laws, but resilient to tomorrow's climate risks.",
            "For Indian businesses, the message is urgent: ESG is no longer a 'nice-to-have' for export; it is a license to operate. The India-UK Climate Corridor is open for business, but only for those who have the data to prove they belong there.",
          
            { cta: "Explore Prvaah", to: "prvaah" },
          ]
      },
      { 
          title: "From Storytelling to Storydoing", 
          slug: "from-storytelling-to-storydoing",
          category: "Climate Communication", 
          date: "August 10, 2025", 
          desc: "Moving beyond 'raising awareness'. How effective climate communication drives measurable behavioral change in the global south.",
          content: [
            "For too long, climate communication has been obsessed with 'raising awareness'. We have spent billions on sad polar bear documentaries and terrifying graphs. The result? Awareness is at an all-time high, but behavior change is lagging woefully behind. This creates the 'Value-Action Gap': consumers say they care, but their purchases don't reflect it.",
            "Marketing must evolve from 'Storytelling'—telling people why they should care—to 'Storydoing'—designing interventions that make it easier for them to act. In the Global South, where price sensitivity is high and infrastructure is often lacking, this distinction is critical. You cannot guilt-trip a consumer into buying a more expensive sustainable product. You have to design a better value proposition.",
            "Storydoing means embedding sustainability into the user experience. It's not an ad campaign; it's a product feature. It's the shampoo bar that saves money per wash. It's the electric scooter that is cheaper to run than a petrol bike. It's the repair service that is more convenient than buying new.",
            "Effective climate communication in 2025 uses the principles of behavioral economics. We need to use 'nudges'—default choices, social proof, and immediate rewards—to bridge the gap. Instead of preaching about a distant net-zero future, we must highlight the immediate personal benefits of sustainable choices: health, savings, and status.",
            "The brands that will define the next decade are those that stop talking about the problem and start designing the solution into the customer's daily life. They don't just tell a green story; they help the customer live one.",
          
            { cta: "What we do", to: "offerings" },
          ]
      },
      { 
          title: "The Circular Economy Playbook for Fashion", 
          slug: "circular-economy-playbook-fashion",
          category: "Sustainable Marketing", 
          date: "July 22, 2025", 
          desc: "A practical guide to shifting from linear extraction to circular value creation without alienating your core customer base.",
          content: [
            "The fashion industry is stuck on a treadmill of overproduction. The linear 'take-make-waste' model is hitting physical and legislative limits. With new Extended Producer Responsibility (EPR) laws coming into force globally, brands are now financially responsible for the end-of-life of their garments. The only way out is circularity.",
            "But for many mass-market brands, 'circularity' feels like a threat to the bottom line. If we sell durable, repairable clothes, won't we sell less? This fear is based on a misunderstanding of the circular business model. Circularity isn't about selling less; it's about monetizing the same product multiple times.",
            "The playbook for 2025 involves decoupling revenue from resource extraction. Resale is the obvious first step. By launching branded resale platforms, companies capture the margin on second-hand sales that was previously going to third-party platforms like Depop or ThredUp. It turns a product from a one-time sale into a recurring revenue asset.",
            "Repair is the second pillar. Positioning repair as a premium service builds immense brand loyalty. It transforms the relationship with the customer from transactional to relational. The jacket you repair is the jacket you keep—and the brand you trust.",
            "Finally, design for disassembly. Marketing needs to educate consumers on *why* a mono-material shirt is better. We need to make 'recyclable' a tangible feature, not a hidden tag. The transition to circular fashion is a marketing challenge as much as a supply chain one. We have to make 'old' feel like 'better'. We have to make longevity aspirational. The brands that master this circular narrative will not only save on EPR fees; they will own the future of fashion.",
          
            { cta: "Check your claims with Sense", to: "sense" },
          ]
      }
    ]
  },
  prvaah: {
    title: "prvaah",
    sanskritMeaning: "flow in Sanskrit",
    description1: (
      <span>
        Created by <a href="https://www.everloop.agency/" target="_blank" rel="noreferrer" className="text-teal-600 hover:underline font-bold">Everloop.Agency</a> and <a href="https://www.hooop.in" target="_blank" rel="noreferrer" className="text-teal-600 hover:underline font-bold">HOOOP Collective</a>, Prvaah guides enterprises across India, EU, and the UK in ESG compliance and responsible expansion.
      </span>
    ),
    // The five stages are a sequence — the page is named "flow" — so they render
    // as a connected journey rather than as disconnected cards.
    stages: [
      { icon: "shield", label: "Compliance", short: "Enter with credibility", desc: "ESG disclosure mapping and anti-greenwashing assessment." },
      { icon: "zap", label: "Capability", short: "Equip your team", desc: "Sustainability training, leadership workshops and industry playbooks." },
      { icon: "globe", label: "Access", short: "Navigate new markets", desc: "Market intelligence, cultural insight and investor introductions." },
      { icon: "file", label: "Pilots", short: "Test and adapt", desc: "Go-to-market pilots, product validation and circular supply chains." },
      { icon: "trending", label: "Scale", short: "Expand responsibly", desc: "Long-term ESG integration, green media and impact measurement." },
    ],
    circularity: {
      icon: "recycle",
      label: "Circularity impact, measured and articulated",
      desc: "If you need to show the industry and your customers what your circularity actually delivers, we can help you measure it, improve it, and say it in a way that lands with your audience while keeping you clear of greenwashing risk.",
    },
    testimonials: [
      {
        text: "At Everloop, we see Pravah as a continuum — not just an entry point but a journey. From ESG alignment to market pilots and long-term resilience, this platform helps sustainable enterprises flow between the UK and India with confidence, purpose, and accountability.",
        name: "Marina Bradford",
        role: "Director, Everloop.Agency",
        image: "/Marina Bradford.jpg"
      },
      {
        text: "The India-UK agreement creates a genuine opportunity for sustainable enterprises to expand into new markets. It also strengthens digital trade, supports sustainability goals, and empowers MSMEs and inclusive enterprises to expand globally.",
        name: "Arvind Nair",
        role: "Founding Partner, HOOOP",
        image: "/Arvind.jpg"
      }
    ]
  },
  offerings: [
    {
      title: "Marketing-Led Consulting",
      desc: "Most of what we do starts here. Strategy and communication for businesses whose growth depends on being believed, not just heard.",
      items: [
        "Building brands in a digital-first world",
        "Brand, creative and narrative strategy",
        "Sustainability communication audits",
        "Audience discovery and segmentation",
        "Claim substantiation and greenwashing risk",
      ],
      linkLabel: "Check a claim with Sense",
      linkTo: "sense",
    },
    {
      title: "Media Sustainability",
      desc: "Media planning that uses sustainability as a live performance signal rather than something you report on once the campaign has ended.",
      items: [
        "Planning and managing media budgets at scale",
        "ESG media planning and green media buying",
        "Campaign carbon measurement and reporting",
        "Media intelligence and performance analysis",
        "Benchmarking against the ESG Media Index",
      ],
      linkLabel: "See the ESG Media Index",
      linkTo: "esg-media-index",
    },
    {
      title: "Policy, Advocacy & Stakeholder Engagement",
      desc: "The parts of sustainability that live outside marketing — regulators, communities, boards and the people your business answers to.",
      items: [
        "Stakeholder engagement, PR and communications",
        "Environmental law and policy advisory",
        "Circular economy policy and systems design",
        "Community engagement and advocacy",
      ],
    },
    {
      title: "Venture Growth & Market Access",
      desc: "For climate and circular ventures trying to cross the gap between a working pilot and commercial scale.",
      items: [
        "Investment and funding readiness",
        "Market access and commercial partnerships",
        "Offtake and deployment support",
        "Cross-border expansion across India, the UK and EU",
      ],
      linkLabel: "Explore Prvaah",
      linkTo: "prvaah",
    },
  ],
  collective: [
    {
      name: "Arvind Nair",
      role: "Growth & Sustainability",
      desc: "Helping build marketing as a force for sustainable business to help narrow the value action gap. Formerly Global VP at Mirum India.",
      img: "/Arvind.jpg",
      linkedin: "https://www.linkedin.com/in/arvindbnair/"
    },
    {
      name: "Radhika Sharda",
      role: "Stakeholder Engagemnt, PR and Communications",
      desc: "With 20+ years of experience in brand and communications, Radhika specializes in translating sustainability visions into execution-ready frameworks, driving organizational excellence and scalable growth.",
      img: "/radhika.jpg",
      linkedin: "https://www.linkedin.com/in/radhika-sharda-83129b19/"
    },
    {
      name: "Maya D'Souza",
      role: "Circular Economy Policy",
      desc: "Expert on circular economy policy and practice. Focused on systems design and policy frameworks for sustainable impact.",
      img: "/MayaF.png",
      linkedin: "https://www.linkedin.com/in/maya-de-souza-12b16aa/"
    },
    {
      name: "Paromita Mukhopadhyay",
      role: "Environmental Law & Policy",
      desc: "Leads environmental law and policy thinking at HOOOP with 20+ years of experience. Consultant for funds monitoring regulatory and policy developments.",
      img: "/Paromita.jpg",
      linkedin: "https://www.linkedin.com/in/paromita-mukhopadhyay-nair-bb24447/"
    },
    {
      name: "Shujoy Dutta",
      role: "Brand Strategy",
      desc: "Blending brand with sustainability to craft  impactful brand strategies.",
      img: "/shujoy.jpg",
      linkedin: "https://www.linkedin.com/in/shujoy-dutta-05599219/"
    },
    {
      name: "Rachana Lokhande",
      role: "Sustainable Media Strategy",
      desc: "25+ years leadership in media & tech. Former Co-CEO of Kinetic Worldwide. Advancing the concept of sustainable media to drive climate-positive impact.",
      img: "/Rachna.jpg",
      linkedin: "https://www.linkedin.com/in/rachanadlokhande/"
    }
  ],
  models: [
    {
      title: "CONSULT",
      headline: "We help grow businesses that work with conscious consumers.",
      desc: "Our consulting model is designed for brands looking to integrate sustainability deeply into their marketing DNA, moving beyond compliance to customer connection.",
      iconType: "briefcase"
    },
     {
      title: "PARTNER",
      headline: "Sometimes we partner rather than consult.",
      desc: "When an idea is genuinely interesting, we get involved at a more fundamental level — bringing strategy, investment and network to drive growth and scale alongside you, rather than working to a brief.",
      iconType: "trending"
    },
    {
      title: "COLLECTIVE",
      headline: "Bringing together an ecosystem focused on sustainability.",
      desc: "Think of us like a lab. We are a collective of thinkers, technologists, communicators, creatives, designers, planners, and policy folks working to accelerate change.",
      iconType: "users"
    }
  ],
  research: {
    title: "Research & Reports",
    subtitle: "Intelligence for the modern sustainable marketing agency.",
    intro: "Our reports combine rigorous data analysis with actionable insights on Circular Economy India, Sustainable Media, and Greenwashing in Marketing.",
    reports: [
        { title: "The State of Greenwashing in Marketing: India 2025", category: "Compliance", desc: "A comprehensive audit of 500+ Indian D2C brands. We analyze how greenwashing in marketing is evolving under new CCPA guidelines and what it means for your brand." },
        { title: "Sustainable Marketing in India: The Consumer Paradox", category: "Consumer Behavior", desc: "Decoding the value-action gap. Why 78% of Indians want sustainable products but only 12% buy. A guide for sustainability marketing professionals." },
        { title: "Circular Economy India: The Fashion Playbook", category: "Operations", desc: "Moving beyond recycling. Case studies on how shifting to a circular economy in India impacts the bottom line for mid-sized apparel brands." },
        { title: "Sustainable Media: Decarbonizing Digital Ads", category: "Digital Impact", desc: "The unseen carbon footprint of your ad spend. Benchmarks and best practices for implementing a sustainable media strategy." },
        { title: "The Future of the Sustainable Marketing Agency", category: "Industry Trends", desc: "How agencies are evolving from 'selling green' to 'designing growth'. What CMOs need to look for in their next partner." }
    ]
  }
};

// ==========================================
// SENSE MASTER DETECTION ENGINE
// Regulatory-aligned greenwashing detection
// Sources: CCPA 2024, ASCI Code, FTC Green Guides
// ==========================================

const SENSE_TERMS = [

// ==========================================
// REGULATOR PACK v1 — ADVANCED CLAIM LOGIC
// ==========================================

// Absolute environmental benefit claims
{
pattern: /\b(100%|completely|totally|zero|perfectly)\s+(eco|green|clean|safe|natural|friendly|sustainable)\b/i,
risk: "Critical",
category: "Absolute Environmental Claim",
reference: "CCPA Clause 6(5), ASCI Code",
tip: "Absolute environmental claims imply zero harm. Regulators require full lifecycle proof."
},

// Standalone absolute wording
{
pattern: /\b(100%|completely|totally|zero impact|no impact)\b/i,
risk: "High",
category: "Absolute Claim Language",
reference: "CCPA Clause 6(5)",
tip: "Absolute qualifiers require rigorous substantiation."
},

// Vague eco positioning
{
pattern: /\b(planet friendly|earth friendly|nature friendly|environment friendly|eco conscious)\b/i,
risk: "High",
category: "Vague Environmental Claim",
reference: "CCPA Clause 5(a), ASCI Code",
tip: "Generic environmental claims must specify measurable impact."
},

// Implied future benefit language
{
pattern: /\b(better future|greener tomorrow|for the planet|for earth|for tomorrow)\b/i,
risk: "Medium",
category: "Implied Environmental Benefit",
reference: "FTC Green Guides",
tip: "Implied environmental benefits require evidence and clarity."
},

// Net zero + carbon neutral claims
{
pattern: /\b(net[-\s]?zero|carbon neutral|climate neutral)\b/i,
risk: "High",
category: "Carbon Claim",
reference: "CCPA Clause 7, ASCI Code",
tip: "Carbon claims require disclosed methodology, scope, and reliance on offsets."
},

// Future pledge claims
{
pattern: /\b(net[-\s]?zero|carbon neutral).*(by|before)\s+\d{4}\b/i,
risk: "High",
category: "Future Environmental Commitment",
reference: "CCPA Clause 7",
tip: "Future targets must include roadmap, interim milestones, and verification."
},

// Offset language
{
pattern: /\b(offset|compensate|neutralise|neutralize)\b/i,
risk: "High",
category: "Offset Claim",
reference: "CCPA Clause 7",
tip: "Offset claims must disclose scale, permanence, and certification."
},

// Tree planting claims
{
pattern: /\bplant(ing)?\s+(a\s+)?(tree|forest|mangrove|coral)\b/i,
risk: "High",
category: "Offset-Based Claim",
reference: "CCPA Clause 7",
tip: "Tree planting does not equal carbon neutrality without verified accounting."
},
{
pattern: /\b(recycled|biodegradable|compostable|recyclable)\b(?![^.]*\b(\d+%|percent|certified|ISO|GRS|FSC)\b)/i,
risk: "High",
category: "Unsupported Sustainability Claim",
reference: "CCPA 2024 Clause 5",
tip: "Material sustainability claims must include measurable proof or certification."
},
// Comparative environmental claims
{
pattern: /\b(less|lower|reduced|better)\s+(carbon|emissions|impact|footprint)\b/i,
risk: "Medium",
category: "Comparative Claim",
reference: "CCPA Clause 6(4)",
tip: "Comparative claims must clearly state baseline comparison."
},

// Nature-derived implication
{
pattern: /\b(natural|botanical|plant[-\s]?based|nature[-\s]?derived)\b/i,
risk: "Medium",
category: "Nature-Based Claim",
reference: "CCPA Clause 5(a)",
tip: "Natural ingredients do not automatically mean lower environmental impact."
},

// Sustainability blanket claims
{
pattern: /\b(sustainable|eco|green)\s+(product|brand|company|solution|service|packaging|material|fabric|process|technology)\b/i,
risk: "High",
category: "Unqualified Sustainability Claim",
reference: "CCPA Clause 5(a)",
tip: "Calling something sustainable requires lifecycle substantiation."
},

// Ethical company claims
{
pattern: /\b(responsible|ethical|purpose[-\s]?driven|values[-\s]?led)\s+(brand|company|business|organisation|organization)\b/i,
risk: "High",
category: "Unqualified Ethical Claim",
reference: "ASCI Code",
tip: "Ethical claims imply organisation-wide conduct. Must be provable."
},

// Environmental superiority claims
{
pattern: /\b(best|cleanest|greenest|most sustainable)\b/i,
risk: "High",
category: "Superlative Claim",
reference: "FTC Green Guides",
tip: "Superlative claims require comparative evidence across market."
},

// Certification implication
{
pattern: /\b(certified|approved|verified)\b/i,
risk: "Medium",
category: "Certification Claim",
reference: "CCPA Clause 5",
tip: "Must clearly state certifying body and scope."
},

// Broad environmental benefit phrases
{
pattern: /\b(good for nature|good for earth|safe for planet)\b/i,
risk: "High",
category: "Unverifiable Benefit Claim",
reference: "CCPA Clause 5(a)",
tip: "Broad benefit claims must specify measurable outcomes."
},

// Zero harm language
{
pattern: /\b(no harm|harmless|non harmful|non-toxic)\b/i,
risk: "High",
category: "Absolute Safety Claim",
reference: "CCPA Clause 6(5)",
tip: "Safety claims must be scientifically substantiated."
},

// Emissions reduction claims
{
pattern: /\b(reduces?|cuts?|eliminates?)\s+(carbon|emissions|pollution)\b/i,
risk: "Medium",
category: "Impact Reduction Claim",
reference: "CCPA Clause 6",
tip: "Must disclose measurement method and baseline."
},
// sustainability positioning language
{
pattern: /\b(committed to sustainability|driven by sustainability|sustainability focused)\b/i,
risk: "High",
category: "Unqualified Sustainability Positioning",
reference: "ASCI Code",
tip: "Organisational sustainability claims require measurable disclosures."
},

// climate leadership claims
{
pattern: /\b(climate leader|climate positive|climate friendly)\b/i,
risk: "High",
category: "Climate Claim",
reference: "FTC + CCPA",
tip: "Leadership or positive impact claims require comparative and lifecycle proof."
},

// mission language implying impact
{
pattern: /\b(save(s|ing)? the planet|protect(s|ing)? the earth)\b/i,
risk: "Critical",
category: "Exaggerated Impact Claim",
reference: "CCPA Clause 5(a)",
tip: "Exaggerated impact claims are considered misleading unless fully substantiated."
},

{
  pattern: /\bmade from recycled\b/i,
  risk: "High",
  category: "Misleading Composition Claim",
  reference: "CCPA 2024 Clause 6(1)",
  tip: "Implies entire product is recycled. Must disclose actual proportion."
},

];
   
const GLOSSARY = [

  // --- CORE CONCEPTS ---
  { term: "Greenwashing", def: "Making misleading or unsubstantiated claims about environmental benefits." },
  { term: "Environmental Claim", def: "Any statement suggesting a product or company has environmental benefits." },
  { term: "Sustainability Claim", def: "A claim that a product, service, or company is environmentally or socially responsible." },

  // --- EMISSIONS + CLIMATE ---
  { term: "Carbon Neutral", def: "Balancing emitted carbon with equivalent offsets or removals." },
  { term: "Net Zero", def: "Reducing emissions as much as possible and neutralizing the remainder." },
  { term: "Climate Positive", def: "Removing more emissions than produced." },
  { term: "Scope 1 Emissions", def: "Direct emissions from owned or controlled sources." },
  { term: "Scope 2 Emissions", def: "Indirect emissions from purchased energy." },
  { term: "Scope 3 Emissions", def: "Indirect emissions across the value chain." },

  // --- CLAIM RISK TYPES ---
  { term: "Vague Claim", def: "A statement that sounds environmental but lacks measurable proof." },
  { term: "Absolute Claim", def: "A claim suggesting zero impact or total safety." },
  { term: "Comparative Claim", def: "A claim stating something is better without a defined baseline." },
  { term: "Implied Benefit Claim", def: "Language suggesting environmental benefit without evidence." },
  { term: "Future Commitment Claim", def: "A promise of future environmental performance." },
  { term: "Offset Claim", def: "A claim that impact is neutralized through offsets." },
  { term: "Puffery", def: "Promotional language that sounds impressive but has no measurable meaning." },

  // --- SCIENCE + VALIDATION ---
  { term: "Lifecycle Assessment (LCA)", def: "Measurement of environmental impact across a product's entire life." },
  { term: "Substantiation", def: "Evidence required to support a claim." },
  { term: "Third-Party Verification", def: "Independent confirmation of a claim's accuracy." },
  { term: "Certification", def: "Formal approval by a recognized authority." },
  { term: "Traceability", def: "Ability to track materials from origin to final product." },

  // --- MATERIAL + PRODUCT TERMS ---
  { term: "Biodegradable", def: "Able to break down naturally over time." },
  { term: "Compostable", def: "Able to break down into non-toxic components in compost conditions." },
  { term: "Recyclable", def: "Able to be processed into new materials." },
  { term: "Upcycled", def: "Waste transformed into higher-value materials." },
  { term: "Plant-Based", def: "Derived from plants instead of fossil sources." },

  // --- BUSINESS + ESG ---
  { term: "ESG", def: "Environmental, Social, and Governance performance factors." },
  { term: "Impact Reporting", def: "Disclosure of measurable sustainability results." },
  { term: "Responsible Sourcing", def: "Obtaining materials ethically and sustainably." },
  { term: "Circular Economy", def: "A system where materials are reused instead of discarded." },
  { term: "Regenerative", def: "Restoring ecosystems rather than just reducing harm." },

  // --- MARKETING + POLICY ---
  { term: "Disclosure", def: "Providing complete information about a claim." },
  { term: "Material Information", def: "Details that influence consumer decisions." },
  { term: "Green Claim Guidelines", def: "Regulatory rules governing environmental marketing." },
  { term: "Compliance", def: "Meeting regulatory standards." },
  { term: "Misleading Claim", def: "A statement that creates a false impression." }

];


const RISK_ORDER = { Low: 1, Medium: 2, High: 3, Critical: 4 };
const getOverallRisk = (findings) => {
    if (!findings || findings.length === 0) return "Low";
    const max = findings.reduce(
        (acc, f) => (RISK_ORDER[f.risk] > acc ? RISK_ORDER[f.risk] : acc),
        0
    );
    return Object.entries(RISK_ORDER).find(([, v]) => v === max)?.[0] || "Low";
};
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// ==========================================
// ⚙️ SYSTEM CODE
// ==========================================

// --- Icon Mapping Strategy ---
const iconMap = {
  coins: Coins,
  briefcase: Briefcase,
  scan: ScanLine,
  shield: Shield,
  file: FileText,
  micoff: MicOff,
  check: CheckCircle,
  eye: Eye,
  alert: AlertTriangle,
  info: Info,
  zap: Zap,
  chart: BarChart3,
  x: X,
  users: Users,
  globe: Globe,
  trending: TrendingUp,
  leaf: Leaf,
  scale: Scale,
  tag: Tag,
  userx: UserX,
  flag: Flag,
  recycle: RefreshCw
};

const getIconComponent = (name) => iconMap[name] || Users;

// --- Utility: Image Fallback ---
const ImageWithFallback = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  const handleError = () => {
    setImgSrc("https://placehold.co/400x400?text=Image+Not+Found"); 
  };
  
  return <img src={imgSrc} alt={alt} className={className} onError={handleError} loading="lazy" />;
};

// --- SEO Head Manager -----------------------------------------------------
// Updates <title>, meta description, canonical link, and injects JSON-LD
// structured data whenever the visible section/post changes. Works without
// a router or SSR — search engines and AI crawlers that render JS will see
// the correct per-page metadata.
const SITE_URL = "https://www.hooop.in";

const setMetaTag = (attrName, attrValue, content) => {
  let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const setCanonical = (url) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
};

const setJsonLd = (id, data) => {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  if (data) {
    script.textContent = JSON.stringify(data);
  } else {
    script.textContent = "";
  }
};

const useSeo = ({ title, description, path, jsonLd }) => {
  useEffect(() => {
    // A null path means "this render is handled by a child component" — bail out
    // rather than overwrite the canonical the child already set. React runs child
    // effects before parent effects, so without this the parent wins.
    if (!path) return;
    if (title) document.title = title;
    if (description) setMetaTag("name", "description", description);
    const url = `${SITE_URL}${path === "/" ? "" : path}`;
    setCanonical(url);
    setMetaTag("property", "og:title", title || SITE_CONTENT.brand.name);
    setMetaTag("property", "og:description", description || "");
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:type", "website");
    setMetaTag("name", "twitter:card", "summary_large_image");
    setJsonLd("page-jsonld", jsonLd || null);
    window.scrollTo(0, 0);
  }, [title, description, path, jsonLd]);
};

// Organization schema — injected once, on mount, and left in place.
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HOOOP Collective",
  "url": SITE_URL,
  "logo": `${SITE_URL}/THE-HOOO-COLLECTIVEP_without-shadow.png`,
  "email": "hello@hooop.in",
  "sameAs": [
    "https://www.linkedin.com/company/hooopcollective/",
    "https://www.instagram.com/hooopcollective/"
  ],
  "description": SITE_CONTENT.hero.subtitle
};


// --- Components ---
const ConcentricCircles = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
    <div className="absolute w-[800px] h-[800px] border border-white/40 rounded-full" />
    <div className="absolute w-[1200px] h-[1200px] border border-white/30 rounded-full" />
    <div className="absolute w-[1600px] h-[1600px] border border-white/20 rounded-full" />
    <div className="absolute -right-[20%] -top-[20%] w-[1000px] h-[1000px] border border-white/20 rounded-full opacity-50" />
  </div>
);

const HooopLogo = ({ className = "w-10 h-10" }) => (
  <ImageWithFallback src={SITE_CONTENT.brand.logoImage} alt="HOOOP Logo" className={`object-contain ${className}`} />
);

const SoftCard = ({ children, className = "", onClick, hoverEffect = true, id = "" }) => (
  <div id={id} onClick={onClick} className={`bg-[#E0E5EC] rounded-[30px] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] ${hoverEffect ? 'hover:shadow-[inset_9px_9px_16px_rgb(163,177,198,0.6),inset_-9px_-9px_16px_rgba(255,255,255,0.5)] cursor-pointer' : ''} transition-all duration-300 ease-in-out ${className}`}>
    {children}
  </div>
);

const VerticalPill = ({ height = "h-64", className = "" }) => (
  <div className={`w-16 ${height} bg-[#E0E5EC] rounded-full shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] ${className}`} />
);

const ScrollReveal = ({ children, className = "", delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => setIsVisible(entry.isIntersecting)));
        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);
    return <div ref={domRef} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>{children}</div>;
};

// --- COMPONENTS FOR GREENWASHING VIEW ---
const StatBar = ({ label, percentage, color }) => (
    <div className="mb-4">
        <div className="flex justify-between items-end mb-1">
            <span className="text-sm font-medium text-gray-600">{label}</span>
            <span className="text-sm font-bold text-gray-900">{percentage}%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
        </div>
    </div>
);

const FlipCard = ({ frontTitle, frontIcon: FrontIcon, backText, backStat, color }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className="relative w-full h-64 perspective-1000 cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`w-full h-full relative preserve-3d transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                <div className="absolute inset-0 backface-hidden bg-[#F0F0F3] rounded-2xl shadow-[-5px_-5px_10px_#FFFFFF,5px_5px_10px_#AEAEC040] flex flex-col items-center justify-center p-6 text-center border-2 border-transparent hover:border-gray-200 transition-colors">
                    <div className={`p-4 rounded-full mb-4 text-white shadow-lg`} style={{backgroundColor: color}}><FrontIcon size={32} /></div>
                    <h3 className="text-lg font-bold text-gray-800">{frontTitle}</h3>
                    <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest flex items-center gap-1">Tap to Reveal <ArrowRight size={12} /></p>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-900 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-center text-white">
                    <p className="text-3xl font-bold text-green-400 mb-2">{backStat}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{backText}</p>
                </div>
            </div>
        </div>
    );
};

const ArchetypeCard = ({ title, type, icon: Icon, description, color, subtext, stat }) => (
    <div className="relative w-full h-full min-h-[420px] bg-[#F0F0F3] rounded-[2.5rem] p-8 shadow-[-10px_-10px_30px_#FFFFFF,10px_10px_30px_#AEAEC040] flex flex-col justify-between items-start transition-all duration-500 hover:shadow-xl border border-transparent" style={{ borderColor: color }}>
        <div className="w-full flex flex-col h-full">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shrink-0`} style={{ backgroundColor: color }}><Icon size={24} /></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-4">{type}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
            {stat && (
                <div className="bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/50 mb-4 shadow-sm mt-auto">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1">Reality Check</p>
                    <p className="text-xs font-bold text-gray-800 leading-tight">{stat}</p>
                </div>
            )}
        </div>
        <div className="w-full pt-6 border-t border-gray-200 mt-auto">
            <span className="text-xs font-semibold block" style={{ color: color }}>{subtext}</span>
        </div>
    </div>
);

const SinCard = ({ number, title, description, icon: Icon }) => (
    <div className="min-w-[300px] md:min-w-[350px] bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] mr-6 border border-white/50 shadow-sm hover:shadow-md transition-all flex-shrink-0">
        <div className="flex justify-between items-start mb-6">
            <div className="bg-red-50 p-3 rounded-2xl text-red-500"><Icon size={24} /></div>
            <span className="text-6xl font-black text-gray-100 font-serif -mt-4 opacity-50">{number}</span>
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-3">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const TrackerCard = ({ title, description, icon: Icon }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
        <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                <Icon size={20} />
            </div>
            <h4 className="font-bold text-gray-800">{title}</h4>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const BlogPostView = ({ post, onBack, navigateTo }) => {
  useSeo({
    title: `${post.title} | HOOOP`,
    description: post.desc,
    path: `/thinking/${post.slug}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.desc,
      "datePublished": post.date,
      "author": { "@type": "Organization", "name": "HOOOP Collective" },
      "publisher": { "@type": "Organization", "name": "HOOOP Collective", "url": SITE_URL },
      "mainEntityOfPage": `${SITE_URL}/thinking/${post.slug}`
    }
  });

  return (
  <div className="min-h-screen pt-24 pb-20 px-6 animate-fade-in-up">
    <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative">
      <button 
        onClick={onBack}
        className="absolute top-8 right-8 p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors z-10"
      >
        <X size={20} />
      </button>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
           <span className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest">{post.category}</span>
           <span className="text-gray-400 text-xs font-mono">{post.date}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">{post.title}</h1>
        <p className="text-xl text-gray-500 font-medium leading-relaxed border-l-4 border-teal-500 pl-4">{post.desc}</p>
      </div>

      {/* Content items are plain strings (paragraphs) for backwards compatibility,
          or {heading} / {cta,to} objects for structure and internal links. */}
      <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
         {post.content.map((item, idx) => {
            if (typeof item === "string") return <p key={idx}>{item}</p>;
            if (item.heading) return (
              <h2 key={idx} className="text-2xl font-bold text-gray-900 !mt-10 !mb-3">{item.heading}</h2>
            );
            if (item.cta) return (
              <p key={idx}>
                <button
                  type="button"
                  onClick={() => navigateTo && navigateTo(item.to)}
                  className="inline-flex items-center gap-2 font-bold text-teal-600 hover:text-teal-800 transition-colors"
                >
                  {item.cta} <ArrowRight size={15} />
                </button>
              </p>
            );
            return null;
         })}
      </div>

      <div className="mt-12 pt-12 border-t border-gray-100 text-center">
         <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-4">Share this perspective</p>
         <div className="flex justify-center gap-4">
            <button className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"><Linkedin size={20} /></button>
            <button className="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors" onClick={() => navigator.clipboard.writeText(window.location.href)}><Copy size={20} /></button>
         </div>
      </div>
    </div>
  </div>
  );
};

const SENSE_CONSENT_KEY = "hooop_sense_consent_v1";
const CONSENT_NOTICE_VERSION = "2026-07-29";

const PrivacyView = () => {
  useSeo({
    title: "Privacy Notice | HOOOP Collective",
    description: "How the HOOOP Collective collects, uses, and protects personal data provided through Sense, in line with India's Digital Personal Data Protection Act, 2023.",
    path: "/privacy"
  });

  const H = ({ children }) => <h2 className="text-lg font-bold text-gray-900 mt-8 mb-2">{children}</h2>;

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade text-gray-600 leading-relaxed pb-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Notice</h1>
      <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-8">Last updated: 29 July 2026</p>

      <H>Who is collecting your data</H>
      <p>
        This site and the Sense tool are operated by The HOOOP Collective ("HOOOP", "we", "us"),
        reachable at <a href="mailto:hello@hooop.in" className="text-teal-600 font-bold hover:underline">hello@hooop.in</a>.
        Under India's Digital Personal Data Protection Act, 2023 (DPDP Act), HOOOP is the Data
        Fiduciary for the personal data described below.
      </p>

      <H>What we collect</H>
      <p>
        Your email address, which you provide once before running your first check in Sense. The
        sustainability claims you paste into Sense are analysed entirely in your browser and are
        never sent to or stored on our servers.
      </p>

      <H>Why we collect it</H>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li><strong className="text-gray-800">Follow-up:</strong> so our team can contact you about your results or HOOOP's services.</li>
        <li><strong className="text-gray-800">Product research:</strong> to understand who uses Sense and how, so we can improve it.</li>
      </ul>
      <p className="mt-3">We will not use your email for any other purpose without asking you again.</p>

      <H>Your consent</H>
      <p>
        We collect your email only if you tick the consent box and submit it. The box is never
        pre-ticked. You can withdraw your consent at any time, as easily as you gave it, by emailing{" "}
        <a href="mailto:hello@hooop.in?subject=Withdraw%20consent%20-%20Sense" className="text-teal-600 font-bold hover:underline">hello@hooop.in</a>{" "}
        with the subject "Withdraw consent - Sense". We will delete your email within 30 days of such a request.
      </p>

      <H>How long we keep it</H>
      <p>Up to 24 months from your last interaction with Sense, or until you ask us to delete it — whichever is earlier.</p>

      <H>Your rights</H>
      <p>
        Under the DPDP Act you have the right to access, correct, update, or erase your personal
        data, to withdraw consent, and to nominate another person to exercise these rights on your
        behalf. To exercise any of these, email{" "}
        <a href="mailto:hello@hooop.in" className="text-teal-600 font-bold hover:underline">hello@hooop.in</a>.
      </p>

      <H>Grievance contact</H>
      <p>
        If you have a complaint about how your data is handled, contact{" "}
        <a href="mailto:hello@hooop.in" className="text-teal-600 font-bold hover:underline">hello@hooop.in</a>.
        We aim to respond within 7 business days.
      </p>
    </div>
  );
};

const SenseConsentModal = ({ onGranted, onCancel }) => {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!checked) {
      setError("Please tick the consent box to continue.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/collect-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent: true, noticeVersion: CONSENT_NOTICE_VERSION }),
      });
      if (!res.ok) throw new Error("request failed");
      window.localStorage.setItem(SENSE_CONSENT_KEY, "true");
      onGranted();
    } catch (err) {
      setError("We couldn't record your consent just now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Rendered through a portal: the Sense section carries a CSS transform
  // (animate-fade-in-up), which would otherwise become the containing block
  // for position:fixed and push this dialog off-viewport.
  return createPortal(
    <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="consent-title">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl my-auto">
        <h2 id="consent-title" className="text-xl font-bold text-gray-900 mb-3">Before you run the check</h2>
        <p className="text-sm text-gray-600 mb-3">We'd like your email address so we can:</p>
        <ul className="text-sm text-gray-600 mb-5 list-disc pl-5 space-y-1">
          <li>follow up about your results or HOOOP's services, and</li>
          <li>understand how Sense is used, so we can improve it.</li>
        </ul>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="soft-input w-full p-4 text-sm text-gray-700 outline-none mb-4 rounded-xl"
        />
        <label className="flex gap-3 items-start text-xs text-gray-600 mb-4 cursor-pointer">
          <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="mt-0.5 shrink-0" />
          <span>
            I agree to HOOOP collecting my email for the two purposes above, as described in the{" "}
            <a href="/privacy" target="_blank" rel="noreferrer" className="underline font-bold text-gray-900">privacy notice</a>.
            I can withdraw this consent at any time.
          </span>
        </label>
        {error && <p className="text-xs font-bold text-red-500 mb-3 flex items-center gap-1"><AlertTriangle size={12} /> {error}</p>}
        <div className="flex gap-3 justify-end">
          <button type="button" onClick={onCancel} className="px-5 py-2.5 rounded-full text-sm font-bold text-gray-500 hover:text-gray-800 transition-colors">
            Cancel
          </button>
          <button type="button" onClick={submit} disabled={submitting} className="soft-btn-primary px-6 py-2.5 rounded-full text-sm font-bold disabled:opacity-60">
            {submitting ? "Saving…" : "Agree & continue"}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// --- NEW SENSE PAGE COMPONENTS ---
const SenseAnalysisView = () => {
    useSeo({
      title: "Sense — Free Greenwashing Checker for Indian Brands | HOOOP",
      description: "Paste any sustainability claim and Sense scans it against CCPA 2024 and ASCI greenwashing rules, flagging vague, absolute, or unsubstantiated environmental language before you publish it.",
      path: "/sense",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Sense by HOOOP",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "A free tool that scans sustainability marketing claims for greenwashing risk under Indian (CCPA, ASCI) and international (FTC) guidelines.",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
        "provider": { "@type": "Organization", "name": "HOOOP Collective", "url": SITE_URL }
      }
    });

    const [text, setText] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [showConsent, setShowConsent] = useState(false);

    const requestAnalyze = () => {
      if (!text.trim()) {
        setError("Please paste a claim or paragraph to analyze.");
        setResult(null);
        return;
      }
      if (window.localStorage.getItem(SENSE_CONSENT_KEY) === "true") {
        analyze();
        return;
      }
      setShowConsent(true);
    };

   const analyze = () => {
  const trimmed = text
  .toLowerCase()
  .replace(/[‐-‒–—]/g, "-")   // normalize all dash types
  .replace(/[""'']/g, '"')   // normalize smart quotes
  .replace(/\s+/g, " ")
  .trim();

  if (!trimmed) {
    setError("Please paste a claim or paragraph to analyze.");
    setResult(null);
    return;
  }

  setError("");

  const hitsMap = new Map();

  SENSE_TERMS.forEach((term) => {
    let matched = false;

    // WORD-BASED RULES
    if (term.word) {
      const safeWord = term.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const wordPattern = new RegExp(`\\b${safeWord}\\b`, "i");

      if (wordPattern.test(trimmed)) {
        matched = true;
      }
    }

    // REGEX-BASED RULES
   if (term.pattern && term.pattern.test(trimmed)) {
      matched = true;
    }

    if (matched) {
      hitsMap.set(term.category, term);
    }
  });

  const findings = Array.from(hitsMap.values());
  setResult(findings);
};

    return (
        <div className="w-full max-w-4xl mx-auto animate-fade">
            <div className="mb-12 md:mb-16 grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left pl-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
Greenwashing Tool
<br/>
<span className="text-gray-400">Does your Sustainability Messaging Make Sense</span>
</h1>
                   <p className="text-gray-500 text-sm md:text-base font-medium mb-6 leading-relaxed">
Sense is a greenwashing checker for climate language and ESG messaging. It flags wording that tends to attract regulatory attention, so you can rethink it before you publish rather than after someone else does. It's a guiding light, not a verdict — and we're still learning where the lines fall too. These rules are new for all of us.
</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {["Reputation", "Legal Compliance", "Trust", "ESG Credibility"].map((v, i) => (
                            <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 shadow-sm flex items-center gap-1">
                                <ShieldCheck size={12} className="text-green-600" /> {v}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex justify-center items-center h-64 relative">
                    <div className="absolute w-64 h-64 border border-green-100 rounded-full flex items-center justify-center">
                        <div className="absolute w-48 h-48 border border-green-200 rounded-full"></div>
                        <div className="absolute w-32 h-32 border border-green-300 rounded-full bg-green-50/30"></div>
                        <div className="absolute w-32 h-32 rounded-full border-2 border-green-400 radar-circle"></div>
                        <div className="z-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center">
                            <ScanLine size={32} className="text-green-600 mb-2" />
                            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Detection Active</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative mb-8 group">
                <label htmlFor="sense-textarea" className="block text-xs font-bold text-gray-400 mb-2 pl-1 uppercase tracking-widest">
                    Paste your claim or paragraph
                </label>
                <textarea 
                    id="sense-textarea"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="e.g., 'Our eco friendly washing powder uses 100% natural ingredients...'"
                    className={`soft-input w-full h-48 p-6 text-base text-gray-700 outline-none resize-none transition-all focus:ring-2 focus:ring-gray-200 ${error ? 'input-error' : ''}`}
                ></textarea>
                    {error && (
                    <p className="mt-3 text-xs font-bold text-red-500 pl-1 flex items-center gap-1">
                        <AlertTriangle size={12}/> {error}
                    </p>
                )}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                    <button type="button" onClick={requestAnalyze} className="soft-btn-primary px-8 py-3 flex items-center gap-2 font-bold tracking-wide text-sm shadow-lg hover:shadow-xl transition-all">
                        Test Your Claims <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            <p className="text-[10px] text-gray-400 mb-8 pl-1">
                We'll ask for your email once before your first check. See our{" "}
                <a href="/privacy" className="underline hover:text-gray-600">privacy notice</a>.
            </p>

            {showConsent && (
                <SenseConsentModal
                    onGranted={() => { setShowConsent(false); analyze(); }}
                    onCancel={() => setShowConsent(false)}
                />
            )}

            {!result && (
                <div className="flex justify-center mt-8 mb-16 animate-bounce opacity-80">
                    <button
  onClick={() =>
    document
      .getElementById("philosophy")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-green-600 border border-green-50 hover:bg-green-50 transition-colors"
>
  <Leaf size={18} />
</button>
                  
                </div>
            )}

            <div aria-live="polite">
            {result && (
                <div className="animate-fade mb-20">
                    {/* LEGAL DISCLAIMER & CONFIDENCE INDICATOR (Moved Above Results) */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-xl shadow-sm">
                        <div className="flex items-start gap-3">
                            <Info className="text-blue-500 shrink-0 mt-0.5" size={20} />
                            <div>
                                <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-1">Heuristic scan, not exhaustive review</h4>
                                <p className="text-xs text-blue-700 leading-relaxed">
                                    This automated tool scans for specific high-risk keywords but cannot evaluate context, intent, or substantiation data. 
                                    <strong>Results do not constitute legal advice.</strong> Please consult your legal team for final approval.
                                </p>
                            </div>
                        </div>
                    </div>

                    {result.length === 0 ? (
                        <div className="soft-card p-6 md:p-8 flex items-center gap-5 text-left">
                            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                <Check size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Clean Language</h3>
                                <p className="text-gray-500 mt-1 text-sm">We didn't find any obvious exaggerations. Ensure you have data to back up your story.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-5">
                            <div className="soft-card p-5 mb-6 flex items-center justify-between bg-white border border-gray-100">
                                <div>
                                    <p className="text-[10px] uppercase tracking-wide text-gray-400 font-bold mb-1">Overall Language Risk</p>
                                    <p className="text-sm font-bold text-gray-800">{getOverallRisk(result)} – review your claims before publishing.</p>
                                </div>
                                <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-sm ${getOverallRisk(result) === "Critical" ? "bg-red-100 text-red-700 border border-red-200" : getOverallRisk(result) === "High" ? "bg-orange-100 text-orange-700 border border-orange-200" : "bg-yellow-100 text-yellow-700 border border-yellow-200"}`}>
                                    {getOverallRisk(result)} Risk
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between px-2">
                                <h3 className="text-xl font-bold text-gray-900">Reflection Points</h3>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{result.length} Issues Found</span>
                            </div>
                            {result.map((item, i) => (
                                <div key={i} className="soft-card p-6 transition-all hover:scale-[1.01]">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                                        <div className="flex items-center gap-3">
                                            <AlertCircle className="text-red-400 shrink-0" size={18} />
                                            <h4 className="font-bold text-base text-gray-900">{item.category}</h4>
                                        </div>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide bg-gray-100 px-2 py-1 rounded self-start md:self-auto">{item.category}</span>
                                    </div>
                                    <p className="text-gray-500 pl-0 md:pl-8 leading-relaxed text-sm"><span className="font-bold text-gray-700">Rethink this:</span> {item.tip}</p>
                                        {item.reference && (<p className="pl-0 md:pl-8 mt-3 text-[10px] text-gray-400 flex items-center gap-1"><BookOpen size={10} /> Ref: {item.reference}</p>)}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            </div>
<section className="max-w-3xl mx-auto mt-16 text-gray-600 leading-relaxed">
<h2 className="text-xl font-bold mb-4">
What is greenwashing?
</h2>

<p className="mb-4">
Greenwashing occurs when companies exaggerate or misrepresent
the environmental benefits of a product, service, or company.
Common examples include vague claims like "eco-friendly" or
"planet safe" without measurable evidence.
</p>

<h2 className="text-xl font-bold mt-8 mb-4">
How the Sense checker works
</h2>

<p>
The Sense tool scans sustainability marketing claims and flags
language commonly associated with greenwashing risks. The system
references regulatory guidance including regulatory standards
and environmental marketing guidelines.
</p>
</section>
            <div id="philosophy" className="pt-12 border-t border-gray-200/60 pb-12">
                <div className="max-w-2xl mx-auto text-center mb-8">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">The Sense Philosophy</h3>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        True sustainability isn't about the right buzzwords. It's about honesty, transparency, and impact.
                        <strong className="text-gray-900 ml-1">Sense</strong> helps you refine your message, stripping away the hype to reveal the truth.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-5 mb-8">
                    <div className="soft-card p-6">
                        <ScanLine className="mb-3 text-green-600" size={24} />
                        <h4 className="font-bold text-gray-900 text-lg">Traceability</h4>
                        <p className="text-xs text-gray-500 mt-2 leading-relaxed">Tech-enabled tracking beats promises. Know exactly where your product comes from.</p>
                    </div>
                    <div className="soft-card p-6">
                        <Tag className="mb-3 text-green-600" size={24} />
                        <h4 className="font-bold text-gray-900 text-lg">Clear Labeling</h4>
                        <p className="text-xs text-gray-500 mt-2 leading-relaxed">Simple language labels. No 'farm fresh' fluff. Just exactly what is in the product.</p>
                    </div>
                </div>
                <div className="soft-card bg-gray-100/50 p-6 md:p-8 border border-gray-200">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h4 className="font-bold text-gray-900 flex items-center gap-2 text-[10px] uppercase tracking-wide mb-1"><Info size={14} /> Sense Disclaimer</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">This tool is designed to help rethink messaging before pushing it out and should only be looked at like a guiding light. It does not constitute legal advice.</p>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                            <p className="text-xs text-gray-500 mb-1">Need to understand deeper and get trained on greenwashing further?</p>
                            <a href="mailto:hello@hooop.in" className="inline-flex items-center gap-1.5 font-bold text-gray-900 hover:text-green-600 transition-colors text-sm"><Mail size={14} /> hello@hooop.in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ChecklistView = () => {
    useSeo({
      title: "Greenwashing Visual Audit Checklist | HOOOP",
      description: "A quick self-audit checklist for spotting greenwashing red flags on your own packaging and website before regulators or customers do.",
      path: "/sense/checklist",
      jsonLd: null
    });
    const [items, setItems] = useState([
        { id: 1, text: "Are we using green/brown colors just to look 'natural' without changing the product?", checked: false }, 
        { id: 2, text: "Do we have a specific webpage backing these claims?", checked: false },
        { id: 3, text: "Is the packaging claiming '100% Recycled' when it's just 1%?", checked: false }, 
        { id: 4, text: "Are we ignoring the supply chain impact?", checked: false },
        { id: 5, text: "Is the 'Recyclable' logo prominent on non-recyclable packaging?", checked: false },
        { id: 6, text: "Are we making a big noise about a tiny feature (e.g. CFC-free) to hide bigger harms?", checked: false }, 
    ]);
    const toggle = (id) => { setItems(items.map(i => i.id === id ? {...i, checked: !i.checked} : i)); };

    return (
        <div className="w-full max-w-2xl mx-auto animate-fade pb-20 md:pb-0 px-6 pt-8 md:pt-12">
            <div className="mb-10 text-center md:text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Visual Audit</h1>
                <p className="text-gray-500 text-base md:text-lg">Pause and look at your product packaging or website.</p>
            </div>
            <div className="space-y-4">
                {items.map(item => (
                    <button key={item.id} type="button" onClick={() => toggle(item.id)} className={`w-full soft-card p-5 md:p-6 flex items-center justify-between transition-all duration-300 text-left ${item.checked ? 'opacity-50 grayscale' : 'hover:scale-[1.01]'}`}>
                        <span className={`text-sm md:text-base font-medium mr-4 ${item.checked ? 'line-through text-gray-400' : 'text-gray-800'}`}>{item.text}</span>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${item.checked ? 'bg-gray-900 border-gray-900 text-white' : 'border-gray-300'}`}>
                            {item.checked && <Check size={12} />}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

const ResourcesView = () => {
    useSeo({
      title: "Greenwashing Glossary & Regulatory Resources | HOOOP",
      description: "Definitions of key ESG and greenwashing terms (Scope 3, Net Zero, Substantiation, Puffery, and more) plus links to CCPA, ASCI, and WWF guidance.",
      path: "/learn",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": GLOSSARY.map(item => ({
          "@type": "Question",
          "name": `What is ${item.term}?`,
          "acceptedAnswer": { "@type": "Answer", "text": item.def }
        }))
      }
    });
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (index) => { setOpenIndex(openIndex === index ? null : index); };

    return (
        <div className="w-full max-w-4xl mx-auto animate-fade pb-20 md:pb-0 px-6">
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Further Resources</h1>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">Dive deeper into the regulations and best practices shaping the future of honest environmental communication.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                <a href="https://consumeraffairs.gov.in/public/upload/admin/cmsfiles/whatsnews/The_Guidelines_for_Prevention_and_Regulation_of_Greenwashing_or_Misleading_Environmental_Claims,_2024_whatsnews.pdf" target="_blank" rel="noopener noreferrer" className="soft-card p-6 block hover:scale-[1.02] transition-transform group bg-white">
                    <div className="flex justify-between items-start mb-4"><div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center"><Scale size={18} /></div><ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" /></div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">CCPA Guidelines</h4><p className="text-xs text-gray-500">Official Indian regulations on misleading environmental claims.</p>
                </a>
                <a href="https://www.ascionline.in/wp-content/uploads/2024/01/Guidelines-for-Advertisements-Making-Environmental-Green-Claims.pdf" target="_blank" rel="noopener noreferrer" className="soft-card p-6 block hover:scale-[1.02] transition-transform group bg-white">
                    <div className="flex justify-between items-start mb-4"><div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><AlertCircle size={18} /></div><ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" /></div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">ASCI Code</h4><p className="text-xs text-gray-500">Advertising Standards Council of India's rules on honesty.</p>
                </a>
                <a href="https://www.wwf.org.uk/learn/environment/guide-to-greenwashing" target="_blank" rel="noopener noreferrer" className="soft-card p-6 block hover:scale-[1.02] transition-transform group bg-white">
                    <div className="flex justify-between items-start mb-4"><div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center"><Leaf size={18} /></div><ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" /></div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">WWF Guide</h4><p className="text-xs text-gray-500">Global best practices on identifying greenwashing traps.</p>
                </a>
                <a href="https://www.oneplanetnetwork.org/knowledge-centre/resources/green-marketing-challenge" target="_blank" rel="noopener noreferrer" className="soft-card p-6 block hover:scale-[1.02] transition-transform group bg-white">
                    <div className="flex justify-between items-start mb-4"><div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center"><Globe size={18} /></div><ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" /></div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">One Planet Network</h4><p className="text-xs text-gray-500">Green Marketing Challenge & validation tools.</p>
                </a>
            </div>
            <div className="mb-8 pt-8 border-t border-gray-200/60">
                <div className="flex items-center gap-3 mb-6"><div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center"><BookOpen size={16} /></div><h2 className="text-2xl font-bold text-gray-900">Green Glossary</h2></div>
                <div className="space-y-3">
                    {GLOSSARY.map((item, index) => (
                        <div key={index} id={`glossary-${item.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="soft-card overflow-hidden transition-all duration-300 scroll-mt-24">
                            <button type="button" onClick={() => toggle(index)} className="w-full flex items-center justify-between p-5 text-left focus:outline-none">
                                <span className="font-bold text-gray-800 text-sm md:text-base">{item.term}</span>
                                {openIndex === index ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                            </button>
                            <div className={`px-5 pb-5 text-xs md:text-sm text-gray-500 leading-relaxed transition-all duration-300 ${openIndex === index ? 'block' : 'hidden'}`}>{item.def}</div>
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-[10px] text-gray-400 text-center">Sense pattern library last updated: Jan 2026. For complex claims, please write to hello@hooop.in.</p>
            </div>
        </div>
    );
};

// --- NEW GREENWASHING PLAYBOOK COMPONENTS (INTEGRATED) ---
const PillButton = ({ children, primary = false, onClick }) => (
    <button
        onClick={onClick}
        className={`
        flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1
        ${primary 
            ? 'bg-black text-white shadow-lg hover:shadow-xl' 
            : 'bg-[#F0F0F3] text-gray-700 shadow-[-5px_-5px_10px_#FFFFFF,5px_5px_10px_#AEAEC040] hover:shadow-[-2px_-2px_5px_#FFFFFF,2px_2px_5px_#AEAEC040]'
        }
        `}
    >
        {children}
    </button>
);

// --- ESG MEDIA INDEX (HOOOP x The GoodNet) ---
const INDEX_PILLARS = [
  { name: "Consumption", icon: Zap, copy: "Energy use, delivery waste, and ad efficiency across the supply path — the same things that quietly inflate your CPMs." },
  { name: "Content", icon: FileText, copy: "Content analysis of where your ad actually lands, and how well that environment fits what your brand has committed to." },
  { name: "Corporate", icon: Scale, copy: "Whether the media owner behind the placement operates responsibly — editorial standards, data practices, governance." },
];

const INDEX_BANDS = [
  { label: "ESG Risk Media", range: "Below 30", tone: "bg-red-50 text-red-700 border-red-100" },
  { label: "Moderate", range: "30 – 44", tone: "bg-orange-50 text-orange-700 border-orange-100" },
  { label: "Trusted", range: "45 – 53", tone: "bg-yellow-50 text-yellow-700 border-yellow-100" },
  { label: "Elite", range: "54 – 100", tone: "bg-green-50 text-green-700 border-green-100" },
];

const INDEX_BRANDS = ["Amazon", "Mastercard", "Lego", "UNICEF", "Nestlé", "Dyson", "BYD", "Samsung"];

const EsgMediaIndexView = ({ navigateTo }) => {
  useSeo({
    title: "ESG Media Index India — Sustainable Media Planning | HOOOP × The GoodNet",
    description: "India's first ESG Media Index. Score every placement on carbon, content and corporate signals — and use them to cut CPC and wasted spend, not just to report afterwards.",
    path: "/esg-media-index",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "ESG Media Planning, Measurement and Marketplace",
      "provider": { "@type": "Organization", "name": "HOOOP Collective", "url": SITE_URL },
      "areaServed": "India",
      "description": "India's first ESG Media Index, built with The GoodNet. Scores media placements across consumption, content and corporate ESG signals and uses them as live optimisation inputs.",
    },
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-6 animate-fade pb-20">
      {/* HERO */}
      <section className="pt-8 pb-16 md:pb-24">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full mb-8 border border-white/60 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-600">HOOOP × The GoodNet</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.95] tracking-tighter mb-8">
            Sustainable media<br />
            <span className="text-gray-400">shouldn't cost you performance.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-4">
            Most media plans treat sustainability as something you report on after the campaign ends. We think that's a
            missed opportunity — because the signals that make media cleaner are largely the same ones that make it work harder.
          </p>
          <p className="text-base text-gray-500 max-w-2xl leading-relaxed mb-10">
            India's first ESG Media Index, built with <a href="https://wearethegoodnet.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-bold hover:underline">The GoodNet</a>.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={450}>
          <div className="flex flex-col sm:flex-row gap-4">
            <PillButton primary onClick={() => navigateTo('contact')}>
              Benchmark your media <ArrowRight size={18} />
            </PillButton>
            <PillButton onClick={() => document.getElementById('emi-how')?.scrollIntoView({ behavior: 'smooth' })}>
              How the index works
            </PillButton>
          </div>
        </ScrollReveal>
      </section>

      {/* THE THESIS */}
      <section className="py-14 border-t border-gray-200/60">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why clean media tends to perform better</h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">
            This surprised us too when we first saw the data. Quality journalism, low ad clutter, short supply chains and
            low invalid traffic all reduce a campaign's carbon footprint. They also happen to be the markers of inventory
            that gets seen by actual humans. You are usually optimising for both at once — most plans just never measure it that way.
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-5">
          <ScrollReveal delay={100}>
            <div className="soft-card p-6 h-full">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-3">What you remove</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {["Ad clutter and low-viewability placements", "Long, leaky programmatic supply paths", "Invalid traffic and ad fraud", "Made-for-advertising inventory"].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-gray-300">—</span>{t}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="soft-card p-6 h-full bg-green-50/40">
              <p className="text-[10px] uppercase tracking-widest font-bold text-green-700 mb-3">What tends to follow</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {["Higher viewability and completion rates", "Lower cost per click and per acquisition", "Meaningfully lower carbon per impression", "Placements you'd be comfortable showing a client"].map((t, i) => (
                  <li key={i} className="flex gap-2"><Check size={14} className="text-green-600 shrink-0 mt-1" />{t}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="emi-how" className="py-14 border-t border-gray-200/60">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What the index actually measures</h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">
            Every domain and placement is scored out of 100 across three families of signal, then weighted against
            the commitments your business has already made — not a generic definition of "good".
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {INDEX_PILLARS.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 120}>
              <div className="soft-card p-6 h-full">
                <p.icon className="text-green-600 mb-3" size={24} />
                <h3 className="font-bold text-gray-900 text-lg mb-2">{p.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.copy}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="soft-card p-6">
            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Scoring bands (out of 100)</p>
            <div className="flex flex-wrap gap-3">
              {INDEX_BANDS.map((b) => (
                <div key={b.label} className={`px-4 py-2 rounded-xl border text-xs font-bold ${b.tone}`}>
                  {b.label} <span className="opacity-60 font-medium ml-1">{b.range}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">The current Indian market benchmark sits around 45. Most plans we look at start below it.</p>
          </div>
        </ScrollReveal>
      </section>

      {/* WAYS TO WORK */}
      <section className="py-14 border-t border-gray-200/60">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Three ways to use it</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Measure", d: "Send us a proposed site list. You get a read on where the plan stands before you commit budget, and reporting that runs alongside the campaign rather than arriving after it." },
            { t: "Marketplace", d: "A curated pool of 2,000+ vetted publishers, activated through your own DSP. You buy the way you already buy; the curation happens underneath." },
            { t: "API", d: "Over 200 data points fed straight into your existing planning, bidding and reporting stack, if you'd rather run it yourself." },
          ].map((x, i) => (
            <ScrollReveal key={x.t} delay={i * 120}>
              <div className="soft-card p-6 h-full">
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">0{i + 1}</p>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{x.t}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{x.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-14 border-t border-gray-200/60">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Brands we've worked with</h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">
            Campaigns planned and measured on these signals, through our work with The GoodNet.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div className="flex flex-wrap gap-3">
            {INDEX_BRANDS.map((b) => (
              <span key={b} className="soft-card px-6 py-3 text-base md:text-lg font-bold text-gray-500">
                {b}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-gray-200/60">
        <ScrollReveal>
          <div className="soft-card p-8 md:p-12 bg-gray-900 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Curious where your current plan scores?</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mb-8">
              Send us a site list and we'll come back with an honest read — the score, where the waste sits, and whether
              there's enough upside to be worth your time. If there isn't, we'll tell you that. We're still mapping this
              market ourselves, and we learn something from every plan we look at.
            </p>
            <a href="mailto:hello@hooop.in?subject=ESG%20Media%20Index%20-%20benchmark%20my%20plan"
               className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              <Mail size={18} /> hello@hooop.in
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

const GreenwashingView = ({ navigateTo }) => {
   useSeo({
     title: "Greenwashing in India: Risks, Regulations & The Playbook | HOOOP",
     description: "Why greenwashing is now a legal and financial risk in India, how CCPA and ASCI enforce green claims, and a practical playbook for honest sustainability communication.",
     path: "/greenwashing",
     jsonLd: {
       "@context": "https://schema.org",
       "@type": "Article",
       "headline": "Green Is The New Lie: A Playbook Against Greenwashing",
       "description": "Strategic briefing on greenwashing risk, regulation, and remedy for marketers in India.",
       "publisher": { "@type": "Organization", "name": "HOOOP Collective", "url": SITE_URL }
     }
   });

   const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

   return (
     <div className="w-full">
            {/* SECTION 1: HERO */}
            <section id="gw-home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-bl from-green-300/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="z-10 order-2 lg:order-1 pt-10 md:pt-0">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full mb-8 backdrop-blur-sm border border-white/50 shadow-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-600">Strategic Briefing for Marketers</span>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={200}>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-8">
                        Green <br/>
                        Is The <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">New Lie.</span>
                        </h1>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={400}>
                        <p className="text-lg md:text-xl text-gray-600 max-w-md mb-10 leading-relaxed font-medium">
                        In an era of conscious consumers, sustainability is a make-or-break brand pillar.
                        <br/><br/>
                        We bridge the critical gap between <span className="font-bold text-gray-900">reality</span> and <span className="font-bold text-gray-900">perception</span>.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={600}>
                        <div className="flex flex-col sm:flex-row gap-4">
                        <PillButton primary onClick={() => scrollToId('gw-gap')}>
                            Mind The Gap <ArrowRight size={18} />
                        </PillButton>
                        <PillButton onClick={() => scrollToId('gw-risks')}>
                            Calculate Risks
                        </PillButton>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative h-[300px] lg:h-auto">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-[#E0E5EC] rounded-full shadow-[inset_-10px_-10px_30px_#FFFFFF,inset_10px_10px_30px_#AEAEC040] flex items-center justify-center z-10"><span className="text-gray-400 font-bold text-lg md:text-xl">Perception</span></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-green-500 rounded-full shadow-2xl flex items-center justify-center opacity-90 z-20 mix-blend-multiply transition-all duration-1000 hover:translate-x-[-30%] cursor-pointer"><span className="text-white font-bold text-lg md:text-xl">Reality</span></div>
                    </div>
                </div>
                </div>
            </section>

            {/* SECTION 2: THE GAP & VERIFICATION DATA */}
            <section id="gw-gap" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="mb-12">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Central Challenge</h2>
                            <div className="w-20 h-2 bg-green-500 rounded-full mb-8"></div>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
                                The result is a <span className="font-bold text-gray-800">'Sustainability Gap'</span>—or as <span className="font-bold text-gray-900">Brand Finance</span> defines it, the <span className="font-bold text-gray-900">Sustainability Perceptions Gap (SPG)</span>.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* New Data Viz: How Claims Are Verified */}
                        <ScrollReveal delay={200}>
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100 h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <Search className="text-green-600" size={28} />
                                    <h3 className="text-2xl font-bold text-gray-800">The Verification Gap</h3>
                                </div>
                                <p className="text-sm text-gray-500 mb-6">
                                    Survey of Indian marketing professionals: <br/>"How are your sustainability claims usually verified?"
                                </p>
                                
                                <div className="space-y-1">
                                    <StatBar label="Third-party Certifications" percentage={30} color="#4ADE80" />
                                    <StatBar label="Legal Team Approval" percentage={22} color="#9CA3AF" />
                                    <StatBar label="Internal Team Assessment" percentage={20} color="#D1D5DB" />
                                    <StatBar label="We Don't Verify Them" percentage={15} color="#EF4444" />
                                    <StatBar label="Supplier Data" percentage={13} color="#E5E7EB" />
                                </div>
                                
                                <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-100 flex gap-3">
                                    <AlertTriangle className="text-red-500 shrink-0" size={20} />
                                    <p className="text-xs text-red-600 font-semibold">
                                        15% of claims go live with zero verification. This is a massive legal liability.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="flex flex-col gap-6">
                            <ScrollReveal delay={300}>
                                <SoftCard className="flex-1 flex flex-col justify-center">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-bold">SPV</h3>
                                        <span className="text-green-600 font-bold text-[10px] bg-green-100 px-2 py-1 rounded-full uppercase">Brand Finance Metric</span>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Sustainability Perceptions Value</h4>
                                    <p className="text-gray-500 text-sm mb-3">
                                        The financial value consumers attribute to a brand's commitment to ESG factors.
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Quantifies the financial impact of reputation.
                                    </p>
                                </SoftCard>
                            </ScrollReveal>

                            <ScrollReveal delay={400}>
                                <SoftCard className="flex-1 flex flex-col justify-center">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-bold">SPG</h3>
                                        <span className="text-red-500 font-bold text-[10px] bg-red-100 px-2 py-1 rounded-full uppercase">Guidance / Gap</span>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Sustainability Perceptions Gap</h4>
                                    <p className="text-gray-500 text-sm mb-3">
                                        The difference between perceived value (SPV) and actual performance.
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Indicates potential value creation opportunities or greenwashing risks.
                                    </p>
                                </SoftCard>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: RISKS */}
            <section id="gw-risks" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 bg-[#D1D5DB]/30">
                <div className="max-w-6xl mx-auto w-full">
                    <ScrollReveal>
                        <div className="mb-12 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">The High Price</h2>
                            <p className="text-xl text-gray-600">The industry is balanced on a tightrope between two dangerous extremes.</p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-8">
                        <ScrollReveal delay={100}>
                            <div className="bg-red-50/80 rounded-[2rem] p-8 border-l-8 border-red-500 shadow-md">
                                <div className="flex items-start gap-4">
                                    <Users className="text-red-500 shrink-0 mt-1" size={32} />
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Trust Fallout</h4>
                                        <p className="text-lg text-gray-700">
                                            <span className="font-black text-red-600 text-2xl">77%</span> of consumers would stop buying if caught greenwashing. 
                                            <br/>A single exposé can shatter brand credibility instantly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={400}>
                            <div className="bg-orange-50/80 rounded-[2rem] p-8 border-l-8 border-orange-500 shadow-md ml-0 md:ml-12">
                                <div className="flex items-start gap-4">
                                    <Gavel className="text-orange-500 shrink-0 mt-1" size={32} />
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Legal Reality</h4>
                                        <p className="text-lg text-gray-700">
                                            Misleading claims are now illegal. 
                                            <br/>CCPA fines up to <span className="font-bold text-orange-600">₹50 Lakhs</span> for repeat offenses. Ignorance is no longer a defense.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={700}>
                            <div className="bg-gray-100 rounded-[2rem] p-8 border-l-8 border-gray-500 shadow-md ml-0 md:ml-24">
                                <div className="flex items-start gap-4">
                                    <MicOff className="text-gray-500 shrink-0 mt-1" size={32} />
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-800 mb-2">The Cost of Silence</h4>
                                        <p className="text-lg text-gray-700">
                                            Greenhushing leaves value on the table. 
                                            <br/>Competitors own the narrative while you stay quiet. Investors assume you have something to hide.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

             <section id="gw-interactive" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Are We Silent?</h2>
                        <p className="text-gray-500">Tap cards to reveal the reality behind the fear.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FlipCard 
                            frontTitle="Fear of Scrutiny" 
                            frontIcon={Eye} 
                            color="#EF4444"
                            backStat="70%"
                            backText="of companies with strong credentials engage in greenhushing to avoid criticism."
                        />
                        <FlipCard 
                            frontTitle="Uncertainty" 
                            frontIcon={HelpCircle} 
                            color="#F59E0B"
                            backStat="No Data"
                            backText="Lack of reliable data is the #1 cited barrier to honest messaging."
                        />
                        <FlipCard 
                            frontTitle="Perfectionism" 
                            frontIcon={Lock} 
                            color="#607D8B"
                            backStat="Progress > Perfection"
                            backText="Stakeholders reward transparency about the journey, not just the destination."
                        />
                    </div>
                </div>
            </section>

             <section id="gw-archetypes" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Which one is your brand?</h2>
                        <p className="text-gray-500 text-lg">Four Brand Archetypes defined by Performance vs. Communication</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        <ArchetypeCard 
                            title="Silent Green"
                            type="High Performance / Low Talk"
                            icon={MicOff}
                            description="Doing good in silence. Often driven by fear of scrutiny or perfectionism."
                            stat="70% of companies with strong credentials engage in this."
                            subtext="RISK: Missed Opportunities"
                            color="#607D8B"
                        />
                        <ArchetypeCard 
                            title="Vocal Green"
                            type="High Performance / High Talk"
                            icon={CheckCircle}
                            description="The Gold Standard. They walk the talk and communicate it openly. Authenticity builds trust."
                            subtext="ASSET: High SPV & Trust"
                            color="#4ADE80"
                        />
                        <ArchetypeCard 
                            title="Opaque Brown"
                            type="Low Performance / Low Talk"
                            icon={Eye}
                            description="Neither green nor transparent. Doing little and saying little. Breeds mistrust."
                            subtext="RISK: Irrelevance"
                            color="#795548"
                        />
                        <ArchetypeCard 
                            title="Vocal Brown"
                            type="Low Performance / High Talk"
                            icon={ShieldAlert}
                            description="The Greenwashers. All talk, no walk. Making false claims to appear friendly."
                            subtext="RISK: Legal Action"
                            color="#EF4444"
                        />
                    </div>
                </div>
            </section>

             <section id="gw-sins" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 bg-green-50/50 overflow-x-hidden">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">The 7 Sins</h2>
                            <p className="text-xl text-gray-600 max-w-lg">The Anatomy of Deception: 42% of green claims globally are exaggerated, false, or deceptive.</p>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-gray-400">
                        <span className="text-sm uppercase tracking-widest">Scroll</span>
                        <ArrowRight size={16} />
                        </div>
                    </div>

                    <div className="overflow-x-auto pb-12 -mx-6 px-6 md:mx-0 md:px-0 flex snap-x snap-mandatory scroll-smooth no-scrollbar w-full max-w-full">
                        <SinCard number="01" title="Hidden Trade-off" icon={AlertTriangle} description="Highlighting one green attribute while ignoring other, more significant environmental harms." />
                        <SinCard number="02" title="No Proof" icon={FileText} description="A claim that cannot be substantiated by easily accessible supporting information or third-party certification." />
                        <SinCard number="03" title="Vagueness" icon={Info} description="Using terms so poorly defined or broad that their real meaning is likely to be misunderstood (e.g., 'all-natural')." />
                        <SinCard number="04" title="False Labels" icon={ShieldAlert} description="Creating a false impression of third-party endorsement through fake or self-created 'certifications'." />
                        <SinCard number="05" title="Irrelevance" icon={Zap} description="An environmental claim that may be truthful but is unimportant or unhelpful (e.g., 'CFC-free' when legally banned)." />
                        <SinCard number="06" title="Lesser of Two Evils" icon={BarChart3} description="True within the product category but distracting from the greater environmental impacts of the category." />
                        <SinCard number="07" title="Fibbing" icon={X} description="Making environmental claims that are simply false. The most direct and dangerous form of deception." />
                    </div>
                </div>
            </section>

            <section id="gw-tracker" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 bg-[#D1D5DB]/30">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">The Spectrum of Deception</h2>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            Beyond the 7 Sins: <strong>Planet Tracker</strong> identifies six sophisticated forms of greenwashing that aim to deceive consumers and investors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <TrackerCard title="Greenlabelling" icon={Tag} description="Using vague or unsubstantiated terms like 'natural' or 'eco-friendly' to imply sustainability without proof." />
                        <TrackerCard title="Greenhushing" icon={MicOff} description="Deliberately under-reporting or hiding environmental data and credentials to avoid scrutiny." />
                        <TrackerCard title="Greencrowding" icon={Users} description="Joining sustainability initiatives to blend in with genuinely green companies, moving at the pace of the slowest member." />
                        <TrackerCard title="Greenlighting" icon={Zap} description="Highlighting one small, positive environmental feature to distract from overall unsustainable practices." />
                        <TrackerCard title="Greenrinsing" icon={RefreshCw} description="Adjusting or pushing back sustainability targets before they are met, often increasing ambition to mask failure." />
                        <TrackerCard title="Greenshifting" icon={UserX} description="Shifting responsibility for climate issues onto consumers, suggesting demand dictates harmful practices." />
                    </div>
                </div>
            </section>

             <section id="gw-regulations" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20">
                <div className="max-w-5xl mx-auto w-full">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Playing by the Rules</h2>
                        <p className="text-xl text-gray-600 max-w-3xl">
                            India has implemented one of the world's strictest legal frameworks. Ignorance is no longer a defense.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-6">
                                <Scale className="text-green-600" size={32} />
                                <h3 className="text-2xl font-bold">CCPA Guidelines (2024)</h3>
                            </div>
                            
                            <ul className="space-y-4 text-sm text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                                    <strong>Legal Definition:</strong> Greenwashing is now classified as a "misleading practice".
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                                    <strong>Liability:</strong> Extends to the brand, the ad agency, and the endorser.
                                </li>
                                <li className="bg-red-50 p-3 rounded-lg border border-red-100 mt-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Gavel className="text-red-500" size={16}/>
                                        <span className="font-bold text-red-700">Financial Penalties</span>
                                    </div>
                                    <div className="flex justify-between items-center text-red-800 font-mono text-sm">
                                        <span>First Offense:</span>
                                        <strong>₹10,00,000</strong>
                                    </div>
                                    <div className="flex justify-between items-center text-red-800 font-mono text-sm mt-1">
                                        <span>Repeat Offense:</span>
                                        <strong>₹50,00,000</strong>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-6">
                                <Lock className="text-blue-600" size={32} />
                                <h3 className="text-2xl font-bold">ASCI Guidelines</h3>
                            </div>
                            <ul className="space-y-4 text-sm text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                                    Mandates honesty and clarity; scope of claims must be defined (product vs packaging).
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                                    Prohibits misleading visuals that falsely imply green attributes.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                                    Requires claims to be substantiated by verifiable, independent evidence.
                                </li>
                            </ul>
                            
                            <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
                                <div className="flex items-start gap-3">
                                            <AlertTriangle className="text-orange-500 shrink-0 mt-1" size={18} />
                                            <div>
                                                <p className="text-[10px] font-bold text-orange-600 uppercase tracking-wide mb-1">2024 Reality Check</p>
                                                <p className="text-sm text-gray-700 leading-snug">
                                                    <span className="font-bold">100%</span> of ads reviewed by ASCI for greenwashing violations required modification due to lack of transparency.
                                                </p>
                                            </div>
                                </div>
                            </div>

                            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                                <p className="font-bold text-gray-800 text-xs uppercase tracking-wide mb-1">Also Scrutinizing:</p>
                                <p className="text-sm text-gray-600"><strong>SEBI</strong> is now scrutinizing ESG claims in investor reports (BRSR), linking marketing to accountability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             <section id="gw-playbook" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 bg-black text-white rounded-t-[3rem] mt-10">
                <div className="max-w-5xl mx-auto w-full py-10">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 rounded-full border border-green-500/50 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
                            Action Plan
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">The Playbook</h2>
                        <p className="text-gray-400">Executing with Excellence</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20">
                        <div>
                            <div className="mb-12">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-2xl font-bold">Set the Tone & Policy</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed pl-12">
                                    Establish clear, non-negotiable guidelines. Create an internal <strong>"Green Review Checklist"</strong> to vet every claim against the 7 Sins and legal requirements before it goes out.
                                </p>
                            </div>

                            <div className="mb-12">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-2xl font-bold">Champion Alignment</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed pl-12">
                                    Tear down silos. Convene regular meetings between marketing, sustainability, R&D, and legal. Authenticity is a shared responsibility, not just a marketing task.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="mb-12">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-2xl font-bold">Lead with Transparency</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed pl-12">
                                    Be publicly accountable for progress and challenges. When leadership is transparent about the journey, it cascades down, valuing integrity over marketing spin.
                                </p>
                            </div>

                            <div className="mb-12">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-2xl font-bold">Integrate to Core Strategy</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed pl-12">
                                    Move sustainability from a PR topic to the brand's DNA. Embed it in brand values, campaign briefs, and business KPIs to ensure messaging is durable.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-8 md:p-16 bg-white/5 rounded-[3rem] backdrop-blur-md border border-white/10 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-1000"></div>
                        
                        <h4 className="text-3xl md:text-5xl font-black mb-6 relative z-10">"Honesty is the new green."</h4>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg relative z-10 leading-relaxed">
                            If you've been silent, start talking. If you've overstated, course-correct. Authenticity is your greatest competitive advantage.
                        </p>
                        <button onClick={() => navigateTo('sense')} className="relative z-10 bg-green-500 hover:bg-green-400 text-black px-12 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                            Start The Journey
                        </button>
                    </div>
                    
                    <footer className="mt-20 text-center text-gray-500 text-xs pb-12 px-6">
                        <div className="max-w-2xl mx-auto border-t border-gray-300/50 pt-8">
                            <p className="mb-2 font-bold text-gray-400 uppercase tracking-widest text-[10px]">Primary Sources</p>
                            <p className="mb-6 leading-relaxed">
                                Strategic insights and survey data derived from the <strong>"Green Is the New Lie"</strong> Whitepaper and <strong>"The Green Truth"</strong> Survey by Sense App.
                            </p>
                            
                            <p className="mb-2 font-bold text-gray-400 uppercase tracking-widest text-[10px]">Data & Definitions</p>
                            <p className="leading-relaxed opacity-80 space-y-1">
                                <span className="block"><strong>Brand Finance:</strong> Sustainability Perceptions Value (SPV) & Gap (SPG) definitions.</span>
                                <span className="block"><strong>Planet Tracker:</strong> The Six Types of Greenwashing framework.</span>
                                <span className="block"><strong>ASCI & CCPA:</strong> Regulatory guidelines and compliance statistics (2024).</span>
                            </p>
                            
                            <div className="mt-8 pt-8 border-t border-gray-300/30 flex justify-center items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
                                <span>Sense App Design</span>
                                <span>•</span>
                                <span className="cursor-pointer hover:text-green-600" onClick={() => window.open('https://www.hooop.in/g', '_blank')}>HOOOP</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    );
};

// --- SEO metadata for the sections rendered directly inside App (not their
// own components). Sections that manage their own SEO (Sense, Greenwashing,
// Checklist, Resources, an open blog post) are left out — their own useSeo()
// call inside their component fires and is not overwritten (see useSeo: it
// only touches title/description when a truthy value is passed).
const APP_SECTION_SEO = {
  home: {
    title: "HOOOP Collective — Sustainable Marketing & Growth Strategy for Indian Brands",
    // Explicit rather than derived from the hero: the on-page line is now
    // deliberately short, which makes a thin search snippet.
    description: "A marketing and strategy collective for climate and circular businesses — sustainable marketing, brand strategy, market intelligence and behavioural insight.",
    path: "/"
  },
  manifesto: {
    title: "Our Manifesto | HOOOP",
    description: "Marketing has the power to change behaviour. HOOOP partners with businesses that push the world forward while helping brands outpace the market.",
    path: "/manifesto"
  },
  prvaah: {
    title: "Prvaah — India, UK & EU ESG Market Entry Program | HOOOP",
    description: "Prvaah guides enterprises across India, the EU, and the UK through ESG compliance, funding readiness, and responsible market expansion.",
    path: "/prvaah",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "ESG Compliance and Cross-Border Market Entry Advisory",
      "provider": { "@type": "Organization", "name": "HOOOP Collective", "url": SITE_URL },
      "areaServed": ["India", "United Kingdom", "European Union"],
      "description": "Guides enterprises across India, EU, and the UK in ESG compliance and responsible expansion."
    }
  },
  offerings: {
    title: "What We Do — Sustainable Marketing, Media & ESG Consulting | HOOOP",
    description: "Marketing-led consulting, ESG media planning and measurement, policy and stakeholder engagement, and market access for climate and circular businesses in India.",
    path: "/offerings"
  },
  collective: {
    title: "The Collective — Our Sustainability & Brand Strategy Team | HOOOP",
    description: "Meet the thinkers, technologists, communicators, and policy experts behind HOOOP's sustainable marketing and strategy work.",
    path: "/collective"
  },
  thinking: {
    title: "Our Thinking — Climate, Capital & Culture | HOOOP Blog",
    description: "Essays on greenwashing, circular economy, climate finance, and India-UK ESG market entry from the HOOOP Collective.",
    path: "/thinking"
  },
  research: {
    title: "Research & Reports | HOOOP",
    description: "Data-driven reports on greenwashing in Indian marketing, the sustainability consumer paradox, circular economy, and sustainable media.",
    path: "/research"
  },
  contact: {
    title: "Contact HOOOP | Sustainable Marketing & Growth Strategy",
    description: "Get in touch with the HOOOP Collective to talk climate innovation, ESG strategy, or brand credibility.",
    path: "/contact"
  }
};

// --- Main App ---
const App = React.forwardRef((props, ref) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSenseTool, setShowSenseTool] = useState(false);
  const [senseTab, setSenseTab] = useState('analyzer');
  const [selectedPost, setSelectedPost] = useState(null); // New state for selected blog post

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sense', label: 'Sense' },
    { id: 'prvaah', label: 'Prvaah' },
    { id: 'greenwashing', label: 'Greenwashing'},
    { id: 'esg-media-index', label: 'Media Index' },
    { id: 'offerings', label: 'What We Do' },
    { id: 'thinking', label: 'Our Thinking' },
    { id: 'collective', label: 'Collective' },
    { id: 'contact', label: 'Contact', hidden: true },
    { id: 'manifesto', label: 'Manifesto', hidden: true },
    { id: 'research', label: 'Research', hidden: true },
    { id: 'privacy', label: 'Privacy', hidden: true }
  ];

  const findPostBySlug = (slug) => SITE_CONTENT.thinking.posts.find(p => p.slug === slug);

  // Inject the Organization schema once, on first mount.
  useEffect(() => {
    setJsonLd('org-jsonld', ORG_JSONLD);
  }, []);

  // Route handling — now understands /thinking/:slug as a real, shareable,
  // indexable URL for each blog post (previously blog posts had no URL at
  // all and could not be deep-linked or crawled individually).
  useEffect(() => {
    const handleRoute = () => {
      const parts = window.location.pathname.split('/').filter(Boolean);
      const first = parts[0] || 'home';

      if (first === 'thinking' && parts[1]) {
        const post = findPostBySlug(parts[1]);
        setActiveSection('thinking');
        setSelectedPost(post || null);
        return;
      }

      if (navItems.some(item => item.id === first)) {
        setActiveSection(first);
        setSelectedPost(null);
      } else {
        setActiveSection('home');
        setSelectedPost(null);
      }
    };

    handleRoute();
    window.addEventListener("popstate", handleRoute);
    return () => window.removeEventListener("popstate", handleRoute);
  }, []);

  useEffect(() => {
    let meta = document.querySelector('meta[name="viewport"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    }
  }, []);

  // Drive title/description/canonical/JSON-LD for the sections that render
  // directly inside App (sections with their own component — Sense,
  // Greenwashing, Checklist, Resources, an open blog post — set their own
  // and are not affected by this call).
  const seoConfig = APP_SECTION_SEO[activeSection];
  useSeo({
    title: seoConfig?.title,
    description: seoConfig?.description,
    // An open blog post sets its own title/canonical in BlogPostView; passing
    // null here stops this parent call from clobbering it with /thinking.
    path: selectedPost ? null : (seoConfig?.path || `/${activeSection}`),
    jsonLd: seoConfig?.jsonLd || null
  });

  const navigateTo = (id) => {
    const next = id || "home";

    setActiveSection(next);
    setSelectedPost(null);
    setIsMenuOpen(false);

    const path = next === "home" ? "/" : `/${next}`;
    window.history.pushState({}, "", path);

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (next !== "research") setShowSenseTool(false);
  };

  // Blog posts now get a real, shareable, bookmarkable URL:
  // hooop.in/thinking/<slug> — instead of no URL at all.
  const openBlogPost = (post) => {
    setSelectedPost(post);
    window.history.pushState({}, "", `/thinking/${post.slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToThinkingList = () => {
    setSelectedPost(null);
    window.history.pushState({}, "", "/thinking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToPrvaahSection = (id) => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#E0E5EC] font-sans text-[#4A5568] selection:bg-black selection:text-white overflow-x-hidden relative">
      <ConcentricCircles />

      {/* --- DESKTOP SIDEBAR --- */}
      <nav className="fixed left-0 top-0 h-full w-64 hidden lg:flex flex-col justify-between items-start py-12 pl-10 z-50 pointer-events-none">
         <div className="pointer-events-auto cursor-pointer group mb-12" onClick={() => navigateTo('home')}>
             <SoftCard className="w-20 h-20 flex items-center justify-center !rounded-full p-4" hoverEffect={true}>
                <HooopLogo className="w-full h-full object-contain" />
             </SoftCard>
         </div>
         <div className="flex flex-col gap-6 pointer-events-auto w-full">
            {navItems.filter(item => !item.hidden).map((item) => ( 
                <button key={item.id} onClick={() => navigateTo(item.id)} className="group flex items-center gap-4 w-full text-left focus:outline-none">
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-black scale-125' : 'bg-gray-300 group-hover:bg-gray-400'}`} />
                    <span className={`text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${activeSection === item.id ? 'text-black translate-x-1' : 'text-gray-400 group-hover:text-gray-600'}`}>
                        {item.label}
                    </span>
                </button>
            ))}
         </div>
         <div className="pointer-events-auto mt-auto">
            <VerticalPill height="h-24" className="w-2 !rounded-full bg-gray-300" />
         </div>
      </nav>

      {/* --- MOBILE NAV --- */}
      <div className="fixed top-0 left-0 right-0 z-50">
          <div className="h-20 flex items-center justify-between px-6 lg:hidden bg-[#E0E5EC]/90 backdrop-blur-md shadow-sm border-b border-white/50">
            <div className="font-bold text-2xl tracking-tighter flex items-center gap-3">
                <HooopLogo className="w-12 h-12" />
                <span className="text-black">{SITE_CONTENT.brand.name}</span>
            </div>
            <button onClick={() => setIsMenuOpen(true)} className="p-3 rounded-xl bg-[#E0E5EC] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-black active:shadow-inner">
              <Menu size={24} />
            </button>
          </div>
          <div className="lg:hidden bg-[#E0E5EC]/95 backdrop-blur-md border-b border-white/20 overflow-x-auto flex items-center gap-6 px-6 py-3 no-scrollbar shadow-inner">
             {navItems.filter(item => !item.hidden).map(item => (
                 <button key={item.id} onClick={() => navigateTo(item.id)} className={`whitespace-nowrap text-[10px] font-bold uppercase tracking-widest flex-shrink-0 transition-colors ${activeSection === item.id ? 'text-teal-600' : 'text-gray-500'}`}>{item.label}</button>
             ))}
          </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#E0E5EC] flex flex-col items-center justify-center space-y-8 animate-fade-in lg:hidden">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-4 rounded-full bg-[#E0E5EC] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-black">
            <X size={24} />
          </button>
          {navItems.filter(item => !item.hidden).map((item) => (
            <button key={item.id} onClick={() => { navigateTo(item.id); setIsMenuOpen(false); }} className={`text-2xl font-bold tracking-tight ${activeSection === item.id ? 'text-black' : 'text-gray-500'}`}>
              {item.label}
            </button>
          ))}
        </div>
      )}

      <main className="lg:pl-64 w-full min-h-screen relative z-10 px-4 sm:px-6 lg:px-20 pt-28 lg:pt-0 pb-16 flex flex-col">
        
        <div className="w-full flex-grow flex flex-col justify-center">
          
          {/* HOME */}
{activeSection === 'home' && (
<>
            <section className="relative flex flex-col lg:flex-row items-center h-full min-h-screen animate-fade-in-up">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 hidden xl:flex gap-6 pointer-events-none opacity-50">
                  <VerticalPill height="h-96" className="w-24" />
                  <VerticalPill height="h-64" className="w-24 mt-20" />
              </div>
              <div className="w-full lg:w-1/2 z-10 flex flex-col justify-center items-start space-y-10 pl-4 lg:pl-12">
                <div className="flex flex-col">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">{SITE_CONTENT.brand.est}</span>
                    {/* Sized for the longer line: text-8xl was set for "Growth. / Reimagined." */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#313b4e] leading-[1.02] tracking-tight max-w-2xl">
                      {SITE_CONTENT.hero.titleLine1} <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-600">{SITE_CONTENT.hero.titleLine2}</span>
                    </h1>
                </div>
                <div className="space-y-5 max-w-md">
                  <p className="text-lg lg:text-xl text-gray-500 leading-relaxed font-medium">{SITE_CONTENT.hero.subtitle}</p>
                  <p className="text-base text-gray-400 leading-relaxed">{SITE_CONTENT.hero.subtitleSecondary}</p>
                </div>
                
                <div className="flex flex-wrap gap-4 sm:gap-6 items-center mt-4">

  <SoftCard 
    onClick={() => navigateTo('manifesto')}
    className="px-6 py-4 sm:px-8 flex items-center gap-3 text-black font-bold group cursor-pointer hover:scale-[1.02]"
  >
    <span>Read Our Manifesto</span>
    <BookOpen size={18} className="group-hover:scale-110 transition-transform"/>
  </SoftCard>

  <SoftCard 
    onClick={() => navigateTo('sense')}
    className="px-6 py-4 sm:px-8 flex items-center gap-3 text-gray-600 font-bold group cursor-pointer hover:text-green-600 hover:scale-[1.02]"
  >
    <span>Test Sustainability Claims</span>
    <ScanLine size={18} className="group-hover:scale-110 transition-transform"/>
  </SoftCard>

  <SoftCard 
    onClick={() => navigateTo('collective')}
    className="px-6 py-4 sm:px-8 flex items-center gap-3 text-gray-600 font-bold group cursor-pointer hover:text-teal-600 hover:scale-[1.02]"
  >
    <span>{SITE_CONTENT.hero.collectiveButtonText}</span>
    <Users size={18} className="group-hover:scale-110 transition-transform"/>
  </SoftCard>
</div>
</div>
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-full flex items-center justify-center relative mt-12 lg:mt-0">
                 <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
                     <div className="absolute inset-0 rounded-full border-[40px] border-[#E0E5EC] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center animate-float">
                        <div className="w-full h-full rounded-full shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center p-12">
                             <HooopLogo className="w-full h-full object-contain opacity-90" />
                        </div>
                     </div>
                     <SoftCard className="absolute -left-12 bottom-20 p-6 w-48 z-20" hoverEffect={false}>
                        <div className="text-xs font-bold text-gray-400 uppercase mb-1">Focus</div>
                        <div className="text-lg font-bold text-black">Sustainability</div>
                     </SoftCard>
                 </div>
              </div>
            </section>
              <section className="py-20 border-t border-gray-200/50">
                <div className="max-w-6xl mx-auto px-4 lg:px-12">

                  {/* PARTNERS — single balanced row */}
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-gray-400"></span> Our Partners
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
                    {SITE_CONTENT.homeExtras.partners.map((partner, idx) => (
                      <a key={idx} href={partner.url} target="_blank" rel="noopener noreferrer"
                         className="group rounded-2xl bg-white/50 border border-white/70 px-6 py-6 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                        <span className="font-bold text-gray-500 group-hover:text-teal-600 transition-colors tracking-wide">
                          {partner.name}
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* COVERAGE — headline-led list */}
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-gray-400"></span> As Featured On
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                    {SITE_CONTENT.homeExtras.featured.map((feature, idx) => (
                      <a key={idx} href={feature.url} target="_blank" rel="noopener noreferrer"
                         className="group flex items-start gap-4 py-5 border-b border-gray-200/60 hover:border-teal-200 transition-colors">
                        <div className="flex-grow min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-teal-600/80 mb-1.5">
                            {feature.name}
                          </p>
                          <p className="text-sm text-gray-600 group-hover:text-gray-900 leading-snug transition-colors">
                            {feature.headline || feature.name}
                          </p>
                        </div>
                        <ExternalLink size={14} className="text-gray-300 group-hover:text-teal-500 shrink-0 mt-5 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </section>
          </>
)}
            
          {/* MANIFESTO SECTION */}
          {activeSection === 'manifesto' && (
            <section className="px-6 lg:px-32 py-24 min-h-screen flex flex-col justify-center animate-fade-in-up">
                <div className="mb-10">
                    <button 
                        onClick={() => navigateTo('home')}
                        className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 mb-8 uppercase tracking-widest"
                    >
                        <ArrowLeft size={16} /> Back to Home
                    </button>
                    <div className="text-xl font-bold text-gray-400 mb-2">EST. 2025</div>
                    <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mb-8 tracking-tighter">
                        hello.<br/>
                        we are <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">HOOOP</span>
                    </h1>
                </div>

                <div className="max-w-3xl space-y-8 text-xl lg:text-2xl font-light leading-relaxed text-gray-600">
                    <p>
                        Marketing has the power to change behaviour; and for decades the minds behind <span className="font-bold text-gray-900">HOOOP</span> have acted according to that belief.
                    </p>
                    <p className="text-gray-900 font-medium">
                        It's time for us to now drive positive human behaviour.
                    </p>
                    <p>
                        At <span className="text-teal-600 font-bold">HOOOP</span>, we are focused on partnering with businesses that push the world forward, even as we help you outpace the market.
                    </p>
                    <p>
                        A new generation of consumers has emerged that follows its conscience as it spends, but also does not sacrifice its material wants.
                    </p>
                    <div className="pl-6 border-l-4 border-teal-400 italic text-gray-800">
                        It is at this intersection that the greatest opportunities lie.
                        <br/><br/>
                        This is a time of conscious choices.
                    </div>
                </div>
            </section>
          )}

          {/* OUR THINKING (BLOG) SECTION */}
          {activeSection === 'thinking' && (
            selectedPost ? (
                <BlogPostView post={selectedPost} onBack={backToThinkingList} navigateTo={navigateTo} />
            ) : (
                <section className="relative min-h-screen py-24 animate-fade-in-up">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="mb-20 text-center md:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#313b4e] mb-6 tracking-tighter">
                                {SITE_CONTENT.thinking.title}
                            </h1>
                            <p className="text-xl text-gray-500 max-w-2xl font-light leading-relaxed">
                                {SITE_CONTENT.thinking.subtitle}
                            </p>
                        </div>

                        <div className="mb-20">
                            <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl group cursor-pointer" onClick={() => { setShowSenseTool(true); navigateTo('sense'); }}>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500 to-transparent opacity-20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-xs font-bold tracking-widest uppercase text-green-400">Featured Intelligence</span>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-3">{SITE_CONTENT.thinking.featuredTool.title}</h3>
                                        <p className="text-gray-400 max-w-md text-sm leading-relaxed mb-6">
                                            {SITE_CONTENT.thinking.featuredTool.desc}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-sm font-bold border-b border-green-500 pb-1 hover:text-green-400 transition-colors">
                                            {SITE_CONTENT.thinking.featuredTool.cta} <ArrowRight size={16} />
                                        </span>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                                        <ScanLine size={48} className="text-green-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-16 border-t border-gray-200 pt-16">
                            {SITE_CONTENT.thinking.posts.map((post, index) => (
                                <article key={index} className="group cursor-pointer" onClick={() => openBlogPost(post)}>
                                    <div className="flex flex-col md:flex-row gap-2 md:items-baseline justify-between mb-2">
                                        <span className="text-xs font-bold tracking-widest uppercase text-teal-600">{post.category}</span>
                                        <span className="text-xs text-gray-400 font-mono">{post.date}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-500 leading-relaxed max-w-2xl text-lg">
                                        {post.desc}
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-teal-600 transition-colors">
                                        Read Article <ArrowRight size={14} />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )
          )}

          {/* SENSE SECTION */}
          {activeSection === 'sense' && (
            <section className="relative min-h-screen py-24 animate-fade-in-up">
                <div className="max-w-6xl mx-auto px-6 mb-12">
                     <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                        {[
                            { id: 'analyzer', label: 'Analyzer', icon: ScanLine },
                            { id: 'checklist', label: 'Visual Audit', icon: Check },
                            { id: 'learn', label: 'Learn', icon: BookOpen }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setSenseTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                                    senseTab === tab.id 
                                    ? 'bg-gray-900 text-white shadow-lg' 
                                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                                }`}
                            >
                                <tab.icon size={16} />
                                {tab.label}
                            </button>
                        ))}
                     </div>
                </div>

                {senseTab === 'analyzer' && <SenseAnalysisView />}
                {senseTab === 'checklist' && <ChecklistView />}
                {senseTab === 'learn' && <ResourcesView />}
            </section>
          )}

          {activeSection === 'esg-media-index' && (
            <section className="relative min-h-screen py-24 animate-fade-in-up">
                <EsgMediaIndexView navigateTo={navigateTo} />
            </section>
          )}

          {activeSection === 'privacy' && (
            <section className="relative min-h-screen py-24 px-6 animate-fade-in-up">
                <PrivacyView />
            </section>
          )}

          {/* PRVAAH SECTION */}
          {activeSection === 'prvaah' && (
            <section className="min-h-screen py-20 animate-fade-in-up">
                <div className="max-w-6xl mx-auto px-6">

                    {/* HERO — compact */}
                    <div className="text-center mb-16">
                         <div className="flex justify-center mb-5">
                            <ImageWithFallback src="/Prvaah Logo.png" alt="Prvaah Logo" className="h-16 w-auto object-contain" />
                         </div>
                         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#313b4e] tracking-tighter">
                            {SITE_CONTENT.prvaah.title}
                         </h1>
                         <p className="text-sm text-gray-400 italic mt-2 mb-5">"{SITE_CONTENT.prvaah.sanskritMeaning}"</p>
                         <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            {SITE_CONTENT.prvaah.description1}
                         </p>
                    </div>

                    {/* THE FLOW — five stages as one connected journey */}
                    <div className="mb-6 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-gray-400"></span>
                      <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">The flow</h2>
                    </div>

                    <div className="relative mb-20">
                      {/* connector: horizontal on desktop, vertical on mobile */}
                      <div className="hidden md:block absolute left-0 right-0 top-7 h-[2px] bg-gradient-to-r from-teal-200 via-teal-300 to-teal-200" />
                      <div className="md:hidden absolute left-7 top-0 bottom-0 w-[2px] bg-gradient-to-b from-teal-200 via-teal-300 to-teal-200" />

                      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-5 relative">
                        {SITE_CONTENT.prvaah.stages.map((stage, idx) => {
                          const Icon = getIconComponent(stage.icon);
                          return (
                            <div key={idx} className="flex md:flex-col gap-5 md:gap-0 items-start group">
                              <div className="w-14 h-14 rounded-full bg-[#E4E8EF] border-2 border-white shadow-[4px_4px_10px_rgba(163,177,198,0.5),-4px_-4px_10px_rgba(255,255,255,0.8)] flex items-center justify-center shrink-0 text-teal-600 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                <Icon size={22} />
                              </div>
                              <div className="md:mt-6">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-teal-600/70 mb-1">Step {idx + 1}</p>
                                <h3 className="text-lg font-bold text-[#313b4e] leading-tight">{stage.label}</h3>
                                <p className="text-xs font-bold text-gray-500 mt-1">{stage.short}</p>
                                <p className="text-xs text-gray-500 leading-relaxed mt-2">{stage.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* CIRCULARITY — a service, not a stage */}
                    <SoftCard className="p-8 md:p-10 mb-20 flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-14 h-14 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center shrink-0 text-teal-600">
                        {(() => { const I = getIconComponent(SITE_CONTENT.prvaah.circularity.icon); return <I size={26} />; })()}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#313b4e] mb-3">{SITE_CONTENT.prvaah.circularity.label}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">{SITE_CONTENT.prvaah.circularity.desc}</p>
                      </div>
                    </SoftCard>

                    {/* VOICES — compact */}
                    <div className="mb-6 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-gray-400"></span>
                      <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Voices from the corridor</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        {SITE_CONTENT.prvaah.testimonials.map((testi, idx) => (
                            <SoftCard key={idx} className="p-7 flex flex-col h-full">
                                <p className="text-sm text-gray-600 leading-relaxed flex-1">"{testi.text}"</p>
                                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-200/60">
                                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 shrink-0">
                                        <ImageWithFallback src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{testi.name}</h4>
                                        <p className="text-xs text-gray-500">{testi.role}</p>
                                    </div>
                                </div>
                            </SoftCard>
                        ))}
                    </div>

                    {/* CTA — the page had none */}
                    <div className="soft-card p-8 md:p-12 bg-gray-900 text-white rounded-[2.5rem]">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">Thinking about the corridor?</h2>
                      <p className="text-gray-300 leading-relaxed max-w-2xl mb-8">
                        Whether you are moving into India or out of it, the first conversation is usually about what you already have and what is genuinely missing. That one is free.
                      </p>
                      <a href="mailto:hello@hooop.in?subject=Prvaah%20-%20market%20entry"
                         className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                        <Mail size={18} /> hello@hooop.in
                      </a>
                    </div>
                </div>
            </section>
          )}

          {/* RESEARCH SECTION */}
          {activeSection === 'research' && (
            <section className="relative min-h-screen py-24 animate-fade-in-up">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl lg:text-6xl font-black text-[#313b4e] mb-4">{SITE_CONTENT.research.title}</h1>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">{SITE_CONTENT.research.subtitle}</p>
                        <p className="text-md text-gray-400 mt-2 max-w-2xl mx-auto">{SITE_CONTENT.research.intro}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SITE_CONTENT.research.reports.map((item, idx) => {
                            const Icon = getIconComponent('chart');
                            return (
                            <SoftCard key={idx} className="p-8 flex flex-col justify-between h-80 group hover:-translate-y-2">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
                                            <Icon size={24} className="text-gray-600" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full">{item.category}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h2>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="mt-6 pt-6 border-t border-gray-200/50 flex items-center justify-between text-gray-400 group-hover:text-teal-600 transition-colors cursor-pointer">
                                    <span className="text-xs font-bold uppercase tracking-widest">Download</span>
                                    <Download size={18} />
                                </div>
                            </SoftCard>
                        )})}
                    </div>
                </div>
            </section>
          )}

          {/* GREENWASHING (Playbook Only) */}
          {activeSection === 'greenwashing' && <GreenwashingView navigateTo={navigateTo} />}

          {/* COMBINED OFFERINGS & MODELS SECTION */}
          {activeSection === 'offerings' && (
            <section className="py-24 min-h-screen animate-fade-in-up">
              <div className="max-w-6xl mx-auto px-6 mb-24">
                  <div className="flex flex-col lg:flex-row justify-between items-end mb-14">
                     <div>
                         <h1 className="text-4xl lg:text-6xl font-black text-[#313b4e] mb-4">What We Do</h1>
                         <p className="text-gray-500 max-w-xl">Four practices that overlap more often than not. Most engagements start in one and pull in the others.</p>
                     </div>
                     <VerticalPill height="h-2" className="w-32 !rotate-0 hidden lg:block" />
                  </div>

                  {/* HOW WE WORK — moved above the practices so it is seen without scrolling */}
                  <div className="mb-20">
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-gray-400"></span> Ways to work with us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {SITE_CONTENT.models.map((model, idx) => {
                        const Icon = getIconComponent(model.iconType);
                        return (
                          <SoftCard key={idx} className="p-7 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center mb-5">
                              <Icon size={20} className="text-gray-400 group-hover:text-teal-600 transition-colors" />
                            </div>
                            <h3 className="text-sm font-black tracking-widest text-[#313b4e] mb-3">{model.title}</h3>
                            <p className="text-sm font-bold text-gray-800 mb-2 leading-snug">{model.headline}</p>
                            <p className="text-xs text-gray-500 leading-relaxed">{model.desc}</p>
                          </SoftCard>
                        );
                      })}
                    </div>
                  </div>

                  <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-gray-400"></span> Our practices
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                     {SITE_CONTENT.offerings.map((card, idx) => (
                       <SoftCard key={idx} className="p-8 lg:p-10 flex flex-col h-full group">
                          <div className="w-12 h-12 rounded-2xl bg-[#E0E5EC] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center mb-6 text-black font-bold text-xl group-hover:text-white group-hover:bg-black transition-colors duration-300">
                             {idx + 1}
                          </div>
                          <h2 className="text-2xl font-bold text-[#313b4e] mb-3">{card.title}</h2>
                          <p className="text-gray-500 text-sm leading-relaxed mb-6">{card.desc}</p>
                          <ul className="space-y-2.5 mb-6">
                            {card.items.map((item, i) => (
                              <li key={i} className="flex gap-3 text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-[7px]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                          {card.linkTo && (
                            <button
                              type="button"
                              onClick={() => navigateTo(card.linkTo)}
                              className="mt-auto self-start inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-800 transition-colors"
                            >
                              {card.linkLabel} <ArrowRight size={15} />
                            </button>
                          )}
                       </SoftCard>
                     ))}
                  </div>
              </div>

              <div className="max-w-6xl mx-auto px-6">
                 <div className="text-center max-w-3xl mx-auto pt-4">
                     <div className="inline-block px-8 py-3 rounded-full bg-[#E0E5EC] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] mb-6">
                         <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Transparent</span>
                     </div>
                     <h4 className="text-2xl font-bold text-gray-800 mb-4">No hidden fees, no markups.</h4>
                     <p className="text-gray-500">We work hand-in-hand with brands, agencies, funds and sustainability consultancies to align brand &amp; sustainability strategy.</p>
                 </div>
              </div>
            </section>
          )}

          {/* COLLECTIVE */}
          {activeSection === 'collective' && (
             <section className="py-24 min-h-screen animate-fade-in-up">
                <div className="mb-20">
                   <h1 className="text-4xl lg:text-6xl font-black text-[#313b4e] mb-6">The Collective</h1>
                   <p className="text-gray-500 max-w-xl text-lg">
                      We are thinkers, technologists, communicators, and designers working to accelerate change.
                   </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {SITE_CONTENT.collective.map((member, idx) => (
                       <SoftCard key={idx} className="p-8 flex flex-col items-center text-center group">
                          <div className="w-32 h-32 rounded-full bg-[#E0E5EC] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] p-2 flex-shrink-0 mb-6">
                             <ImageWithFallback src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"/>
                          </div>
                          <div>
                             <h2 className="text-xl font-bold text-[#313b4e]">{member.name}</h2>
                             <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-4 mt-2 h-8">{member.role}</p>
                             <p className="text-gray-500 text-xs leading-relaxed mb-6 h-20 overflow-hidden">{member.desc}</p>
                             <div className="flex justify-center gap-4">
                                {member.linkedin && (
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="relative z-20">
                                    <Linkedin size={18} className="text-gray-400 hover:text-black cursor-pointer transition-colors"/>
                                </a>
                                )}
                                <Globe size={18} className="text-gray-400 hover:text-black cursor-pointer transition-colors"/>
                             </div>
                          </div>
                       </SoftCard>
                   ))}
                </div>
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg">
                        If our purpose resonates with you, write to us at <a href="mailto:hello@hooop.in" className="text-teal-600 font-bold hover:underline">hello@hooop.in</a> to join the collective.
                    </p>
                </div>
             </section>
          )}
          
          {/* CONTACT */}
          {activeSection === 'contact' && (
             <section className="py-24 min-h-screen flex flex-col items-center justify-center animate-fade-in-up px-6">
                <div className="max-w-4xl w-full text-center">
                    <h1 className="text-5xl lg:text-7xl font-black text-[#313b4e] mb-6 tracking-tighter">Let's Talk.</h1>
                    <p className="text-xl text-gray-500 mb-16 font-light">Ready to reimagine growth?</p>

                    <div className="bg-[#F0F0F3] p-10 md:p-16 rounded-[3rem] shadow-[-10px_-10px_30px_#FFFFFF,10px_10px_30px_#AEAEC040] transform hover:scale-[1.01] transition-transform duration-300">
                        <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8 leading-relaxed">
                           We are always open for a good conversation.
                        </p>
                        <a href="mailto:hello@hooop.in" className="inline-flex items-center gap-3 text-3xl md:text-5xl font-black text-teal-600 hover:text-teal-500 transition-colors tracking-tight border-b-4 border-transparent hover:border-teal-200">
                           hello@hooop.in
                        </a>
                    </div>
                </div>
             </section>
          )}
        </div>

        <footer className="w-full py-12 mt-auto border-t border-gray-200/40 text-center">
            <div className="flex justify-center gap-6 mb-6">
                <a href="https://www.linkedin.com/company/hooopcollective/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#E0E5EC] rounded-full shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-gray-500 hover:text-[#0077b5] hover:scale-110 transition-all duration-300" aria-label="Follow us on LinkedIn">
                    <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/hooopcollective/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#E0E5EC] rounded-full shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-gray-500 hover:text-[#E1306C] hover:scale-110 transition-all duration-300" aria-label="Follow us on Instagram">
                    <Instagram size={20} />
                </a>
            </div>
            <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                We are always open for a good conversation, write to us at <a href="mailto:hello@hooop.in" className="text-teal-600 hover:text-teal-800 transition-colors lowercase font-bold ml-1">hello@hooop.in</a>
            </p>
            <p className="mt-4">
                <button type="button" onClick={() => navigateTo('privacy')} className="text-gray-400 text-[10px] uppercase tracking-widest font-bold hover:text-gray-600 transition-colors">
                    Privacy Notice
                </button>
            </p>
        </footer>
      </main>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-scan { animation: scan 3s linear infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; transform: translateY(20px); }
        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        .soft-input {
            background: #F5F5F7;
            box-shadow: inset 4px 4px 8px #d1d4d9, inset -4px -4px 8px #ffffff;
        }
        .input-error {
            box-shadow: inset 4px 4px 8px #fecaca, inset -4px -4px 8px #ffffff;
            border: 1px solid #f87171;
        }
        .soft-btn-primary {
            background: #1a1a1a;
            color: white;
            box-shadow: 5px 5px 12px rgba(0,0,0,0.2);
            transition: transform 0.2s ease;
        }
        .soft-btn-primary:hover {
            transform: translateY(-2px);
        }
        .radar-circle {
            animation: radar-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .fade-in-section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            will-change: opacity, visibility;
        }
        .fade-in-section.is-visible {
            opacity: 1;
            transform: none;
        }
        @keyframes radar-ping {
            0% { transform: scale(0.8); opacity: 0.8; }
            100% { transform: scale(2); opacity: 0; }
        }
        html, body, #root {
            width: 100%;
            max-width: 100%;
            overflow-x: hidden;
        }
      `}</style>
    </div>
  );
});

export default App;
