import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zeplion | AI Automation & Software Development",
  description:
    "AI automation and software development company. VAPI voice agents, n8n workflows, SaaS development, and custom software for businesses worldwide.",
  path: "/",
});

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <Services preview />
      <Portfolio />
      <Process />
      <Reviews />
      <CTA />
    </SiteLayout>
  );
}
