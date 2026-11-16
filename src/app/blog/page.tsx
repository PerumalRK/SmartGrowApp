import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { CtaBand, PageHero } from "@/components/ui";
import { POSTS, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical articles on custom software, ERP and CRM, business automation, Power BI and data analytics from SmartGrowApp.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero eyebrow="Blog" title="Insights on Software, Automation and Data" text="Practical guidance to help you plan, build and grow with the right technology." />
      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.slug} className="card flex flex-col">
              <span className="w-fit rounded-full bg-mist px-3 py-1 text-xs font-semibold uppercase tracking-wider text-royal">{p.category}</span>
              <h2 className="mt-4 font-display text-xl font-bold text-navy">
                <Link href={`/blog/${p.slug}`} className="hover:text-royal">{p.title}</Link>
              </h2>
              <p className="mt-2 flex-1 text-slate-600">{p.description}</p>
              <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                <span className="inline-flex items-center gap-1.5"><Clock size={14} aria-hidden /> {p.readMinutes} min read · <time dateTime={p.date}>{formatDate(p.date)}</time></span>
                <Link href={`/blog/${p.slug}`} className="inline-flex items-center gap-1 font-semibold text-royal" aria-label={`Read ${p.title}`}>Read <ArrowRight size={14} aria-hidden /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Have a Question About Your Project?" button="Talk to Us" />
    </>
  );
}
