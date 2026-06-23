import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactPageContent } from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Zeplion for a free AI audit or discovery call. AI automation, SaaS, and software development for businesses worldwide.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteLayout>
      <ContactPageContent />
    </SiteLayout>
  );
}
