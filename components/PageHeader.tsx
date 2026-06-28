"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TrustpilotBadge } from "@/components/TrustpilotBadge";
import { SITE, WHATSAPP_URL } from "@/lib/constants";

export function PageHeader({
  title,
  highlight,
  description,
}: {
  title: string;
  highlight: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#00A3FF]/10 blur-[100px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}{" "}
          <span className="text-[#00A3FF]">{highlight}</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      </motion.div>
    </section>
  );
}

export function ContactPageContent() {
  return (
    <>
      <PageHeader
        title="Get in"
        highlight="Touch"
        description="Tell us about your project. We respond within 24 hours — no spam, no sales pressure."
      />
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-4 font-semibold">Contact Info</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-[#00A3FF]"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-[#00A3FF]"
                  >
                    <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    WhatsApp Us
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  Serving clients in UK, USA &amp; Middle East
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
            >
              <TrustpilotBadge />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-[#00A3FF]/20 bg-[#00A3FF]/10 p-6"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                {SITE.honestTagline}. We take on a limited number of projects
                each month to ensure quality delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
