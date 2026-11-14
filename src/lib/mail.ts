import nodemailer from "nodemailer";
import { Resend } from "resend";

type Mail = { to: string[]; replyTo: string; subject: string; html: string; text: string };

/** True when at least one email provider is configured. */
export function mailConfigured() {
  const to = !!process.env.CONTACT_TO_EMAIL;
  const smtp = !!(process.env.SMTP_USER && process.env.SMTP_PASS);
  const resend = !!(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL);
  return to && (smtp || resend);
}

/**
 * Sends via Gmail SMTP when SMTP_USER/SMTP_PASS are set (mail is sent FROM that Gmail account),
 * otherwise falls back to Resend.
 */
export async function sendMail(m: Mail) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (user && pass) {
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: { user, pass },
    });
    await transport.sendMail({ from: `SmartGrowApp <${user}>`, ...m });
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({ from: process.env.CONTACT_FROM_EMAIL as string, ...m });
  if (error) throw new Error(error.message);
}
