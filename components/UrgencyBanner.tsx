"use client";

import { motion } from "framer-motion";

export function UrgencyBanner() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-[60] w-full border-b border-[#00A3FF]/20 bg-gradient-to-r from-[#00A3FF]/20 via-[#00A3FF]/10 to-[#00A3FF]/20"
    >
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-center gap-2 px-4 text-center text-sm font-medium text-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00A3FF] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00A3FF]" />
        </span>
        <span>
          🚀 Now serving clients in UK, USA and Middle East —{" "}
          <span className="font-semibold text-[#00A3FF]">
            Limited project slots available
          </span>
        </span>
      </div>
    </motion.div>
  );
}
