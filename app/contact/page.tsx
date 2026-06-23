import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactPageContent } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact | Zeplion",
  description:
    "Get in touch with Zeplion. Start your AI automation, SaaS, or software development project today.",
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <ContactPageContent />
    </SiteLayout>
  );
}
