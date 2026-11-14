# SmartGrowApp Website

Premium corporate website for **SmartGrowApp**, a software development company.
Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide icons and Resend for enquiry emails.

## Features
- Pages: Home, About, Services, Projects, Industries, Contact, Privacy, Terms
- Contact form → `POST /api/contact` → HTML email via Resend
- Server-side validation and sanitization, honeypot, minimum-fill-time check, per-IP rate limiting, duplicate-submission prevention
- If email fails, the user sees an error (never a false success) and the enquiry is written to server logs
- SEO: metadata, canonical URLs, Open Graph/Twitter, sitemap.xml, robots.txt, JSON-LD
- Security headers configured in `next.config.mjs`

## Local development
Requires Node.js 18.18+ (20 LTS recommended).

```bash
npm install
cp .env.example .env.local     # Windows PowerShell: Copy-Item .env.example .env.local
# edit .env.local with your values
npm run dev                     # http://localhost:3000
npm run build && npm start      # production check
```

## Environment variables
| Variable | Required | Purpose |
|---|---|---|
| `CONTACT_TO_EMAIL` | yes | Recipient of enquiries (comma-separate for several) |
| `SMTP_USER` / `SMTP_PASS` | option 1 | Send from a Gmail account; `SMTP_PASS` is a Google App Password |
| `RESEND_API_KEY` / `CONTACT_FROM_EMAIL` | option 2 | Resend (needs a verified domain; cannot send from @gmail.com). Used only if SMTP vars are unset |
| `NEXT_PUBLIC_SITE_URL` | yes (prod) | Public URL, used for canonical/sitemap/OG |
| `NEXT_PUBLIC_CONTACT_EMAIL` | no | Email displayed on the site; hidden if blank |

Never commit `.env*` files (already git-ignored except `.env.example`).

## Push to your GitHub
```bash
git init && git add . && git commit -m "Initial SmartGrowApp website"
git branch -M main
git remote add origin https://github.com/PerumalRK/SmartGrowApp.git
git push -u origin main
```

## Deploy to Vercel
1. Vercel → **Add New Project** → import the GitHub repo (framework auto-detected as Next.js).
2. Add the environment variables above under **Settings → Environment Variables**.
3. Deploy. Every push to `main` redeploys automatically.
4. Add a custom domain under **Settings → Domains**, then verify the same domain in Resend and use it in `CONTACT_FROM_EMAIL`.
5. Submit a test enquiry on `/contact` and confirm the email arrives.

## Notes
- Rate limiting and duplicate detection are in-memory per serverless instance. For stricter protection at scale, move them to a shared store (e.g. Upstash Redis) or add Cloudflare Turnstile.
- Project visuals are conceptual mockups; no customer names or data are shown.
- Privacy Policy and Terms are general templates; have them legally reviewed.
