"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Code2,
  Mic,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, WHATSAPP_URL } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Code2,
  Cloud,
  Mic,
  Workflow,
  TrendingUp,
};

export function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#00A3FF]/30 bg-[#00A3FF]/10 px-4 py-1 text-sm font-medium text-[#00A3FF]">
            Our Services
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Everything You Need to{" "}
            <span className="text-[#00A3FF]">Automate & Scale</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From AI voice agents to full SaaS platforms — we build systems that
            work around the clock so your business never stops.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-[#00A3FF]/40 hover:shadow-lg hover:shadow-[#00A3FF]/5"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#00A3FF]/5 transition-all group-hover:bg-[#00A3FF]/10" />
                <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A3FF]/10 ring-1 ring-[#00A3FF]/20 transition-all group-hover:bg-[#00A3FF]/20">
                  <Icon className="h-6 w-6 text-[#00A3FF]" />
                </div>
                <h3 className="relative mb-2 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

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
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Get Free Demo
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
