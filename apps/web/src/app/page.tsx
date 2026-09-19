import type { Metadata } from "next";

import { ClosingCtaSection } from "@/components/sections/closing-cta-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FounderBioSection } from "@/components/sections/founder-bio-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JournalSection } from "@/components/sections/journal-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { PortfolioPreviewSection } from "@/components/sections/portfolio-preview-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-json-ld";

/**
 * Page 1 of 5 - HOME.
 *
 * Section order follows Figma node 66:152: hero → portfolio gallery →
 * philosophy → "How our couples felt!" → "Behind the lens" → experience →
 * founder bio → "Start a conversation" form → closing CTA.
 */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <HeroSection />
      <PortfolioPreviewSection />
      <PhilosophySection />
      <JournalSection />
      <TestimonialsSection />
      <ExperienceSection />
      <FounderBioSection />
      <ContactSection />
      <ClosingCtaSection />
    </>
  );
}
