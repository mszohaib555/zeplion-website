import { UrgencyBanner } from "@/components/UrgencyBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <UrgencyBanner />
      <div className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <Navbar />
      </div>
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
