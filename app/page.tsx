import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <Services preview />
      <Portfolio />
      <Process />
      <Reviews />
      <CTA />
    </SiteLayout>
  );
}
