import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@/components/Analytics";
import { CrispChat } from "@/components/CrispChat";
import { FacebookMessenger } from "@/components/FacebookMessenger";
import MicrosoftClarity from "@/components/MicrosoftClarity"; // 👈 ADD THIS
import { buildMetadata, getJsonLdGraph } from "@/lib/seo";
import "./globals.css";



const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "Zeplion | AI Automation & Software Development",
  description:
    "AI automation and software development company. VAPI voice agents, n8n workflows, SaaS development, and custom software for businesses worldwide.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getJsonLdGraph()),
          }}
        />
        <Analytics />
        <CrispChat />
        <MicrosoftClarity /> {/* 👈 ADD HERE */}
        <ThemeProvider>{children}</ThemeProvider>
        <FacebookMessenger />
      </body>
    </html>
  );
}