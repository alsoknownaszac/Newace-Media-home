import { Card, CardContent } from "@/components/ui/card";
import { experienceIntro, experienceSteps } from "@/content/experience";

/**
 * "Uniquely Custom. Entirely Effortless." - the three-step experience block.
 * (Previously misnamed CustomWeddingPackagesSection; it has nothing to do with
 * packages or pricing.)
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="flex w-full scroll-mt-24 flex-col items-start gap-10 bg-primary-systembeige px-6 py-16 sm:gap-12 sm:px-10 lg:gap-16 lg:p-[100px]"
    >
      <header className="flex w-full flex-col items-start gap-4">
        <p className="font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] uppercase leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal [font-style:var(--web-label-s-font-style)]">
          {experienceIntro.eyebrow}
        </p>
        <h2
          id="experience-heading"
          className="max-w-[440px] font-web-display-XL text-[length:var(--web-display-XL-font-size)] font-[number:var(--web-display-XL-font-weight)] leading-[var(--web-display-XL-line-height)] tracking-[var(--web-display-XL-letter-spacing)] text-primary-systemcoal [font-style:var(--web-display-XL-font-style)]"
        >
          {experienceIntro.heading}
        </h2>
        <p className="max-w-[715px] font-web-body-s text-[length:var(--web-body-s-font-size)] font-[number:var(--web-body-s-font-weight)] leading-[var(--web-body-s-line-height)] tracking-[var(--web-body-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-body-s-font-style)]">
          {experienceIntro.summary}
        </p>
      </header>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {experienceSteps.map((step) => (
          <Card
            key={step.number}
            className="min-w-0 rounded-none border-[#a69b8d] bg-transparent p-0 shadow-none"
          >
            <CardContent className="flex h-full flex-col items-start gap-5 p-6">
              <p className="font-web-display-l text-[length:var(--web-display-l-font-size)] font-[number:var(--web-display-l-font-weight)] leading-[var(--web-display-l-line-height)] tracking-[var(--web-display-l-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-display-l-font-style)]">
                {step.number}
              </p>
              <h3 className="font-web-heading-h3 text-[length:var(--web-heading-h3-font-size)] font-[number:var(--web-heading-h3-font-weight)] leading-[var(--web-heading-h3-line-height)] tracking-[var(--web-heading-h3-letter-spacing)] text-primary-systemcoal [font-style:var(--web-heading-h3-font-style)]">
                {step.title}
              </h3>
              <p className="font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal [font-style:var(--web-body-XS-font-style)]">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
