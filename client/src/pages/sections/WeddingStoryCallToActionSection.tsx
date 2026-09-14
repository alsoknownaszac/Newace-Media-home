import { Button } from "@/components/ui/button";

export const WeddingStoryCallToActionSection = (): JSX.Element => {
  return (
    <section className="grid h-[700px] w-full overflow-hidden bg-[#f5f2ec]">
      <img
        className="col-start-1 row-start-1 h-full w-full object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-6.png"
      />
      <div className="col-start-1 row-start-1 z-10 flex flex-col items-center justify-center gap-[58px] px-6 text-center">
        <div className="flex flex-col items-center gap-[29px]">
          <h2 className="max-w-[581px] font-web-display-XXL text-[length:var(--web-display-XXL-font-size)] font-[number:var(--web-display-XXL-font-weight)] leading-[var(--web-display-XXL-line-height)] tracking-[var(--web-display-XXL-letter-spacing)] [font-style:var(--web-display-XXL-font-style)]">
            <span className="text-white">Every </span>
            <span className="text-[#a69b8d]">love story</span>
            <span className="text-white"> deserves to be captured</span>
          </h2>
          <p className="max-w-[635px] font-web-heading-h3 text-[length:var(--web-heading-h3-font-size)] font-[number:var(--web-heading-h3-font-weight)] leading-[var(--web-heading-h3-line-height)] tracking-[var(--web-heading-h3-letter-spacing)] text-white [font-style:var(--web-heading-h3-font-style)]">
            Your wedding deserves to be remembered exactly as it felt. We&apos;d
            love to hear your plans and explore how we can tell your story.
          </p>
        </div>
        <Button
          type="button"
          className="h-11 rounded-none bg-primary-systembeige px-8 py-4 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal hover:bg-primary-systembeige/90 [font-style:var(--web-label-s-font-style)]"
        >
          CAPTURE MY MOMENTS
        </Button>
      </div>
    </section>
  );
};
