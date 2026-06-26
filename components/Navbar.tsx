"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/5 bg-[#060D1A]/90 backdrop-blur-md">
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <Link href="/" className="shrink-0">
          <img
            src="/logo.png"
            alt="Zeplion"
            style={{
              height: "40px",
              width: "auto",
              objectFit: "contain",
              display: "block",
              maxWidth: "160px",
            }}
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex lg:gap-8">
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

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
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
            className="h-8 shrink-0 bg-[#00A3FF] px-2.5 text-xs text-white hover:bg-[#00A3FF]/90 sm:px-3 sm:text-sm"
          >
            <Link href="/contact" data-track="cta-navbar">
              {SITE.ctaPrimary}
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-white/70 hover:bg-white/10 hover:text-white lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-16 z-50 border-t border-white/5 bg-[#060D1A]/98 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-4 sm:px-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white",
                        isActive(link.href) ? "text-[#00A3FF]" : "text-white/60"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Button
                  asChild
                  size="sm"
                  className="mt-2 h-10 w-full bg-[#00A3FF] text-white hover:bg-[#00A3FF]/90"
                >
                  <Link
                    href="/contact"
                    data-track="cta-navbar-mobile"
                    onClick={() => setMobileOpen(false)}
                  >
                    {SITE.ctaPrimary}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
