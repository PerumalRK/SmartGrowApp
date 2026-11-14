import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, text, center = true, light = false }: {
  eyebrow?: string; title: string; text?: string; center?: boolean; light?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <p className={`text-sm font-semibold uppercase tracking-[0.14em] ${light ? "text-cyan" : "text-royal"}`}>{eyebrow}</p>}
      <h2 className={`mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-royal/40 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-cyan/20 blur-3xl" aria-hidden />
      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{text}</p>
        {children}
      </div>
    </section>
  );
}

export function CtaBand({ title = "Have a Business Idea? Let's Build It Together.", button = "Start Your Project" }: { title?: string; button?: string }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-800 to-royal px-6 py-14 text-center text-white sm:px-12">
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan/30 blur-3xl" aria-hidden />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-200">Tell us about your requirements and our team will get back to you with the right approach.</p>
            <Link href="/contact" className="btn-light mt-8">{button} <ArrowRight size={18} aria-hidden /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
