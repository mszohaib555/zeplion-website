import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Services } from "@/components/Services";
import { TrustpilotBadge } from "@/components/TrustpilotBadge";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "AI Automation, Software Development, SaaS, Voice Agents, Workflow Automation, and Digital Marketing by Zeplion.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteLayout>
      <Services />
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-[#00A3FF]/20 bg-[#00A3FF]/10 p-8 text-center">
              <h2 className="text-2xl font-bold">Ready to get started?</h2>
              <p className="mt-3 text-muted-foreground">
                {SITE.honestTagline}. Book a free AI audit today.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00A3FF] text-white hover:bg-[#00A3FF]/90"
                >
                  <Link href="/contact" data-track="cta-services">
                    {SITE.ctaPrimary}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#00A3FF]/30 hover:bg-[#00A3FF]/10"
                >
                  <Link href="/contact" data-track="cta-discovery">
                    {SITE.ctaSecondary}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <TrustpilotBadge />
        </div>
      </section>
    </SiteLayout>
  );
}
