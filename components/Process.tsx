"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#00A3FF]/30 bg-[#00A3FF]/10 px-4 py-1 text-sm font-medium text-[#00A3FF]">
            How It Works
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            From Idea to{" "}
            <span className="text-[#00A3FF]">Live AI System</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A proven 4-step process that takes you from discovery to a fully
            deployed, 24/7 automated system.
          </p>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-[#00A3FF]/30 to-transparent lg:block" />

          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative text-center"
            >
              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#00A3FF]/10 ring-1 ring-[#00A3FF]/30" />
                <span className="text-xl font-bold text-[#00A3FF]">
                  {step.step}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
