"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NAV_LINKS, SITE, WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.footerDescription}
            </p>
            <p className="mt-2 text-xs text-muted-foreground/80">
              {SITE.honestTagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#00A3FF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#00A3FF]"
                >
                  <Mail className="h-4 w-4" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#00A3FF]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`https://${SITE.website}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-[#00A3FF]"
                >
                  {SITE.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-[#00A3FF]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
