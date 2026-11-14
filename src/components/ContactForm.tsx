"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type Props = { services: string[]; budgets: string[]; methods: string[]; defaultService?: string };
type Status = "idle" | "submitting" | "success" | "error";

const field = "mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-ink shadow-sm transition placeholder:text-slate-400 focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/15 aria-[invalid=true]:border-red-500";

export function ContactForm({ services, budgets, methods, defaultService = "" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const startedAt = useRef(Date.now());
  const locked = useRef(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (locked.current) return; // prevent duplicate submissions
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    const local: Record<string, string> = {};
    if (String(payload.name || "").trim().length < 2) local.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(payload.email || "").trim())) local.email = "Please enter a valid business email.";
    if (!payload.service) local.service = "Please select a service.";
    if (String(payload.message || "").trim().length < 10) local.message = "Please describe your requirements (at least 10 characters).";
    setErrors(local);
    if (Object.keys(local).length) {
      setStatus("idle");
      setMessage("");
      (form.querySelector('[aria-invalid="true"]') as HTMLElement | null)?.focus();
      return;
    }

    locked.current = true;
    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, startedAt: startedAt.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("success");
        form.reset();
        return; // stays locked after success
      }
      if (data.errors) setErrors(data.errors);
      setStatus("error");
      setMessage(data.message || "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
    locked.current = false;
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto text-emerald-600" size={48} aria-hidden />
        <p className="mt-4 text-lg font-medium leading-relaxed text-emerald-900">
          Thank you for contacting SmartGrowApp! Your enquiry has been received successfully. Our team will review
          your requirements and get in touch with you shortly.
        </p>
      </div>
    );
  }

  const err = (k: string) => errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-red-600">{errors[k]}</p>;
  const a11y = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-busy={status === "submitting"}>
      {/* Honeypot: hidden from people, visible to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-navy">Full Name <span className="text-red-500">*</span></label>
          <input id="name" name="name" autoComplete="name" maxLength={100} className={field} {...a11y("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy">Business Email <span className="text-red-500">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={150} className={field} {...a11y("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-navy">Mobile Number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={20} className={field} {...a11y("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-semibold text-navy">Company Name</label>
          <input id="company" name="company" autoComplete="organization" maxLength={120} className={field} />
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-semibold text-navy">Service Interested In <span className="text-red-500">*</span></label>
          <select id="service" name="service" defaultValue={defaultService} className={field} {...a11y("service")}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {err("service")}
        </div>
        <div>
          <label htmlFor="budget" className="text-sm font-semibold text-navy">Project Budget</label>
          <select id="budget" name="budget" defaultValue="" className={field}>
            <option value="">Select a range (optional)</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy">Project Description / Requirements <span className="text-red-500">*</span></label>
        <textarea id="message" name="message" rows={6} maxLength={4000} className={field} placeholder="Tell us about your business, the problem you want to solve, and any timelines." {...a11y("message")} />
        {err("message")}
      </div>

      <div>
        <label htmlFor="contactMethod" className="text-sm font-semibold text-navy">Preferred Contact Method</label>
        <select id="contactMethod" name="contactMethod" defaultValue="" className={field}>
          <option value="">No preference</option>
          {methods.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      {status === "error" && message && (
        <div role="alert" className="flex gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden /> {message}
        </div>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {status === "submitting" ? <><Loader2 size={18} className="animate-spin" aria-hidden /> Sending…</> : "Submit Enquiry"}
      </button>
    </form>
  );
}
