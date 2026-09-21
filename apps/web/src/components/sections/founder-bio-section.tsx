import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { founderBio } from "@/content/founder";

/**
 * Founder bio ("Behind the lens").
 *
 * FIX vs. the Figma implementation: the mobile breakpoint rendered this copy at
 * 6px-13px. Every size now has a 12px floor; the lg composition is unchanged.
 * FIX: the CTA button was shrink-to-fit on mobile; the design shows it full-width,
 * edge-to-edge with the photo above it. Kept auto-width from sm: up, unchanged.
 */
export function FounderBioSection() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="lg:flex w-full scroll-mt-24 items-start justify-center gap-3 bg-primary-systemivory p-3 sm:gap-6 sm:p-6 lg:gap-[58px] lg:p-[100px]"
    >
      <Image
        src={founderBio.portrait.src}
        alt="Newace Media photographer at work"
        width={founderBio.portrait.width}
        height={founderBio.portrait.height}
        sizes="(max-width: 1024px) 38vw, 432px"
        className="w-[100%] h-[420px] sm:h-[620px] md:h-[720px] lg:h-[unset] lg:h-full self-stretch object-cover object-top lg:object-center lg:w-[432px]"
      />

      <article className="flex min-w-0 flex-1 flex-col items-start justify-center gap-3 sm:gap-5 lg:w-[604px] lg:flex-none lg:gap-7 mt-5 lg:mt-0">
        <header className="flex w-full flex-col items-start gap-2">
          <p className="font-web-label-s text-xs font-[number:var(--web-label-s-font-weight)] uppercase leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal [font-style:var(--web-label-s-font-style)] lg:text-[length:var(--web-label-s-font-size)]">
            {founderBio.eyebrow}
          </p>
          <div className="flex flex-col items-start gap-1">
            <h2
              id="founder-heading"
              className="font-web-display-XXL text-3xl font-normal leading-[1.05] tracking-[-0.36px] text-primary-systemmid-gray sm:text-4xl lg:text-7xl lg:leading-[79.2px] lg:tracking-[-0.72px]"
            >
              {founderBio.name}
            </h2>
            <p className="font-web-body-s text-xs font-[number:var(--web-body-s-font-weight)] leading-[var(--web-body-s-line-height)] tracking-[var(--web-body-s-letter-spacing)] text-primary-systemwarm-gray [font-style:var(--web-body-s-font-style)] lg:w-[552px] lg:text-[length:var(--web-body-s-font-size)]">
              {founderBio.credentials}
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-2 font-web-body-s text-sm font-[number:var(--web-body-s-font-weight)] leading-[var(--web-body-s-line-height)] tracking-[var(--web-body-s-letter-spacing)] text-primary-systemcoal sm:gap-3 sm:text-sm lg:gap-2 lg:text-[length:var(--web-body-s-font-size)] [font-style:var(--web-body-s-font-style)]">
          {founderBio.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {founderBio.closing.lead}
            <strong className="font-semibold">
              {founderBio.closing.emphasis}
            </strong>
          </p>
        </div>

        <Button
          asChild
          className="h-auto w-full rounded-none bg-primary-systemcoal px-5 py-2 font-web-label-s text-xs font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory transition-colors hover:bg-primary-systemcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto sm:px-8 sm:py-3 lg:h-11 lg:px-8 lg:py-4 lg:text-[length:var(--web-label-s-font-size)] [font-style:var(--web-label-s-font-style)]"
        >
          <Link href="/about">{founderBio.cta}</Link>
        </Button>
      </article>
    </section>
  );
}
