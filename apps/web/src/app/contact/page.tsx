import type { Metadata } from "next";
import Image from "next/image";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { contactIntro } from "@/content/contact";
import { media } from "@/content/media";

/**
 * Page 5 of 5 - CONTACT.
 *
 * The inquiry form used to live as a `#contact` section on the home page. It has
 * its own route now (so it can rank for "contact a wedding photographer in
 * Delta State"), and it actually submits: see /api/inquiries.
 */
export const metadata: Metadata = {
  title: "Contact",
  description: contactIntro.summary,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    description: contactIntro.summary,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="flex w-full scroll-mt-24 flex-col items-stretch gap-10 bg-primary-systembeige px-6 py-16 sm:px-10 lg:flex-row lg:gap-20 lg:px-20 lg:py-[120px]"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-10 lg:max-w-[500px]">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-4">
            <p className="font-label text-xs font-semibold uppercase tracking-[2px] text-[#a69b8d]">
              {contactIntro.eyebrow}
            </p>
            <h1 className="max-w-[392px] font-web-display-XL text-[length:var(--web-display-XL-font-size)] font-[number:var(--web-display-XL-font-weight)] leading-[var(--web-display-XL-line-height)] tracking-[var(--web-display-XL-letter-spacing)] text-primary-systemcoal [font-style:var(--web-display-XL-font-style)]">
              {contactIntro.heading}
            </h1>
            <p className="font-body text-base font-normal leading-[25.6px] text-[#77736d]">
              {contactIntro.summary}
            </p>
          </div>
          <p className="font-label text-sm font-normal text-[#a69b8d]">{contactIntro.note}</p>
        </header>

        <Image
          src={media.contactCompanion.src}
          alt="A couple photographed on their wedding day"
          width={media.contactCompanion.width}
          height={media.contactCompanion.height}
          sizes="(max-width: 1024px) 100vw, 500px"
          className="min-h-[320px] w-full flex-1 object-cover"
        />
      </div>

      <InquiryForm />
    </section>
  );
}
