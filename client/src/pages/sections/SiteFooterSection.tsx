import { Button } from "@/components/ui/button";

const primaryNavigationColumns = [
  ["Home", "Portfolio", "Contact"],
  ["About", "Wedding Stories", "Behind The Scenes"],
];

const galleryImages = [
  "/figmaAssets/rectangle-1-7.png",
  "/figmaAssets/rectangle-2-2.png",
  "/figmaAssets/rectangle-3-3.png",
  "/figmaAssets/rectangle-4-4.png",
  "/figmaAssets/rectangle-5.png",
];

const contactDetails = [
  "Phone: (+234) 7039948500",
  "Email: photos@newacemedia.com",
  "",
  "Address:",
  "100, Effurun Sapele Road, Delta State",
];

const socialLinkColumns = [
  [
    {
      label: "Instagram",
      icon: "/figmaAssets/akar-icons-instagram-fill.svg",
      alt: "Akar icons instagram",
      iconClassName: "h-6 w-6",
    },
    {
      label: "Facebook",
      icon: "/figmaAssets/basil-facebook-outline.svg",
      alt: "Basil facebook",
      iconClassName: "h-6 w-6",
    },
  ],
  [
    {
      label: "Email",
      icon: "/figmaAssets/ic-outline-email.svg",
      alt: "Ic outline email",
      iconClassName: "h-[20.58px] w-[20.58px]",
    },
    {
      label: "Google Map",
      icon: "/figmaAssets/basil-map-location-outline.svg",
      alt: "Basil map location",
      iconClassName: "h-6 w-6",
    },
  ],
];

const bodyTextClassName =
  "font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemivory [font-style:var(--web-body-XS-font-style)]";

const headingLinkClassName =
  "h-auto justify-start p-0 font-web-heading-h2 text-[length:var(--web-heading-h2-font-size)] font-[number:var(--web-heading-h2-font-weight)] leading-[var(--web-heading-h2-line-height)] tracking-[var(--web-heading-h2-letter-spacing)] text-primary-systemivory hover:bg-transparent hover:text-primary-systemivory focus-visible:ring-primary-systemivory [font-style:var(--web-heading-h2-font-style)]";

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="flex w-full flex-col gap-[58px] bg-primary-systemcoal py-12">
      <section className="flex w-full flex-col gap-7">
        <div className="flex flex-col justify-between gap-10 px-6 md:px-12 lg:flex-row lg:items-center lg:px-[100px]">
          <div className="flex w-full max-w-[400px] flex-col gap-4">
            <img
              className="h-[84.8px] w-40"
              alt="Newace LOGO"
              src="/figmaAssets/newace-logo-transparent-1--vectorized-.svg"
            />
            <p className={bodyTextClassName}>
              Premium wedding photography for celebrations worth remembering.
              Rooted in Warri, Delta State| Photographing weddings across
              Nigeria and beyond.
            </p>
          </div>
          <nav
            className="flex w-full justify-between gap-8 sm:w-auto sm:justify-end sm:gap-[58px]"
            aria-label="Footer navigation"
          >
            {primaryNavigationColumns.map((column, columnIndex) => (
              <div
                key={`navigation-column-${columnIndex}`}
                className="flex flex-col items-start gap-3"
              >
                {column.map((label) => (
                  <Button
                    key={label}
                    type="button"
                    variant="ghost"
                    className={headingLinkClassName}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="grid w-full grid-cols-5 gap-px">
          {galleryImages.map((src, _index) => (
            <img
              key={src}
              className="h-[162px] min-w-0 w-full object-cover"
              alt="Rectangle"
              src={src}
            />
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col gap-12">
        <div className="flex flex-col justify-between gap-10 px-6 md:px-12 lg:flex-row lg:items-center lg:px-[100px]">
          <address className="not-italic">
            <div className="flex w-full max-w-[400px] flex-col gap-6">
              <h2 className="font-['Inter',Helvetica] text-sm font-semibold leading-[19.6px] tracking-[0] text-primary-systemivory">
                LOCATIONS &amp; CONTACT
              </h2>
              <p className={bodyTextClassName}>
                {contactDetails.map((line, index) => (
                  <span key={`${line}-${index}`}>
                    {line}
                    {index < contactDetails.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </address>
          <div className="flex flex-col items-start gap-6 lg:items-end">
            <h2 className="font-['Inter',Helvetica] text-sm font-semibold leading-[19.6px] tracking-[0] text-primary-systemivory">
              SOCIAL &amp; MAP LINKS
            </h2>
            <nav
              className="flex items-start gap-8"
              aria-label="Social and map links"
            >
              {socialLinkColumns.map((column, columnIndex) => (
                <div
                  key={`social-column-${columnIndex}`}
                  className="flex flex-col items-start gap-6"
                >
                  {column.map((link) => (
                    <Button
                      key={link.label}
                      type="button"
                      variant="ghost"
                      className={`h-auto gap-2.5 p-0 ${bodyTextClassName} hover:bg-transparent hover:text-primary-systemivory focus-visible:ring-primary-systemivory`}
                    >
                      <img
                        className={link.iconClassName}
                        alt={link.alt}
                        src={link.icon}
                      />
                      <span>{link.label}</span>
                    </Button>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-6 md:px-12 lg:px-[100px]">
          <img
            className="h-px w-full"
            alt="Line"
            src="/figmaAssets/line-2.svg"
          />
          <p className="font-web-caption text-center text-[length:var(--web-caption-font-size)] font-[number:var(--web-caption-font-weight)] leading-[var(--web-caption-line-height)] tracking-[var(--web-caption-letter-spacing)] text-primary-systemivory [font-style:var(--web-caption-font-style)]">
            © 2026 NewAce Media Photography. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};
