import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/ui";
import { INDUSTRIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "SmartGrowApp builds custom software for healthcare, retail, enterprise, education, professional services and small and medium businesses.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Industries We Can Serve" text="Our flexible, requirement-driven approach adapts to many business domains." />
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card">
                <span className="icon-box"><Icon size={22} aria-hidden /></span>
                <h2 className="mt-5 text-lg font-bold text-navy">{title}</h2>
                <p className="mt-2 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Don't See Your Industry? We Can Still Help." button="Talk to Us" />
    </>
  );
}
