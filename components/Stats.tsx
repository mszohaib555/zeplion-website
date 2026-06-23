"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedStat({
  value,
  label,
  index,
  animate = false,
}: {
  value: string;
  label: string;
  index: number;
  animate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView || !animate) {
      setDisplayValue(value);
      return;
    }

    const numericMatch = value.match(/^(\d+)(\+)?$/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericMatch[1], 10);
    const suffix = numericMatch[2] ?? "";
    const duration = 1500;
    const startTime = performance.now();

    const run = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(run);
      }
    };

    setDisplayValue(`0${suffix}`);
    requestAnimationFrame(run);
  }, [isInView, value, animate]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 text-center backdrop-blur-sm transition-all hover:border-[#00A3FF]/40 hover:bg-[#00A3FF]/5"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p
        className={`relative font-bold text-[#00A3FF] ${
          value.length > 8 ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl"
        }`}
      >
        {displayValue}
      </p>
      <p className="relative mt-2 text-sm font-medium text-muted-foreground">
        {label}
      </p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">
            Results That{" "}
            <span className="text-[#00A3FF]">Speak for Themselves</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real numbers from real projects — delivered globally.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={index}
              animate={stat.animate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
