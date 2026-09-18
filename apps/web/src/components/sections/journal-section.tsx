import Image from "next/image";
import Link from "next/link";

import { JournalCards } from "@/components/sections/journal-cards";
import { Button } from "@/components/ui/button";
import { journalIntro } from "@/content/journal";

/**
 * "Behind the Lens" heading. Rendered as an h2 on the home page and as the page
 * h1 on /behind-the-scenes, so the outline stays correct in both places.
 */
export function JournalHeading({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <Heading className="font-['Cormorant_Garamond',Helvetica] text-center text-[44px] font-normal leading-[1] tracking-[0] text-primary-systemcoal sm:text-[64px] sm:leading-[64px]">
      {journalIntro.heading.lead}
      <em className="text-[#77736d]">{journalIntro.heading.emphasis}</em>
      {journalIntro.heading.tail}
    </Heading>
  );
}

/**
 * Home page teaser: heading, the down arrow, the two cards and the link through
 * to /behind-the-scenes. The cards themselves live in journal-cards.tsx so the
 * page can reuse them with the click-to-overlay behaviour.
 */
export function JournalSection() {
  return (
    <section id="behind-the-scenes" className="w-full scroll-mt-24">
      <header className="flex flex-col items-center justify-center gap-7 bg-primary-systemivory px-6 pb-12 pt-[100px] sm:px-[100px]">
        <JournalHeading />
        <Image
          src="/icons/akar-icons-arrow-down.svg"
          alt=""
          aria-hidden="true"
          width={24}
          height={24}
          unoptimized
          className="h-6 w-6"
        />
      </header>
      <div className="flex flex-col items-center justify-center gap-11 bg-primary-systembeige p-6 sm:p-[100px]">
        <JournalCards />
        <Button
          asChild
          className="h-auto rounded-none bg-primary-systemcoal px-8 py-4 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory transition-colors hover:bg-primary-systemcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [font-style:var(--web-label-s-font-style)]"
        >
          <Link href="/behind-the-scenes">READ THE JOURNAL</Link>
        </Button>
      </div>
    </section>
  );
}
