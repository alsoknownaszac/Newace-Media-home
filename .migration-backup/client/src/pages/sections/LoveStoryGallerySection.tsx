import { Button } from "@/components/ui/button";

const galleryRows = [
  [
    "/figmaAssets/rectangle-1.png",
    "/figmaAssets/rectangle-2.png",
    "/figmaAssets/rectangle-3.png",
    "/figmaAssets/rectangle-4.png",
  ],
  [
    "/figmaAssets/rectangle-1-1.png",
    "/figmaAssets/rectangle-3-1.png",
    "/figmaAssets/rectangle-4-1.png",
  ],
  ["/figmaAssets/rectangle-1-2.png", "/figmaAssets/rectangle-4-2.png"],
  [
    "/figmaAssets/rectangle-1-3.png",
    "/figmaAssets/rectangle-2-1.png",
    "/figmaAssets/rectangle-3-2.png",
    "/figmaAssets/rectangle-4-3.png",
  ],
];

export const LoveStoryGallerySection = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center gap-12 bg-primary-systembeige px-6 py-16 sm:px-10 lg:px-[100px] lg:py-[100px]">
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
                alt=""
                aria-hidden="true"
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
            className="h-11 rounded-none bg-primary-systemcoal px-8 py-4 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory hover:bg-primary-systemcoal/90 [font-style:var(--web-label-s-font-style)]"
          >
            START A CONVERSATION
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="h-11 rounded-none px-0 py-3 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal hover:bg-transparent hover:text-primary-systemcoal [font-style:var(--web-label-s-font-style)]"
          >
            VIEW PORTFOLIO →
          </Button>
        </div>
      </footer>
    </section>
  );
};
