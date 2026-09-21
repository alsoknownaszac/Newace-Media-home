import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  aboutBrand,
  aboutClosingCta,
  aboutExperience,
  aboutFounder,
  aboutPromise,
} from "@/content/about";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ClosingCtaSection } from "@/components/sections/closing-cta-section";

/**
 * ABOUT - page 2 of 5. Rebuilt 1:1 from Figma node 154:764 (desktop) /
 * 336:1714 (mobile).
 */
export const metadata: Metadata = {
  title: "About",
  description: aboutBrand.summary,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About",
    description: aboutBrand.summary,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 1. About Brand - node 154:764 "About Brand Section" */}
      <section className="bg-[#e7e3dc] px-5 py-14 lg:px-[100px] lg:py-24">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 lg:gap-[58px]">
          <header className="flex max-w-[887px] flex-col gap-6 lg:gap-8">
            <p className="font-body text-xs font-medium text-primary-systemmid-gray">
              {aboutBrand.eyebrow}
            </p>
            <h1 className="font-display text-[40px] font-normal leading-[1.1] text-primary-systemcoal lg:text-[72px]">
              {aboutBrand.heading}
            </h1>
            <p className="font-body text-sm leading-[1.6] text-primary-systemmid-gray lg:text-[18px]">
              {aboutBrand.summary}
            </p>
          </header>

          <div className="flex flex-col gap-6 lg:gap-8">
            <Image
              src={aboutBrand.banner.src}
              alt="Wedding photographs by Newace Media"
              width={aboutBrand.banner.width}
              height={aboutBrand.banner.height}
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="hidden h-[400px] w-full object-cover lg:block"
            />
            <div className="flex gap-5 lg:gap-[20px]">
              {aboutBrand.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2 lg:gap-3">
                  <p className="font-body text-[40px] font-medium leading-none text-primary-systemcoal">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs font-medium text-primary-systemmid-gray">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 2. Promise - node 154:764 "manifesto-section" (bg mid-gray, centered) */}
      <section className="flex flex-col items-center gap-8 bg-primary-systemmid-gray px-5 py-16 text-center lg:gap-10 lg:px-[100px] lg:py-[120px]">
        <p className="font-body text-xs font-medium text-primary-systemivory">
          {aboutPromise.eyebrow}
        </p>
        <blockquote className="max-w-[900px] font-display text-[24px] font-normal leading-[1.3] text-white lg:text-[40px]">
          {aboutPromise.quote}
        </blockquote>
        <p className="font-body text-sm font-semibold text-primary-systemivory">
          {aboutPromise.attribution}
        </p>
      </section>
      {/* 3. Founder - node 154:764 "bts-section" (two columns) */}
      <section className="bg-primary-systemivory px-5 py-14 lg:px-[100px] lg:py-[100px]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-[58px]">
          <div className="flex max-w-[604px] flex-col gap-9">
            <div className="flex flex-col gap-2">
              <p className="font-body text-xs font-medium text-primary-systemcoal">
                {aboutFounder.eyebrow}
              </p>
              <h2 className="font-display text-[40px] font-normal leading-[1.1] text-primary-systemcoal lg:text-[72px]">
                {aboutFounder.heading}
              </h2>
              <p className="font-body text-base font-normal text-primary-systemwarm-gray">
                {aboutFounder.subheading}
              </p>
            </div>
            <div className="flex flex-col gap-4 font-body text-sm leading-[1.6] text-primary-systemcoal lg:text-base">
              {aboutFounder.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Image
              src={aboutFounder.portrait.src}
              alt="Samuel Orieka, founder and lead photographer of Newace Media"
              width={aboutFounder.portrait.width}
              height={aboutFounder.portrait.height}
              sizes="(max-width: 1024px) 100vw, 604px"
              className="h-[420px] sm:h-[620px] md:h-[720px] lg:h-[unset] w-full object-cover object-top lg:object-center lg:h-[528px] lg:w-[604px]"
            />
            <div className="flex flex-col gap-2">
              <p className="font-body text-xs font-medium text-primary-systemcoal">
                {aboutFounder.name}
              </p>
              <p className="font-body text-base text-primary-systemwarm-gray">
                {aboutFounder.title}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 4. Experience - node 154:764 "experience-section" */}
      <ExperienceSection />
      {/* 5. Closing CTA - node 154:764 "hero-section" (full-bleed image) */}
      <ClosingCtaSection />
    </>
  );
}
