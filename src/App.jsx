import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ArrowLeft, Globe, Shield, Zap, TrendingUp, FileText, Anchor, Linkedin, ExternalLink, Users, Coins, Briefcase, ScanLine, BarChart3, Download, AlertCircle, Check, Leaf, Info, Scale, BookOpen, ChevronDown, ChevronUp, Tag, ShieldCheck, Wind, Gavel, MicOff, Lock, HelpCircle, Eye, AlertTriangle, CheckCircle, Mail, Copy, RefreshCw } from 'lucide-react';

// ==========================================
// 🛠️ EASY EDIT SECTION - CHANGE CONTENT HERE
// ==========================================

const SITE_CONTENT = {
  brand: {
    name: "HOOOP",
    est: "Est. 2025",
    logoImage: "/THE-HOOO-COLLECTIVEP_without-shadow.png",
    contactEmail: "hello@hooop.in",
    contactPhone: "+91 98765 43210"
  },
  hero: {
    titleLine1: "Growth",
    titleLine2: "Re-Imagined",
    subtitle: "We align customer behaviour with sustainable choices, designing for impact and business growth.",
    buttonText: "Our Offerings",
    linkText: "Read our manifesto"
  },
  // OUR THINKING (The Blog)
  thinking: {
    title: "Our Thinking",
    subtitle: "Essays on the intersection of climate, capital, and culture.",
    featuredTool: {
        title: "Sense by HOOOP",
        desc: "Use our AI-powered brand narrative insurance tool to stress-test your claims against greenwashing risks.",
        cta: "Run Analysis"
    },
    posts: [
      { 
          title: "The Alpha in Authenticity: Why Greenwashing Kills Valuation", 
          category: "Climate Finance", 
          date: "October 12, 2025", 
          desc: "Investors are no longer just looking at returns; they are looking at risk. Misleading environmental claims are becoming a primary liability in climate funding rounds." 
      },
      { 
          title: "Brand Strategy in the Age of the Cynical Consumer", 
          category: "Brand Strategy", 
          date: "September 28, 2025", 
          desc: "How to build a narrative that survives the scrutiny of Gen Z. It's not about being perfect; it's about being transparent about your imperfections." 
      },
      { 
          title: "The End of 'Green' Media Buying", 
          category: "Sustainable Media", 
          date: "September 15, 2025", 
          desc: "Why CPM is a flawed metric for sustainable brands. We propose a new framework for measuring the carbon footprint of your digital ad spend." 
      },
      { 
          title: "Decoding the India-UK Climate Corridor", 
          category: "Climate Funding", 
          date: "August 30, 2025", 
          desc: "Analyzing the flow of capital and compliance between two major economies. How Prvaah is bridging the gap for MSMEs." 
      },
      { 
          title: "From Storytelling to Storydoing", 
          category: "Climate Communication", 
          date: "August 10, 2025", 
          desc: "Moving beyond 'raising awareness'. How effective climate communication drives measurable behavioral change in the global south." 
      },
      { 
          title: "The Circular Economy Playbook for Fashion", 
          category: "Sustainable Marketing", 
          date: "July 22, 2025", 
          desc: "A practical guide to shifting from linear extraction to circular value creation without alienating your core customer base." 
      }
    ]
  },
  prvaah: {
    title: "prvaah",
    sanskritMeaning: "flow",
    description1: "Prvaah is a gateway for enterprises expanding across India, EU and the UK.",
    pillars: [
      { icon: "shield", label: "Compliance", desc: "Enter with credibility: ESG disclosure mapping, anti-greenwashing assessment." },
      { icon: "zap", label: "Capability", desc: "Equip your team: Sustainability training, leadership workshops & industry playbooks." },
      { icon: "globe", label: "Access", desc: "Navigate new markets: Market intelligence, cultural insights & investor introductions." },
      { icon: "file", label: "Pilots", desc: "Test & adapt: Go-to-market pilots, product validation & circular supply-chains." },
      { icon: "trending", label: "Scale", desc: "Expand responsibly: Long-term ESG integration, green media & impact measurement." }
    ],
    testimonials: [
      {
        text: "At Everloop, we see Pravah as a continuum — not just an entry point but a journey. From ESG alignment to market pilots and long-term resilience, this platform helps sustainable enterprises flow between the UK and India with confidence, purpose, and accountability.",
        name: "Marina Bradford",
        role: "Director, Everloop.Agency",
        image: "/Marina Bradford.jpg"
      },
      {
        text: "The India–UK agreement creates a genuine opportunity for sustainable enterprises to expand into new markets. It also strengthens digital trade, supports sustainability goals, and empowers MSMEs and inclusive enterprises to expand globally.",
        name: "Arvind Nair",
        role: "Founding Partner, HOOOP",
        image: "/Arvind.jpg"
      }
    ]
  },
  playbook: {
    introTitle: "Green Is The New Lie.",
    introSubtitle: "In an era of conscious consumers, sustainability is a make-or-break brand pillar. We bridge the critical gap between reality and perception.",
    gapStats: [
        { label: "Third-party Certifications", percentage: 30, color: "#4ADE80" },
        { label: "Legal Team Approval", percentage: 22, color: "#9CA3AF" },
        { label: "Internal Team Assessment", percentage: 20, color: "#D1D5DB" },
        { label: "We Don't Verify Them", percentage: 15, color: "#EF4444" },
        { label: "Supplier Data", percentage: 13, color: "#E5E7EB" }
    ],
    archetypes: [
        { title: "Silent Green", type: "High Performance / Low Talk", description: "Doing good in silence. Often driven by fear of scrutiny or perfectionism.", stat: "70% of companies with strong credentials engage in this.", subtext: "RISK: Missed Opportunities", color: "#607D8B", icon: "micoff" },
        { title: "Vocal Green", type: "High Performance / High Talk", description: "The Gold Standard. They walk the talk and communicate it openly. Authenticity builds trust.", subtext: "ASSET: High SPV & Trust", color: "#4ADE80", icon: "check" },
        { title: "Opaque Brown", type: "Low Performance / Low Talk", description: "Neither green nor transparent. Doing little and saying little. Breeds mistrust.", subtext: "RISK: Irrelevance", color: "#795548", icon: "eye" },
        { title: "Vocal Brown", type: "Low Performance / High Talk", description: "The Greenwashers. All talk, no walk. Making false claims to appear friendly.", subtext: "RISK: Legal Action", color: "#EF4444", icon: "shield" }
    ],
    sins: [
        { number: "01", title: "Hidden Trade-off", description: "Highlighting one green attribute while ignoring other, more significant environmental harms.", icon: "alert" },
        { number: "02", title: "No Proof", description: "A claim that cannot be substantiated by easily accessible supporting information or third-party certification.", icon: "file" },
        { number: "03", title: "Vagueness", description: "Using terms so poorly defined or broad that their real meaning is likely to be misunderstood (e.g., 'all-natural').", icon: "info" },
        { number: "04", title: "False Labels", description: "Creating a false impression of third-party endorsement through fake or self-created 'certifications'.", icon: "shield" },
        { number: "05", title: "Irrelevance", description: "An environmental claim that may be truthful but is unimportant or unhelpful (e.g., 'CFC-free' when legally banned).", icon: "zap" },
        { number: "06", title: "Lesser of Two Evils", description: "True within the product category but distracting from the greater environmental impacts of the category.", icon: "chart" },
        { number: "07", title: "Fibbing", description: "Making environmental claims that are simply false. The most direct and dangerous form of deception.", icon: "x" }
    ]
  },
  offerings: [
    { title: "Strategy & Creative", desc: "Refining marketing strategy by embedding sustainability into the core of brand transformation." },
    { title: "Journey Interventions", desc: "Embedding sustainability-driven nudges into customer, partner, and employee journeys." },
    { title: "Media & Intelligence", desc: "Tools enabling audience tracking to benchmark against ESG metrics and reduce carbon footprint." },
    { title: "Digital Sustainability", desc: "Optimising digital experiences for minimal environmental impact while maximising influence." }
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
      desc: "With 15+ years of experience in brand and communications, Radhika specializes in translating sustainability visions into execution-ready frameworks, driving organizational excellence and scalable growth.",
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
      title: "INVEST",
      headline: "We invest our expertise as a form of capital.",
      desc: "For high-potential sustainable startups, we offer a sweat-equity model, aligning our success directly with your growth and impact.",
      iconType: "coins"
    },
    {
      title: "COLLECTIVE",
      headline: "Bringing together an ecosystem focused on sustainability.",
      desc: "Think of us like a lab. We are a collective of thinkers, technologists, communicators, creatives, designers, planners, and policy folks working to accelerate change.",
      iconType: "users"
    }
  ]
};

// ==========================================
// ⚙️ SENSE TOOL LOGIC (INTEGRATED)
// ==========================================
const TERMS = [
    // 1. VAGUE ENVIRONMENTAL CLAIMS
    { word: "eco-friendly", risk: "High", category: "Vague Claim", reference: "CCPA Clause 5(a)", tip: "Vague. Banned under CCPA Clause 5(a) without specific proof. Use specific metrics like 'biodegradable in 28 days'." },
    { word: "eco friendly", risk: "High", category: "Vague Claim", reference: "CCPA Clause 5(a)", tip: "Vague. Banned under CCPA Clause 5(a) without specific proof. Use specific metrics." },
    { word: "good for the planet", risk: "Critical", category: "Hyperbole", reference: "CCPA Clause 5(a)", tip: "Hyperbole. Implies net positive impact which is rarely true." },
    { word: "green product", risk: "High", category: "Vague Claim", reference: "FTC Green Guides", tip: "Meaningless. 'Green' has no legal definition." },
    { word: "planet-safe", risk: "Critical", category: "Absolute Claim", reference: "CCPA Clause 6(5)", tip: "Absolute claim. Nothing is 100% safe for the planet." },
    { word: "sustainable choice", risk: "Medium", category: "Generic Claim", reference: "ASCI Guidelines", tip: "Generic. Verify against specific lifecycle data." },
    { word: "better for the earth", risk: "High", category: "Comparative Claim", reference: "CCPA Clause 6(4)", tip: "Better than what? Needs a clear baseline comparison." },
    { word: "clean alternative", risk: "Medium", category: "Undefined Term", tip: "Undefined term. 'Clean' how? Energy? Waste? Toxins?" },
    { word: "nature-approved", risk: "High", category: "Puffery", tip: "Marketing fluff. Nature doesn't approve products." },
    { word: "earth-positive", risk: "High", category: "Regenerative Claim", tip: "Requires proof of regenerative impact, not just 'less bad'." },
    { word: "made responsibly", risk: "Medium", category: "Undefined Term", tip: "Define 'responsibly'. Look for SA8000 or Fair Trade." },
    { word: "good for the earth", risk: "High", category: "Vague Claim", tip: "Vague and hyperbolic. Does it regenerate the earth or just damage it less?" }, 
    { word: "good for nature", risk: "High", category: "Vague Claim", tip: "Similar to 'Good for the Earth'. Too broad to be legally substantiated." }, 

    // 2. SELF-DECLARED ATTRIBUTES
    { word: "ethically sourced", risk: "Medium", category: "Verification Needed", tip: "Is this self-declared or 3rd-party certified?" },
    { word: "green-certified", risk: "High", category: "Misleading Label", reference: "CCPA Guidance Note 6", tip: "By whom? Watch out for fake or self-made labels." },
    { word: "climate-approved", risk: "High", category: "Misleading Label", tip: "Meaningless without a recognized governing body." },
    { word: "certified sustainable", risk: "High", category: "Misleading Label", tip: "Check the certifier. Is it independent and recognized?" },
    { word: "industry-leading", risk: "Medium", category: "Puffery", tip: "Puffery unless backed by comparative data." },
    { word: "verified low-impact", risk: "Medium", category: "Verification Needed", tip: "Verified by whom? Link to the audit report." },
    { word: "climate safe", risk: "Critical", category: "Absolute Claim", tip: "Scientifically unrealistic claim." },
    { word: "responsible materials", risk: "Medium", category: "Vague Claim", tip: "Which materials? What percentage?" },

    // 3. FUTURE PROMISES (Greenwishing)
    { word: "net zero by 2050", risk: "Medium", category: "Future Claim", reference: "CCPA Clause 7", tip: "Distant target. Show interim KPIs and immediate roadmaps." },
    { word: "journey to sustainability", risk: "High", category: "Future Claim", tip: "Often used to delay action. What are you doing NOW?" },
    { word: "working towards", risk: "Medium", category: "Future Claim", tip: "Intention ≠ Action. Show current progress." },
    { word: "committed to", risk: "Medium", category: "Future Claim", tip: "Commitment is easy. Execution is hard. Show the data." },
    { word: "transitioning to", risk: "Medium", category: "Future Claim", tip: "Vague timeline. When does the transition end?" },
    { word: "soon-to-be", risk: "High", category: "Future Claim", tip: "Vague timeline. Commit to a date." },
    { word: "moving towards", risk: "Medium", category: "Future Claim", tip: "Vague progress indicator." },

    // 4. OVERSTATED / ABSOLUTIST
    { word: "zero environmental impact", risk: "Critical", category: "Absolute Claim", tip: "Impossible. All production has some impact." },
    { word: "completely carbon neutral", risk: "High", category: "Absolute Claim", tip: "Likely relies heavily on offsets rather than reduction." },
    { word: "100% sustainable", risk: "Critical", category: "Absolute Claim", tip: "Scientifically impossible claim for a manufactured product." },
    { word: "fully recyclable", risk: "High", category: "infrastructure Check", reference: "FTC Green Guides", tip: "Only valid if local infrastructure exists for the consumer." },
    { word: "waste-free", risk: "High", category: "Absolute Claim", tip: "Did you account for supply chain and manufacturing waste?" },
    { word: "zero emissions", risk: "High", category: "Absolute Claim", tip: "Scope 1, 2, or 3? Often excludes supply chain (Scope 3)." },

    // 5. HIDDEN TRADE-OFFS
    { word: "made with recycled materials", risk: "Medium", category: "Hidden Trade-off", reference: "CCPA Guidance Note 4", tip: "What %? 1% or 100%? Does the product itself harm the environment?" },
    { word: "plastic-free packaging", risk: "Medium", category: "Hidden Trade-off", tip: "Good step, but is the *product* inside toxic or harmful?" },
    { word: "plant-based ingredients", risk: "Medium", category: "Hidden Trade-off", tip: "Plant-based can still be intensively farmed or processed." },
    { word: "solar-powered operations", risk: "Medium", category: "Hidden Trade-off", tip: "Great, but what about raw material sourcing and transport?" },

    // 6. NATURE-FLAVOURED LANGUAGE
    { word: "inspired by nature", risk: "High", category: "Puffery", tip: "Greenwashing fluff. No legal meaning." },
    { word: "pure and natural", risk: "High", category: "Puffery", tip: "Arsenic is natural. Doesn't mean safe or sustainable." },
    { word: "green living", risk: "High", category: "Lifestyle Claim", tip: "Vague lifestyle marketing term." },
    { word: "nature's goodness", risk: "High", category: "Puffery", tip: "Marketing puffery substituting for proof." },
    { word: "conscious design", risk: "High", category: "Subjective Claim", tip: "Subjective. Define 'conscious' with metrics." },

    // 7. CARBON WITHOUT METHODOLOGY
    { word: "carbon smart", risk: "High", category: "Undefined Term", tip: "Undefined marketing term." },
    { word: "climate friendly", risk: "High", category: "Vague Claim", tip: "Too broad to be substantiated." },
    { word: "reduced carbon footprint", risk: "Medium", category: "Comparative Claim", tip: "Reduced by how much? Compared to what baseline?" },
    { word: "low carbon product", risk: "Medium", category: "Comparative Claim", tip: "Define the threshold for 'low'." },
    { word: "offset-backed", risk: "High", category: "Offset Claim", tip: "Offsets are a last resort, not a primary solution." },

    // 8. CIRCULARITY WITHOUT SYSTEM
    { word: "designed for reuse", risk: "Medium", category: "System Claim", tip: "Is there actually a take-back system in place?" },
    { word: "built for circularity", risk: "Medium", category: "System Claim", tip: "Circular requires a system, not just a product attribute." },
    { word: "circular product", risk: "High", category: "System Claim", tip: "A product cannot be circular alone; it needs a system." },
    { word: "closed-loop", risk: "High", category: "System Claim", tip: "Is the loop actually closed, or is it a theoretical promise?" },

    // 9. MISLEADING QUANTIFICATION
    { word: "more sustainable", risk: "High", category: "Comparative Claim", tip: "More than what? A competitor? Last year? Be specific." },
    { word: "greener", risk: "High", category: "Comparative Claim", tip: "Greener is subjective. Define the metric." },
    { word: "cleaner for the planet", risk: "High", category: "Comparative Claim", tip: "Vague comparison. Needs data." },
    { word: "new sustainability formula", risk: "High", category: "Marketing Spin", tip: "Marketing spin unless methodology is disclosed." },
    { word: "improved eco performance", risk: "Medium", category: "Vague Metric", tip: "Show the performance data." },

    // 10. BUZZWORDS
    { word: "regenerative", risk: "Medium", category: "Buzzword", tip: "High bar. Requires specific soil/carbon data." },
    { word: "conscious consumption", risk: "High", category: "Buzzword", tip: "Vague. Often shifts blame to consumer." },
    { word: "earth-first", risk: "High", category: "Buzzword", tip: "Marketing slogan." },
    { word: "impact-led", risk: "Medium", category: "Buzzword", tip: "Show the impact report." },
    { word: "climate-positive", risk: "High", category: "Buzzword", tip: "Requires removing more carbon than emitted. Rare." },
    { word: "better choices", risk: "Medium", category: "Buzzword", tip: "Vague." },
    
    // Legacy/Specifics
    { word: "save the planet", risk: "Critical", category: "Hyperbole", tip: "Hyperbole. No single product saves the planet." },
    { word: "farm fresh", risk: "High", category: "Puffery", tip: "Vague green-sounding language with no legal meaning." }, 
    { word: "conscious", risk: "High", category: "Subjective Claim", tip: "Subjective. 'Conscious' collection implies others are unconscious?" },
];

const GLOSSARY = [
    { term: "Accountability", def: "Being transparent about exactly how you affect the environment, good and bad." }, 
    { term: "Accreditation", def: "Third-party audit or certification. Don't just take a brand's word for it." }, 
    { term: "B Corp", def: "Certification for companies meeting high standards of social and environmental performance, accountability, and transparency." },
    { term: "Biodegradable", def: "Capable of being decomposed by bacteria or other living organisms. Note: Everything is biodegradable eventually; look for timeframes." },
    { term: "Carbon Neutral", def: "Balancing carbon emissions with carbon removal (often via offsets). Aim for 'Net Zero' (reduction first) instead." },
    { term: "Circularity", def: "A model where products are designed to be reused, repaired, or recycled, eliminating waste and pollution." },
    { term: "Eco-anxiety", def: "Chronic fear of environmental doom. Action and education are the best antidotes." },
    { term: "Greenwashing", def: "Making misleading or unsubstantiated claims about the environmental benefits of a product, service, or practice." },
    { term: "Net Zero", def: "Reducing greenhouse gas emissions to as close to zero as possible, with any remaining emissions re-absorbed from the atmosphere." },
    { term: "Organic", def: "Grown without the use of synthetic pesticides, fertilizers, or GMOs. Look for certified labels." },
    { term: "Traceability", def: "Using tech to track a product's journey from raw material to you. Proof, not just promises." }, 
    { term: "Upcycling", def: "Transforming by-products, waste materials, or unwanted products into new materials or products of better quality." },
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

// ==========================================
// ⚙️ SYSTEM CODE
// ==========================================

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

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
  tag: Tag
};

const getIconComponent = (name) => iconMap[name] || Users;

// --- Utility: Image Fallback ---
const ImageWithFallback = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  const handleError = () => {
    setImgSrc("https://placehold.co/400x400?text=Image+Not+Found"); 
  };
  
  return <img src={imgSrc} alt={alt} className={className} onError={handleError} />;
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

// Playbook Specific Components
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

// --- NEW SENSE PAGE COMPONENTS (INTEGRATED FROM USER CODE) ---
const SenseAnalysisView = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const analyze = () => {
        const trimmed = text.trim();
        
        if (!trimmed) {
            setError("Please paste a claim or paragraph to analyze.");
            setResult(null);
            return;
        }
        
        setError("");
        
        const hitsMap = new Map();
        TERMS.forEach((term) => {
            const pattern = new RegExp(`\\b${escapeRegExp(term.word)}\\b`, "i");
            if (pattern.test(trimmed) && !hitsMap.has(term.word)) {
                    hitsMap.set(term.word, term);
            } else if (term.word.split(' ').length > 1 && trimmed.toLowerCase().includes(term.word) && !hitsMap.has(term.word)) {
                    hitsMap.set(term.word, term);
            }
        });

        setResult(Array.from(hitsMap.values()));
    };
    
    const copyFindings = () => {
        if (!result) return;
        const summary = result
            .map((r) => `"${r.word}" – ${r.risk} risk: ${r.tip}`)
            .join("\n");
        navigator.clipboard.writeText(summary);
        alert("Findings copied to clipboard!");
    };

    return (
        <div className="w-full max-w-4xl mx-auto animate-fade">
            
            {/* VALUE PROP SECTION (INSURANCE) */}
            <div className="mb-12 md:mb-16 grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left pl-2">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Does it make <br/><span className="text-gray-400">Sense?</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base font-medium mb-6 leading-relaxed">
                        Protect your reputation, ensure legal compliance, and build investor trust. 
                        <strong className="text-gray-800 ml-1">Sense</strong> stress-tests your environmental claims before you publish.
                    </p>
                    
                    {/* Value Pills */}
                    <div className="flex flex-wrap gap-2 mb-2">
                        {["Reputation", "Legal Compliance", "Trust", "ESG Credibility"].map((v, i) => (
                            <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 shadow-sm flex items-center gap-1">
                                <ShieldCheck size={12} className="text-green-600" /> {v}
                            </span>
                        ))}
                    </div>
                </div>

                {/* VISUAL ANCHOR: RADAR SCAN */}
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

            {/* ANALYZER TOOL */}
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
                    <button 
                        type="button"
                        onClick={analyze}
                        className="soft-btn-primary px-8 py-3 flex items-center gap-2 font-bold tracking-wide text-sm shadow-lg hover:shadow-xl transition-all"
                    >
                        Test Your Claims <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            {/* Scroll Indicator Element (Only show if no results yet to encourage scrolling) */}
            {!result && (
                <div className="flex justify-center mt-8 mb-16 animate-bounce opacity-80">
                    <a href="#philosophy" className="w-10 h-10 bg-white rounded-full shadow-lg shadow-gray-200/50 flex items-center justify-center text-green-600 border border-green-50 cursor-pointer hover:bg-green-50 transition-colors">
                        <Leaf size={18} />
                    </a>
                </div>
            )}

            <div aria-live="polite">
            {result && (
                <div className="animate-fade mb-20">
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
                            {/* Overall Risk Badge */}
                            <div className="soft-card p-5 mb-6 flex items-center justify-between bg-white border border-gray-100">
                                <div>
                                    <p className="text-[10px] uppercase tracking-wide text-gray-400 font-bold mb-1">
                                    Overall Language Risk
                                    </p>
                                    <p className="text-sm font-bold text-gray-800">
                                    {getOverallRisk(result)} – review your claims before publishing.
                                    </p>
                                </div>
                                <div
                                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-sm
                                    ${
                                        getOverallRisk(result) === "Critical"
                                        ? "bg-red-100 text-red-700 border border-red-200"
                                        : getOverallRisk(result) === "High"
                                        ? "bg-orange-100 text-orange-700 border border-orange-200"
                                        : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                                    }`}
                                >
                                    {getOverallRisk(result)} Risk
                                </div>
                            </div>

                            <div className="flex items-baseline justify-between px-2">
                                <h3 className="text-xl font-bold text-gray-900">Reflection Points</h3>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                                    {result.length} Issues Found
                                </span>
                            </div>

                            {result.map((item, i) => (
                                <div key={i} className="soft-card p-6 transition-all hover:scale-[1.01]">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                                        <div className="flex items-center gap-3">
                                            <AlertCircle className="text-red-400 shrink-0" size={18} />
                                            <h4 className="font-bold text-base text-gray-900">"{item.word}"</h4>
                                        </div>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide bg-gray-100 px-2 py-1 rounded self-start md:self-auto">
                                            {item.category}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 pl-0 md:pl-8 leading-relaxed text-sm">
                                        <span className="font-bold text-gray-700">Rethink this:</span> {item.tip}
                                    </p>
                                        {item.reference && (
                                        <p className="pl-0 md:pl-8 mt-3 text-[10px] text-gray-400 flex items-center gap-1">
                                            <BookOpen size={10} /> Ref: {item.reference}
                                        </p>
                                    )}
                                </div>
                            ))}
                            
                            <div className="text-center mt-6">
                                <button
                                    type="button"
                                    className="text-xs font-bold text-gray-500 hover:text-green-600 underline underline-offset-4 transition-colors flex items-center justify-center gap-2 mx-auto"
                                    onClick={copyFindings}
                                >
                                    <Copy size={12}/> Copy findings to clipboard
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
            </div>

            {/* Scroll Down: Philosophy & Disclaimer Section */}
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

                {/* Disclaimer Box */}
                <div className="soft-card bg-gray-100/50 p-6 md:p-8 border border-gray-200">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h4 className="font-bold text-gray-900 flex items-center gap-2 text-[10px] uppercase tracking-wide mb-1">
                                <Info size={14} /> Sense Disclaimer
                            </h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                This tool is designed to help rethink messaging before pushing it out and should only be looked at like a guiding light. It does not constitute legal advice.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                            <p className="text-xs text-gray-500 mb-1">
                                Need to understand deeper and get trained on greenwashing further?
                            </p>
                            <a href="mailto:hello@hooop.in" className="inline-flex items-center gap-1.5 font-bold text-gray-900 hover:text-green-600 transition-colors text-sm">
                                <Mail size={14} /> hello@hooop.in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ChecklistView = () => {
    const [items, setItems] = useState([
        { id: 1, text: "Are we using green/brown colors just to look 'natural' without changing the product?", checked: false }, 
        { id: 2, text: "Do we have a specific webpage backing these claims?", checked: false },
        { id: 3, text: "Is the packaging claiming '100% Recycled' when it's just 1%?", checked: false }, 
        { id: 4, text: "Are we ignoring the supply chain impact?", checked: false },
        { id: 5, text: "Is the 'Recyclable' logo prominent on non-recyclable packaging?", checked: false },
        { id: 6, text: "Are we making a big noise about a tiny feature (e.g. CFC-free) to hide bigger harms?", checked: false }, 
    ]);

    const toggle = (id) => {
        setItems(items.map(i => i.id === id ? {...i, checked: !i.checked} : i));
    };

    return (
        <div className="w-full max-w-2xl mx-auto animate-fade pb-20 md:pb-0 px-6 pt-8 md:pt-12">
            <div className="mb-10 text-center md:text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Visual Audit</h2>
                <p className="text-gray-500 text-base md:text-lg">Pause and look at your product packaging or website.</p>
            </div>
            
            <div className="space-y-4">
                {items.map(item => (
                    <button 
                        key={item.id}
                        type="button"
                        onClick={() => toggle(item.id)}
                        className={`w-full soft-card p-5 md:p-6 flex items-center justify-between transition-all duration-300 text-left ${
                            item.checked ? 'opacity-50 grayscale' : 'hover:scale-[1.01]'
                        }`}
                    >
                        <span className={`text-sm md:text-base font-medium mr-4 ${item.checked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                            {item.text}
                        </span>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                            item.checked ? 'bg-gray-900 border-gray-900 text-white' : 'border-gray-300'
                        }`}>
                            {item.checked && <Check size={12} />}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

const ResourcesView = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto animate-fade pb-20 md:pb-0 px-6">
            <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Further Resources</h2>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
                    Dive deeper into the regulations and best practices shaping the future of honest environmental communication.
                </p>
            </div>
            
            {/* Resource Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                <a href="https://consumeraffairs.nic.in/" target="_blank" rel="noopener noreferrer" className="soft-card p-6 block hover:scale-[1.02] transition-transform group bg-white">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                            <Scale size={18} />
                        </div>
                        <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">CCPA Guidelines</h4>
                    <p className="text-xs text-gray-500">Official Indian regulations on misleading environmental claims.</p>
                </a>
                
                <a href="https://www.ascionline.in/" target="_blank" rel="noopener noreferrer" className="soft-card p-6 block hover:scale-[1.02] transition-transform group bg-white">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                            <AlertCircle size={18} />
                        </div>
                        <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">ASCI Code</h4>
                    <p className="text-xs text-gray-500">Advertising Standards Council of India's rules on honesty.</p>
                </a>

                <a href="https://www.wwf.org.uk/learn/environment/guide-to-greenwashing" target="_blank" rel="noopener noreferrer" className="soft-card p-6 block hover:scale-[1.02] transition-transform group bg-white">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                            <Leaf size={18} />
                        </div>
                        <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">WWF Guide</h4>
                    <p className="text-xs text-gray-500">Global best practices on identifying greenwashing traps.</p>
                </a>

                <a href="https://www.oneplanetnetwork.org/knowledge-centre/resources/green-marketing-challenge" target="_blank" rel="noopener noreferrer" className="soft-card p-6 block hover:scale-[1.02] transition-transform group bg-white">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                            <Globe size={18} />
                        </div>
                        <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">One Planet Network</h4>
                    <p className="text-xs text-gray-500">Green Marketing Challenge & validation tools.</p>
                </a>
            </div>

            {/* Green Glossary Section */}
            <div className="mb-8 pt-8 border-t border-gray-200/60">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                        <BookOpen size={16} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Green Glossary</h2>
                </div>
                
                <div className="space-y-3">
                    {GLOSSARY.map((item, index) => (
                        <div key={index} className="soft-card overflow-hidden transition-all duration-300">
                            <button 
                                type="button"
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                            >
                                <span className="font-bold text-gray-800 text-sm md:text-base">{item.term}</span>
                                {openIndex === index ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                            </button>
                            
                            <div className={`px-5 pb-5 text-xs md:text-sm text-gray-500 leading-relaxed transition-all duration-300 ${openIndex === index ? 'block' : 'hidden'}`}>
                                {item.def}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-[10px] text-gray-400 text-center">
                    Sense pattern library last updated: Oct 2025. For complex claims, get professional legal review.
                </p>
            </div>
        </div>
    );
};


// --- Main App ---
const App = React.forwardRef((props, ref) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSenseTool, setShowSenseTool] = useState(false);
  const [senseTab, setSenseTab] = useState('analyzer');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sense', label: 'Sense' },
    { id: 'prvaah', label: 'Prvaah' },
    { id: 'greenwashing', label: 'Greenwashing' },
    { id: 'offerings', label: 'What We Do' },
    { id: 'thinking', label: 'Our Thinking' },
    { id: 'collective', label: 'Collective' },
  ];

  const navigateTo = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (id !== 'research') setShowSenseTool(false); 
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
            {navItems.map((item) => (
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
                <HooopLogo className="w-8 h-8" />
                <span className="text-black">{SITE_CONTENT.brand.name}</span>
            </div>
            <button onClick={() => setIsMenuOpen(true)} className="p-3 rounded-xl bg-[#E0E5EC] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-black active:shadow-inner">
              <Menu size={24} />
            </button>
          </div>
          <div className="lg:hidden bg-[#E0E5EC]/95 backdrop-blur-md border-b border-white/20 overflow-x-auto flex items-center gap-6 px-6 py-3 no-scrollbar shadow-inner">
             {navItems.map(item => (
                 <button key={item.id} onClick={() => navigateTo(item.id)} className={`whitespace-nowrap text-[10px] font-bold uppercase tracking-widest flex-shrink-0 transition-colors ${activeSection === item.id ? 'text-teal-600' : 'text-gray-500'}`}>{item.label}</button>
             ))}
          </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#E0E5EC] flex flex-col items-center justify-center space-y-8 animate-fade-in lg:hidden">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-4 rounded-full bg-[#E0E5EC] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-black">
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => { navigateTo(item.id); setIsMenuOpen(false); }} className={`text-2xl font-bold tracking-tight ${activeSection === item.id ? 'text-black' : 'text-gray-500'}`}>
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="lg:pl-64 w-full min-h-screen relative z-10 px-6 lg:px-20 py-32 lg:py-0">
        
        {/* Floating "Let's Talk" Button */}
        <div className="fixed bottom-6 right-6 lg:top-10 lg:right-10 lg:bottom-auto z-40">
            <button onClick={() => navigateTo('contact')} className="bg-black text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-xs lg:text-sm tracking-wider shadow-[5px_5px_15px_rgba(0,0,0,0.2)] hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                Let's Talk
            </button>
        </div>

        <div className="w-full min-h-screen flex flex-col justify-center">
          
          {/* HOME */}
          {activeSection === 'home' && (
            <section className="relative flex flex-col lg:flex-row items-center h-full min-h-screen animate-fade-in-up">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 hidden xl:flex gap-6 pointer-events-none opacity-50">
                  <VerticalPill height="h-96" className="w-24" />
                  <VerticalPill height="h-64" className="w-24 mt-20" />
              </div>
              <div className="w-full lg:w-1/2 z-10 flex flex-col justify-center items-start space-y-10 pl-4 lg:pl-12">
                <div className="flex flex-col">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">{SITE_CONTENT.brand.est}</span>
                    <h1 className="text-5xl lg:text-8xl font-black text-[#313b4e] leading-[0.9] tracking-tight">
                      {SITE_CONTENT.hero.titleLine1} <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-600">{SITE_CONTENT.hero.titleLine2}</span>
                    </h1>
                </div>
                <p className="text-lg lg:text-xl text-gray-500 max-w-md leading-relaxed font-medium">{SITE_CONTENT.hero.subtitle}</p>
                <div className="flex flex-wrap gap-6 items-center">
                  <SoftCard onClick={() => navigateTo('offerings')} className="px-8 py-4 flex items-center gap-3 text-black font-bold">
                    <span>{SITE_CONTENT.hero.buttonText}</span>
                    <ArrowRight size={18} />
                  </SoftCard>
                  <button onClick={() => navigateTo('manifesto')} className="text-sm font-bold text-teal-600 hover:text-black transition-colors border-b-2 border-transparent hover:border-black pb-1">
                    {SITE_CONTENT.hero.linkText}
                  </button>
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
                    <h2 className="text-6xl lg:text-8xl font-black text-gray-900 mb-8 tracking-tighter">
                        hello.<br/>
                        we are <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">HOOOP</span>
                    </h2>
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
            <section className="relative min-h-screen py-24 animate-fade-in-up">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-20 text-center md:text-left">
                        <h2 className="text-5xl lg:text-7xl font-black text-[#313b4e] mb-6 tracking-tighter">
                            {SITE_CONTENT.thinking.title}
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl font-light leading-relaxed">
                            {SITE_CONTENT.thinking.subtitle}
                        </p>
                    </div>

                    {/* Featured Tool: SENSE */}
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

                    {/* Blog List - Collab Fund Style */}
                    <div className="space-y-16 border-t border-gray-200 pt-16">
                        {SITE_CONTENT.thinking.posts.map((post, index) => (
                            <article key={index} className="group cursor-pointer">
                                <div className="flex flex-col md:flex-row gap-2 md:items-baseline justify-between mb-2">
                                    <span className="text-xs font-bold tracking-widest uppercase text-teal-600">{post.category}</span>
                                    <span className="text-xs text-gray-400 font-mono">{post.date}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed max-w-2xl text-lg">
                                    {post.desc}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
          )}

          {/* SENSE SECTION (New Dedicated Section - Uses new HTML structure) */}
          {activeSection === 'sense' && (
            <section className="relative min-h-screen py-24 animate-fade-in-up">
                {/* TABS FOR SENSE TOOLS */}
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

                {/* Sub-Views based on Tab */}
                {senseTab === 'analyzer' && <SenseAnalysisView />}
                {senseTab === 'checklist' && <ChecklistView />}
                {senseTab === 'learn' && <ResourcesView />}
            </section>
          )}

          {/* RESEARCH SECTION (Reports Only) */}
          {activeSection === 'research' && (
            <section className="relative min-h-screen py-24 animate-fade-in-up">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-6xl font-black text-[#313b4e] mb-4">{SITE_CONTENT.research.title}</h2>
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
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
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
          {activeSection === 'greenwashing' && (
            <div className="w-full animate-fade-in-up py-16">
                {/* ... (Keep rest of Greenwashing section same) */}
                <div className="relative overflow-hidden mb-24 min-h-[70vh] flex flex-col justify-center">
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
                        <div className="z-10 order-2 lg:order-1 pt-10 md:pt-0">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full mb-8 backdrop-blur-sm border border-white/50 shadow-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs font-bold tracking-widest uppercase text-gray-600">Strategic Briefing</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-8">
                                Green <br/> Is The New <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">Lie.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-md mb-10 leading-relaxed font-medium">
                                {SITE_CONTENT.playbook.introSubtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button onClick={() => navigateTo('sense')} className="bg-black text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2">
                                    Start The Journey <ArrowRight size={18} />
                                </button>
                                <button onClick={() => document.getElementById('gap').scrollIntoView({behavior:'smooth'})} className="bg-[#E0E5EC] text-gray-700 px-8 py-4 rounded-full font-bold shadow-[-5px_-5px_10px_#FFFFFF,5px_5px_10px_#AEAEC040] hover:shadow-inner transition-all">
                                    Mind The Gap
                                </button>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative h-[300px] lg:h-auto">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-[#E0E5EC] rounded-full shadow-[inset_-10px_-10px_30px_#FFFFFF,inset_10px_10px_30px_#AEAEC040] flex items-center justify-center z-10">
                                    <span className="text-gray-400 font-bold text-lg md:text-xl">Perception</span>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-48 h-48 md:w-80 bg-green-500 rounded-full shadow-2xl flex items-center justify-center opacity-90 z-20 mix-blend-multiply transition-all duration-1000 hover:translate-x-[-30%] cursor-pointer">
                                    <span className="text-white font-bold text-lg md:text-xl">Reality</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gap Section */}
                <div id="gap" className="mb-24 max-w-6xl mx-auto w-full px-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">The Verification Gap</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100">
                            <p className="text-sm text-gray-500 mb-6">How are your claims verified?</p>
                            {SITE_CONTENT.playbook.gapStats.map((stat, i) => (
                                <StatBar key={i} {...stat} />
                            ))}
                            <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-100 flex gap-3">
                                <AlertTriangle className="text-red-500 shrink-0" size={20} />
                                <p className="text-xs text-red-600 font-semibold">15% of claims go live with zero verification.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 justify-center">
                            <SoftCard className="flex-1 flex flex-col justify-center">
                                <h3 className="text-xl font-bold mb-2">SPV (Perception)</h3>
                                <p className="text-gray-500 text-sm">The financial value stakeholders assign to your perceived commitment.</p>
                            </SoftCard>
                            <SoftCard className="flex-1 flex flex-col justify-center">
                                <h3 className="text-xl font-bold mb-2">SGV (Gap Risk)</h3>
                                <p className="text-gray-500 text-sm">The difference between reality and perception. A large gap means liability.</p>
                            </SoftCard>
                        </div>
                    </div>
                </div>

                {/* Archetypes */}
                <div className="mb-24 max-w-7xl mx-auto w-full px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Brand Archetypes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {SITE_CONTENT.playbook.archetypes.map((arch, i) => (
                            <ArchetypeCard key={i} {...arch} icon={getIconComponent(arch.icon)} />
                        ))}
                    </div>
                </div>

                {/* Sins */}
                <div className="mb-24 bg-green-50/50 -mx-6 md:-mx-20 px-6 md:px-20 py-20">
                    <h2 className="text-4xl font-bold mb-12 max-w-6xl mx-auto">The 7 Sins</h2>
                    <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth no-scrollbar max-w-6xl mx-auto">
                        {SITE_CONTENT.playbook.sins.map((sin, i) => (
                            <SinCard key={i} {...sin} icon={getIconComponent(sin.icon)} />
                        ))}
                    </div>
                </div>

                {/* Laws */}
                <div className="max-w-5xl mx-auto mb-24 px-6">
                    <h2 className="text-4xl font-bold mb-8">The Law</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-[2rem] p-8 border border-gray-200">
                            <div className="flex items-center gap-3 mb-4"><Scale className="text-green-600" size={32}/><h3 className="text-2xl font-bold">CCPA (2024)</h3></div>
                            <p className="text-gray-600 text-sm mb-4">Greenwashing is now a "misleading practice". Penalties up to ₹50 Lakhs.</p>
                        </div>
                        <div className="bg-white rounded-[2rem] p-8 border border-gray-200">
                            <div className="flex items-center gap-3 mb-4"><Lock className="text-blue-600" size={32}/><h3 className="text-2xl font-bold">ASCI Code</h3></div>
                            <p className="text-gray-600 text-sm mb-4">Prohibits misleading visuals. Requires independent evidence.</p>
                        </div>
                    </div>
                </div>

                {/* Interactive Flip Cards */}
                <div className="max-w-6xl mx-auto mb-24 px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Are We Silent?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FlipCard frontTitle="Fear of Scrutiny" frontIcon={Eye} color="#EF4444" backStat="70%" backText="of companies with strong credentials engage in greenhushing." />
                        <FlipCard frontTitle="Uncertainty" frontIcon={HelpCircle} color="#F59E0B" backStat="No Data" backText="Lack of reliable data is the #1 cited barrier." />
                        <FlipCard frontTitle="Perfectionism" frontIcon={Lock} color="#607D8B" backStat="Progress > Perfection" backText="Stakeholders reward transparency about the journey." />
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center pb-16">
                    <button onClick={() => navigateTo('sense')} className="bg-black text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all">
                        Open Sense Tool
                    </button>
                </div>
            </div>
          )}

          {/* ... Rest of sections (Offerings, Contact) ... */}
          {activeSection === 'prvaah' && (
             <section className="relative min-h-screen py-10 lg:py-24 animate-fade-in-up">
                <PrvaahWave />
                <div className="hidden xl:flex fixed right-10 top-1/2 -translate-y-1/2 flex-col gap-4 z-30">
                    {['Intro', 'Pillars', 'Compliance', 'Markets', 'Pilots'].map((item) => (
                        <button key={item} onClick={() => scrollToPrvaahSection(`prvaah-${item.toLowerCase()}`)} className="text-xs font-bold uppercase tracking-widest text-right hover:text-teal-600 transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                            {item}
                        </button>
                    ))}
                </div>
                <div className="max-w-6xl mx-auto relative z-10 px-4">
                    <div id="prvaah-intro" className="mb-24 text-center lg:text-left">
                        <div className="inline-block mb-4">
                           <h2 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-2">{SITE_CONTENT.prvaah.title}</h2>
                           <div className="h-2 w-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
                        </div>
                        <p className="text-xl lg:text-3xl font-light text-gray-600 max-w-4xl leading-relaxed mt-8">
                           From the Sanskrit for <span className="text-teal-600 font-bold">"{SITE_CONTENT.prvaah.sanskritMeaning},"</span> {SITE_CONTENT.prvaah.description1}
                        </p>
                        <p className="text-lg text-gray-500 mt-6 max-w-3xl leading-relaxed">
                            A co-branded platform by The HOOOP Collective and <a href="https://everloop.agency" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-800 underline decoration-2 decoration-teal-400">Everloop.Agency</a>, Prvaah connects compliance, capability, and commerce.
                        </p>
                    </div>

                    <div id="prvaah-pillars" className="mb-32">
                        <div className="flex flex-col items-center mb-12">
                             <h3 className="text-2xl font-bold uppercase tracking-widest mb-2">Our Pillars</h3>
                             <VerticalPill height="h-1" className="w-12 !rounded-full bg-teal-500" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {SITE_CONTENT.prvaah.pillars.map((pillar, idx) => {
                                const Icon = getIconComponent(pillar.icon);
                                return (
                                <ScrollReveal key={idx} className={`delay-${idx * 100} h-full`}>
                                    <SoftCard className="h-full p-6 flex flex-col items-center text-center gap-4 group hover:-translate-y-2">
                                        <div className="w-16 h-16 rounded-full border-2 border-teal-500 flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shrink-0">
                                            <Icon size={28} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest">{pillar.label}</span>
                                        <p className="text-xs text-gray-500 leading-relaxed">{pillar.desc}</p>
                                    </SoftCard>
                                </ScrollReveal>
                            )})}
                        </div>
                    </div>

                    <div className="space-y-24">
                        <ScrollReveal id="prvaah-compliance">
                            <div className="flex flex-col lg:flex-row gap-12 items-start">
                                <div className="lg:w-1/3">
                                    <h3 className="text-4xl font-bold text-[#313b4e] mb-4">Compliance & Capability</h3>
                                    <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
                                </div>
                                <div className="lg:w-2/3">
                                    <p className="text-lg text-gray-500 leading-relaxed mb-6">
                                        This offering is sector-agnostic, supporting enterprises across clean energy, green tech, sustainable fashion, agriculture, wellness, and consumer goods. We ensure you enter new markets with credibility.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal id="prvaah-markets">
                            <div className="flex flex-col lg:flex-row gap-12 items-start">
                                <div className="lg:w-1/3">
                                    <h3 className="text-4xl font-bold text-[#313b4e] mb-4">Navigate Newer Markets</h3>
                                    <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                                </div>
                                <div className="lg:w-2/3">
                                    <p className="text-lg text-gray-500 leading-relaxed mb-6">
                                        We provide market intelligence, cultural insights, and curated access to investors, helping businesses understand local contexts and build credible, long-term presence.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal id="prvaah-pilots">
                            <div className="flex flex-col lg:flex-row gap-12 items-start">
                                <div className="lg:w-1/3">
                                    <h3 className="text-4xl font-bold text-[#313b4e] mb-4">Pilots & Scale</h3>
                                    <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
                                </div>
                                <div className="lg:w-2/3">
                                    <p className="text-lg text-gray-500 leading-relaxed mb-12">
                                        Circular product validation and green media strategies are key components of our scale-up methodology.
                                    </p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {SITE_CONTENT.prvaah.testimonials.map((t, idx) => (
                                            <SoftCard key={idx} className="p-8 relative overflow-hidden group">
                                                <div className={`absolute top-0 left-0 w-2 h-full ${idx === 0 ? 'bg-teal-500' : 'bg-blue-500'}`}></div>
                                                <p className="italic text-gray-600 mb-6 relative z-10 text-sm leading-relaxed">
                                                    "{t.text}"
                                                </p>
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                                                        <ImageWithFallback src={t.image} fallbackSrc={t.fallbackImage} className="w-full h-full object-cover" alt={t.name} />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-sm">{t.name}</div>
                                                        <div className="text-xs text-gray-400 uppercase">{t.role}</div>
                                                    </div>
                                                </div>
                                            </SoftCard>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
             </section>
          )}

          {/* COMBINED OFFERINGS & MODELS SECTION */}
          {activeSection === 'offerings' && (
            <section className="py-24 min-h-screen animate-fade-in-up">
              {/* Part 1: What We Do (Services) */}
              <div className="max-w-6xl mx-auto px-6 mb-32">
                  <div className="flex flex-col lg:flex-row justify-between items-end mb-20">
                     <div>
                         <h2 className="text-4xl lg:text-6xl font-black text-[#313b4e] mb-4">What We Do</h2>
                         <p className="text-gray-500">Soft interventions for hard problems.</p>
                     </div>
                     <VerticalPill height="h-2" className="w-32 !rotate-0 hidden lg:block" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                     {SITE_CONTENT.offerings.map((card, idx) => (
                       <SoftCard key={idx} className="p-10 flex flex-col justify-between h-80 group">
                          <div>
                            <div className="w-12 h-12 rounded-2xl bg-[#E0E5EC] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center mb-6 text-black font-bold text-xl group-hover:text-white group-hover:bg-black transition-colors duration-300">
                               {idx + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-[#313b4e] mb-4">{card.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                          </div>
                       </SoftCard>
                     ))}
                  </div>
              </div>

              {/* Visual Divider */}
              <div className="w-full flex justify-center mb-32 opacity-20">
                  <VerticalPill height="h-32" className="w-2" />
              </div>

              {/* Part 2: Engagement Models */}
              <div className="max-w-6xl mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-[#313b4e] mb-4">Engagement Models</h2>
                    <p className="text-lg text-gray-500">Flexible ways to work with us.</p>
                 </div>
                 <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                    {SITE_CONTENT.models.map((model, idx) => {
                        const Icon = getIconComponent(model.iconType);
                        return (
                        <ScrollReveal key={idx} className={`delay-${idx * 100}`}>
                            <SoftCard className={`p-10 lg:p-16 flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center lg:items-start group hover:scale-[1.01] transition-transform`}>
                                 <div className="w-32 h-32 rounded-full bg-[#E0E5EC] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center shrink-0">
                                     <Icon size={40} className="text-gray-400 group-hover:text-black transition-colors" />
                                 </div>
                                 <div className="text-center lg:text-left flex-1">
                                     <h3 className="text-3xl lg:text-4xl font-black text-[#313b4e] mb-6">{model.title}</h3>
                                     <p className="text-xl font-light text-gray-600 mb-4 leading-relaxed">
                                         <span className="font-bold text-black">{model.headline}</span>
                                     </p>
                                     <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                                         {model.desc}
                                     </p>
                                 </div>
                            </SoftCard>
                        </ScrollReveal>
                    )})}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <div className="inline-block px-8 py-3 rounded-full bg-[#E0E5EC] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] mb-6">
                            <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Transparent</span>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-4">No hidden fees, no markups.</h4>
                        <p className="text-gray-500">We work hand-in-hand with brands, agencies, funds and sustainability consultancies to align brand & sustainability strategy.</p>
                    </div>
                 </div>
              </div>
            </section>
          )}

          {/* COLLECTIVE */}
          {activeSection === 'collective' && (
             <section className="py-24 min-h-screen animate-fade-in-up">
                <div className="mb-20">
                   <h2 className="text-4xl lg:text-6xl font-black text-[#313b4e] mb-6">The Collective</h2>
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
                             <h3 className="text-xl font-bold text-[#313b4e]">{member.name}</h3>
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
                 {/* Join the Collective CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg">
                        If our purpose resonates with you, write to us at <a href="mailto:hello@hooop.in" className="text-teal-600 font-bold hover:underline">hello@hooop.in</a> to join the collective.
                    </p>
                </div>
             </section>
          )}
          
          {/* CONTACT */}
          {activeSection === 'contact' && (
            <section className="py-24 min-h-screen flex items-center justify-center animate-fade-in-up">
               <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                     <h2 className="text-5xl font-black text-[#313b4e] mb-8">Let's Talk.</h2>
                     <p className="text-gray-500 mb-8 text-lg">Ready to reimagine growth?</p>
                     <div className="space-y-6">
                        <SoftCard className="p-4 flex items-center gap-4 w-fit" hoverEffect={false}>
                            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs">@</div>
                            <span className="font-bold text-gray-700">{SITE_CONTENT.brand.contactEmail}</span>
                        </SoftCard>
                     </div>
                  </div>
                  <form className="space-y-8">
                     {['Name', 'Email', 'Message'].map((label, i) => (
                         <div key={i}>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-2">{label}</label>
                            {label === 'Message' ? (
                                <textarea rows="4" className="w-full bg-[#E0E5EC] rounded-3xl p-6 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] border-none outline-none focus:ring-2 focus:ring-black/5 transition-all" />
                            ) : (
                                <input type="text" className="w-full bg-[#E0E5EC] rounded-full p-4 px-6 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] border-none outline-none focus:ring-2 focus:ring-black/5 transition-all" />
                            )}
                         </div>
                     ))}
                     <button className="w-full bg-black text-white font-bold py-5 rounded-full shadow-[5px_5px_15px_rgba(0,0,0,0.2)] hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        Send Message
                     </button>
                  </form>
               </div>
            </section>
          )}
        </div>
      </main>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-scan { animation: scan 3s linear infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; transform: translateY(20px); }
        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
        /* Hide scrollbar for Horizontal Nav */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }
        /* 3D Flip Utilities */
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        /* New Styles for Sense */
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
        @keyframes radar-ping {
            0% { transform: scale(0.8); opacity: 0.8; }
            100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
});

export default App;
