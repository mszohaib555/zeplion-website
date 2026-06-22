"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function UrgencyBanner() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-50 bg-gradient-to-r from-[#00A3FF]/20 via-[#00A3FF]/10 to-[#00A3FF]/20 border-b border-[#00A3FF]/20"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-sm font-medium text-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00A3FF] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00A3FF]" />
        </span>
        <Zap className="h-3.5 w-3.5 text-[#00A3FF]" />
        <span>
          Limited Slots —{" "}
          <span className="font-semibold text-[#00A3FF]">
            Only 3 spots left this month
          </span>
        </span>
      </div>
    </motion.div>
  );
}
