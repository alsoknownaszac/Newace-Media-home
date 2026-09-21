"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { hero } from "@/content/home";
import { media } from "@/content/media";
import { site } from "@/content/site";

const primaryActionClassName =
  "h-11 w-full lg:w-[unset] rounded-none bg-primary-systemcoal px-8 py-4 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory transition-colors hover:bg-primary-systemcoal/90 hover:text-primary-systemivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [font-style:var(--web-label-s-font-style)]";

const secondaryActionClassName =
  "h-11 w-full lg:w-[unset] rounded-none px-0 py-3 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal transition-colors hover:bg-transparent hover:text-primary-systemwarm-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [font-style:var(--web-label-s-font-style)]";

const HERO_SLIDE_DURATION_MS = 5000;

/**
 * Hero carousel images, in rotation order. `heroPortrait` is the original
 * design image and stays first (and `priority`) since it's the LCP element;
 * the gallery entries that follow were chosen for the same portrait
 * orientation/aspect ratio so the crossfade doesn't jump between wildly
 * different compositions.
 *
 * NOTE: this list was picked as a reasonable default, not specified by
 * design - swap/reorder the media keys here if different images should be
 * in the rotation.
 */
const heroSlides = [
  media.heroPortrait,
  media.gallery01,
  media.gallery02,
  media.gallery03,
  media.gallery04,
  media.gallery05,
  media.gallery06,
  media.gallery07,
];

/**
 * Home hero.
 *
 * The Vite implementation painted this with a CSS `background-image` and a
 * `role="img"` div, so the LCP image could not be prioritised and the `-960`
 * srcset was hand-maintained. It is a real, prioritised next/image element now.
 *
 * The image area is an auto-looping crossfade carousel over `heroSlides`
 * (sourced from `content/media`, not `content/home`): no arrows, dots, or
 * swipe handling - it just advances on its own every `HERO_SLIDE_DURATION_MS`
 * and wraps back to the first image at the end. `prefers-reduced-motion`
 * stops the auto-advance entirely and pins the first image, consistent with
 * how motion is handled elsewhere in this codebase (see the BTS carousel).
 */
export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, HERO_SLIDE_DURATION_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="flex w-full flex-col bg-primary-systemivory">
      <div className="relative h-[540px] w-full lg:h-[760px]">
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={
              index === activeIndex
                ? "Wedding couple portrait photographed by Newace Media"
                : ""
            }
            aria-hidden={index === activeIndex ? undefined : true}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="flex w-full flex-col justify-between gap-12 px-6 py-12 opacity-80 sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-[100px] lg:py-[60px]">
        <header className="flex max-w-[661px] flex-col items-start gap-8">
          <p className="w-fit font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] uppercase leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal [font-style:var(--web-label-s-font-style)]">
            {hero.eyebrow}
          </p>
          <h1 className="font-web-display-XXL text-[length:var(--web-display-XXL-font-size)] font-[number:var(--web-display-XXL-font-weight)] leading-[var(--web-display-XXL-line-height)] tracking-[var(--web-display-XXL-letter-spacing)] text-primary-systemcoal [font-style:var(--web-display-XXL-font-style)]">
            {hero.heading}
          </h1>
          <p className="max-w-[480px] font-web-body-s text-[length:var(--web-body-s-font-size)] font-[number:var(--web-body-s-font-weight)] leading-[var(--web-body-s-line-height)] tracking-[var(--web-body-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-body-s-font-style)]">
            {hero.summary}
          </p>
        </header>

        <div className="flex shrink-0 flex-col items-start gap-12">
          <div className="flex w-full flex-wrap items-center gap-6">
            <Button asChild variant="ghost" className={primaryActionClassName}>
              <Link href={hero.actions[0].href}>{hero.actions[0].label}</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className={secondaryActionClassName}
            >
              <Link href={hero.actions[1].href}>{hero.actions[1].label}</Link>
            </Button>
          </div>

          <aside className="flex w-full max-w-[480px] flex-col items-start gap-2">
            <p className="font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] uppercase leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal [font-style:var(--web-label-s-font-style)]">
              {site.coverage}
            </p>
            <p className="font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-body-XS-font-style)]">
              {site.shortDescription}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
