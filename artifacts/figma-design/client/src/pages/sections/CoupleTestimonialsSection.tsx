import { Button } from "@/components/ui/button";

const biographyParagraphs = [
  "For over a decade, I've photographed weddings and celebrations across Nigeria and beyond, documenting 500+ weddings along the way.",
  "From traditional weddings in the South-South to contemporary celebrations across Nigeria, that experience has taught me something simple: No two weddings unfold the same way.",
  "I pay attention to the things that happen between the planned moments; the anticipation before the ceremony, the movement of a dress, the people watching from the edges of the room, the laughter between friends and the quiet exchanges that can easily go unnoticed.",
];

export const CoupleTestimonialsSection = (): JSX.Element => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="flex w-full items-start justify-center gap-3 bg-primary-systemivory p-3 sm:gap-6 sm:p-6 lg:gap-[58px] lg:p-[100px]">
      <img
        className="w-[35%] self-stretch object-cover sm:w-[38%] lg:w-[432px]"
        alt="Rectangle"
        src="/figmaAssets/rectangle-1-5.webp"
        srcSet="/figmaAssets/rectangle-1-5-960.webp 960w, /figmaAssets/rectangle-1-5.webp 1920w"
        sizes="(max-width: 1024px) 50vw, 600px"
        loading="lazy"
        decoding="async"
      />
      <article className="flex min-w-0 flex-1 flex-col items-start justify-center gap-3 sm:gap-5 lg:w-[604px] lg:flex-none lg:gap-7">
        <header className="flex w-full flex-col items-start gap-1 sm:gap-2">
          <p className="font-web-label-s text-[7px] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal [font-style:var(--web-label-s-font-style)] sm:text-[10px] lg:text-[length:var(--web-label-s-font-size)]">
            BEHIND THE LENS
          </p>
          <div className="flex flex-col items-start gap-0.5 sm:gap-1">
            <h2 className="font-web-display-XXL text-[13px] font-normal leading-[100%] tracking-[-0.13px] text-primary-systemmid-gray sm:text-3xl sm:tracking-[-0.36px] lg:text-7xl lg:tracking-[-0.72px] lg:leading-[79.2px]">
              Samuel Orieka
            </h2>
            <p className="font-web-body-s text-[7px] font-[number:var(--web-body-s-font-weight)] leading-[var(--web-body-s-line-height)] tracking-[var(--web-body-s-letter-spacing)] text-primary-systemwarm-gray [font-style:var(--web-body-s-font-style)] sm:text-xs lg:w-[552px] lg:text-[length:var(--web-body-s-font-size)]">
              Trusted by 500+ couples across Delta state and Nigeria
            </p>
          </div>
        </header>
        <div className="flex flex-col gap-1.5 font-web-body-s text-[6px] font-[number:var(--web-body-s-font-weight)] leading-[var(--web-body-s-line-height)] tracking-[var(--web-body-s-letter-spacing)] text-primary-systemcoal [font-style:var(--web-body-s-font-style)] sm:gap-3 sm:text-xs lg:gap-0 lg:text-[length:var(--web-body-s-font-size)]">
          {biographyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            My approach is straightforward:{" "}
            <strong className="font-[number:var(--web-body-s-font-weight)]">
              observe, understand and capture
            </strong>
          </p>
        </div>
        <Button
          type="button"
          onClick={() => scrollToSection("portfolio")}
          data-testid="button-about-learn-more"
          className="h-auto rounded-none bg-primary-systemcoal px-3 py-1.5 font-web-label-s text-[6px] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory transition-colors hover:bg-primary-systemcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:px-5 sm:py-2 sm:text-[10px] lg:h-11 lg:px-8 lg:py-4 lg:text-[length:var(--web-label-s-font-size)]"
        >
          LEARN MORE
        </Button>
      </article>
    </section>
  );
};
