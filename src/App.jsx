import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ArrowLeft, Globe, Shield, Zap, TrendingUp, FileText, Anchor, Linkedin, ExternalLink, Users, Coins, Briefcase, ScanLine, BarChart3, Download, AlertCircle, Check, Leaf, Info, Scale, BookOpen, ChevronDown, ChevronUp, Tag, ShieldCheck, Wind, Gavel, MicOff, Lock, HelpCircle, Eye, AlertTriangle, CheckCircle, Mail } from 'lucide-react';

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
  sense: {
    headline: "Does it make",
    headlineAccent: "Sense?",
    description: "Protect your reputation, ensure legal compliance, and build investor trust. Sense stress-tests your environmental claims before you publish.",
    tags: ["Reputation", "Legal Compliance", "Trust", "ESG Credibility"],
    philosophy: {
        title: "The Sense Philosophy",
        intro: "True sustainability isn't about the right buzzwords. It's about honesty, transparency, and impact. Sense helps you refine your message, stripping away the hype to reveal the truth.",
        cards: [
            { title: "Traceability", desc: "Tech-enabled tracking beats promises. Know exactly where your product comes from.", icon: "scan" },
            { title: "Clear Labeling", desc: "Simple language labels. No 'farm fresh' fluff. Just exactly what is in the product.", icon: "tag" }
        ]
    },
    glossary: [
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
    ],
    resources: [
        { title: "CCPA Guidelines", desc: "Official Indian regulations on misleading environmental claims.", link: "https://consumeraffairs.nic.in/", icon: "scale" },
        { title: "ASCI Code", desc: "Advertising Standards Council of India's rules on honesty.", link: "https://www.ascionline.in/", icon: "shield" },
        { title: "WWF Guide", desc: "Global best practices on identifying greenwashing traps.", link: "https://www.wwf.org.uk/learn/environment/guide-to-greenwashing", icon: "leaf" },
        { title: "One Planet Network", desc: "Green Marketing Challenge & validation tools.", link: "https://www.oneplanetnetwork.org/knowledge-centre/resources/green-marketing-challenge", icon: "globe" }
    ]
  },
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
        text: "At
