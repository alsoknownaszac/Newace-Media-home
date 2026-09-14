import { Card, CardContent } from "@/components/ui/card";

const experienceSteps = [
  {
    number: "01",
    title: "Understand & Prepare",
    description:
      "Your story comes first. We take the time to get to know you, understand your vision and the character of your celebration. With thoughtful preparation, we make sure we're ready to capture what matters while leaving room for the unexpected.",
  },
  {
    number: "02",
    title: "Observe & Capture",
    description:
      "We let the moments unfold naturally. With patience, careful observation and gentle direction, we document the day as it happens, from refined portraits and meaningful details to the laughter, emotion and fleeting connections in between.",
  },
  {
    number: "03",
    title: "Preserve the feeling",
    description:
      "We bring everything together to create a timeless visual story that feels authentic to you. Years from now, we want your photographs to do more than show you how the day looked, we want them to take you back to how it felt.",
  },
];

export const CustomWeddingPackagesSection = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-start gap-16 bg-primary-systembeige p-[100px]">
      <header className="flex w-full flex-col items-start gap-4">
        <p className="font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal [font-style:var(--web-label-s-font-style)]">
          THE NEWACE EXPERIENCE
        </p>
        <h2 className="max-w-[440px] font-web-display-XL text-[length:var(--web-display-XL-font-size)] font-[number:var(--web-display-XL-font-weight)] leading-[var(--web-display-XL-line-height)] tracking-[var(--web-display-XL-letter-spacing)] text-primary-systemcoal [font-style:var(--web-display-XL-font-style)]">
          Uniquely Custom. Entirely Effortless.
        </h2>
        <p className="max-w-[715px] font-web-body-s text-[length:var(--web-body-s-font-size)] font-[number:var(--web-body-s-font-weight)] leading-[var(--web-body-s-line-height)] tracking-[var(--web-body-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-body-s-font-style)]">
          From our first conversation to the final delivery of your images,
          every detail is considered with intention, creating a seamless,
          elevated experience from beginning to end.
        </p>
      </header>
      <div className="grid w-full grid-cols-3 gap-8">
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
};
