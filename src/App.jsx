import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ArrowRight, ArrowLeft, Globe, Shield, Zap, TrendingUp, FileText, Anchor, Linkedin, ExternalLink, Users, Coins, Briefcase, ScanLine, BarChart3, Download, AlertCircle, Check, Leaf, Info, Scale, BookOpen, ChevronDown, ChevronUp, Tag, ShieldCheck, Wind, Gavel, MicOff, Lock, HelpCircle, Eye, AlertTriangle, CheckCircle, Mail, Copy, RefreshCw, ShieldAlert, Search, UserX, Flag, Instagram, MapPin } from 'lucide-react';

// ==========================================
// 🛠️ EASY EDIT SECTION - CHANGE CONTENT HERE
// ==========================================

const SITE_CONTENT = {
  brand: {
    name: "HOOOP",
    est: "Est. 2025",
    locations: ["Delhi", "Goa", "London", "Mumbai"],
    logoImage: "/THE-HOOO-COLLECTIVEP_without-shadow.png",
    contactEmail: "hello@hooop.in",
  },
  hero: {
    titleLine1: "Marketing Science",
    titleLine2: "for Circular and Sustainable Commerce.",
    subtitle: "A marketing and strategy collective helping climate and circular businesses bridge the gap between innovation and commercial adoption.",
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
          title: "Made-for-Advertising Went From 15% of Programmatic Spend to Under 1%. Measurement Did That, Not Outrage.",
          slug: "made-for-advertising-programmatic-waste-india",
          category: "Sustainable Media",
          date: "September 17, 2026",
          desc: "In 2023, made-for-advertising sites took fifteen per cent of programmatic budgets. The median is now around one per cent. What fixed it is worth understanding, because the same method is sitting unused on most Indian media plans.",
          content: [
            "In June 2023 the Association of National Advertisers published a number that embarrassed the industry. Fifteen per cent of programmatic ad spend was going to made-for-advertising sites. Twenty-one per cent of all impressions.",
            "Three years on, the median sits at 1.1 per cent.",
            "We have been looking for a clean example of something the marketing industry actually fixed, rather than a problem it is still describing. This is the best one we have found.",
            { heading: "What a made-for-advertising site is" },
            "A page built to carry advertising rather than to be read. Thin articles, often assembled cheaply, wrapped in more ad slots than editorial. Slideshows that break one paragraph across fourteen page loads, each load a fresh set of impressions.",
            "Nothing about it is illegal. The ads serve. The impressions count. The reporting comes back looking healthy.",
            "They are also cheap, which is the entire trap. If you buy on cost per thousand impressions, made-for-advertising inventory wins every auction you allow it into. It is optimised to be the cheapest thing in the room.",
            { heading: "What actually fixed it" },
            "Not regulation. Nobody passed a law. There was no campaign, no pledge, and as far as we can tell no brand ever ran an ad about it.",
            "What changed is that advertisers started getting log-level data \u2014 the actual, unaggregated list of every domain their money reached. Once buyers could read that list, three things happened quickly.",
            "The number of active domains in a median plan fell from 53,799 to 28,958. The median number of supply-side platforms in the path dropped from 19 to 17. And the share of spend transacting through private marketplaces, where the buyer knows who the seller is, went from 64.5 per cent to 87.8 per cent.",
            "None of that is a moral decision. It is a buying decision that only became possible once people could see what they were buying.",
            { figure: "mfa-decline" },
            { heading: "The climate number came along for the ride" },
            "Over the same period, carbon emissions per advertising dollar fell from 0.10kg to 0.09kg. A ten per cent drop in a single quarter, on a metric nobody in the room was optimising for.",
            "The mechanics are not mysterious. Open marketplace buys run up to seven times more carbon-intensive than private marketplace buys, because the path is longer and more of the inventory is junk. Made-for-advertising pages carry roughly a quarter more emissions than ordinary inventory, because they are heavier and they load more of themselves per impression.",
            "So when the industry cleaned up its supply paths for commercial reasons, the emissions fell as a by-product.",
            "This is the argument we have been making on Indian plans for two years, and it is useful to have it demonstrated at scale by data that has nothing to do with us. Cleaner media is mostly better media. The climate benefit is real, and it is second in line.",
            { cta: "How we work with media teams", to: "offerings" },
            { heading: "The part that did not improve" },
            "Made-for-advertising went from roughly two-thirds of measured programmatic waste to under one per cent. Total waste over the same period went from $20.0 billion to $26.8 billion. Up thirty-four per cent.",
            "That is not a contradiction. The industry solved the specific problem it could see and measure, and the money moved somewhere less legible.",
            "The most recent benchmark, published in May 2026, makes the shape of it clear. Among the advertisers being measured, the top performers convert 54.0 per cent of their spend efficiently. The lower performers manage 32.1 per cent. Their true cost per thousand is $7.46 against $19.04 \u2014 the same impressions, two and a half times the price.",
            "The gap is widening, not closing. The fix works. It works for the people who are measuring.",
            { heading: "Where India actually sits" },
            "Here is a fact about Indian digital advertising that we had not seen written down anywhere.",
            "Lunio's 2026 invalid traffic report looked at 2.7 billion paid clicks across Google, Meta, TikTok, LinkedIn and Bing, in ten major advertising markets. The global average rate of invalid traffic was 8.51 per cent. China came in at 16.37 per cent, Brazil at 14.70.",
            "India was the lowest in the dataset, at 5.50 per cent.",
            "The report's own explanation is that India's digital economy is mobile-first and app-centric, and app inventory is easier to validate than the open web. That sounds right to us, though it is an explanation rather than a proof.",
            "We would be careful with what this number does and does not say. Invalid traffic and made-for-advertising are different problems measured by different methods, and adding them together would be wrong. Lunio also sells invalid traffic protection, so it is not a disinterested source; we are using the ranking rather than the absolute figure, because the ordering is consistent with what other vendors report.",
            "But taken at face value it points somewhere interesting. India's problem is not that a large share of the traffic is fake. On the available evidence it is the least fake of any major market. The problem is that almost nobody here is running the other checks \u2014 the ones that moved the global numbers.",
            "The ANA benchmark that produced all of the figures above had 86 participants in its most recent quarter, 66 of them actively contributing data. They are overwhelmingly large American advertisers. There is no Indian equivalent, which means Indian buyers currently have no benchmark to fail against.",
            { heading: "What we would do on an Indian plan" },
            "None of this requires new technology. All of it is available to anyone spending money programmatically today.",
            "Ask for the full domain list. Not the top twenty by spend \u2014 all of them. The length of that list is the single most diagnostic number on a media plan, and most Indian advertisers have never seen theirs.",
            "Count the intermediaries. How many supply-side platforms sit between your budget and the publisher? If the answer is more than a dozen, you are paying a margin at each one and you cannot tell which.",
            "Look at measurable rate before you look at viewability. Viewability of eighty per cent means nothing if only half the inventory was measurable in the first place.",
            "Then look at carbon. By the time you get there, the number will already have fallen, and you will have a sustainability result that came out of a procurement exercise rather than a budget line.",
            { heading: "What we do not know" },
            "We do not have an Indian benchmark. Everything above is US advertisers, and we are extrapolating a method rather than a result. Whether domain consolidation plays out the same way here is genuinely open, because the Indian inventory mix skews far more to mobile apps and far less to connected television.",
            "We also do not know how much of the global improvement is real versus definitional. Some of the drop in made-for-advertising exposure will be buyers getting better, and some will be the category being redrawn as the sites evolve. We have not seen anyone separate the two convincingly, including us.",
            "And we have not tested the carbon claim on Indian inventory ourselves. The relationship between supply path length and emissions is well evidenced globally. We are assuming it holds here. We would like to stop assuming.",
            { heading: "Where we have got to" },
            "An industry took a problem worth fifteen per cent of a budget line and cut it by more than ninety per cent in under three years, with no legislation, no pledge and no campaign. It did it by giving buyers a list and letting them read it.",
            "That is worth saying plainly, in a field where most of what gets published is an account of how bad things are. Things do sometimes get fixed, and when they do it is usually because somebody made the problem measurable rather than because somebody made it loud.",
            "It also did not happen everywhere, and India is not in the dataset.",
            "If you have a live media plan and you are not sure which of these numbers you could produce for it, send us the site list. We will tell you what we see, including if the honest answer is that there is not much to gain.",
            { cta: "See the ESG Media Index", to: "esg-media-index" },
          ],
       },
       {
          title: "FSSAI Is Deleting \u201c100%\u201d and \u201cNatural\u201d From Food Labels. Green Claims Use the Same Words.",
          slug: "fssai-label-crackdown-sustainability-claims",
          category: "Greenwashing",
          date: "August 1, 2026",
          desc: "FSSAI has spent months stripping words like 100%, natural and healthy off Indian food packaging. The reasoning it is using applies almost word for word to sustainability claims.",
          content: [
            "Over the past few months, words have been quietly disappearing from Indian food packaging. Healthy. Natural. Fresh. 100%. No added sugar.",
            "Not because brands changed their minds. Because FSSAI started issuing notices.",
            "FSSAI directed all food businesses to remove the claim of 100% fruit juice from labels and advertisements of reconstituted juice. The reasoning was specific: under the Food Safety and Standards (Advertising and Claims) Regulations, 2018, there is no provision for a 100% claim at all. And it is particularly misleading where the major ingredient is water and the fruit has been reconstituted from concentrate.",
            "Then it widened. A prohibition order against a large FMCG group over 100% claims on honey, ghee and coconut oil. Notices to a confectionery major, a gifting platform and a packaged foods company. A hazelnut spread questioned over All Natural. Two snack brands over the word Healthy.",
            "None of those companies were accused of selling something dangerous. The products were fine. The labels were the problem.",
            { heading: "The reasoning matters more than the category" },
            "Look at what FSSAI is actually objecting to, because it is not really about juice.",
            "100% is an absolute with no defined basis. A hundred per cent of what, measured how? Natural has no regulatory definition, so it means whatever the reader assumes it means. Healthy is a conclusion the buyer should be drawing, not one the pack should be asserting.",
            "The 2020 Labelling and Display Regulations put it plainly: a label must not create an erroneous impression, and must indicate the true nature of the food.",
            "That sentence reads differently with a sustainability claim in mind.",
            "Every unsupported claim opens what we call a Verification Vacuum — the space between what a brand says and what it can prove. FSSAI is not really policing vocabulary. It is closing that gap, one word at a time.",
            { figure: "verification-vacuum" },
            { heading: "The overlap is almost word for word" },
            "We built Sense to flag language on sustainability claims that tends to attract regulatory attention. The terms it flags most often are 100%, natural, eco-friendly, zero, and unqualified comparatives like better and greener.",
            "Two of those are the exact words FSSAI is currently striking off food packs.",
            "That is not coincidence. It is the same logic: that an unqualified absolute is indefensible, that an undefined adjective is a claim rather than a description, and that the burden of proof sits with whoever printed it.",
            "India\u2019s CCPA guidelines on greenwashing, introduced in 2024, use recognisably the same reasoning. So does ASCI. Different regulator, different aisle, same test \u2014 can you substantiate the specific thing the buyer will understand you to have said?",
            { cta: "Check your claims with Sense", to: "sense" },
            { heading: "Why we think food came first" },
            "Food is easier to enforce. The claims sit on physical packaging, the products are tested anyway, and the harm is legible to a consumer.",
            "Environmental claims are harder. Verifying a recycled-content percentage or a carbon-neutral claim means auditing a supply chain, not reading a label. That difficulty has bought green claims some time.",
            "We would argue it has bought time rather than immunity. The machinery being built for food \u2014 notices, prohibition orders, named brands in the trade press \u2014 is the same machinery, at the same agencies, that will handle green claims as verification gets cheaper.",
            { heading: "The practical read" },
            "If you carry a 100% recycled claim, ask what the 100% attaches to. The bottle? The label? The carton it shipped in? If the honest answer needs a footnote, the footnote is the claim.",
            "If you use natural, clean or responsible on pack, you are relying on the reader supplying a definition you have not given them. That was the specific issue in the hazelnut spread notice.",
            "And if your sustainability claim would survive being read by someone actively hunting for the gap between the words and the evidence, then it will probably survive the test now being applied to food.",
            "The competitive advantage is no longer making stronger claims. It is making claims that survive verification.",
            { heading: "What we do not know" },
            "We do not know the timeline. Enforcement on green claims in India has been slower and far less public than on food, and we have no basis for saying when that changes.",
            "We are also not certain the approach transfers cleanly. Food claims are largely verifiable from the product itself; environmental claims usually are not. That may mean enforcement lands differently rather than simply later.",
            "There is a risk in the other direction too. Our own survey found roughly a third of Indian sustainability claims go out with no independent check \u2014 but it also found that seventy per cent of companies with genuinely strong credentials say nothing at all, from fear of scrutiny. A crackdown that pushes more brands into silence is not a good outcome either.",
            { heading: "Where we have got to" },
            "The food industry is getting a live demonstration of what happens when a claim outruns its evidence. The words are the same. The regulations rhyme. The main difference is that green claims have not had their turn yet.",
            "The next decade of marketing will not belong to brands with the loudest sustainability stories. It will belong to the ones that can demonstrate them.",
            "Closing your own Verification Vacuum is slower work than writing a better line. It is also the only version that holds.",
            "If you are looking at your own pack copy and are not sure which lines would survive that reading, that is a conversation we are always up for.",
            { cta: "Read the greenwashing playbook", to: "greenwashing" },
          ],
       },
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
          title: "Ocean Plastic, Seaweed and the Blue Economy: What Marine Claims Can Actually Be Proved",
          slug: "marine-circularity-india",
          category: "Circular Economy",
          date: "August 12, 2026",
          desc: "Four things we keep being asked about marine circularity — what ocean-bound plastic actually means, why the claims get brands into trouble, whether seaweed packaging is real yet, and where the money is. Our current thinking, including what we are still unsure about.",
          content: [
            "A sea turtle in a plastic ring changed consumer behaviour more effectively than three decades of policy. Marketing noticed. Ocean-Friendly, Reef-Safe and Made from Ocean Plastic went onto packs, and a genuine industry started forming underneath them.",
            "We work on the claims end of this, so most of what reaches us is a version of the same question: what can we actually say? This is where we have got to across four related problems. We have tried to be clear about which parts are established and which are still our opinion.",
            { heading: "Ocean-bound plastic has a definition, and most people are not using it" },
            "Ocean-bound plastic is a specific term. The working definition is plastic waste recovered within roughly 50 kilometres of a coastline, in areas without formal waste management, where it would otherwise have reached the sea.",
            "That is a narrow category. It is not the same as recovered marine plastic, which is collected from the water itself and is rarer and more expensive. It is not the same as recycled content generally.",
            "The gap between those definitions is where the trouble starts. A brand collecting waste hundreds of kilometres inland, then putting a blue wave on the pack, is making a marine claim it cannot support. Nobody in that chain necessarily lied. The logo did the work.",
            { heading: "The three ways marine claims fail" },
            "The first is vagueness. Reef-Safe has no regulatory definition in India. Without naming a specific standard — avoiding the UV-blocking compounds associated with coral bleaching, say — it is a feeling rather than a claim.",
            "The second is the hidden trade-off. Fifteen per cent recycled ocean-bound plastic in a bottle is a real achievement and worth saying. It becomes a problem when the remaining eighty-five per cent is virgin plastic and the bottle is unrecyclable at end of life. The marine benefit is true. The impression is not.",
            "The third is the misleading source above — inland waste presented as marine recovery.",
            "None of these require bad intent, which is what makes them common. They require someone in the approval chain to ask what the reader will conclude, rather than whether each word is defensible on its own. That question is the whole job.",
            { cta: "Check your claims with Sense", to: "sense" },
            { heading: "Why the supply chain is the actual constraint" },
            "Collection is the part everyone photographs. It is also the easy part.",
            "The difficulty is what happens next: sorting, washing, processing and certifying degraded material until it meets the specification of a global FMCG or fashion buyer. Ocean-bound plastic has usually been in sun and salt. It is contaminated and inconsistent in ways that virgin polymer is not.",
            "A recycler cannot fund a high-capacity extrusion line without knowing someone will buy the pellets. A brand cannot commit to volume until it has seen consistent quality. We have watched that circle stall more than once, and we would argue it is a commercial coordination problem rather than a technical one — which is a more solvable kind of problem, if less interesting to write about.",
            "Traceability is the other half. Washed up on a beach is not a provenance record. Buyers increasingly want tracking from collection point to factory floor, and the brands that will still be making marine claims in five years are the ones building that now.",
            { heading: "Seaweed: genuinely promising, genuinely not ready" },
            "Seaweed grows fast, needs no fresh water or fertiliser, absorbs carbon as it grows, and produces materials that are home-compostable. On paper it is the most attractive packaging material anyone has proposed in a long time.",
            "Walk down an Indian supermarket aisle and you will not find it.",
            "The lab is not the constraint. Edible sachets and biodegradable films work. Getting them through the high-speed, high-heat packaging lines of a large FMCG manufacturer is an engineering problem nobody has fully solved, and it needs machinery makers at the table, not just material scientists. Then there is regulatory clearance, because an edible film is a food contact material and FSSAI treats it accordingly.",
            "And scaling seaweed packaging means scaling seaweed farming — which is its own supply chain, with its own coastal communities, its own ecological limits, and a real risk of repeating extractive patterns in a new material.",
            "We think this arrives. We do not think it arrives on the timeline the pitch decks suggest.",
            { heading: "The money is the quiet problem" },
            "Climate finance concentrates on land and sky: solar, EVs, agriculture. The ocean absorbs roughly a third of human carbon dioxide emissions and receives a fraction of the attention.",
            "Marine ventures are capital-intensive, heavily regulated, and slower than a standard ten-year fund cycle likes. That is a genuine mismatch, not investor stupidity. It does mean the businesses that get funded are often the ones with the clearest offtake agreements rather than the best technology, which is worth knowing if you are building one.",
            { heading: "What we are not sure about" },
            "We do not know whether regulatory attention reaches marine claims soon. Enforcement in India has focused on food labelling, where verification is cheap. Checking a marine provenance claim means auditing a supply chain across several countries, and that difficulty has bought these claims time.",
            "We are also not certain consolidation helps. It is possible that a smaller number of well-substantiated marine claims is worse for the ocean than a larger number of imperfect ones, if the imperfect ones are funding actual collection. We genuinely do not know, and we would be interested in evidence either way.",
            "And we are conscious that we mostly see the claims, not the operations. Our view of this sector is shaped by who asks us for help, which is not a representative sample.",
            { heading: "Where that leaves a brand" },
            "If you are using marine materials, the useful discipline is to state the percentage, name the standard, and say where the material came from. Those three facts survive scrutiny. The blue wave does not.",
            "If you are considering it, the question worth asking your supplier first is not what it costs but whether they can show you the chain of custody. The answer tells you most of what you need to know.",
            "We are still working out where the lines fall here ourselves, and the sector is young enough that most of it is unsettled. If you are looking at a marine claim and are not sure it holds, we would genuinely like to compare notes.",
            { cta: "Read the greenwashing playbook", to: "greenwashing" },
          ],
       },
      {
          title: "The Commercialisation Gap: Why Circular Products Stall Before They Scale",
          slug: "commercialisation-gap-circular-economy-india",
          category: "Scale-Up Strategy",
          date: "May 28, 2026",
          desc: "Most sustainable products that fail do not fail on technology. They fail in procurement. What we have learned about the gap between a successful pilot and a purchase order.",
          content: [
            "We have sat in a lot of rooms where a sustainable material worked, everyone agreed it worked, and nothing was ordered.",
            "That gap — between a pilot that succeeds and a purchase order that follows — is where most circular economy businesses in India actually die. It is rarely the technology.",
            { heading: "Procurement is a different department with a different job" },
            "A sustainability officer is measured on targets. A procurement officer is measured on cost, continuity of supply and risk. Those are not the same incentive, and a new biomaterial threatens all three of the second set.",
            "So the meeting where everyone is enthusiastic is often not the meeting that decides. We would argue most founders in this space are pitching the wrong department, brilliantly.",
            "What changes the answer is usually boring: a second source of supply, a quality specification that matches the existing one, a pilot that does not require the line to stop, and someone willing to carry the risk of the first order.",
            { heading: "The money is available but the shape is wrong" },
            "Venture capital funds growth. The commercialisation gap needs something else — capital that de-risks a buyer's first order rather than a seller's next hire.",
            "Blended finance, demonstration grants and government pilot funding exist for exactly this, and in our experience are under-used because they are administratively tedious rather than unavailable. That is an unglamorous thing to be good at, and it is often the difference.",
            { heading: "Credibility is a procurement requirement now" },
            "A buyer cannot adopt a material that might later be called greenwashing. The reputational risk transfers to them the moment it goes on their pack.",
            "This is the part founders most often underestimate. Third-party verified lifecycle data is not a marketing asset. It is a prerequisite for the conversation, and the absence of it is a legitimate reason for a buyer to say no.",
            { cta: "Check your claims with Sense", to: "sense" },
            { heading: "What we are less sure about" },
            "We do not know how much of this is specific to India. Procurement conservatism looks similar in the UK and EU markets we work in, but the financing environment is different enough that the same business can stall for different reasons in each.",
            "We are also aware that we see the businesses that come to us for help with the commercial side, which are disproportionately the ones already struggling with it. There may be a quieter set who never had this problem and whom we never meet.",
            { heading: "Where we have got to" },
            "The founders we have watched cross this gap did not have better technology than the ones who did not. They had a better answer to the question of who carries the risk of going first.",
            "If you are stuck between a successful pilot and a purchase order, we would be interested to hear where it is jamming — it is the part of this work we find most useful to compare notes on.",
          ],
       },
      {
          title: "The ESG Passport: What Indian Exporters Now Have to Prove",
          slug: "cross-border-market-entry-esg-compliance-india-uk",
          category: "Market Access",
          date: "May 10, 2026",
          desc: "Tariffs used to be the barrier to the UK and EU. Increasingly it is disclosure — carbon, labour, traceability. What that changes for an Indian business planning to export.",
          content: [
            "A textile manufacturer in Tiruppur exporting to a London retailer is now effectively selling two things: the fabric, and the data proving how it was made.",
            "The second one is newer, and a lot of businesses are not resourced for it.",
            { heading: "The barrier moved" },
            "Trade barriers used to be tariffs. The ones that matter now are disclosure requirements: the Carbon Border Adjustment Mechanism, supply chain due diligence rules, and the buyer's own Scope 3 reporting obligations, which get pushed down to suppliers as questionnaires.",
            "None of these are trade barriers in name. In effect, an exporter who cannot answer them does not get shortlisted.",
            { heading: "What buyers actually ask for" },
            "In our experience the requests cluster: energy source and intensity at the production site, traceability far enough up the chain to identify the raw material origin, labour standards documentation, and an environmental claim that will survive the buyer's own legal review.",
            "That last one catches people out. An Indian supplier's marketing language becomes the buyer's legal exposure the moment it appears on a European pack, so buyers increasingly vet supplier claims as carefully as their own.",
            { cta: "See the ESG Media Index", to: "esg-media-index" },
            { heading: "The case for treating it as a moat" },
            "Compliance reads like cost. We would argue that for a mid-sized Indian exporter it is closer to a moat, because most of your competitors are not doing it and the ones who are get a shortlist position they do not have to compete for on price alone.",
            "That argument only holds while it is rare. It is getting less rare.",
            { heading: "What we do not know" },
            "We cannot tell you how quickly enforcement tightens. CBAM's reporting phase has been considerably gentler than its eventual financial phase will be, and the gap between the two is where a lot of planning assumptions currently sit.",
            "We are also unsure how much of the compliance burden ultimately lands on Indian suppliers versus being absorbed by buyers. Right now it is being pushed down the chain. That may not be stable.",
            { heading: "Where we have got to" },
            "The businesses we see doing this well started before they had to, usually because one large customer asked and they decided to build the answer properly rather than once.",
            "If you are working out what a UK or EU buyer will ask you for next year, that is a conversation we are always glad to have.",
          ],
       },
      {
          title: "Greenwashing Is a Valuation Problem, Not a PR Problem",
          slug: "alpha-in-authenticity-greenwashing-kills-valuation",
          category: "Climate Finance",
          date: "October 12, 2025",
          desc: "Misleading environmental claims used to cost a brand some goodwill. They now show up in diligence, in customer acquisition cost, and in what an acquirer is willing to pay.",
          content: [
            "The cost of a bad environmental claim used to be embarrassment. That has changed, and the change is showing up in places finance teams care about.",
            { heading: "Diligence got specific" },
            "Funds used to accept a slide about net-zero aspirations. Several we have spoken to now put environmental claims through the same treatment as revenue recognition — asking what the number counts, who verified it, and what happens to it under a stricter definition.",
            "A brand narrative that runs ahead of what operations can evidence reads, in that room, as a governance signal. It suggests a management team comfortable with optimistic reporting, and that inference travels beyond sustainability.",
            { heading: "The trust discount is the expensive part" },
            "Fines are visible and usually survivable. What follows is not.",
            "Once a brand has been publicly corrected on a green claim, the market applies a discount to everything it says next. Acquisition costs rise because scepticism rises. Talent that joined for the mission becomes harder to keep. None of that appears as a line item, and all of it compounds.",
            { cta: "Read the greenwashing playbook", to: "greenwashing" },
            { heading: "Why the incentive is genuinely hard" },
            "We want to be fair about this. The pressure to overstate is real and it comes from good places as often as bad ones — a founder who believes in the product, a marketing team asked to differentiate, a category where everyone else is claiming more than you.",
            "Our own survey found that around a third of Indian sustainability claims reach the public with no independent check. Very few of those were deceptions. Most were deadlines meeting an absent owner for substantiation.",
            { heading: "What we are unsure about" },
            "We do not know how much of the valuation effect is priced in yet in India. The clearest evidence comes from European and US markets with longer enforcement histories, and we are extrapolating.",
            "It is also possible we overstate the diligence shift. The funds who talk to us about it are self-selecting for caring about it.",
            { heading: "Where we have got to" },
            "The competitive advantage is no longer making the strongest claim. It is making the claim that still stands after someone has gone looking for the gap between the words and the evidence.",
            "If you are trying to work out which of your claims would survive that reading, we would be glad to look at them with you.",
          ],
       },
      {
          title: "Brand Strategy When Your Audience Assumes You Are Lying",
          slug: "brand-strategy-age-of-cynical-consumer",
          category: "Brand Strategy",
          date: "September 28, 2025",
          desc: "A decade of eco-friendly, natural and sustainable has produced a default setting of disbelief. What we think actually works now, and why perfection reads as suspicious.",
          content: [
            "The consumer scepticism everyone describes is not apathy. It is exhaustion.",
            "People have watched oil companies position themselves as climate champions and fast fashion launch conscious collections while raising volumes. The reasonable response to that is disbelief, and disbelief is now the starting position.",
            { heading: "Perfection is the tell" },
            "The instinct is to communicate harder — a better story, a cleaner narrative. We would argue that makes it worse.",
            "A brand claiming to have solved a problem that everybody knows is unsolved is, to a sceptical reader, evidence of dishonesty rather than progress. The polish is the giveaway.",
            { heading: "What seems to work instead" },
            "The brands we have watched hold up publish the parts that are not finished. Packaging that is eighty per cent recyclable, and a plain explanation of why the last twenty per cent has no solution at scale yet. The carbon cost of their logistics, stated rather than omitted.",
            "This works, we think, because it validates the reader's scepticism instead of arguing with it. It moves the brand from preaching to reporting, and reporting is a much easier position to defend.",
            { heading: "Adjectives out, nouns and numbers in" },
            "The practical version of this is unglamorous. Better for the planet is not a claim; it is a mood. Forty per cent less water than our previous process is a claim, and it can be checked.",
            "Every adjective you replace with a figure and a baseline reduces the surface area someone can attack. It also, in our experience, makes the copy better.",
            { cta: "Check your claims with Sense", to: "sense" },
            { heading: "The risk in this argument" },
            "There is a version of transparency that becomes its own performance — the confessional sustainability report that lists small failures to distract from a large one. We have seen that too, and readers detect it about as fast as they detect the original problem.",
            "We also do not know how far this generalises. Most of our evidence is from categories where the consumer already cares. In a category where nobody is asking, publishing your failures may just be handing critics material.",
            { heading: "Where we have got to" },
            "The brands we would bet on are the ones that have stopped trying to sound finished.",
            "If you are rewriting a narrative that has started to feel defensive, we would be interested to see it — that particular problem is one we enjoy.",
          ],
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
          title: "The India-UK Climate Corridor: Who It Actually Opens For",
          slug: "decoding-india-uk-climate-corridor",
          category: "Climate Funding",
          date: "August 30, 2025",
          desc: "The trade agreement puts sustainability standards at the centre of a large trading relationship. That is an opportunity for Indian businesses that can evidence their position, and a problem for the mid-sized ones that cannot.",
          content: [
            "The India-UK trading relationship is being rebuilt with sustainability standards near the middle of it. That creates a corridor, and corridors have entry requirements.",
            { heading: "The requirement is data, not intent" },
            "An Indian exporter can no longer compete on cost alone into this market. Carbon intensity, supply chain traceability and disclosure quality now sit alongside price in the decision.",
            "Which means the product being sold is partly informational. Businesses that have this data assembled move quickly. Businesses that do not spend six months assembling it while the buyer talks to someone else.",
            { heading: "The missing middle is where this bites" },
            "Large Indian corporates have sustainability teams. Small exporters are often outside the scope of the requirements altogether.",
            "The businesses caught in between — mid-sized manufacturers who form the backbone of most Indian supply chains — carry the full compliance burden with none of the infrastructure. Transitioning energy, auditing suppliers and obtaining certification all require capital before they produce any return.",
            "Global climate finance has been slow to reach them, we would argue less from unwillingness than from verification cost: a UK fund cannot cheaply confirm the ESG credentials of an Indian mid-cap, so it does not try.",
            { cta: "How Prvaah works", to: "prvaah" },
            { heading: "What we are building toward" },
            "Prvaah exists to reduce exactly that verification cost — standardising compliance data so an Indian business can present a credible position to UK capital without rebuilding it for every counterparty.",
            "We should be honest that this is a thesis we are testing rather than a result we can report. It is early.",
            { heading: "What we do not know" },
            "We do not know how the agreement's sustainability provisions will be enforced in practice, and the gap between the text and the implementation is wide enough to matter.",
            "We are also not certain the missing middle is best served by compliance support rather than by aggregation — several mid-caps presenting jointly might solve the verification problem more cheaply than each solving it alone. We have not tested that.",
            { heading: "Where we have got to" },
            "The corridor is open, but it is open to businesses that can evidence where they stand rather than describe where they are heading.",
            "If you are exporting into the UK or planning to, we would be glad to compare notes on what your buyers are actually asking for.",
          ],
       },
      {
          title: "Awareness Is Not the Problem Any More",
          slug: "from-storytelling-to-storydoing",
          category: "Climate Communication",
          date: "August 10, 2025",
          desc: "Climate communication has spent decades raising awareness, and awareness is now high. Behaviour has not followed. We think the gap is a design problem rather than a persuasion one.",
          content: [
            "Awareness of climate change in India is high. Purchasing behaviour has barely moved.",
            "That gap has a name — the value-action gap — and a great deal of marketing money is still being spent as though the problem were awareness.",
            { heading: "Why more persuasion does not close it" },
            "People are not failing to buy sustainable products because they have not understood the argument. They are failing to buy them because the products cost more, are harder to find, or require a change of habit for a benefit that arrives somewhere else, later, to someone else.",
            "You cannot argue somebody out of that. We would argue the honest response is to change the offer rather than the messaging.",
            { heading: "What that looks like in practice" },
            "The interventions we have seen work are usually product decisions wearing marketing clothes. A shampoo bar that costs less per wash. An electric two-wheeler cheaper to run than the petrol equivalent. A repair service more convenient than replacement.",
            "None of those ask the customer to make a sacrifice for the planet. They make the better option the easier option, and the environmental benefit arrives as a consequence rather than a request.",
            { heading: "The immediate benefit does the work" },
            "Behavioural research is consistent on this: distant, diffuse benefits lose to immediate, personal ones almost every time.",
            "So the most effective sustainability communication we see rarely leads with the planet. It leads with money saved, time saved, health, or status — and lets the environmental case sit underneath, available to anyone who wants it.",
            "This feels uncomfortable to a lot of people in this field. We understand why. We would still rather a purchase happened for a slightly self-interested reason than not happen for a noble one.",
            { heading: "Where we are less confident" },
            "We do not know how far this scales to categories where there is no personal benefit to lead with. Some sustainable choices genuinely cost the buyer more and always will, and we do not have a good answer for those beyond regulation.",
            "We are also aware this argument can be used to justify saying nothing about sustainability at all, which is not what we mean and would be a bad outcome.",
            { heading: "Where we have got to" },
            "The brands making measurable behavioural progress have mostly stopped explaining the problem and started removing the friction.",
            "If you are working on something where the intention is there and the behaviour is not, we would be interested to hear about it.",
          ],
       },
      {
          title: "Circular Fashion: How Brands Make Money Selling Less",
          slug: "circular-economy-playbook-fashion",
          category: "Sustainable Marketing",
          date: "July 22, 2025",
          desc: "EPR rules are making brands financially responsible for garments after they are sold. That sounds like a cost. We would argue it is the moment resale and repair start making commercial sense.",
          content: [
            "The objection we hear most from mass-market fashion brands is straightforward: if we sell clothes that last, we sell fewer clothes.",
            "It is a reasonable worry and we think it misreads what circularity actually does to the revenue model.",
            { heading: "Extended producer responsibility changes the arithmetic" },
            "EPR rules make a brand financially responsible for its garments at end of life. Once that cost lands on the balance sheet, the calculation behind durability changes — a product you will pay to dispose of is different from one you will not.",
            "That is the mechanism worth understanding. Circularity stops being a values argument at the point where the linear model starts carrying a fee.",
            { heading: "The same garment, sold more than once" },
            "Resale is the clearest version. Second-hand transactions in your product are already happening on someone else's platform, and the margin is going there.",
            "A branded resale channel captures that margin and converts a one-time sale into a recurring asset. It also gives you a data relationship with the second and third owner, which most brands currently have no visibility of at all.",
            "Repair works similarly, and does something resale does not. A repair is a service interaction — the customer arrives with a problem and leaves with it solved, which is a considerably stronger loyalty event than a discount code.",
            { heading: "Design decides whether any of it is possible" },
            "None of this works if the garment cannot be taken apart. A mono-material shirt can be recycled; a blended one with bonded trims largely cannot, whatever the label says.",
            "Which makes design for disassembly the least visible and most decisive part of the playbook. It is also the hardest to sell internally, because the cost is immediate and the benefit is years away and lands in a different department.",
            { cta: "Check your claims with Sense", to: "sense" },
            { heading: "What we are not sure about" },
            "We do not know whether resale genuinely reduces production or simply adds a second revenue stream to the same volume. The honest answer is that the evidence is mixed and depends heavily on whether resale displaces a new purchase or adds one.",
            "If it turns out to be mostly additive, a lot of circular fashion marketing is overclaiming, including some we would have been sympathetic to.",
            { heading: "Where we have got to" },
            "The brands we would watch are the ones treating circularity as a change to the business model rather than a line in the sustainability report.",
            "If you are trying to make that case internally and the numbers are not landing, we would be glad to think it through with you.",
          ],
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
        image: "/marina-bradford.jpg"
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
  // Expertise areas instead of prose bios. `note` carries the single most
  // recognisable prior role, taken from the team profiles deck.
  collective: [
    {
      name: "Arvind Nair",
      role: "Growth & Sustainability",
      years: "20+",
      expertise: ["Strategy & Growth", "Digital-First Brands", "Media & Martech", "Sustainability"],
      note: "Formerly Global VP, Growth & Sustainability, Mirum India",
      img: "/Arvind.jpg",
      linkedin: "https://www.linkedin.com/in/arvindbnair/"
    },
    {
      name: "Radhika Sharda",
      role: "Stakeholder Engagement, PR & Communications",
      years: "20+",
      expertise: ["Stakeholder Engagement", "PR & Communications", "Reputation & Crisis", "Climate Communication"],
      note: "Formerly Senior Director & India Practice Chair, Brands, Burson",
      img: "/radhika.jpg",
      linkedin: "https://www.linkedin.com/in/radhika-sharda-83129b19/"
    },
    {
      name: "Maya de Souza",
      role: "Circular Economy Policy",
      years: "25+",
      expertise: ["Circular Economy Policy", "EPR & Eco-Design", "Textiles & Construction", "International Policy"],
      note: "Formerly Circular Economy Director, Business in the Community",
      img: "/MayaF.png",
      linkedin: "https://www.linkedin.com/in/maya-de-souza-12b16aa/"
    },
    {
      name: "Paromita Mukhopadhyay",
      role: "Environmental Law & Policy",
      years: "20+",
      expertise: ["Environmental Law", "Policy & Regulation", "Regulatory Research"],
      note: "Advises on regulatory and policy risk",
      img: "/Paromita.jpg",
      linkedin: "https://www.linkedin.com/in/paromita-mukhopadhyay-nair-bb24447/"
    },
    {
      name: "Shujoy Dutta",
      role: "Brand Strategy",
      years: "25+",
      expertise: ["Brand Strategy", "Brand Architecture", "Creative & Planning"],
      note: "Formerly SVP & Executive Planning Director, Wunderman Thompson India",
      img: "/shujoy.jpg",
      linkedin: "https://www.linkedin.com/in/shujoy-dutta-05599219/"
    },
    {
      name: "Rachana Lokhande",
      role: "Sustainable Media Strategy",
      years: "25+",
      expertise: ["Media Strategy", "Sustainable Media", "Ad Tech"],
      note: "Formerly Co-CEO, Kinetic Worldwide",
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

// Words that only signal a green claim when the surrounding copy is actually
// about the environment. Rules carrying needsContext:true require a hit here,
// which is what stops "industry best practices" and "certified accountants"
// from being reported as greenwashing.
const ENV_CONTEXT = /\b(eco|green|greener|greenest|environment(al|ally)?|sustainab\w*|climate|carbon|emissions?|recycl\w*|compost\w*|biodegrad\w*|planet|earth|nature|organic|renewable|solar|waste|landfill|plastic|footprint|ocean|marine|forest|tree|circular|net[-\s]?zero|esg|pollution|energy[-\s]?efficient|vegan|cruelty[-\s]?free)\b/i;

// Named certification schemes. When one of these appears the claim is being
// substantiated, so the generic "name your certifying body" prompt is noise.
const NAMED_SCHEME = /\b(grs|fsc|iso\s?\d+|bis|ecocert|cradle to cradle|b corp|energy star|rainforest alliance|oeko[-\s]?tex|gots|usda|fairtrade|green seal|epeat|leed)\b/i;

const SENSE_TERMS = [

// ==========================================
// REGULATOR PACK v2 — ADVANCED CLAIM LOGIC
// ==========================================

// Absolute environmental benefit claims
{
pattern: /\b(100\s?%|completely|totally|entirely|fully|perfectly|zero)\s+(eco|green|clean|safe|natural|friendly|sustainable|recycled|recyclable|biodegradable|compostable|renewable|organic|plastic[-\s]?free|carbon[-\s]?free|chemical[-\s]?free|waste[-\s]?free|vegan)\b/i,
risk: "Critical",
category: "Absolute Environmental Claim",
reference: "CCPA Clause 6(5), ASCI Code",
tip: "Absolute environmental claims imply zero harm. Regulators require full lifecycle proof."
},

// Standalone absolute wording.
// The alternation deliberately carries its own word boundaries: a trailing \b
// after "100%" can never match, because % is not a word character, so the old
// combined form silently never fired on "100% recycled".
{
pattern: /(\b100\s?%|\bcompletely\b|\btotally\b|\bentirely\b|\bfully\b|\bzero impact\b|\bno impact\b)/i,
needsContext: true,
risk: "High",
category: "Absolute Claim Language",
reference: "CCPA Clause 6(5)",
tip: "Absolute qualifiers require rigorous substantiation. State what the figure measures."
},

// Vague eco positioning
{
pattern: /\b(eco[-\s]?friendly|environmentally[-\s]?friendly|environment[-\s]?friendly|planet[-\s]?friendly|earth[-\s]?friendly|nature[-\s]?friendly|green[-\s]?friendly|eco[-\s]?conscious|eco[-\s]?safe|planet[-\s]?safe|earth[-\s]?safe)\b/i,
risk: "High",
category: "Vague Environmental Claim",
reference: "CCPA Clause 5(a), ASCI Code",
tip: "Generic environmental claims must specify measurable impact."
},

// Zero-prefixed absolutes
{
pattern: /\bzero[-\s]?(waste|emissions?|carbon|impact|plastic|landfill|footprint|pollution|harm)\b|\bno\s+(impact|emissions|waste)\b/i,
risk: "High",
category: "Absolute Zero Claim",
reference: "CCPA Clause 6(5), ASCI Code",
tip: "Zero claims require boundary, scope and verification. State what is counted and what is excluded."
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
pattern: /\b(offset|offsets|offsetting|neutralise|neutralize|neutralising|neutralizing)\b/i,
needsContext: true,
risk: "High",
category: "Offset Claim",
reference: "CCPA Clause 7",
tip: "Offset claims must disclose scale, permanence, and certification."
},

// Tree planting claims
{
pattern: /\bplant(ing|s)?\s+(a\s+|one\s+|\d+\s+)?(tree|trees|forest|mangrove|coral)\b/i,
risk: "High",
category: "Offset-Based Claim",
reference: "CCPA Clause 7",
tip: "Tree planting does not equal carbon neutrality without verified accounting."
},

// Material claims without disclosed proportion or scheme
{
pattern: /\b(recycled|biodegradable|compostable|recyclable)\b/i,
suppressIf: /\b(\d+\s?%|percent)\s+(recycled|post[-\s]?consumer|bio[-\s]?based)\b/i,
risk: "High",
category: "Unsupported Sustainability Claim",
reference: "CCPA 2024 Clause 5",
tip: "Material sustainability claims must include measurable proof or certification."
},

// Comparative environmental claims
{
pattern: /\b(less|lower|reduced|fewer|better)\s+(carbon|emissions?|impact|footprint|waste|plastic|pollution)\b|\b(greener|cleaner|more sustainable|more eco[-\s]?friendly|kinder to the (planet|environment)|better for the (planet|environment|earth))\b/i,
risk: "Medium",
category: "Comparative Claim",
reference: "CCPA Clause 6(4)",
tip: "Comparative claims must clearly state baseline comparison. Better than what?"
},

// Nature-derived implication
{
pattern: /\b(natural|botanical|plant[-\s]?based|nature[-\s]?derived)\b(?!\s+(language|fit|progression|selection|gas|talent|habitat))/i,
risk: "Medium",
category: "Nature-Based Claim",
reference: "CCPA Clause 5(a)",
tip: "Natural ingredients do not automatically mean lower environmental impact."
},

// Sustainability blanket claims
{
pattern: /\b(sustainable|eco|green)\s+(product|products|brand|company|solution|solutions|service|services|packaging|material|materials|fabric|process|technology|choice|option|alternative)\b/i,
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
pattern: /\b(best|greenest|cleanest|purest|most sustainable|most eco[-\s]?friendly|most environmentally[-\s]?friendly)\b/i,
needsContext: true,
risk: "High",
category: "Superlative Claim",
reference: "FTC Green Guides",
tip: "Superlative claims require comparative evidence across market."
},

// Certification implication
{
pattern: /\b(certified|approved|verified|accredited)\b/i,
needsContext: true,
suppressIf: NAMED_SCHEME,
risk: "Medium",
category: "Certification Claim",
reference: "CCPA Clause 5",
tip: "Must clearly state certifying body and scope."
},

// Broad environmental benefit phrases
{
pattern: /\b(good for (nature|the earth|the planet|the environment)|safe for (the )?(planet|environment)|kind to the planet)\b/i,
risk: "High",
category: "Unverifiable Benefit Claim",
reference: "CCPA Clause 5(a)",
tip: "Broad benefit claims must specify measurable outcomes."
},

// Zero harm language
{
pattern: /\b(no harm|harmless|non harmful|non-toxic|chemical[-\s]?free|toxin[-\s]?free)\b/i,
risk: "High",
category: "Absolute Safety Claim",
reference: "CCPA Clause 6(5)",
tip: "Safety claims must be scientifically substantiated."
},

// Emissions reduction claims
{
pattern: /\b(reduces?|cuts?|eliminates?|removes?)\s+(carbon|emissions|pollution|waste)\b/i,
risk: "Medium",
category: "Impact Reduction Claim",
reference: "CCPA Clause 6",
tip: "Must disclose measurement method and baseline."
},

// sustainability positioning language
{
pattern: /\b(committed to sustainability|driven by sustainability|sustainability focused|sustainability[-\s]?first)\b/i,
risk: "High",
category: "Unqualified Sustainability Positioning",
reference: "ASCI Code",
tip: "Organisational sustainability claims require measurable disclosures."
},

// climate leadership claims
{
pattern: /\b(climate leader|climate positive|climate friendly|carbon positive)\b/i,
risk: "High",
category: "Climate Claim",
reference: "FTC + CCPA",
tip: "Leadership or positive impact claims require comparative and lifecycle proof."
},

// mission language implying impact
{
pattern: /\b(save(s|ing)? the planet|protect(s|ing)? the earth|heal(s|ing)? the planet)\b/i,
risk: "Critical",
category: "Exaggerated Impact Claim",
reference: "CCPA Clause 5(a)",
tip: "Exaggerated impact claims are considered misleading unless fully substantiated."
},

{
  pattern: /\bmade (from|with|of) recycled\b/i,
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

// Build a URL from a section id. The mirror of resolveRoute(), which parses one.
const pathForSection = (id) => (!id || id === "home" ? "/" : `/${id}`);

// A real anchor that still navigates client-side.
//
// Every navigation control on this site used to be a <button onClick>. The
// served HTML therefore contained no internal links whatsoever — Googlebot
// could only discover pages through sitemap.xml, no authority flowed between
// them, and /offerings, /collective, /research and /thinking were never crawled
// once. Anchors also restore cmd-click, middle-click and "copy link address".
//
// Modified clicks are left to the browser so "open in new tab" keeps working.
const AppLink = ({ href, onNavigate, className = "", children, ...rest }) => (
  <a
    href={href}
    className={className}
    onClick={(e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      onNavigate();
    }}
    {...rest}
  >
    {children}
  </a>
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

// Named diagrams for blog posts, referenced from content as { figure: "<key>" }.
// Inline SVG rather than an asset so it stays crisp, needs no hosting, and
// carries its own accessible description.
const POST_FIGURES = {
  "verification-vacuum": {
    label: "Fig. 01 — The Verification Vacuum",
    caption: "The gap is where regulators, journalists and procurement teams look first.",
    alt: "A wide bar labelled 'what you say' sits above a shorter bar labelled 'what you can prove'. The space between the two is labelled the verification vacuum.",
    svg: (
      <svg viewBox="0 0 640 250" className="w-full h-auto" role="img" aria-hidden="true" focusable="false">
        <text x="20" y="34" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="13"
              fontWeight="700" letterSpacing="2.4" fill="#9CA3AF">WHAT YOU SAY</text>
        <rect x="20" y="46" width="600" height="46" fill="#111111" />
        <text x="20" y="140" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="13"
              fontWeight="700" letterSpacing="2.4" fill="#9CA3AF">WHAT YOU CAN PROVE</text>
        <rect x="20" y="152" width="252" height="46" fill="#0D9488" />
        <rect x="272" y="152" width="348" height="46" fill="none" stroke="#0D9488"
              strokeWidth="1.5" strokeDasharray="6 5" />
        <text x="290" y="181" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="14"
              fontWeight="700" letterSpacing="2" fill="#0D9488">THE VERIFICATION VACUUM</text>
        <line x1="272" y1="92" x2="272" y2="152" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="620" y1="92" x2="620" y2="152" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="272" y1="222" x2="620" y2="222" stroke="#0D9488" strokeWidth="1.5" />
        <line x1="272" y1="216" x2="272" y2="228" stroke="#0D9488" strokeWidth="1.5" />
        <line x1="620" y1="216" x2="620" y2="228" stroke="#0D9488" strokeWidth="1.5" />
        <text x="446" y="243" textAnchor="middle" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              fontSize="11.5" letterSpacing="1.4" fill="#9CA3AF">EVERYTHING YOU CANNOT SUBSTANTIATE</text>
      </svg>
    )
  },
  "mfa-decline": {
    label: "Fig. 02 \u2014 One number fell. The other did not.",
    caption: "Made-for-advertising collapsed as a share of spend, while total programmatic waste rose over the same period. Both are true, and the second is why the first is not the end of the story. Source: ANA Programmatic Transparency Benchmark, June 2023 to May 2026.",
    alt: "Made-for-advertising fell from 15 per cent of programmatic spend in 2023 to 1.1 per cent in 2026. Over a comparable period, total programmatic waste rose from 20.0 billion dollars to 26.8 billion dollars.",
    svg: (
      <svg viewBox="0 0 360 300" className="w-full h-auto" role="img" aria-hidden="true" focusable="false">
        <text x="16" y="24" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="19"
              fontWeight="700" letterSpacing="1.6" fill="#9CA3AF">MFA SHARE OF SPEND</text>
        <text x="16" y="86" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="46"
              fontWeight="700" fill="#111111">15%</text>
        <line x1="130" y1="70" x2="172" y2="70" stroke="#D1D5DB" strokeWidth="2.5" />
        <polygon points="172,63 186,70 172,77" fill="#D1D5DB" />
        <text x="200" y="86" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="46"
              fontWeight="700" fill="#0D9488">1.1%</text>
        <text x="16" y="112" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="16"
              fill="#9CA3AF">2023</text>
        <text x="200" y="112" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="16"
              fill="#9CA3AF">2026</text>
        <rect x="16" y="122" width="130" height="9" fill="#111111" />
        <rect x="200" y="122" width="10" height="9" fill="#0D9488" />

        <line x1="16" y1="160" x2="344" y2="160" stroke="#E5E7EB" strokeWidth="1" />

        <text x="16" y="196" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="19"
              fontWeight="700" letterSpacing="1.6" fill="#9CA3AF">TOTAL PROGRAMMATIC WASTE</text>
        <text x="16" y="252" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="36"
              fontWeight="700" fill="#9CA3AF">$20.0B</text>
        <line x1="156" y1="240" x2="172" y2="240" stroke="#D1D5DB" strokeWidth="2.5" />
        <polygon points="172,233 186,240 172,247" fill="#D1D5DB" />
        <text x="200" y="252" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="36"
              fontWeight="700" fill="#D97706">$26.8B</text>
        <text x="16" y="276" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="16"
              fill="#9CA3AF">2023</text>
        <text x="200" y="276" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="16"
              fill="#9CA3AF">2025</text>
        <rect x="16" y="286" width="97" height="9" fill="#D1D5DB" />
        <rect x="200" y="286" width="130" height="9" fill="#D97706" />
      </svg>
    )
  }
};

const PostFigure = ({ name }) => {
  const fig = POST_FIGURES[name];
  if (!fig) return null;
  return (
    <figure className="!my-10 bg-[#F9FAFB] border border-gray-200 rounded-2xl p-4 md:p-8" aria-label={fig.alt}>
      <div className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-gray-400 mb-5">
        {fig.label}
      </div>
      {fig.svg}
      <figcaption className="mt-5 text-sm text-gray-500 italic leading-relaxed">{fig.caption}</figcaption>
    </figure>
  );
};

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
        <div className="flex items-center gap-3 mb-4 pr-14 md:pr-0">
           <span className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest">{post.category}</span>
           <span className="text-gray-400 text-xs font-mono">{post.date}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">{post.title}</h1>
        <p className="text-xl text-gray-500 font-medium leading-relaxed border-l-4 border-teal-500 pl-4">{post.desc}</p>
      </div>

      {/* Content items are plain strings (paragraphs) for backwards compatibility,
          or {heading} / {cta,to} / {figure} objects for structure, internal links
          and named diagrams from POST_FIGURES. */}
      <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
         {post.content.map((item, idx) => {
            if (typeof item === "string") return <p key={idx}>{item}</p>;
            if (item.heading) return (
              <h2 key={idx} className="text-2xl font-bold text-gray-900 !mt-10 !mb-3">{item.heading}</h2>
            );
            if (item.figure) return <PostFigure key={idx} name={item.figure} />;
            if (item.cta) return (
              <p key={idx}>
                <AppLink
                  href={pathForSection(item.to)}
                  onNavigate={() => navigateTo && navigateTo(item.to)}
                  className="inline-flex items-center gap-2 font-bold text-teal-600 hover:text-teal-800 transition-colors no-underline"
                >
                  {item.cta} <ArrowRight size={15} />
                </AppLink>
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

// GA4 event helper.
//
// Deliberately narrow: no email address and no pasted claim text is ever sent
// through this — only counts and risk bands. The privacy notice tells people
// their claims are analysed in the browser and never leave it, and that has to
// stay true of analytics as well as of the API.
//
// gtag is loaded from index.html. It is absent during the build-time prerender
// and whenever a visitor blocks the script, so every call is guarded.
const track = (name, params = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
};
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
      // The lead. Fired only after the POST succeeds, so the count in GA4
      // matches the rows in the sheet rather than counting attempts.
      track("sense_consent_submitted", { notice_version: CONSENT_NOTICE_VERSION });
      onGranted();
    } catch (err) {
      setError("We couldn't record your consent just now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // No document during the build-time prerender; the modal is client-only.
  if (typeof document === 'undefined') return null;

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
      // Top of the funnel: someone wrote a claim and hit the gate. The ratio of
      // this to sense_consent_submitted is what says whether the gate is
      // costing us more than it collects.
      track("sense_consent_shown");
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

    if (!matched) return;

    // Generic words (best, certified, offset, 100%) only count as a green claim
    // when the copy is about the environment at all.
    if (term.needsContext && !ENV_CONTEXT.test(trimmed)) return;

    // The claim already carries what this rule would ask for — a disclosed
    // proportion, or a named certification scheme.
    if (term.suppressIf && term.suppressIf.test(trimmed)) return;

    hitsMap.set(term.category, term);
  });

  const findings = Array.from(hitsMap.values());
  setResult(findings);

  // Counts and a risk band only — never the claim itself. word_count is a blunt
  // proxy for whether people paste a line or a whole page, which tells us what
  // the tool is actually being used for.
  track("sense_claim_analysed", {
    risk_level: getOverallRisk(findings),
    issues_found: findings.length,
    word_count: trimmed.split(" ").length
  });
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400 mb-3">No charge, no pitch</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your top 20 domains, scored.</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mb-6">
              Send a site list and we'll send back a one-page read: how each domain scores across carbon, content and
              corporate signals, where the waste sits, and the three placements we'd cut first. Usually about a week.
            </p>
            <ul className="text-gray-300 text-sm leading-relaxed max-w-2xl mb-8 space-y-2">
              <li className="flex gap-3"><span className="text-teal-400 font-bold shrink-0">→</span> A score per domain, and what moved it</li>
              <li className="flex gap-3"><span className="text-teal-400 font-bold shrink-0">→</span> The three placements we'd drop, with the reasoning</li>
              <li className="flex gap-3"><span className="text-teal-400 font-bold shrink-0">→</span> An honest view on whether the upside is worth your time — including when it isn't</li>
            </ul>
            <a href="mailto:hello@hooop.in?subject=ESG%20Media%20Index%20-%20score%20my%20top%2020%20domains&body=Paste%20or%20attach%20your%20domain%20list%20below%20and%20we%27ll%20come%20back%20within%20about%20a%20week.%0A%0ADomains%3A%0A%0AMarket%2Fcategory%3A%0A%0AApprox%20monthly%20spend%20(optional)%3A%0A"
               className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              <Mail size={18} /> Send us your list
            </a>
            <p className="text-gray-500 text-xs mt-4">
              Opens your mail client with the questions pre-filled. We're still mapping this market ourselves and we
              learn something from every plan we look at.
            </p>
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
const NAV_ITEMS = [
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

// Turn a pathname into the section (and blog post, if any) it should render.
// Module scope and free of browser globals on purpose: the build-time
// prerender calls this via entry-server.jsx to produce real HTML, and the
// browser calls it on mount and on popstate. Both must agree.
const resolveRoute = (pathname) => {
  const parts = String(pathname || '/').split('/').filter(Boolean);
  const first = parts[0] || 'home';

  if (first === 'thinking' && parts[1]) {
    return {
      section: 'thinking',
      post: SITE_CONTENT.thinking.posts.find(p => p.slug === parts[1]) || null
    };
  }

  return { section: NAV_ITEMS.some(i => i.id === first) ? first : 'home', post: null };
};

const App = React.forwardRef((props, ref) => {
  // On the server there is no window, so the route arrives as a prop. Seeding
  // state here rather than in an effect is what makes the prerendered HTML
  // contain the right page — effects never run during renderToString.
  const initialRoute = resolveRoute(
    props.initialPath ?? (typeof window === 'undefined' ? '/' : window.location.pathname)
  );

  const [activeSection, setActiveSection] = useState(initialRoute.section);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSenseTool, setShowSenseTool] = useState(false);
  const [senseTab, setSenseTab] = useState('analyzer');
  const [selectedPost, setSelectedPost] = useState(initialRoute.post); // New state for selected blog post

  const navItems = NAV_ITEMS;

  // Inject the Organization schema once, on first mount.
  useEffect(() => {
    setJsonLd('org-jsonld', ORG_JSONLD);
  }, []);

  // Route handling — now understands /thinking/:slug as a real, shareable,
  // indexable URL for each blog post (previously blog posts had no URL at
  // all and could not be deep-linked or crawled individually).
  useEffect(() => {
    const handleRoute = () => {
      const { section, post } = resolveRoute(window.location.pathname);
      setActiveSection(section);
      setSelectedPost(post);
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
         <AppLink href="/" onNavigate={() => navigateTo('home')} aria-label="HOOOP home" className="pointer-events-auto cursor-pointer group mb-12 block">
             <SoftCard className="w-20 h-20 flex items-center justify-center !rounded-full p-4" hoverEffect={true}>
                <HooopLogo className="w-full h-full object-contain" />
             </SoftCard>
         </AppLink>
         <div className="flex flex-col gap-6 pointer-events-auto w-full">
            {navItems.filter(item => !item.hidden).map((item) => ( 
                <AppLink key={item.id} href={pathForSection(item.id)} onNavigate={() => navigateTo(item.id)} className="group flex items-center gap-4 w-full text-left focus:outline-none no-underline">
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-black scale-125' : 'bg-gray-300 group-hover:bg-gray-400'}`} />
                    <span className={`text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${activeSection === item.id ? 'text-black translate-x-1' : 'text-gray-400 group-hover:text-gray-600'}`}>
                        {item.label}
                    </span>
                </AppLink>
            ))}
         </div>
         <div className="pointer-events-auto mt-auto">
            <VerticalPill height="h-24" className="w-2 !rounded-full bg-gray-300" />
         </div>
      </nav>

      {/* --- MOBILE NAV --- */}
      <div className="fixed top-0 left-0 right-0 z-50">
          <div className="h-20 flex items-center justify-between px-6 lg:hidden bg-[#E0E5EC]/90 backdrop-blur-md shadow-sm border-b border-white/50">
            <AppLink href="/" onNavigate={() => navigateTo('home')} className="font-bold text-2xl tracking-tighter flex items-center gap-3 no-underline text-black">
                <HooopLogo className="w-12 h-12" />
                <span className="text-black">{SITE_CONTENT.brand.name}</span>
            </AppLink>
            <button onClick={() => setIsMenuOpen(true)} className="p-3 rounded-xl bg-[#E0E5EC] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-black active:shadow-inner">
              <Menu size={24} />
            </button>
          </div>
          <div className="lg:hidden bg-[#E0E5EC]/95 backdrop-blur-md border-b border-white/20 overflow-x-auto flex items-center gap-6 px-6 py-3 no-scrollbar shadow-inner">
             {navItems.filter(item => !item.hidden).map(item => (
                 <AppLink key={item.id} href={pathForSection(item.id)} onNavigate={() => navigateTo(item.id)} className={`whitespace-nowrap text-[10px] font-bold uppercase tracking-widest flex-shrink-0 transition-colors no-underline ${activeSection === item.id ? 'text-teal-600' : 'text-gray-500'}`}>{item.label}</AppLink>
             ))}
          </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#E0E5EC] flex flex-col items-center justify-center space-y-8 animate-fade-in lg:hidden">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-4 rounded-full bg-[#E0E5EC] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-black">
            <X size={24} />
          </button>
          {navItems.filter(item => !item.hidden).map((item) => (
            <AppLink key={item.id} href={pathForSection(item.id)} onNavigate={() => { navigateTo(item.id); setIsMenuOpen(false); }} className={`text-2xl font-bold tracking-tight no-underline ${activeSection === item.id ? 'text-black' : 'text-gray-500'}`}>
              {item.label}
            </AppLink>
          ))}
        </div>
      )}

      {/* pt-32 (128px), not pt-28: the fixed mobile header is an 80px logo bar
          plus a ~40px nav strip, so it ends at 120px. At pt-28 the first line of
          every page — the hero eyebrow — rendered underneath it. */}
      <main className="lg:pl-64 w-full min-h-screen relative z-10 px-4 sm:px-6 lg:px-20 pt-32 lg:pt-0 pb-16 flex flex-col">
        
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
                    {/* Two weights rather than one size: the full line at hero scale
                        wrapped to six lines and pushed the CTAs off screen. */}
                    <h1 className="text-[#313b4e] tracking-tight max-w-xl">
                      <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95]">
                        {SITE_CONTENT.hero.titleLine1}
                      </span>
                      <span className="block mt-3 text-xl sm:text-2xl lg:text-[1.75rem] font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-500">
                        {SITE_CONTENT.hero.titleLine2}
                      </span>
                    </h1>
                </div>
                <p className="text-lg lg:text-xl text-gray-500 leading-relaxed font-medium max-w-md">{SITE_CONTENT.hero.subtitle}</p>
                
                <div className="mt-4 space-y-6">
                <div className="flex flex-wrap gap-4 sm:gap-6 items-center">

  <AppLink href={pathForSection('manifesto')} onNavigate={() => navigateTo('manifesto')} className="no-underline">
  <SoftCard
    className="px-6 py-4 sm:px-8 flex items-center gap-3 text-black font-bold group cursor-pointer hover:scale-[1.02]"
  >
    <span>Read Our Manifesto</span>
    <BookOpen size={18} className="group-hover:scale-110 transition-transform"/>
  </SoftCard>
  </AppLink>

  <AppLink href={pathForSection('sense')} onNavigate={() => navigateTo('sense')} className="no-underline">
  <SoftCard
    className="px-6 py-4 sm:px-8 flex items-center gap-3 text-gray-600 font-bold group cursor-pointer hover:text-green-600 hover:scale-[1.02]"
  >
    <span>Test Sustainability Claims</span>
    <ScanLine size={18} className="group-hover:scale-110 transition-transform"/>
  </SoftCard>
  </AppLink>

  <AppLink href={pathForSection('collective')} onNavigate={() => navigateTo('collective')} className="no-underline">
  <SoftCard
    className="px-6 py-4 sm:px-8 flex items-center gap-3 text-gray-600 font-bold group cursor-pointer hover:text-teal-600 hover:scale-[1.02]"
  >
    <span>{SITE_CONTENT.hero.collectiveButtonText}</span>
    <Users size={18} className="group-hover:scale-110 transition-transform"/>
  </SoftCard>
  </AppLink>
</div>

  <div className="flex items-center gap-2 text-gray-400">
    <MapPin size={14} className="shrink-0" />
    <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
      {SITE_CONTENT.brand.locations.join("  \u00b7  ")}
    </span>
  </div>
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
                                <AppLink key={index} href={`/thinking/${post.slug}`} onNavigate={() => openBlogPost(post)} className="group cursor-pointer block no-underline text-inherit">
                                  <article>
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
                                </AppLink>
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
                            <ImageWithFallback src="/prvaah-logo.png" alt="Prvaah Logo" className="h-16 w-auto object-contain" />
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
                            <AppLink
                              href={pathForSection(card.linkTo)}
                              onNavigate={() => navigateTo(card.linkTo)}
                              className="mt-auto self-start inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-800 transition-colors no-underline"
                            >
                              {card.linkLabel} <ArrowRight size={15} />
                            </AppLink>
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
             <section className="py-16 min-h-screen animate-fade-in-up">
                <div className="mb-10">
                   <h1 className="text-4xl lg:text-6xl font-black text-[#313b4e] mb-4">The Collective</h1>
                   <p className="text-gray-500 max-w-xl text-lg">
                      We are thinkers, technologists, communicators, and designers working to accelerate change.
                   </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                   {SITE_CONTENT.collective.map((member, idx) => (
                       <SoftCard key={idx} className="p-5 flex flex-col items-center text-center group">
                          <div className="w-20 h-20 rounded-full bg-[#E0E5EC] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] p-1.5 flex-shrink-0 mb-3">
                             <ImageWithFallback src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"/>
                          </div>
                          <div>
                             <h2 className="text-base font-bold text-[#313b4e]">{member.name}</h2>
                             <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-1 h-7 leading-snug">{member.role}</p>

                             {/* The slot is always reserved, so a member without a years
                                 figure does not pull the rest of their card upward and
                                 break the row's shared baseline. */}
                             <div className="h-5 mb-2">
                               {member.years && (
                                 <p className="text-teal-600 font-black text-sm leading-none">
                                   {member.years}
                                   <span className="text-gray-400 font-bold text-[9px] uppercase tracking-widest ml-1">Years</span>
                                 </p>
                               )}
                             </div>

                             {/* Fixed height so the six cards stay on one baseline whether or
                                 not a member carries a years figure or a note. */}
                             <div className="min-h-[5rem] flex flex-col justify-center gap-2 mb-3">
                               <div className="flex flex-wrap justify-center gap-1">
                                 {(member.expertise || []).map((area, i) => (
                                   <span key={i} className="px-2 py-0.5 rounded-full bg-teal-50 border border-teal-100 text-[9px] font-bold text-teal-700">
                                     {area}
                                   </span>
                                 ))}
                               </div>
                               {member.note && (
                                 <p className="text-gray-400 text-[10px] italic leading-snug">{member.note}</p>
                               )}
                             </div>

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
            {/* Sitewide link block. Every page linking to every other page is what
                gives a crawler a path through the site at all — before this, the
                only route in was sitemap.xml, and half the site was never
                fetched once. */}
            <nav aria-label="Site" className="mt-10 pt-8 border-t border-gray-200/70 w-full max-w-3xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3">
                {NAV_ITEMS.map((item) => (
                    <AppLink
                        key={item.id}
                        href={pathForSection(item.id)}
                        onNavigate={() => navigateTo(item.id)}
                        className="text-gray-400 text-[10px] uppercase tracking-widest font-bold hover:text-teal-600 transition-colors no-underline"
                    >
                        {item.label}
                    </AppLink>
                ))}
            </nav>
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
