export const SITE = {
  name: "Zeplion",
  tagline: "The All-In-One Technology Partner For Businesses Worldwide",
  subheadline:
    "From AI automation to SaaS development and custom software — we build the systems that power your business growth",
  description:
    "Zeplion is a full-service technology company helping businesses worldwide automate, scale and grow using AI systems and custom software solutions",
  footerDescription:
    "Your all-in-one technology partner for AI automation, SaaS and software development",
  email: "mzohaibsameer@gmail.com",
  website: "zeplion.com",
  whatsapp: "447479348006",
  whatsappMessage:
    "Hi Zeplion, I'd like to start my project with you.",
  ctaLabel: "Start Your Project",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export const SERVICES = [
  {
    title: "AI Automation",
    description:
      "End-to-end automation with VAPI and n8n — connect your tools, eliminate manual work, and scale operations effortlessly.",
    icon: "Bot",
    tier: "primary" as const,
  },
  {
    title: "SaaS Development",
    description:
      "Full-stack SaaS products with billing, auth, dashboards, and cloud infrastructure ready to launch.",
    icon: "Cloud",
    tier: "primary" as const,
  },
  {
    title: "Software Development",
    description:
      "Custom software built for performance, security, and growth — from MVPs to enterprise-grade platforms.",
    icon: "Code2",
    tier: "primary" as const,
  },
  {
    title: "AI Voice Agents",
    description:
      "Intelligent voice agents that handle calls 24/7 — booking, support, sales, and lead qualification on autopilot.",
    icon: "Mic",
    tier: "secondary" as const,
  },
  {
    title: "Workflow Automation",
    description:
      "Streamline repetitive processes across your business with smart triggers, integrations, and real-time monitoring.",
    icon: "Workflow",
    tier: "secondary" as const,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that attract, convert, and retain customers — powered by AI insights and automation.",
    icon: "TrendingUp",
    tier: "secondary" as const,
  },
] as const;

export const STATS = [
  { value: "$441+", label: "Total Earned" },
  { value: "5★", label: "Rated" },
  { value: "3", label: "Countries" },
  { value: "24/7", label: "Support" },
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
    text: "The AI voice agent transformed our operations. Handles all calls 24/7 automatically. Game changing!",
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
  "5-star rated on Fiverr & Upwork",
  "Projects delivered in UK & Dubai",
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;
