import { UrgencyBanner } from "@/components/UrgencyBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <UrgencyBanner />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
