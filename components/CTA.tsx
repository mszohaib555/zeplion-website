"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP_URL } from "@/lib/constants";

export function CTA() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[#00A3FF]/20 bg-gradient-to-br from-[#00A3FF]/10 via-card/80 to-card/80 p-8 text-center sm:p-14"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#00A3FF]/10 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#00A3FF]/5 blur-[80px]" />
          </div>

          <div className="relative">
            <span className="mb-4 inline-block rounded-full border border-[#00A3FF]/30 bg-[#00A3FF]/10 px-4 py-1 text-sm font-medium text-[#00A3FF]">
              Limited Availability
            </span>

            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to Automate{" "}
              <span className="text-[#00A3FF]">Your Business?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Limited project slots available. Partner with Zeplion to build AI
              systems and custom software that power your business growth.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 w-full bg-[#25D366] px-8 text-base text-white hover:bg-[#25D366]/90 sm:w-auto"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 w-full border-[#00A3FF]/30 px-8 text-base hover:bg-[#00A3FF]/10 sm:w-auto"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {SITE.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
