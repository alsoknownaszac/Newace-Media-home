import { Button } from "@/components/ui/button";

const heroActions = [
  {
    label: "START A CONVERSATION",
    variant: "primary",
  },
  {
    label: "VIEW OUR WORK →",
    variant: "secondary",
  },
] as const;

export const WeddingPhotographyHeroSection = (): JSX.Element => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="flex w-full flex-col bg-[#f5f2ec]">
      <div
        className="wedding-hero-image h-[760px] w-full bg-cover bg-center bg-no-repeat"
        role="img"
        aria-label="Wedding couple portrait"
      />
      <div className="flex w-full flex-col justify-between gap-12 px-6 py-12 opacity-80 sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-[100px] lg:py-[60px]">
        <header className="flex max-w-[661px] flex-col items-start gap-8">
          <p className="w-fit font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal [font-style:var(--web-label-s-font-style)]">
            PREMIUM WEDDING PHOTOGRAPHY
          </p>
          <h1 className="font-web-display-XXL text-[length:var(--web-display-XXL-font-size)] font-[number:var(--web-display-XXL-font-weight)] leading-[var(--web-display-XXL-line-height)] tracking-[var(--web-display-XXL-letter-spacing)] text-primary-systemcoal [font-style:var(--web-display-XXL-font-style)]">
            We Capture The Moments You&apos;ll Cherish Forever.
          </h1>
          <p className="max-w-[480px] font-web-body-s text-[length:var(--web-body-s-font-size)] font-[number:var(--web-body-s-font-weight)] leading-[var(--web-body-s-line-height)] tracking-[var(--web-body-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-body-s-font-style)]">
            Timeless imagery. Genuine connections. Stories beautifully told
            through sophisticated editorial lens.
          </p>
        </header>
        <div className="flex shrink-0 flex-col items-start gap-12">
          <div className="flex flex-wrap items-center gap-6">
            {heroActions.map((action) => (
              <Button
                key={action.label}
                type="button"
                variant="ghost"
                onClick={() => {
                  if (action.label.includes("CONVERSATION")) scrollToSection("contact");
                  else scrollToSection("portfolio");
                }}
                data-testid={`button-hero-${action.label.includes("CONVERSATION") ? 'contact' : 'portfolio'}`}
                className={
                  action.variant === "primary"
                    ? "h-11 rounded-none bg-primary-systemcoal px-8 py-4 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory transition-colors hover:bg-primary-systemcoal/90 hover:text-primary-systemivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [font-style:var(--web-label-s-font-style)]"
                    : "h-11 rounded-none px-0 py-3 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal transition-colors hover:bg-transparent hover:text-primary-systemwarm-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [font-style:var(--web-label-s-font-style)]"
                }
              >
                {action.label}
              </Button>
            ))}
          </div>
          <aside className="flex w-full max-w-[480px] flex-col items-start gap-2">
            <p className="font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal [font-style:var(--web-label-s-font-style)]">
              DELTA STATE | AVAILABLE ACROSS NIGERIA &amp; INTERNATIONALLY
            </p>
            <p className="font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-body-XS-font-style)]">
              Editorial photographs, candid moments, and a wedding day that
              still feels like yours.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};
