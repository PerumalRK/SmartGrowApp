import { Check } from "lucide-react";
import type { Project } from "@/lib/site";

export function ProjectCard({ p }: { p: Project }) {
  const Icon = p.icon;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      {/* Illustrative mockup visual */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-navy via-navy-800 to-royal p-5">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative flex h-full flex-col rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur-sm" role="img" aria-label={`Conceptual mockup for ${p.title}`}>
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" /><span className="h-1.5 w-1.5 rounded-full bg-white/40" /><span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="ml-2 h-1.5 w-16 rounded bg-white/20" />
          </div>
          <div className="mt-3 flex flex-1 gap-3" aria-hidden>
            <div className="flex w-1/4 flex-col gap-1.5">{[1, 2, 3, 4].map((i) => <span key={i} className="h-2 rounded bg-white/20" />)}</div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex items-end gap-1.5 h-14">{[45, 70, 55, 85, 60, 92, 75].map((h, i) => <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-royal to-cyan" style={{ height: `${h}%` }} />)}</div>
              <span className="h-2 w-3/4 rounded bg-white/20" />
            </div>
          </div>
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy">Conceptual mockup</span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="icon-box !h-10 !w-10"><Icon size={20} aria-hidden /></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-royal">{p.category}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-navy">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.overview}</p>
        <ul className="mt-4 grid gap-1.5 text-sm text-slate-ink sm:grid-cols-2">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-cyan" aria-hidden />{f}</li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {p.tech.map((t) => <span key={t} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-navy">{t}</span>)}
        </div>
      </div>
    </article>
  );
}
