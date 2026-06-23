import type { Metadata } from "next";
import { SITE } from "./constants";

export const SITE_URL = "https://zeplion.com";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path,
  ogType = "website",
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      type: ogType,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE_URL,
  email: SITE.email,
  description:
    "AI automation and software development company helping businesses worldwide automate, scale and grow.",
  logo: `${SITE_URL}/logo.png`,
  sameAs: [`https://${SITE.website}`],
  areaServed: ["GB", "US", "AE"],
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "customer service",
    availableLanguage: "English",
  },
};

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE_URL,
    description:
      "AI automation and software development company offering VAPI voice agents, n8n workflows, SaaS development, and custom software.",
    email: SITE.email,
    areaServed: ["United Kingdom", "United States", "United Arab Emirates"],
    serviceType: [
      "AI Automation",
      "Software Development",
      "SaaS Development",
      "AI Voice Agents",
      "Workflow Automation",
      "Digital Marketing",
    ],
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const FAQ_ITEMS = [
  {
    question: "What services does Zeplion offer?",
    answer:
      "Zeplion offers AI automation (VAPI + n8n), software development, SaaS development, AI voice agents, workflow automation, and digital marketing for businesses worldwide.",
  },
  {
    question: "How do I get started with Zeplion?",
    answer:
      "Book a free discovery call or request a free AI audit through our contact page. We respond within 24 hours with a tailored plan for your project.",
  },
  {
    question: "Where does Zeplion serve clients?",
    answer:
      "Zeplion serves clients in the UK, USA, and Dubai/Middle East, with remote delivery worldwide.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "Timelines vary by scope — from ASAP sprints to 1–2 month builds and 3–6 month SaaS products. We define clear milestones during the discovery call.",
  },
] as const;

export function getJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [ORGANIZATION_SCHEMA, getServiceSchema(), getFaqSchema()],
  };
}
