import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const journalEntries = [
  {
    image: "/figmaAssets/rectangle-15.png",
    title: "A dream come true, celebrating first loves",
    couple: "John-Paul & Millicent",
  },
  {
    image: "/figmaAssets/rectangle-15-1.png",
    title: "A dream come true, celebrating first loves",
    couple: "John-Paul & Millicent",
  },
];

export const BehindTheLensShowcaseSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <header className="flex flex-col items-center justify-center gap-7 bg-primary-systemivory px-6 pb-12 pt-[100px] sm:px-[100px]">
        <h2 className="[font-family:'Cormorant_Garamond',Helvetica] text-center text-[64px] font-normal leading-[64px] tracking-[0] text-primary-systemcoal">
          <span className="text-[#171615]">Behind </span>
          <em className="text-[#77736d]">the </em>
          <span className="text-[#171615]">Lens</span>
        </h2>
        <img
          className="h-6 w-6"
          alt="Akar icons arrow"
          src="/figmaAssets/akar-icons-arrow-down.svg"
        />
      </header>
      <div className="flex flex-col items-center justify-center gap-11 bg-primary-systembeige p-6 sm:p-[100px]">
        <div className="grid w-full grid-cols-2 gap-4 sm:gap-11">
          {journalEntries.map((entry) => (
            <Card
              key={entry.image}
              className="border-0 bg-transparent p-0 shadow-none"
            >
              <CardContent className="flex flex-col items-start gap-6 p-0 pb-6 sm:gap-10 sm:pb-11">
                <img
                  className="h-[120px] w-full object-cover sm:h-[344px]"
                  alt="Rectangle"
                  src={entry.image}
                />
                <div className="flex flex-col items-start justify-center gap-4 sm:gap-8">
                  <h3 className="w-full max-w-[385px] font-web-display-l text-[18px] font-[number:var(--web-display-l-font-weight)] leading-[var(--web-display-l-line-height)] tracking-[var(--web-display-l-letter-spacing)] text-primary-systemcoal [font-style:var(--web-display-l-font-style)] sm:text-[length:var(--web-display-l-font-size)]">
                    {entry.title}
                  </h3>
                  <div className="flex flex-col items-start gap-2 sm:gap-4">
                    <p className="font-web-heading-h4 text-[10px] font-[number:var(--web-heading-h4-font-weight)] leading-[var(--web-heading-h4-line-height)] tracking-[var(--web-heading-h4-letter-spacing)] text-primary-systemcoal [font-style:var(--web-heading-h4-font-style)] sm:text-[length:var(--web-heading-h4-font-size)]">
                      {entry.couple}
                    </p>
                    <img
                      className="h-px w-6 sm:w-10"
                      alt="Line"
                      src="/figmaAssets/line.svg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          type="button"
          className="h-auto rounded-none bg-primary-systemcoal px-4 py-2 font-web-label-s text-[8px] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory hover:bg-primary-systemcoal sm:px-8 sm:py-4 sm:text-[length:var(--web-label-s-font-size)]"
        >
          READ THE JOURNAL
        </Button>
      </div>
    </section>
  );
};
