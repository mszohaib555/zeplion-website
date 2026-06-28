export const SITE = {
  name: "Zeplion",
  tagline: "The All-In-One Technology Partner For Businesses Worldwide",
  subheadline:
    "From AI automation to SaaS development and custom software — we build the systems that power your business growth",
  description:
    "Zeplion is a full-service technology company helping businesses worldwide automate, scale and grow using AI systems and custom software solutions",
  footerDescription:
    "Your all-in-one technology partner for AI automation, SaaS and software development",
  honestTagline:
    "Delivering AI Automation and Software Solutions to Businesses Across UK, UAE & USA",
  email: "contact@zeplion.com",
  website: "zeplion.com",
  whatsapp: "447479348006",
  whatsappMessage: "Hi Zeplion, I'd like to get a free AI audit.",
  ctaPrimary: "Get a Free AI Audit",
  ctaSecondary: "Book a Discovery Call",
  ctaLabel: "Get a Free AI Audit",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Process", href: "/#process" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "AI Automation",
    subtitle: "VAPI + n8n",
    shortDescription:
      "Automate workflows and integrations using VAPI voice AI and n8n — connect your tools and eliminate manual work.",
    longDescription:
      "We build end-to-end AI automation systems using VAPI and n8n. From voice-powered workflows to multi-app integrations, we connect your existing tools, trigger actions automatically, and scale operations without adding headcount.",
    icon: "Bot",
    features: [
      "VAPI voice workflow integration",
      "n8n automation pipelines",
      "CRM & tool integrations",
      "24/7 automated operations",
    ],
  },
  {
    title: "Software Development",
    subtitle: "Custom Build",
    shortDescription:
      "Custom software and web applications built for performance, security, and long-term business growth.",
    longDescription:
      "From MVPs to production-ready platforms, we develop custom software tailored to your business. Clean architecture, modern tech stacks, and scalable code that grows with you.",
    icon: "Code2",
    features: [
      "Web & mobile applications",
      "API development",
      "Database design",
      "Performance optimization",
    ],
  },
  {
    title: "SaaS Development",
    subtitle: "Full Stack",
    shortDescription:
      "Full-stack SaaS products with authentication, billing, dashboards, and cloud infrastructure ready to launch.",
    longDescription:
      "We build complete SaaS products from the ground up — user auth, subscription billing, admin dashboards, and cloud deployment. White-label ready and built to scale.",
    icon: "Cloud",
    features: [
      "Multi-tenant architecture",
      "Stripe billing integration",
      "Admin dashboards",
      "Cloud deployment",
    ],
  },
  {
    title: "AI Voice Agents",
    subtitle: "24/7 Calls",
    shortDescription:
      "Intelligent voice agents that handle calls around the clock — bookings, support, sales, and lead qualification.",
    longDescription:
      "Deploy AI voice agents powered by VAPI that answer calls 24/7. Perfect for reception, appointment booking, customer support, and sales qualification — with natural conversations and real results.",
    icon: "Mic",
    features: [
      "Inbound & outbound calls",
      "Appointment booking",
      "Lead qualification",
      "Custom voice personas",
    ],
  },
  {
    title: "Workflow Automation",
    subtitle: "Smart Triggers",
    shortDescription:
      "Streamline repetitive business processes with smart triggers, integrations, and real-time monitoring.",
    longDescription:
      "We map your business processes and automate them end-to-end. Smart triggers, conditional logic, and integrations across your entire tool stack — so nothing falls through the cracks.",
    icon: "Workflow",
    features: [
      "Process mapping",
      "Multi-step automations",
      "Error handling & alerts",
      "Real-time monitoring",
    ],
  },
  {
    title: "Digital Marketing",
    subtitle: "AI-Powered",
    shortDescription:
      "Data-driven marketing campaigns that attract, convert, and retain customers using AI insights.",
    longDescription:
      "Combine automation with data-driven marketing. We help you reach the right audience, optimize campaigns with AI insights, and build systems that convert leads into loyal customers.",
    icon: "TrendingUp",
    features: [
      "Campaign automation",
      "Lead nurturing flows",
      "Analytics & reporting",
      "Content strategy",
    ],
  },
] as const;

export const SERVICES_SUBTITLE =
  "Intelligent solutions for businesses worldwide";

export const STATS = [
  { value: "15+", label: "Active Projects", animate: true },
  { value: "5.0 ⭐", label: "Fiverr Rating", animate: false },
  { value: "UK, USA, Dubai", label: "Global Presence", animate: false },
  { value: "24/7", label: "Support", animate: false },
] as const;

export const PROJECTS = [
  {
    title: "Employee Timesheet SaaS",
    status: "In Development",
    statusIcon: "🔄",
    description:
      "White-label timesheet management SaaS platform built for businesses",
  },
  {
    title: "AI Code Security Auditor",
    status: "In Development",
    statusIcon: "🔄",
    description:
      "AI-powered security auditing tool that scans code for vulnerabilities",
  },
  {
    title: "AI Voice Receptionist",
    status: "Delivered",
    statusIcon: "✅",
    description:
      "24/7 AI receptionist for Dubai dental clinic using VAPI",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn your goals, pain points, and existing systems to map the perfect automation strategy.",
  },
  {
    step: "02",
    title: "Custom Blueprint",
    description:
      "Receive a detailed plan with timelines, tech stack, and ROI projections tailored to your business.",
  },
  {
    step: "03",
    title: "Build & Deploy",
    description:
      "Our team builds, tests, and deploys your AI systems with zero disruption to daily operations.",
  },
  {
    step: "04",
    title: "Scale & Support",
    description:
      "Ongoing optimization, monitoring, and support so your systems keep delivering results 24/7.",
  },
] as const;

export const REVIEWS = [
  {
    username: "khanhaseeb262",
    location: "UK 🇬🇧",
    rating: 5,
    text: "The AI voice agent transformed our operations. Handles all calls 24/7 automatically.",
  },
  {
    username: "gm_sameer",
    location: "Dubai 🇦🇪",
    rating: 5,
    text: "Perfectly delivered on time. Really understands requirements.",
  },
] as const;

export const TRUST_BADGES = [
  "Trusted by businesses in 3 countries",
  "5-star rated on Fiverr",
  "Projects delivered in UK & Dubai",
] as const;

export const PROJECT_TYPES = [
  "AI Automation",
  "Software Development",
  "SaaS Development",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "$500 - $1,000",
  "$1,000 - $5,000",
  "$5,000+",
] as const;

export const TIMELINES = ["ASAP", "1-2 months", "3-6 months"] as const;
