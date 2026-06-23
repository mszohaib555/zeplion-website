"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { REVIEWS, SITE, TRUST_BADGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const floatingCards = [
  {
    ...REVIEWS[0],
    className: "top-4 left-0 xl:-left-8",
    delay: 0,
  },
  {
    ...REVIEWS[1],
    className: "bottom-8 right-0 xl:-right-8",
    delay: 0.3,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#00A3FF]/10 blur-[120px]" />
        <div className="absolute top-1/2 right-0 h-[300px] w-[300px] rounded-full bg-[#00A3FF]/5 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#00A3FF 1px, transparent 1px), linear-gradient(90deg, #00A3FF 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00A3FF]/30 bg-[#00A3FF]/10 px-4 py-1.5 text-sm font-medium text-[#00A3FF]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00A3FF] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00A3FF]" />
              </span>
              Zeplion
            </motion.div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              The All-In-One{" "}
              <span className="bg-gradient-to-r from-[#00A3FF] to-[#00D4FF] bg-clip-text text-transparent">
                Technology Partner
              </span>{" "}
              For Businesses Worldwide
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
              {SITE.subheadline}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 w-full bg-[#00A3FF] px-8 text-base text-white hover:bg-[#00A3FF]/90 sm:w-auto"
              >
                <Link href="/contact">
                  {SITE.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 w-full border-[#00A3FF]/30 px-8 text-base hover:bg-[#00A3FF]/10 sm:w-auto"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#00A3FF] text-[#00A3FF]"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {SITE.honestTagline}
              </p>
            </div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none lg:min-h-[480px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center justify-center py-8 lg:absolute lg:inset-0 lg:py-0"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute h-48 w-48 rounded-full bg-[#00A3FF]/10 blur-3xl lg:h-64 lg:w-64" />
                <Logo />
              </div>
              <p className="mt-6 text-center text-sm font-medium text-muted-foreground">
                AI systems running 24/7
              </p>
            </motion.div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-0 lg:contents">
              {floatingCards.map((card, index) => (
                <motion.div
                  key={card.username}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + card.delay, duration: 0.6 }}
                  className={cn(
                    "lg:absolute lg:z-10 lg:w-64",
                    card.className
                  )}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-xl border border-[#00A3FF]/20 bg-background/80 p-4 shadow-lg shadow-[#00A3FF]/5 backdrop-blur-sm"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-semibold">
                        @{card.username}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {card.location}
                      </span>
                    </div>
                    <div className="mb-2 flex gap-0.5">
                      {Array.from({ length: card.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-[#00A3FF] text-[#00A3FF]"
                        />
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      &ldquo;{card.text}&rdquo;
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-t border-border pt-10"
        >
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by forward-thinking businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {TRUST_BADGES.map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#00A3FF]" />
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
