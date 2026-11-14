import type { Metadata } from "next";
import { Compass, Lightbulb, RefreshCw, ShieldCheck, Users } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { INDUSTRIES, TECH_GROUPS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SmartGrowApp, a custom software development company and long-term technology partner for growing businesses.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { icon: Users, title: "Customer-focused", text: "We start with your business problem, not our technology preferences, and keep communication transparent throughout." },
  { icon: ShieldCheck, title: "Quality first", text: "Performance, security and usability are built into every solution rather than added at the end." },
  { icon: Lightbulb, title: "Innovation", text: "We apply modern tools, including automation, analytics and AI, where they create real business value." },
  { icon: RefreshCw, title: "Continuous improvement", text: "We keep refining our practices and your software so it keeps pace with your business." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A Reliable, Long-Term Technology Partner" text="SmartGrowApp helps businesses turn ideas into scalable, secure and user-friendly digital solutions." />

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy">Who we are</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              SmartGrowApp is a software development and IT solutions company. We specialize in
              customized software built around individual customer requirements, from websites and web applications to
              enterprise systems, business automation and data analytics.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We have extensive experience delivering software for different business domains and requirements, and we
              aim to be the technology partner our customers rely on as their business grows.
            </p>
          </div>
          <div className="rounded-3xl bg-mist p-8">
            <Compass className="text-royal" size={32} aria-hidden />
            <h3 className="mt-4 font-display text-2xl font-bold text-navy">Our development philosophy</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              Every business is different, so every solution should be too. We take time to understand how your
              organization works, design the simplest architecture that will scale with you, and deliver software that
              people genuinely enjoy using: from requirement analysis through deployment and support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Our Approach" title="Quality, Innovation and Continuous Improvement" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card flex gap-5">
                <span className="icon-box shrink-0"><Icon size={22} aria-hidden /></span>
                <div><h3 className="text-lg font-bold text-navy">{title}</h3><p className="mt-1.5 text-slate-600">{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Capabilities" title="Our Technical Capabilities" text="Deep expertise across the Microsoft ecosystem, modern web technologies, data and AI." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TECH_GROUPS.map(({ title, items }) => (
              <div key={title} className="card">
                <h3 className="font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg text-slate-600">
            Our experience spans {INDUSTRIES.slice(0, 4).map((i) => i.title.toLowerCase()).join(", ")} and more, so we bring practical, cross-domain insight to every engagement.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
