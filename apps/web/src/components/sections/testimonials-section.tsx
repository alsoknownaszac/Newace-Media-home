"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { testimonials, testimonialsIntro } from "@/content/testimonials";
import { cn } from "@/lib/utils";

/**
 * "How our couples felt!" - testimonial carousel (Figma node 66:152).
 *
 * Mobile: photo stacked above a full-width white card, arrows as plain
 * chevrons in a centered row below the card.
 * Desktop (lg:): white card + 400x400 portrait, with the prev/next chevrons
 * positioned at the VERTICAL MIDDLE of the card, straddling its left/right
 * edges (half the button overlapping the card, half sticking out past it) -
 * and six 15x15 indicator dots below. Interactive: arrows, keyboard
 * Left/Right, swipe, clickable dots.
 *
 * The desktop arrows are rendered as a SEPARATE pair from the mobile arrows
 * (not the same buttons reused via `contents`), positioned directly inside
 * the same grid container as the card/portrait rather than relative to the
 * outer 1350px wrapper. Doing it this way means the "stick out" distance is
 * a fixed, constant amount (half the button's own width, via `-translate-x`)
 * regardless of how narrow the container gets - previously the arrows relied
 * on a gap between two differently-sized containers that only existed above
 * ~1440px viewport width, so between roughly 1024-1440px both containers
 * were the same width, the arrows landed exactly on the card/portrait edge,
 * and (having no z-index of their own against the portrait's explicit
 * z-20) were rendered invisibly underneath it.
 */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const count = testimonials.length;
  const active = testimonials[index];

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [go]);

  const mobileArrowClassName =
    "flex h-8 w-8 items-center justify-center rounded-none bg-transparent text-primary-systemmid-gray transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal focus-visible:ring-offset-2";

  const desktopArrowClassName =
    "z-30 flex h-[70px] w-[70px] items-center justify-center rounded-none bg-white text-primary-systemmid-gray shadow-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal focus-visible:ring-offset-2";

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Couple testimonials"
      className="flex flex-col items-center gap-8 bg-primary-systemivory px-5 py-12 lg:gap-[58px] lg:px-[100px] lg:py-[100px]"
    >
      <h2 className="font-display text-[32px] font-normal leading-none text-primary-systemcoal lg:text-[48px]">
        {testimonialsIntro.heading}
      </h2>

      {/* Card + portrait + arrows */}
      <div
        className="relative w-full max-w-[1350px]"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchStartX.current;
          const end = event.changedTouches[0]?.clientX ?? null;
          touchStartX.current = null;
          if (start === null || end === null) return;
          const delta = end - start;
          if (Math.abs(delta) < 50) return;
          go(delta < 0 ? 1 : -1);
        }}
      >
        <div className="relative mx-auto flex w-full max-w-[1240px] flex-col lg:grid lg:h-[600px] lg:grid-cols-1 lg:grid-rows-1">
          {/* Portrait — stacked above the card on mobile; overlaps it on desktop */}
          <div
            aria-hidden="true"
            className="relative z-20 ml-5 h-[400px] sm:h-[500px] w-[80%] lg:col-start-1 lg:row-start-1 lg:ml-0 lg:h-[400px] lg:w-[32%] lg:max-w-[400px] lg:self-center lg:justify-self-start"
          >
            <Image
              key={active.portrait.src}
              src={active.portrait.src}
              alt=""
              fill
              sizes="(max-width: 1024px) 60vw, 400px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* White testimonial card */}
          <div className="z-10 w-full rounded-none bg-white shadow-none lg:col-start-1 lg:row-start-1 lg:h-[600px] lg:w-[73%] lg:max-w-[904px] lg:justify-self-end lg:self-center">
            <figure className="mx-auto flex h-full max-w-[631px] flex-col justify-center gap-6 px-8 py-10 lg:gap-9 lg:px-10">
              <figcaption className="font-display text-[24px] font-normal leading-none text-primary-systemcoal lg:text-[28px]">
                {active.couple}
              </figcaption>
              <blockquote className="font-body text-[14px] md:text-[16px] font-normal leading-[1.6] text-primary-systemcoal lg:text-[17px]">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
            </figure>
          </div>

          {/* Desktop-only arrows — straddle the container's edges by a fixed
              amount (half their own width) so they always stick out
              consistently, independent of how narrow the container gets. */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className={cn(
              desktopArrowClassName,
              "col-start-1 row-start-1 hidden lg:absolute lg:left-0 lg:top-1/2 lg:-translate-x-full lg:-translate-y-1/2 lg:flex",
            )}
          >
            <ChevronLeft strokeWidth={3} className="h-8 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className={cn(
              desktopArrowClassName,
              "col-start-1 row-start-1 hidden lg:absolute lg:right-0 lg:top-1/2 lg:translate-x-full lg:-translate-y-1/2 lg:flex",
            )}
          >
            <ChevronRight strokeWidth={3} className="h-8 w-4" />
          </button>
        </div>

        {/* Mobile-only arrows — plain centered row below the card */}
        <div className="mt-6 flex w-full items-center justify-center gap-24 lg:hidden">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className={mobileArrowClassName}
          >
            <ChevronLeft strokeWidth={3} className="h-14 w-14" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className={mobileArrowClassName}
          >
            <ChevronRight strokeWidth={3} className="h-14 w-14" />
          </button>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="hidden items-center gap-[2px] lg:flex">
        {testimonials.map((testimonial, i) => (
          <button
            key={testimonial.couple}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "h-[15px] w-[15px] rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal focus-visible:ring-offset-2",
              i === index
                ? "border-[1.5px] border-[#77736d] bg-primary-systemivory"
                : "bg-primary-systembeige hover:bg-primary-systemwarm-gray",
            )}
          />
        ))}
      </div>
    </section>
  );
}
