import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeplion | AI Automation & Software Development",
  description:
    "We Build AI Systems That Work While You Sleep. AI automation, voice agents, SaaS development, and workflow automation by Zeplion.",
  keywords: [
    "AI automation",
    "voice agents",
    "VAPI",
    "n8n",
    "SaaS development",
    "workflow automation",
    "Zeplion",
  ],
  openGraph: {
    title: "Zeplion | AI Automation & Software Development",
    description:
      "We Build AI Systems That Work While You Sleep. Get your free demo today.",
    url: "https://zeplion.com",
    siteName: "Zeplion",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
