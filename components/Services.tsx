"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Code2,
  Mic,
  TrendingUp,
  Workflow,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES_SUBTITLE, SITE } from "@/lib/constants";
import { SERVICES_WITH_SLUGS } from "@/lib/services";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Code2,
  Cloud,
  Mic,
  Workflow,
  TrendingUp,
};

interface ServicesProps {
  preview?: boolean;
  showHeader?: boolean;
}

export function Services({ preview = false, showHeader = true }: ServicesProps) {
  return (
    <section id={preview ? "services" : undefined} className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Our <span className="text-[#00A3FF]">Services</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {SERVICES_SUBTITLE}
            </p>
          </motion.div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_WITH_SLUGS.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-[#00A3FF]/40 hover:shadow-lg hover:shadow-[#00A3FF]/5"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#00A3FF]/5 transition-all group-hover:bg-[#00A3FF]/10" />
                  <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A3FF]/10 ring-1 ring-[#00A3FF]/20 transition-all group-hover:bg-[#00A3FF]/20">
                    <Icon className="h-6 w-6 text-[#00A3FF]" />
                  </div>
                  <h3 className="relative mb-1 text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="relative mb-2 text-xs font-medium text-[#00A3FF]">
                    {service.subtitle}
                  </p>
                  <p className="relative text-sm leading-relaxed text-muted-foreground">
                    {preview
                      ? service.shortDescription
                      : service.longDescription}
                  </p>
                  {!preview && (
                    <ul className="relative mt-4 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-[#00A3FF]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="relative mt-4 inline-flex items-center text-sm font-medium text-[#00A3FF] opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#00A3FF] text-white hover:bg-[#00A3FF]/90"
            >
              <Link href="/services" data-track="cta-services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
