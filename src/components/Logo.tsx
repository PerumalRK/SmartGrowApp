import Image from "next/image";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image src="/logo.png" alt="" width={267} height={253} priority className={`${className} object-contain`} />
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className={light ? "rounded-xl bg-white p-1" : ""}>
        <LogoMark />
      </span>
      <span className={`font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        Smart<span className="text-cyan">Grow</span>App
      </span>
    </span>
  );
}
