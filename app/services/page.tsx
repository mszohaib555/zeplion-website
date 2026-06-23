import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | Zeplion",
  description:
    "AI Automation, Software Development, SaaS, Voice Agents, Workflow Automation, and Digital Marketing by Zeplion.",
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Our"
        highlight="Services"
        description="Six core capabilities — from AI automation to SaaS development. All equally important to how we help your business grow."
      />
      <Services />
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#00A3FF]/20 bg-[#00A3FF]/10 p-8 text-center">
          <h2 className="text-2xl font-bold">Ready to get started?</h2>
          <p className="mt-3 text-muted-foreground">
            {SITE.honestTagline}. Tell us about your project today.
          </p>
          <Button asChild size="lg" className="mt-6 bg-[#00A3FF] text-white hover:bg-[#00A3FF]/90">
            <Link href="/contact">{SITE.ctaLabel}</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
