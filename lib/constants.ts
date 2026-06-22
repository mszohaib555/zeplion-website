export const SITE = {
  name: "Zeplion",
  tagline: "We Build AI Systems That Work While You Sleep",
  email: "mzohaibsameer@gmail.com",
  website: "zeplion.com",
  whatsapp: "447479348006",
  whatsappMessage:
    "Hi Zeplion, I'd like to get a free demo of your AI automation services.",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export const SERVICES = [
  {
    title: "AI Automation",
    description:
      "End-to-end automation with VAPI and n8n — connect your tools, eliminate manual work, and scale operations effortlessly.",
    icon: "Bot",
  },
  {
    title: "Software Development",
    description:
      "Custom software built for performance, security, and growth — from MVPs to enterprise-grade platforms.",
    icon: "Code2",
  },
  {
    title: "SaaS Development",
    description:
      "Full-stack SaaS products with billing, auth, dashboards, and cloud infrastructure ready to launch.",
    icon: "Cloud",
  },
  {
    title: "AI Voice Agents",
    description:
      "Intelligent voice agents that handle calls 24/7 — booking, support, sales, and lead qualification on autopilot.",
    icon: "Mic",
  },
  {
    title: "Workflow Automation",
    description:
      "Streamline repetitive processes across your business with smart triggers, integrations, and real-time monitoring.",
    icon: "Workflow",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that attract, convert, and retain customers — powered by AI insights and automation.",
    icon: "TrendingUp",
  },
] as const;

export const STATS = [
  { value: "5★", label: "Client Rating" },
  { value: "3+", label: "Projects Done" },
  { value: "3", label: "Countries Served" },
  { value: "24/7", label: "AI Systems" },
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
  "VAPI Certified",
  "n8n Expert",
  "AI-First Agency",
  "24/7 Support",
  "Global Delivery",
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;
