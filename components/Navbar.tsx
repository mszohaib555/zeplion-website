"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { useTheme } from "@/context/ThemeContext";
import { NAV_LINKS, SITE, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <nav className="relative sticky top-10 z-50 flex h-16 w-full items-center justify-between border-b border-white/5 bg-[#060D1A]/90 px-8 backdrop-blur-md">
      <Link href="/" className="flex shrink-0 items-center">
        <Logo />
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-[#00A3FF]",
              isActive(link.href) ? "text-[#00A3FF]" : "text-white/60"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="size-8 rounded-full text-white/70 hover:bg-white/10 hover:text-white"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>

        <Button
          asChild
          size="sm"
          className="hidden h-8 bg-[#00A3FF] px-3 text-white hover:bg-[#00A3FF]/90 sm:inline-flex"
        >
          <Link href="/contact">{SITE.ctaLabel}</Link>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="size-8 text-white/70 hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 right-0 overflow-hidden border-b border-white/5 bg-[#060D1A]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-8 py-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white",
                    isActive(link.href) ? "text-[#00A3FF]" : "text-white/60"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                size="sm"
                className="mt-1 h-8 bg-[#00A3FF] text-white hover:bg-[#00A3FF]/90"
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  {SITE.ctaLabel}
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
