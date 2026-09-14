const philosophy = {
  label: "OUR PHILOSOPHY",
  quote:
    "A wedding is more than a collection of moments; it is a story unfolding in real time. We pay attention to the people, the atmosphere and the moments in between, knowing that years from now, the photographs should bring you back to how it all felt.",
  attribution: "Newace Media",
};

export const WeddingPhilosophyQuoteSection = (): JSX.Element => {
  return (
    <section
      className="flex w-full flex-col items-center gap-10 bg-primary-systemmid-gray px-6 py-16 sm:px-10 md:px-[100px] md:py-[120px]"
      aria-labelledby="wedding-philosophy-heading"
    >
      <p
        id="wedding-philosophy-heading"
        className="font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory [font-style:var(--web-label-s-font-style)]"
      >
        {philosophy.label}
      </p>
      <blockquote className="max-w-[900px] text-center font-web-display-l2 text-[32px] font-[number:var(--web-display-l2-font-weight)] leading-[var(--web-display-l2-line-height)] tracking-[var(--web-display-l2-letter-spacing)] text-white [font-style:var(--web-display-l2-font-style)] md:text-[length:var(--web-display-l2-font-size)]">
        &quot;{philosophy.quote}&quot;
      </blockquote>
      <footer className="flex items-center gap-3">
        <img
          className="h-px w-10"
          alt=""
          aria-hidden="true"
          src="/figmaAssets/line.svg"
        />
        <cite className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] not-italic text-primary-systemivory">
          {philosophy.attribution}
        </cite>
      </footer>
    </section>
  );
};
