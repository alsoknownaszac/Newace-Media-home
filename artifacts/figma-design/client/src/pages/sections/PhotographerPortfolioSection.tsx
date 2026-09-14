import { Card, CardContent } from "@/components/ui/card";

const testimonial = {
  couple: "Susan & John",
  quote:
    '"Geoff exceeded every expectation with artistry, warmth, planning expertise, and breathtaking photos that left us, friends, and family completely amazed." Geoff exceeded every expectation with artistry, warmth, planning expertise, and breathtaking photos that left us, friends, and family completely amazed."',
  image: "/figmaAssets/rectangle-1-4.webp",
  navigation: "/figmaAssets/frame-28.svg",
  decoration: "/figmaAssets/frame-29.svg",
};

export const PhotographerPortfolioSection = (): JSX.Element => {
  return (
    <section
      id="wedding-stories"
      aria-labelledby="couples-testimonial-heading"
      className="flex w-full flex-col items-center gap-3 overflow-hidden bg-primary-systemivory px-2.5 py-3 md:gap-[58px] md:p-[100px]"
    >
      <h2
        id="couples-testimonial-heading"
        className="[font-family:'Cormorant_Garamond',Helvetica] text-center text-sm font-normal leading-none text-primary-systemcoal md:mt-[-1px] md:text-5xl md:leading-[48px] md:whitespace-nowrap"
      >
        <span className="text-[#171615]">How our </span>
        <em className="text-[#77736d]">couples</em>
        <span className="italic text-[#171615]">&nbsp;</span>
        <span className="text-[#171615]">felt!</span>
      </h2>
      <div className="grid h-[76px] w-full grid-cols-1 grid-rows-1 md:h-[600px]">
        <Card className="col-start-1 row-start-1 z-10 ml-[60px] h-[76px] self-center rounded-none border-0 bg-white shadow-none md:ml-[306px] md:h-[600px]">
          <CardContent className="flex h-full items-center p-0 md:justify-center">
            <article className="ml-3 flex w-[calc(100%-12px)] flex-col items-start gap-1.5 md:ml-[79px] md:h-[236px] md:w-[631px] md:gap-9">
              <h3 className="font-web-display-l2 text-[8px] font-[number:var(--web-display-l2-font-weight)] italic leading-none tracking-[var(--web-display-l2-letter-spacing)] text-primary-systemcoal md:mt-[-1px] md:text-[length:var(--web-display-l2-font-size)] md:leading-[var(--web-display-l2-line-height)]">
                {testimonial.couple}
              </h3>
              <p className="line-clamp-4 font-web-body-l text-[5px] font-[number:var(--web-body-l-font-weight)] leading-[1.35] tracking-[var(--web-body-l-letter-spacing)] text-primary-systemcoal md:line-clamp-none md:text-[length:var(--web-body-l-font-size)] md:leading-[var(--web-body-l-line-height)]">
                {testimonial.quote}
              </p>
            </article>
          </CardContent>
        </Card>
        <div
          aria-hidden="true"
          className="relative col-start-1 row-start-1 z-20 h-[60px] w-[60px] self-center overflow-hidden md:mt-[100px] md:h-[400px] md:w-[400px] md:self-start"
        >
          <img
            className="h-full w-full object-cover"
            src={testimonial.image}
            srcSet={`${testimonial.image.replace(".webp", "-960.webp")} 960w, ${testimonial.image} 1920w`}
            sizes="(max-width: 768px) 60px, 400px"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[#00000033]" />
        </div>
        <img
          className="pointer-events-none col-start-1 row-start-1 z-30 h-auto w-[calc(100%+8px)] max-w-none self-center justify-self-center md:w-[1350px]"
          alt="Frame"
          src={testimonial.navigation}
        />
      </div>
      <img
        className="h-auto w-auto max-w-full"
        alt="Frame"
        src={testimonial.decoration}
      />
    </section>
  );
};
