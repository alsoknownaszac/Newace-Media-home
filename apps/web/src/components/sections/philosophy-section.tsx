import Image from "next/image";

import { philosophy } from "@/content/home";

export function PhilosophySection() {
  return (
    <section
      className="flex w-full flex-col items-center gap-10 bg-primary-systemmid-gray px-6 py-16 sm:px-10 md:px-[100px] md:py-[120px]"
      aria-labelledby="wedding-philosophy-heading"
    >
      <p
        id="wedding-philosophy-heading"
        className="font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] uppercase leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory [font-style:var(--web-label-s-font-style)]"
      >
        {philosophy.eyebrow}
      </p>
      <blockquote className="max-w-[900px] text-center font-web-display-l2 text-[32px] font-[number:var(--web-display-l2-font-weight)] leading-[var(--web-display-l2-line-height)] tracking-[var(--web-display-l2-letter-spacing)] text-white [font-style:var(--web-display-l2-font-style)] md:text-[length:var(--web-display-l2-font-size)]">
        &ldquo;{philosophy.quote}&rdquo;
      </blockquote>
      <footer className="flex items-center gap-3">
        <Image
          src={philosophy.divider}
          alt=""
          aria-hidden="true"
          width={40}
          height={1}
          unoptimized
          className="h-px w-10"
        />
        <cite className="font-['Inter',Helvetica] text-sm font-semibold not-italic leading-[19.6px] text-primary-systemivory">
          {philosophy.attribution}
        </cite>
      </footer>
    </section>
  );
}
