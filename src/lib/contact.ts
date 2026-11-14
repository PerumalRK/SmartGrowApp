import { createHash } from "crypto";

export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  contactMethod: string;
};

const clean = (v: unknown, max: number) =>
  typeof v === "string"
    ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, max)
    : "";

const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
const PHONE_RE = /^[+()\-.\s\d]{7,20}$/;

export function validateEnquiry(body: Record<string, unknown>): { data?: Enquiry; errors?: Record<string, string> } {
  const data: Enquiry = {
    name: clean(body.name, 100),
    email: clean(body.email, 150).toLowerCase(),
    phone: clean(body.phone, 20),
    company: clean(body.company, 120),
    service: clean(body.service, 120),
    budget: clean(body.budget, 60),
    message: clean(body.message, 4000),
    contactMethod: clean(body.contactMethod, 40),
  };
  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid business email.";
  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = "Please enter a valid mobile number.";
  if (!data.service) errors.service = "Please select a service.";
  if (data.message.length < 10) errors.message = "Please describe your requirements (at least 10 characters).";
  return Object.keys(errors).length ? { errors } : { data };
}

export const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export function fingerprint(d: Enquiry) {
  return createHash("sha256").update(`${d.email}|${d.service}|${d.message}`).digest("hex");
}

/* ---- In-memory protections (per server instance). For multi-instance
   production traffic, back these with a shared store such as Upstash Redis. ---- */
const hits = new Map<string, number[]>();
const seen = new Map<string, number>();

export function rateLimited(ip: string, limit = 5, windowMs = 10 * 60_000) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > limit;
}

export function isDuplicate(fp: string, windowMs = 10 * 60_000) {
  const now = Date.now();
  const last = seen.get(fp);
  if (last && now - last < windowMs) return true;
  seen.set(fp, now);
  if (seen.size > 5000) seen.clear();
  return false;
}

export function forgetFingerprint(fp: string) {
  seen.delete(fp);
}

export function buildEmail(d: Enquiry, submittedAt: string) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:10px 14px;background:#F5F7FB;font-weight:600;color:#101B3F;width:190px;border-bottom:1px solid #e5e9f2;vertical-align:top">${label}</td>
     <td style="padding:10px 14px;color:#1E293B;border-bottom:1px solid #e5e9f2">${escapeHtml(value || "—")}</td></tr>`;
  const html = `<!doctype html><html><body style="margin:0;background:#eef2f9;font-family:Segoe UI,Arial,sans-serif">
  <div style="max-width:640px;margin:24px auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 8px 30px rgba(16,27,63,.12)">
    <div style="background:linear-gradient(135deg,#101B3F,#2563EB);padding:26px 28px;color:#fff">
      <div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#67e8f9">SmartGrowApp</div>
      <h1 style="margin:6px 0 0;font-size:22px">New Website Enquiry</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      ${row("Full Name", d.name)}${row("Business Email", d.email)}${row("Mobile Number", d.phone)}
      ${row("Company", d.company)}${row("Service Interested In", d.service)}${row("Project Budget", d.budget)}
      ${row("Preferred Contact", d.contactMethod)}${row("Submitted", submittedAt)}
    </table>
    <div style="padding:20px 28px">
      <div style="font-weight:600;color:#101B3F;margin-bottom:8px">Project Description / Requirements</div>
      <div style="white-space:pre-wrap;line-height:1.6;color:#1E293B;background:#F5F7FB;border-radius:10px;padding:14px">${escapeHtml(d.message)}</div>
    </div>
    <div style="padding:14px 28px 24px;font-size:12px;color:#64748b">Reply directly to this email to respond to the customer.</div>
  </div></body></html>`;
  const text = [
    "New SmartGrowApp website enquiry", "",
    `Name: ${d.name}`, `Email: ${d.email}`, `Mobile: ${d.phone || "-"}`, `Company: ${d.company || "-"}`,
    `Service: ${d.service}`, `Budget: ${d.budget || "-"}`, `Preferred contact: ${d.contactMethod || "-"}`,
    `Submitted: ${submittedAt}`, "", "Requirements:", d.message,
  ].join("\n");
  return { html, text };
}
