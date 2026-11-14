import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand, PageHero } from "@/components/ui";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom software, website, web and mobile application development, ERP and CRM, business automation, Power BI analytics, reporting and AI solutions from SmartGrowApp.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Software Services Built Around Your Business" text="From websites to enterprise systems, automation and AI: customized solutions designed to scale." />
      <div className="container-x space-y-8 py-16 sm:py-24">
        {SERVICES.map(({ slug, title, icon: Icon, summary, items }, i) => (
          <section key={slug} id={slug} aria-labelledby={`${slug}-h`}
            className={`grid gap-8 rounded-3xl border border-slate-200/80 p-6 shadow-card sm:p-10 lg:grid-cols-5 ${i % 2 ? "bg-mist" : "bg-white"}`}>
            <div className="lg:col-span-2">
              <span className="icon-box !h-14 !w-14"><Icon size={26} aria-hidden /></span>
              <p className="mt-5 text-sm font-semibold text-royal">Service {String(i + 1).padStart(2, "0")}</p>
              <h2 id={`${slug}-h`} className="mt-1 font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{title}</h2>
              <p className="mt-3 text-slate-600">{summary}</p>
              <Link href={`/contact?service=${encodeURIComponent(title)}`} className="btn-primary mt-6">Discuss Your Requirement <ArrowRight size={18} aria-hidden /></Link>
            </div>
            <ul className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-3">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 font-medium text-navy">
                  <Check size={18} className="mt-0.5 shrink-0 text-cyan" aria-hidden />{it}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
