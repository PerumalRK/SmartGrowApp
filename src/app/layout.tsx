import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const viewport: Viewport = { themeColor: "#101B3F", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "SmartGrowApp | Custom Software Development Company",
    template: "%s | SmartGrowApp",
  },
  description: SITE.description,
  keywords: ["Software Development Company","Custom Software Development", "Web Application Development", "Mobile Application Development", "ERP Software Development", "CRM Development", "Business Automation Solutions", "Power BI and Data Analytics"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", siteName: SITE.name, locale: "en_IN", url: "/",
    title: "SmartGrowApp | Custom Software Development",
    description: SITE.description,
  },
  twitter: { card: "summary_large_image", title: "SmartGrowApp | Custom Software Development", description: SITE.description },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  areaServed: "IN",
  ...(SITE.email ? { email: SITE.email } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
