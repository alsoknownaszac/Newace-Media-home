import Image from "next/image";
import Link from "next/link";

import { footerNavigation, footerStrip, site, socialLinkColumns } from "@/content/site";

/**
 * Shared footer.
 *
 * Fixes carried over from the Figma implementation:
 *  - the contact block rendered an empty string as an extra line break because
 *    `contactDetails` contained a `""` entry - the list is now structured data;
 *  - navigation items were <button>s that mutated window.location for cross-page
 *    jumps - they are real <Link>s;
 *  - gallery images now use next/image with explicit intrinsic sizes.
 */
const bodyTextClassName =
  "font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] [font-style:var(--web-body-XS-font-style)]";

export function SiteFooter() {
  return (
    <footer className="flex w-full flex-col gap-[58px] bg-primary-systemcoal py-12 text-primary-systemivory">
      <section className="flex w-full flex-col gap-7">
        <div className="flex flex-col justify-between gap-10 px-6 md:px-12 lg:flex-row lg:items-center lg:px-[100px]">
          <div className="flex w-full max-w-[400px] flex-col gap-4">
            <Image
              src="/icons/newace-logo-ivory.svg"
              alt={site.name}
              width={160}
              height={85}
              unoptimized
              className="h-[84.8px] w-40"
            />
            <p className={`${bodyTextClassName} text-primary-systemivory`}>{site.description}</p>
          </div>

          <nav
            className="flex w-full justify-between gap-8 sm:w-auto sm:justify-end sm:gap-[58px]"
            aria-label="Footer navigation"
          >
            {footerNavigation.map((column, columnIndex) => (
              <div key={`navigation-column-${columnIndex}`} className="flex flex-col items-start gap-3">
                {column.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-web-heading-h2 text-[length:var(--web-heading-h2-font-size)] font-[number:var(--web-heading-h2-font-weight)] leading-[var(--web-heading-h2-line-height)] tracking-[var(--web-heading-h2-letter-spacing)] text-primary-systemivory transition-colors hover:text-primary-systembeige focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemivory focus-visible:ring-offset-2 focus-visible:ring-offset-primary-systemcoal [font-style:var(--web-heading-h2-font-style)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="grid w-full grid-cols-5 gap-px">
          {footerStrip.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt=""
              aria-hidden="true"
              width={image.width}
              height={image.height}
              sizes="20vw"
              className="h-[162px] w-full object-cover"
            />
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col gap-12">
        <div className="flex flex-col justify-between gap-10 px-6 md:px-12 lg:flex-row lg:items-center lg:px-[100px]">
          <address className="not-italic">
            <div className="flex w-full max-w-[400px] flex-col gap-6">
              <h2 className="font-['Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-primary-systemivory">
                LOCATIONS &amp; CONTACT
              </h2>
              <div className={`${bodyTextClassName} flex flex-col gap-1 text-primary-systemivory`}>
                <a href={site.contact.phoneHref} className="transition-colors hover:text-primary-systembeige">
                  Phone: {site.contact.phone}
                </a>
                <a href={site.contact.emailHref} className="transition-colors hover:text-primary-systembeige">
                  Email: {site.contact.email}
                </a>
                <p className="mt-3">
                  Address:
                  {site.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </address>

          <div className="flex flex-col items-start gap-6 lg:items-end">
            <h2 className="font-['Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-primary-systemivory">
              SOCIAL &amp; MAP LINKS
            </h2>
            <nav className="flex items-start gap-8" aria-label="Social and map links">
              {socialLinkColumns.map((column, columnIndex) => (
                <div key={`social-column-${columnIndex}`} className="flex flex-col items-start gap-6">
                  {column.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                      className={`flex items-center gap-2.5 ${bodyTextClassName} text-primary-systemivory transition-colors hover:text-primary-systembeige focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemivory focus-visible:ring-offset-2 focus-visible:ring-offset-primary-systemcoal`}
                    >
                      <Image
                        src={link.icon}
                        alt=""
                        aria-hidden="true"
                        width={link.iconWidth}
                        height={link.iconHeight}
                        unoptimized
                      />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-6 md:px-12 lg:px-[100px]">
          <Image
            src="/icons/line-2.svg"
            alt=""
            aria-hidden="true"
            width={1240}
            height={1}
            unoptimized
            className="h-px w-full"
          />
          <p className="text-center font-web-caption text-[length:var(--web-caption-font-size)] font-[number:var(--web-caption-font-weight)] leading-[var(--web-caption-line-height)] tracking-[var(--web-caption-letter-spacing)] text-primary-systemivory [font-style:var(--web-caption-font-style)]">
            {site.copyright}
          </p>
        </div>
      </section>
    </footer>
  );
}
