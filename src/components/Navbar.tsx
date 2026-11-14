"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${scrolled || open ? "border-slate-200 bg-white/90 backdrop-blur-md" : "border-transparent bg-white/70 backdrop-blur"}`}>
      <div className="container-x flex h-16 items-center justify-between lg:h-20">
        <Link href="/" aria-label="SmartGrowApp home"><Logo /></Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.filter((n) => n.href !== "/contact").map((n) => (
            <Link key={n.href} href={n.href} aria-current={active(n.href) ? "page" : undefined}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${active(n.href) ? "text-royal" : "text-slate-ink hover:text-royal"}`}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary ml-3 !py-2.5">Contact Us</Link>
        </nav>

        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy hover:bg-mist lg:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-x flex flex-col py-3">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} aria-current={active(n.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-3.5 text-base font-medium ${active(n.href) ? "bg-mist text-royal" : "text-slate-ink"}`}>
                {n.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-3">Let&apos;s Discuss Your Project</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
