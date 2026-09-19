import Link from "next/link";

import { PortfolioGallery } from "@/components/sections/portfolio-gallery";
import { Button } from "@/components/ui/button";
import { portfolioIntro } from "@/content/portfolio";

const primaryActionClassName =
  "w-full h-11 rounded-none bg-primary-systemcoal px-8 py-4 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory transition-colors hover:bg-primary-systemcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [font-style:var(--web-label-s-font-style)]";

const secondaryActionClassName =
  "h-11 rounded-none px-0 py-3 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal transition-colors hover:bg-transparent hover:text-primary-systemwarm-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [font-style:var(--web-label-s-font-style)]";

/**
 * Home page portfolio preview: the Figma gallery grid, its caption and the two
 * calls to action. The "VIEW PORTFOLIO" action used to scroll back to this very
 * section; it now opens the full /portfolio page.
 */
export function PortfolioPreviewSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-preview-heading"
      className="flex w-full scroll-mt-24 flex-col items-center gap-12 bg-primary-systembeige px-6 py-16 sm:px-10 lg:px-[100px] lg:py-[100px]"
    >
      <header className="flex flex-col items-center gap-5 text-center">
        <p className="font-['Inter',Helvetica] text-sm font-semibold uppercase leading-[19.6px] text-primary-systemmid-gray">
          {portfolioIntro.eyebrow}
        </p>
        <h2
          id="portfolio-preview-heading"
          className="w-full max-w-[590px] font-['Cormorant_Garamond',Helvetica] text-[48px] font-normal leading-[0.95] tracking-[0] text-[#171615] sm:text-[56px] lg:text-[64px] lg:leading-[64px]"
        >
          {portfolioIntro.heading.lead}
          <em className="text-[#77736d]">{portfolioIntro.heading.emphasis}</em>
          {portfolioIntro.heading.tail}
        </h2>
      </header>

      <PortfolioGallery priorityFirstRow />

      <footer className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-[713px] font-web-heading-h2 text-[length:var(--web-heading-h2-font-size)] font-[number:var(--web-heading-h2-font-weight)] leading-[var(--web-heading-h2-line-height)] tracking-[var(--web-heading-h2-letter-spacing)] text-primary-systemcoal [font-style:var(--web-heading-h2-font-style)]">
          {portfolioIntro.summary}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          {/* <Button asChild variant="ghost" className={primaryActionClassName}>
            <Link href="/contact">START A CONVERSATION</Link>
          </Button> */}
          <Button asChild variant="ghost" className={primaryActionClassName}>
            <Link href="/portfolio">VIEW PORTFOLIO →</Link>
          </Button>
        </div>
      </footer>
    </section>
  );
}
