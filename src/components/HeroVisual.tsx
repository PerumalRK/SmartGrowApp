import { BarChart3, Boxes, Cloud, Cpu, Database, Smartphone } from "lucide-react";

/** Illustrative composition: connected applications around a central platform. */
export function HeroVisual() {
  const nodes = [
    { Icon: Smartphone, label: "Mobile", cls: "left-[4%] top-[10%]", delay: "0s" },
    { Icon: Database, label: "Data", cls: "right-[2%] top-[18%]", delay: "1s" },
    { Icon: BarChart3, label: "Analytics", cls: "left-[0%] bottom-[16%]", delay: "2s" },
    { Icon: Cpu, label: "AI", cls: "right-[6%] bottom-[8%]", delay: "3s" },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" role="img"
      aria-label="Illustration of connected web, mobile, data, analytics and AI applications around a central platform">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="hv" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2563EB" /><stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="none" stroke="url(#hv)" strokeOpacity=".35" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="url(#hv)" strokeOpacity=".25" />
        {[[60, 80], [345, 110], [40, 310], [350, 345]].map(([x, y]) => (
          <line key={`${x}${y}`} x1="200" y1="200" x2={x} y2={y} stroke="url(#hv)" strokeOpacity=".4" strokeWidth="1.5" />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2 animate-float rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
        <div className="mb-3 flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-red-400" /><span className="h-2 w-2 rounded-full bg-amber-300" /><span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <div className="flex items-center gap-2 text-white"><Boxes size={20} className="text-cyan" aria-hidden /><span className="text-sm font-semibold">Your Platform</span></div>
        <div className="mt-3 flex h-14 items-end gap-1.5" aria-hidden>
          {[40, 65, 50, 80, 62, 95].map((h, i) => (
            <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-royal to-cyan" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-3 space-y-1.5" aria-hidden>
          <span className="block h-1.5 w-full rounded bg-white/25" /><span className="block h-1.5 w-2/3 rounded bg-white/15" />
        </div>
      </div>

      {nodes.map(({ Icon, label, cls, delay }) => (
        <div key={label} style={{ animationDelay: delay }}
          className={`absolute ${cls} flex animate-float items-center gap-2 rounded-xl border border-white/20 bg-white/95 px-3 py-2 shadow-lift`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-royal to-cyan text-white"><Icon size={16} aria-hidden /></span>
          <span className="text-xs font-semibold text-navy">{label}</span>
        </div>
      ))}
      <div className="absolute bottom-[2%] left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] text-slate-300 backdrop-blur">
        <Cloud size={12} aria-hidden /> Conceptual illustration
      </div>
    </div>
  );
}
