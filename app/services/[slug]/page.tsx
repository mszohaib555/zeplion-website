import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Bot,
  Cloud,
  Code2,
  Mic,
  TrendingUp,
  Workflow,
  ArrowLeft,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
import { SITE } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Code2,
  Cloud,
  Mic,
  Workflow,
  TrendingUp,
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.title} — ${service.subtitle}`,
    description: service.longDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];

  return (
    <SiteLayout>
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-[#00A3FF]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            All Services
          </Link>

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#00A3FF]/10 ring-1 ring-[#00A3FF]/20">
            <Icon className="h-7 w-7 text-[#00A3FF]" />
          </div>

          <p className="mb-2 text-sm font-medium text-[#00A3FF]">
            {service.subtitle}
          </p>
          <h1 className="text-4xl font-bold tracking-tight">{service.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {service.longDescription}
          </p>

          <ul className="mt-8 space-y-3">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3 text-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[#00A3FF]" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[#00A3FF] text-white hover:bg-[#00A3FF]/90"
            >
              <Link href="/contact" data-track="cta-services">
                {SITE.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
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
      </article>
    </SiteLayout>
  );
}
