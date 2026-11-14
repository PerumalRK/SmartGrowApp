import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroVisual } from "@/components/HeroVisual";
import { CtaBand, SectionHeading } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { PROCESS, PROJECTS, SERVICES, TECH_GROUPS, WHY } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-royal/40 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan/20 blur-3xl" aria-hidden />
        <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-cyan">
              <span className="h-2 w-2 rounded-full bg-cyan" aria-hidden /> Custom Software Development Company
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Turning Your Ideas Into <span className="bg-gradient-to-r from-royal via-cyan to-cyan bg-clip-text text-transparent">Powerful Digital Solutions</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              SmartGrowApp delivers customized software development, web and mobile applications, business automation,
              and data-driven solutions that help businesses grow smarter.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">Let&apos;s Discuss Your Project <ArrowRight size={18} aria-hidden /></Link>
              <Link href="/services" className="btn-secondary">Explore Our Services</Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* About */}
      <section className="py-16 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-royal">About SmartGrowApp</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">Your Technology Partner for Business Growth</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              At SmartGrowApp, we believe every business has unique requirements. We work closely with our customers to
              understand their business challenges and develop customized software solutions that improve efficiency,
              simplify operations, and support business growth.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              With extensive experience across multiple software development domains, we deliver solutions ranging from
              websites and business applications to enterprise systems, automation, and data analytics.
            </p>
            <Link href="/about" className="btn-outline mt-7">Learn more about us <ArrowRight size={16} aria-hidden /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["We understand your business requirements", "Experience across many application types", "Customized, reliable, scalable solutions", "Long-term technology partnership"].map((t, i) => (
              <div key={t} className={`rounded-2xl p-6 ${i % 3 === 0 ? "bg-navy text-white" : "bg-mist text-navy"}`}>
                <span className={`font-display text-3xl font-extrabold ${i % 3 === 0 ? "text-cyan" : "text-royal"}`}>0{i + 1}</span>
                <p className="mt-2 font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose Us" title="Why Choose SmartGrowApp?" text="A partner that combines technical depth with a genuine focus on your business outcomes." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card">
                <span className="icon-box"><Icon size={22} aria-hidden /></span>
                <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="What We Do" title="Our Services" text="End-to-end software and technology services tailored to your needs." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ slug, icon: Icon, title, summary }) => (
              <Link key={slug} href={`/services#${slug}`} className="card group block">
                <span className="icon-box"><Icon size={22} aria-hidden /></span>
                <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-slate-600">{summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal">Learn more <ArrowRight size={14} className="transition group-hover:translate-x-1" aria-hidden /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="container-x relative">
          <SectionHeading light eyebrow="Our Expertise" title="Technology Capabilities We Build With" text="A modern, proven stack that lets us deliver reliable and scalable solutions." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_GROUPS.map(({ title, icon: Icon, items }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan/40 hover:bg-white/10">
                <div className="flex items-center gap-3"><span className="icon-box !h-10 !w-10"><Icon size={20} aria-hidden /></span><h3 className="text-lg font-bold">{title}</h3></div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((t) => <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Project Experience" title="Our Project Experience" text="A snapshot of the kinds of enterprise and business applications we build. Visuals are conceptual mockups." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
          <div className="mt-10 text-center"><Link href="/projects" className="btn-outline">View all projects <ArrowRight size={16} aria-hidden /></Link></div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="How We Work" title="Our Development Process" text="A clear, transparent six-step workflow from first conversation to ongoing support." />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="card relative">
                <span className="absolute right-5 top-4 font-display text-5xl font-extrabold text-slate-100">{i + 1}</span>
                <span className="icon-box relative"><Icon size={22} aria-hidden /></span>
                <h3 className="relative mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="relative mt-2 text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
