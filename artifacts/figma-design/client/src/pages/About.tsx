import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SiteFooterSection } from "./sections/SiteFooterSection";

const navItems = [
  { label: "HOME", href: "/#hero" },
  { label: "ABOUT", href: "/about" },
  { label: "PORTFOLIO", href: "/#portfolio" },
  { label: "WEDDING STORIES", href: "/#wedding-stories" },
  { label: "BEHIND THE SCENES", href: "/#behind-the-scenes" },
  { label: "CONTACT US", href: "/#contact" },
];

const values = [
  {
    number: "01",
    title: "Intentional Storytelling",
    body: "We approach every celebration with care, curiosity and a deep respect for the people at its heart. Every frame is made to feel honest, considered and unmistakably yours.",
  },
  {
    number: "02",
    title: "An Effortless Experience",
    body: "From the first conversation to the final gallery, we create a calm, thoughtful process that allows you to be fully present while we take care of the details.",
  },
  {
    number: "03",
    title: "Images That Endure",
    body: "Trends pass. Feeling remains. We create refined photographs with the depth and character to become part of your family story for generations.",
  },
];

const AboutHeader = () => (
  <header className="flex h-20 w-full items-center bg-primary-systemivory">
    <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-6 lg:px-20">
      <Link href="/" aria-label="Newace home">
        <img
          className="h-[84.8px] w-40 shrink-0"
          alt="Newace logo"
          src="/figmaAssets/newace-logo-transparent-1--vectorized-.svg"
        />
      </Link>
      <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex h-[34px] items-center px-2 font-web-label-s text-xs font-medium leading-[1.4] text-primary-systemcoal transition-colors hover:text-primary-systemwarm-gray"
          >
            {item.label}
          </a>
        ))}
        <Button asChild variant="outline" className="h-11 rounded-none border-primary-systemcoal bg-transparent px-8 text-xs font-medium hover:bg-primary-systemcoal hover:text-primary-systemivory">
          <a href="/#contact">ENQUIRE</a>
        </Button>
      </nav>
      <a
        href="/#contact"
        className="flex h-11 items-center border border-primary-systemcoal px-6 font-web-label-s text-xs font-medium text-primary-systemcoal lg:hidden"
      >
        ENQUIRE
      </a>
    </div>
  </header>
);

export const About = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-primary-systemivory text-primary-systemcoal">
      <AboutHeader />
      <main>
        <section className="bg-primary-systembeige px-6 py-16 md:px-12 lg:px-[100px] lg:py-[100px]">
          <div className="mx-auto max-w-[1240px]">
            <p className="mb-5 font-web-label-s text-xs font-medium">ABOUT NEWACE</p>
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
              <h1 className="max-w-[760px] font-web-display-XXL text-[42px] leading-[0.98] tracking-[-0.5px] sm:text-6xl lg:text-[72px]">
                Photographs that preserve how it all felt.
              </h1>
              <p className="max-w-[500px] font-web-body-s text-base leading-[1.6] text-primary-systemmid-gray">
                Newace is a wedding photography studio devoted to honest moments,
                refined imagery and the people who make every celebration
                unforgettable.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary-systemivory px-6 py-16 md:px-12 lg:px-[100px] lg:py-[100px]">
          <div className="mx-auto max-w-[1240px]">
            <img
              src="/figmaAssets/rectangle-15.webp"
              srcSet="/figmaAssets/rectangle-15-960.webp 960w, /figmaAssets/rectangle-15.webp 1920w"
              alt="Newlyweds celebrating together"
              className="h-[350px] w-full object-cover object-center lg:h-[620px]"
            />
            <div className="grid border-x border-b border-primary-systemwarm-gray sm:grid-cols-3">
              {[
                ["8+", "YEARS OF EXPERIENCE"],
                ["250+", "WEDDINGS CAPTURED"],
                ["10+", "DESTINATIONS"],
              ].map(([value, label]) => (
                <div key={label} className="border-b border-primary-systemwarm-gray px-6 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:px-10">
                  <p className="font-web-display-XL text-5xl leading-none">{value}</p>
                  <p className="mt-3 font-web-label-s text-xs font-medium text-primary-systemmid-gray">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#d9d7d2] px-6 py-16 md:px-12 lg:px-[100px] lg:py-[120px]">
          <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-5 font-web-label-s text-xs font-medium">OUR PROMISE</p>
              <h2 className="max-w-[520px] font-web-display-XL text-[40px] leading-[1.08] sm:text-5xl">
                We notice the moments you never want to forget.
              </h2>
            </div>
            <div className="space-y-5 font-web-body-s text-base leading-[1.7] text-primary-systemmid-gray">
              <p>
                The glance before the ceremony. The hands held under the table.
                The laughter that arrives without warning. These are the moments
                that give a wedding its meaning.
              </p>
              <p>
                We photograph with a quiet, observant presence, offering direction
                when it helps and space when the moment needs to unfold on its own.
                The result is a story that feels polished, personal and true.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary-systemivory px-6 py-16 md:px-12 lg:px-[100px] lg:py-[120px]">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-24">
            <img
              src="/figmaAssets/rectangle-1-5.webp"
              srcSet="/figmaAssets/rectangle-1-5-960.webp 960w, /figmaAssets/rectangle-1-5.webp 1920w"
              alt="Newace founder and photographer"
              className="h-[480px] w-full object-cover lg:h-[670px]"
            />
            <div>
              <p className="mb-5 font-web-label-s text-xs font-medium">MEET THE FOUNDER</p>
              <h2 className="font-web-display-XL text-[40px] leading-[1.08] sm:text-5xl">
                Hi, I&apos;m Newace.
              </h2>
              <div className="mt-7 space-y-5 font-web-body-s text-base leading-[1.7] text-primary-systemmid-gray">
                <p>
                  I&apos;m a wedding photographer based in Warri, Nigeria, drawn to
                  celebrations with heart, character and a strong sense of place.
                </p>
                <p>
                  My work is grounded in connection. I want you to feel comfortable
                  enough to be yourselves and confident that every meaningful part
                  of your day is being seen. That trust is what allows us to create
                  photographs that feel natural now and become more valuable with time.
                </p>
              </div>
              <Button asChild className="mt-9 h-11 rounded-none bg-primary-systemcoal px-8 text-xs font-medium text-primary-systemivory hover:bg-primary-systemcoal/90">
                <a href="/#contact">LET&apos;S CREATE TOGETHER</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-primary-systembeige px-6 py-16 md:px-12 lg:px-[100px] lg:py-[120px]">
          <div className="mx-auto max-w-[1240px]">
            <p className="mb-5 font-web-label-s text-xs font-medium">THE NEWACE EXPERIENCE</p>
            <h2 className="max-w-[600px] font-web-display-XL text-[40px] leading-[1.08] sm:text-5xl">
              What you can always expect.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
              {values.map((value) => (
                <article key={value.number} className="border border-primary-systemwarm-gray p-6 lg:min-h-[310px]">
                  <p className="font-web-display-l text-[40px] text-primary-systemmid-gray">{value.number}</p>
                  <h3 className="mt-6 font-web-heading-h3 text-2xl leading-[1.3]">{value.title}</h3>
                  <p className="mt-5 font-web-body-XS text-sm leading-[1.6] text-primary-systemmid-gray">{value.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative flex h-[420px] items-center justify-center overflow-hidden px-6 text-center lg:h-[700px]">
          <img
            src="/figmaAssets/rectangle-6.webp"
            srcSet="/figmaAssets/rectangle-6-960.webp 960w, /figmaAssets/rectangle-6.webp 1920w"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 flex max-w-[720px] flex-col items-center">
            <h2 className="font-web-display-XXL text-[40px] leading-none text-white sm:text-6xl">
              Let&apos;s tell your story, beautifully.
            </h2>
            <p className="mt-6 font-web-heading-h3 text-xl leading-[1.35] text-white sm:text-2xl">
              Your photographs should feel like you. We&apos;d love to hear what
              you&apos;re planning.
            </p>
            <Button asChild className="mt-9 h-11 rounded-none bg-primary-systembeige px-8 text-xs font-medium text-primary-systemcoal hover:bg-primary-systemivory">
              <a href="/#contact">START A CONVERSATION</a>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooterSection />
    </div>
  );
};