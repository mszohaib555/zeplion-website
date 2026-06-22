"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { REVIEWS } from "@/lib/constants";

export function Reviews() {
  return (
    <section id="reviews" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#00A3FF]/30 bg-[#00A3FF]/10 px-4 py-1 text-sm font-medium text-[#00A3FF]">
            Client Reviews
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            What Our <span className="text-[#00A3FF]">Clients Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real feedback from businesses we&apos;ve helped automate and scale
            across the globe.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.username}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-[#00A3FF]/40"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-[#00A3FF]/20 transition-colors group-hover:text-[#00A3FF]/40" />

              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#00A3FF] text-[#00A3FF]"
                  />
                ))}
              </div>

              <p className="mb-6 text-base leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A3FF]/20 text-sm font-bold text-[#00A3FF]">
                  {review.username.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold">@{review.username}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
