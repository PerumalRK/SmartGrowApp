import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SmartGrowApp collects, uses and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" text="Last updated: 2026. This is a general template; please have it reviewed by a legal professional." />
      <article className="container-x max-w-3xl space-y-6 py-16 leading-relaxed text-slate-700">
        <h2 className="font-display text-2xl font-bold text-navy">Information we collect</h2>
        <p>When you submit our enquiry form, we collect the details you provide: your name, business email, optional mobile number and company name, the service you are interested in, budget, preferred contact method and your project description.</p>
        <h2 className="font-display text-2xl font-bold text-navy">How we use it</h2>
        <p>We use this information only to respond to your enquiry and to discuss your requirements. Enquiries are delivered to SmartGrowApp by email. We do not sell your personal information.</p>
        <h2 className="font-display text-2xl font-bold text-navy">Security and retention</h2>
        <p>We use secure, server-side processing and reasonable safeguards. We retain enquiry information only as long as needed to respond and to maintain business records.</p>
        <h2 className="font-display text-2xl font-bold text-navy">Third-party services</h2>
        <p>Enquiry emails are sent using a transactional email provider.</p>
        <h2 className="font-display text-2xl font-bold text-navy">Contact</h2>
        <p>For privacy questions, please use the Contact page.</p>
      </article>
    </>
  );
}
