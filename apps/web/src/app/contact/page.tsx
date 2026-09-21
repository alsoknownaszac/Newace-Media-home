import type { Metadata } from "next";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { contactIntro } from "@/content/contact";

/**
 * Page 5 of 5 - CONTACT.
 *
 * Three stacked sections, matching the desktop and mobile screens of this
 * design exactly:
 *  1. Hero - eyebrow/heading/summary only. No image, no form here (the
 *     original version had the companion image + form inline in this
 *     section; neither appears in this design, so both were moved/removed).
 *  2. Form + contact info - two columns on desktop (Inquiry Details card +
 *     Prefer a Conversation card). Mobile gets an extra lead-in block
 *     ("Start a Conversation" / "Let Us Craft Your Visual Story") that has
 *     no desktop equivalent in the design, and the form card's own heading
 *     switches text ("Inquiry Details" + response-time note on desktop vs.
 *     "Begin a Conversation" with no note on mobile).
 *  3. Our Studio - centered text block.
 *
 * The inquiry form used to live as a `#contact` section on the home page. It
 * has its own route now (so it can rank for "contact a wedding photographer
 * in Delta State"), and it actually submits: see /api/inquiries.
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

const contactChannels = [
  {
    label: "EMAIL US",
    value: "photos@newacemedia.com",
    href: "mailto:photos@newacemedia.com",
  },
  {
    label: "WHATSAPP",
    value: "+234 (0) 7039948500",
    href: "https://wa.me/2347039948500",
  },
  {
    label: "TELEPHONE",
    value: "+234 (0) 9036729937",
    href: "tel:+2349036729937",
  },
  {
    label: "INSTAGRAM",
    value: "@newacemedia",
    href: "https://instagram.com/newacemedia",
  },
];

const addressChannel = {
  label: "Address",
  value: "100, Effurun Sapele Road, Delta State",
  href: "https://maps.google.com/?q=NewAce+Media+Effurun-Sapele+Road,+Warri,+Delta+State,+Nigeria",
};

export default function ContactPage() {
  return (
    <>
      {/* ---------- Hero - text only ---------- */}
      <section
        id="contact"
        className="w-full scroll-mt-24 bg-primary-systemivory px-6 py-16 sm:px-10 lg:px-20 lg:py-20"
      >
        <div className="flex max-w-[720px] flex-col items-start gap-4">
          <p className="font-label text-xs font-semibold uppercase tracking-[2px] text-[#a69b8d]">
            Enquire
          </p>
          <h1 className="font-web-display-XL text-[length:var(--web-display-XL-font-size)] font-[number:var(--web-display-XL-font-weight)] leading-[var(--web-display-XL-line-height)] tracking-[var(--web-display-XL-letter-spacing)] text-primary-systemcoal [font-style:var(--web-display-XL-font-style)]">
            Let’s Capture Your Story
          </h1>
          <p className="font-body text-base font-normal leading-[25.6px] text-[#77736d]">
            Every love story deserves to be told with intention. Tell us a
            little about yours, and we&apos;ll follow up within two business
            days.
          </p>
        </div>
      </section>

      {/* ---------- Form + contact info ---------- */}
      <section className="w-full bg-primary-systembeige px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
        {/* Mobile-only lead-in copy - no desktop counterpart in the design. */}
        <div className="mb-10 flex flex-col items-start gap-4 lg:hidden">
          <p className="font-label text-xs font-semibold uppercase tracking-[2px] text-[#a69b8d]">
            Start a Conversation
          </p>
          <h2 className="font-display text-[28px] font-normal leading-[34px] text-primary-systemcoal">
            Let Us Craft Your Visual Story
          </h2>
          <p className="font-body text-base font-normal leading-[25.6px] text-[#77736d]">
            Once submitted, you&apos;ll be able to choose a date and time that
            works best for your consultation call.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-14 md:flex-row md:gap-20">
          {/* Inquiry Details / Begin a Conversation card */}
          <div className="w-full bg-primary-systemivory p-2 md:w-[63%] md:max-w-[760px] lg:p-0">
            <InquiryForm />
          </div>

          {/* Prefer a conversation? card */}
          <div className="w-full bg-white p-8 md:w-[37%] md:max-w-[440px] lg:p-10">
            <h3 className="font-display text-[22px] font-normal leading-[28px] text-primary-systemcoal">
              Prefer a conversation?
            </h3>
            <p className="mt-2 font-body text-sm font-normal leading-[22px] text-[#77736d]">
              We respond within 24 hours, typically sooner.
            </p>

            <dl className="mt-8 flex flex-col gap-6">
              {contactChannels.map((channel) => (
                <div key={channel.label}>
                  <dt className="font-label text-xs font-semibold uppercase tracking-[1.5px] text-[#a69b8d]">
                    {channel.label}
                  </dt>
                  <dd className="mt-1 font-body text-base font-medium text-primary-systemcoal">
                    <a
                      href={channel.href}
                      target={
                        channel.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        channel.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="hover:underline"
                    >
                      {channel.value}
                    </a>
                  </dd>
                </div>
              ))}
              <div>
                <dt className="font-body text-sm font-normal text-[#a69b8d]">
                  {addressChannel.label}
                </dt>
                <dd className="mt-1 font-body text-base font-medium text-primary-systemcoal">
                  <a
                    href={addressChannel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {addressChannel.value}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- Our Studio ---------- */}
      <section className="w-full bg-primary-systemivory px-6 py-16 text-center sm:px-10 lg:px-20 lg:py-20">
        <p className="font-label text-xs font-semibold uppercase tracking-[2px] text-[#a69b8d]">
          Our Studio
        </p>
        <h2 className="mx-auto mt-4 max-w-[900px] font-display text-[32px] font-normal leading-[40px] text-primary-systemcoal lg:text-[40px] lg:leading-[48px]">
          Rooted in Delta State, Nigeria — Operating Worldwide
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] font-body text-base font-normal leading-[25.6px] text-[#77736d]">
          Our studio is rooted in Delta State, at the heart of the Niger Delta,
          but our work has never been confined by geography. From Lagos and
          Abuja to London and destinations beyond, we travel to document the
          stories, celebrations, and intimate moments that matter most to our
          couples.
        </p>
      </section>
    </>
  );
}
