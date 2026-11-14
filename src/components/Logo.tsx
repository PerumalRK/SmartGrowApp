export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sg-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2563EB" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="#101B3F" />
      <path d="M12 33 L21 24 L27 29 L37 16" fill="none" stroke="url(#sg-g)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 15 H38 V23" fill="none" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className={`font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        Smart<span className="text-cyan">Grow</span>App
      </span>
    </span>
  );
}
