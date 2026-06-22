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
  title: "Zeplion | The All-In-One Technology Partner",
  description:
    "The All-In-One Technology Partner For Businesses Worldwide. AI automation, SaaS development, custom software, and voice agents by Zeplion.",
  keywords: [
    "AI automation",
    "voice agents",
    "VAPI",
    "n8n",
    "SaaS development",
    "workflow automation",
    "Zeplion",
    "technology partner",
  ],
  openGraph: {
    title: "Zeplion | The All-In-One Technology Partner",
    description:
      "From AI automation to SaaS development and custom software — we build the systems that power your business growth.",
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
