import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { BUDGETS, CONTACT_METHODS, SERVICE_OPTIONS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact SmartGrowApp in Manapakkam, Chennai to discuss your software, web, mobile, automation or analytics project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage({ searchParams }: { searchParams: { service?: string } }) {
  const requested = typeof searchParams.service === "string" ? searchParams.service : "";
  const defaultService = SERVICE_OPTIONS.includes(requested) ? requested : "";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's Discuss Your Project" text="Share your requirements and our team will review them and get in touch with you shortly." />
      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card sm:p-10 lg:col-span-3">
            <h2 className="font-display text-2xl font-extrabold text-navy">Send an Enquiry</h2>
            <p className="mt-2 mb-8 text-slate-600">Fields marked <span className="text-red-500">*</span> are required.</p>
            <ContactForm services={SERVICE_OPTIONS} budgets={BUDGETS} methods={CONTACT_METHODS} defaultService={defaultService} />
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl bg-navy p-8 text-white">
              <h2 className="font-display text-2xl font-bold">SmartGrowApp</h2>
              <address className="mt-6 space-y-5 not-italic">
                <p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-cyan" size={20} aria-hidden />
                  <span className="text-slate-200">{SITE.address.lines.map((l) => <span key={l} className="block">{l}</span>)}</span></p>
                {SITE.email && (
                  <p className="flex gap-3"><Mail className="shrink-0 text-cyan" size={20} aria-hidden />
                    <a href={`mailto:${SITE.email}`} className="text-slate-200 hover:text-cyan">{SITE.email}</a></p>
                )}
                <p className="flex gap-3"><Clock className="shrink-0 text-cyan" size={20} aria-hidden />
                  <span className="text-slate-200">We typically respond to enquiries promptly.</span></p>
              </address>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-card">
              <iframe title="SmartGrowApp location on Google Maps" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full border-0" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
