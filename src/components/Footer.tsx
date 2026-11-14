import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SERVICES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Customized software development, web and mobile applications, business automation and data-driven
            solutions that help businesses grow smarter.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-cyan">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}><Link href={`/services#${s.slug}`} className="hover:text-cyan">{s.title}</Link></li>
            ))}
            <li><Link href="/services" className="text-cyan hover:underline">All services →</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <p className="flex gap-2.5"><MapPin size={18} className="mt-0.5 shrink-0 text-cyan" aria-hidden />
              <span>{SITE.address.lines.map((l) => <span key={l} className="block">{l}</span>)}</span></p>
            {SITE.email ? (
              <p className="flex gap-2.5"><Mail size={18} className="shrink-0 text-cyan" aria-hidden />
                <a href={`mailto:${SITE.email}`} className="hover:text-cyan">{SITE.email}</a></p>
            ) : (
              <p className="flex gap-2.5"><Mail size={18} className="shrink-0 text-cyan" aria-hidden />
                <Link href="/contact" className="hover:text-cyan">Send us an enquiry</Link></p>
            )}
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 SmartGrowApp. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-cyan">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
