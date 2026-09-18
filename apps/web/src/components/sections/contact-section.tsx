import Image from "next/image";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { contactIntro } from "@/content/contact";
import { media } from "@/content/media";

/**
 * The "Start a Conversation" form section from Figma node 154:917 (portfolio)
 * and 178:738 (wedding stories): left column of heading + photograph, right
 * column the form. The /contact page has its own layout (see app/contact).
 */
export function ContactSection() {
  return (
    <section className="flex w-full flex-col items-stretch gap-10 bg-[#e7e3dc] px-6 py-16 sm:px-10 lg:flex-row lg:gap-20 lg:px-20 lg:py-[120px]">
      <div className="flex min-w-0 flex-1 flex-col gap-10 lg:max-w-[500px]">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-4">
            <p className="font-label text-xs font-semibold uppercase tracking-[2px] text-[#a69b8d]">
              {contactIntro.eyebrow}
            </p>
            <h2 className="max-w-[392px] font-display text-[30px] font-normal leading-[1.1] text-primary-systemcoal lg:text-[48px]">
              {contactIntro.heading}
            </h2>
            <p className="font-body text-base font-normal leading-[1.6] text-[#77736d]">
              {contactIntro.summary}
            </p>
          </div>
          <p className="font-label text-sm font-normal text-[#a69b8d]">{contactIntro.note}</p>
        </header>

        <Image
          src={media.gallery07.src}
          alt="A couple photographed on their wedding day"
          width={media.gallery07.width}
          height={media.gallery07.height}
          sizes="(max-width: 1024px) 100vw, 500px"
          className="min-h-[320px] w-full flex-1 object-cover"
        />
      </div>

      <InquiryForm />
    </section>
  );
}
