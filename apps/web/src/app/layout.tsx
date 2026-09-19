import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Toaster } from "@/components/ui/toaster";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

/**
 * Fonts are self-hosted by next/font, which removes the render-blocking
 * 35-family Google Fonts request the Vite implementation used to make and
 * eliminates the flash of unstyled text. The CSS variables are consumed by the
 * Figma token layer in globals.css (--font-display-stack and friends).
 */
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-next-display",
});

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-next-body",
});

const label = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-next-label",
});

/**
 * The public origin is resolved through src/lib/site-url.ts (never throws).
 * Override it per environment with NEXT_PUBLIC_SITE_URL.
 */
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Premium Wedding Photography in Warri, Delta State`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "wedding photographer Nigeria",
    "Warri wedding photographer",
    "Delta State wedding photography",
    "editorial wedding photography",
    "Newace Media",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} | Premium Wedding Photography`,
    description: site.description,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Premium Wedding Photography`,
    description: site.description,
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f2ec",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${label.variable}`}
    >
      <body className="flex min-h-dvh flex-col bg-primary-systemivory text-primary-systemcoal">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary-systemcoal focus:px-4 focus:py-2 focus:font-web-label-s focus:text-xs focus:text-primary-systemivory"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex w-full flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
