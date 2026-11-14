import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using the SmartGrowApp website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms and Conditions" text="Last updated: 2026. This is a general template; please have it reviewed by a legal professional." />
      <article className="container-x max-w-3xl space-y-6 py-16 leading-relaxed text-slate-700">
        <h2 className="font-display text-2xl font-bold text-navy">Use of this website</h2>
        <p>This website provides general information about SmartGrowApp&apos;s services. By using it you agree to use it lawfully and not to attempt to disrupt its operation or submit false or malicious content.</p>
        <h2 className="font-display text-2xl font-bold text-navy">No offer or guarantee</h2>
        <p>Information on this site, including project examples shown as conceptual mockups, is for illustration and does not constitute a binding offer. Any engagement is subject to a separate written agreement.</p>
        <h2 className="font-display text-2xl font-bold text-navy">Intellectual property</h2>
        <p>Content on this website is the property of SmartGrowApp unless stated otherwise and may not be copied without permission.</p>
        <h2 className="font-display text-2xl font-bold text-navy">Limitation of liability</h2>
        <p>The website is provided &quot;as is&quot;. To the extent permitted by law, SmartGrowApp is not liable for losses arising from its use.</p>
        <h2 className="font-display text-2xl font-bold text-navy">Governing law</h2>
        <p>These terms are governed by the laws of India, with jurisdiction in Chennai, Tamil Nadu.</p>
      </article>
    </>
  );
}
