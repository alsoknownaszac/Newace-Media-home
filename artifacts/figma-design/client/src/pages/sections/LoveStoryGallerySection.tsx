import { Button } from "@/components/ui/button";

const galleryRows = [
  [
    "/figmaAssets/rectangle-1.webp",
    "/figmaAssets/rectangle-2.webp",
    "/figmaAssets/rectangle-3.webp",
    "/figmaAssets/rectangle-4.webp",
  ],
  [
    "/figmaAssets/rectangle-1-1.webp",
    "/figmaAssets/rectangle-3-1.webp",
    "/figmaAssets/rectangle-4-1.webp",
  ],
  ["/figmaAssets/rectangle-1-2.webp", "/figmaAssets/rectangle-4-2.webp"],
  [
    "/figmaAssets/rectangle-1-3.webp",
    "/figmaAssets/rectangle-2-1.webp",
    "/figmaAssets/rectangle-3-2.webp",
    "/figmaAssets/rectangle-4-3.webp",
  ],
];

export const LoveStoryGallerySection = (): JSX.Element => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="flex w-full flex-col items-center gap-12 bg-primary-systembeige px-6 py-16 sm:px-10 lg:px-[100px] lg:py-[100px]">
      <header className="flex flex-col items-center gap-5 text-center">
        <p className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-primary-systemmid-gray">
          CELEBRATIONS, CAPTURED WITH INTENTION.
        </p>
        <h2 className="w-full max-w-[590px] [font-family:'Cormorant_Garamond',Helvetica] text-[48px] font-normal leading-[0.95] tracking-[0] text-primary-systemcoal sm:text-[56px] lg:text-[64px] lg:leading-[64px]">
          <span className="text-[#171615]">Your </span>
          <em className="text-[#77736d]">love story</em>
          <span className="text-[#171615]">, beautifully framed.</span>
        </h2>
      </header>
      <div
        className="flex w-full flex-col gap-4"
        aria-label="Love story gallery"
      >
        {galleryRows.map((row, rowIndex) => (
          <div
            key={`gallery-row-${rowIndex}`}
            className="flex h-[120px] w-full gap-4 sm:h-[220px] lg:h-[336px]"
          >
            {row.map((src, _imageIndex) => (
              <img
                key={src}
                className="min-w-0 flex-1 object-cover"
                src={src}
                srcSet={`${src.replace(".webp", "-960.webp")} 960w, ${src} 1920w`}
                sizes="(max-width: 640px) 25vw, 33vw"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        ))}
      </div>
      <footer className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-[713px] font-web-heading-h2 text-[length:var(--web-heading-h2-font-size)] font-[number:var(--web-heading-h2-font-weight)] leading-[var(--web-heading-h2-line-height)] tracking-[var(--web-heading-h2-letter-spacing)] text-primary-systemcoal [font-style:var(--web-heading-h2-font-style)]">
          From grand celebrations and sophisticated contemporary ceremonies to
          intimate gatherings where every detail carries meaning.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Button
            type="button"
            onClick={() => scrollToSection("contact")}
            data-testid="button-gallery-contact"
            className="h-11 rounded-none bg-primary-systemcoal px-8 py-4 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory transition-colors hover:bg-primary-systemcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [font-style:var(--web-label-s-font-style)]"
          >
            START A CONVERSATION
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => scrollToSection("portfolio")}
            data-testid="button-gallery-portfolio"
            className="h-11 rounded-none px-0 py-3 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal transition-colors hover:bg-transparent hover:text-primary-systemwarm-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [font-style:var(--web-label-s-font-style)]"
          >
            VIEW PORTFOLIO →
          </Button>
        </div>
      </footer>
    </section>
  );
};
