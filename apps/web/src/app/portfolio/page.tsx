import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { JournalCards } from "@/components/sections/journal-cards";
import { PortfolioMasonry } from "@/components/sections/portfolio-masonry";

/**
 * PORTFOLIO - page 3 of 5.
 * Rebuilt 1:1 from Figma node 154:917 (desktop) / 344:2014 (mobile).
 *
 * The Figma frame also contains the "Stories" section and the contact form at
 * the bottom; those are the shared page tail and live on their own routes
 * (/wedding-stories and /contact), so this page renders the portfolio-specific
 * content: the 128px "Portfolio" wordmark and the photo grid.
 */
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Engagements, weddings and traditional celebrations - captured with intention.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio",
    description: "Engagements, weddings and traditional celebrations - captured with intention.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex w-full flex-col bg-[#faf7f2]">
      {/* Hero - node 154:917 "Hero Section" (128px) / 344:2014 (70px) */}
      <section className="flex w-full flex-col items-center gap-5 px-5 pb-10 pt-6 lg:gap-6 lg:px-20 lg:pb-16 lg:pt-24">
        <h1 className="text-center font-display text-[70px] font-normal leading-[77px] tracking-[-0.7px] text-primary-systemcoal lg:text-[128px] lg:leading-[140.8px] lg:tracking-[-1.28px]">
          Portfolio
        </h1>
        <p className="text-center font-body text-sm font-normal leading-[21px] text-primary-systemmid-gray lg:text-[18px] lg:leading-[28.8px]">
          ENGAGEMENTS - WEDDINGS - TRADITIONAL
        </p>
      </section>

      {/* Photo grid - node 154:917 "enquire-drawer-section" (40/48px padding) */}
      <section className="w-full px-10 py-12">
        <PortfolioMasonry />
      </section>

      {/* Stories / behind-the-scenes teaser - node 154:917 "Hero Section" + "manifesto-section" */}
      <section className="flex w-full flex-col items-center gap-5 px-5 pb-10 pt-6 lg:gap-6 lg:px-20 lg:pb-16 lg:pt-24">
        <h2 className="text-center font-display text-[70px] font-normal leading-[77px] tracking-[-0.7px] text-primary-systemcoal lg:text-[128px] lg:leading-[140.8px] lg:tracking-[-1.28px]">
          Stories
        </h2>
        <p className="text-center font-body text-sm font-normal leading-[21px] text-primary-systemmid-gray lg:text-[18px] lg:leading-[28.8px]">
          ENGAGEMENTS - WEDDINGS - TRADITIONAL
        </p>
      </section>

      <section className="bg-[#faf7f2] px-6 pb-16 lg:px-[100px] lg:pb-[100px]">
        <div className="mx-auto max-w-[1240px]">
          <JournalCards />
        </div>
      </section>

      {/* "Start a conversation" form - node 154:917 "enquire-drawer-section" */}
      <ContactSection />
    </div>
  );
}
