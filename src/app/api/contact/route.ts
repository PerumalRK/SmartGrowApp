import { NextResponse } from "next/server";
import { mailConfigured, sendMail } from "@/lib/mail";
import { buildEmail, fingerprint, forgetFingerprint, isDuplicate, rateLimited, validateEnquiry } from "@/lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const json = (body: object, status = 200) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  if (rateLimited(ip)) {
    return json({ ok: false, message: "Too many submissions. Please try again in a few minutes." }, 429);
  }

  // Basic same-origin check
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return json({ ok: false, message: "Invalid request." }, 403);
  }

  let body: Record<string, unknown>;
  try {
    const raw = await req.text();
    if (raw.length > 20_000) return json({ ok: false, message: "Request too large." }, 413);
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, message: "Invalid request." }, 400);
  }

  // Honeypot + minimum fill time: pretend success to bots
  const tooFast = typeof body.startedAt === "number" && Date.now() - body.startedAt < 3000;
  if ((typeof body.website === "string" && body.website !== "") || tooFast) {
    return json({ ok: true });
  }

  const result = validateEnquiry(body);
  if (!result.data) {
    return json({ ok: false, message: "Please correct the highlighted fields.", errors: result.errors }, 422);
  }
  const data = result.data;

  const fp = fingerprint(data);
  if (isDuplicate(fp)) {
    return json({ ok: false, message: "This enquiry was already submitted. We will be in touch shortly." }, 409);
  }

  const to = process.env.CONTACT_TO_EMAIL || "";
  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "long" });

  // Always preserve the enquiry in server logs (Vercel Runtime Logs) in case delivery fails.
  const preserve = (reason: string) =>
    console.error("[contact] ENQUIRY NOT EMAILED:", reason, JSON.stringify({ submittedAt, ...data }));

  if (!mailConfigured()) {
    preserve("missing email configuration");
    forgetFingerprint(fp);
    return json({ ok: false, message: "Our enquiry service is temporarily unavailable. Please try again later." }, 503);
  }

  try {
    const { html, text } = buildEmail(data, submittedAt);
    await sendMail({
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      replyTo: data.email,
      subject: `New Enquiry: ${data.service} – ${data.name}`,
      html,
      text,
    });
    return json({ ok: true });
  } catch (err) {
    preserve(err instanceof Error ? err.message : "unknown error");
    forgetFingerprint(fp);
    return json({ ok: false, message: "We could not send your enquiry right now. Please try again shortly." }, 502);
  }
}
