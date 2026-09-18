"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { useMemo, useRef } from "react";

import { PhotoLightbox, usePhotoLightbox, type LightboxImage } from "@/components/media/photo-lightbox";
import { PaginationCard } from "@/components/ui/pagination-card";
import { latestBtsCarousel, latestBtsHeading, latestBtsMedia } from "@/content/bts";
import { usePagedSection } from "@/hooks/use-paged-section";
import { cn } from "@/lib/utils";

/**
 * "Latest Behind the Scenes" - Figma node 181:1515 (desktop) / 344:3309 +
 * 393:6565 (mobile).
 *
 * Desktop: the design's `BigFeaturedGrid` is a 1280px window onto a line of
 * 333x500 slides 32px apart - the fourth is clipped, so the rail reads as
 * endless. It is animated with the project's existing `animate-marquee`
 * utility: the slides are laid out twice and each copy travels exactly its own
 * width plus one gap (`--duration` / `--gap`), which lands copy two precisely
 * where copy one started. The loop is therefore seamless and never ends.
 * Hovering pauses it so a slide can be clicked; `prefers-reduced-motion` stops
 * it outright.
 *
 * Mobile: three rows of two 167x251 cards on 16/24px gaps, split into pages of
 * six and slid horizontally. The pagination card below (393:6565) drives it -
 * "Page n of m", the item range, previous/next and the numbered page buttons -
 * and swiping the cards does the same thing.
 *
 * Every slide matches the design's play affordance (a 70px / 42px black 40%
 * disc with a white play glyph) and opens the shared photograph viewer
 * (nodes 393:6961 / 393:6740).
 */

const RAIL = latestBtsCarousel;
const PER_PAGE = RAIL.mobileColumns * RAIL.mobileRows;

export function LatestBtsCarousel() {
  const images = useMemo<LightboxImage[]>(
    () => latestBtsMedia.map((item) => ({ src: item.image.src, width: item.image.width, height: item.image.height })),
    [],
  );

  const lightbox = usePhotoLightbox(images.length);

  const {
    page,
    pageCount,
    changePage: goTo,
    contentRef,
  } = usePagedSection(latestBtsMedia.length, PER_PAGE);

  const swiped = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const playDisc = (size: "slide" | "card") => (
    <span className="absolute inset-0 flex items-center justify-center">
      <span
        className={cn(
          "flex items-center justify-center rounded-full bg-black/40",
          size === "slide" ? "h-[70px] w-[70px]" : "h-[42px] w-[42px]",
        )}
      >
        <Play
          className={cn(
            "fill-primary-systemfairy text-primary-systemfairy",
            size === "slide" ? "h-6 w-6" : "h-[15px] w-[15px]",
          )}
        />
      </span>
    </span>
  );

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    swiped.current = false;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    const end = event.changedTouches[0]?.clientX ?? null;
    if (start === null || end === null) return;

    const delta = end - start;
    if (Math.abs(delta) < 40) return;

    // A swipe must not also register as a tap on the card it started on.
    swiped.current = true;
    goTo(page + (delta < 0 ? 1 : -1));
  };

  const openSlide = (index: number) => {
    if (swiped.current) {
      swiped.current = false;
      return;
    }
    lightbox.open(index);
  };

  return (
    <>
      {/* ---------- Desktop - node 181:1515 ---------- */}
      <section className="hidden w-full overflow-hidden py-20 lg:block">
        <div className="mx-auto flex min-h-[75px] w-full max-w-[1360px] items-center justify-between px-10">
          <h2 className="font-display text-[36px] font-normal leading-[43.6px] text-[#151414]">
            {latestBtsHeading.heading}
          </h2>
          {/* Node 181:1518 `Link` - two arrow-right glyphs, 32px, 8px apart. */}
          <span aria-hidden="true" className="flex shrink-0 items-center gap-2 text-primary-systemcoal">
            <ArrowRight className="h-8 w-8" />
            <ArrowRight className="h-8 w-8" />
          </span>
        </div>

        <div className="group mx-auto mt-12 w-full max-w-[1360px] overflow-hidden px-10">
          <div className="flex w-max gap-8">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1 || undefined}
                className="animate-marquee flex w-max shrink-0 gap-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
                style={
                  {
                    "--duration": `${RAIL.desktopDurationSeconds}s`,
                    "--gap": `${RAIL.desktopGap}px`,
                  } as React.CSSProperties
                }
              >
                {latestBtsMedia.map((item, index) => (
                  <button
                    key={`${copy}-${item.image.src}`}
                    type="button"
                    tabIndex={copy === 1 ? -1 : undefined}
                    onClick={() => openSlide(index)}
                    aria-label={`Open behind the scenes media ${index + 1} of ${latestBtsMedia.length}`}
                    className="relative shrink-0 cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal focus-visible:ring-inset"
                    style={{ width: RAIL.desktopSlideWidth, height: RAIL.desktopSlideHeight }}
                  >
                    <Image
                      src={item.image.src}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes={`${RAIL.desktopSlideWidth}px`}
                      className="object-cover"
                    />
                    {playDisc("slide")}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Mobile - nodes 344:3309 + 393:6565 ---------- */}
      <div className="w-full lg:hidden">
        <section className="w-full bg-primary-systemivory px-5 py-6">
          <h2 className="font-body text-xs font-medium uppercase leading-[16.8px] tracking-[0.18px] text-primary-systemcoal">
            {latestBtsHeading.heading}
          </h2>

          <div
            ref={contentRef}
            className="mt-6 scroll-mt-24 overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {Array.from({ length: pageCount }, (_, pageIndex) => {
                const pageItems = latestBtsMedia.slice(pageIndex * PER_PAGE, (pageIndex + 1) * PER_PAGE);
                return (
                  <div
                    key={`page-${pageIndex}`}
                    aria-hidden={pageIndex === page ? undefined : true}
                    className="flex w-full shrink-0 flex-col gap-6"
                  >
                    {Array.from({ length: Math.ceil(pageItems.length / RAIL.mobileColumns) }, (_, rowIndex) => (
                      <div key={`row-${rowIndex}`} className="flex gap-4">
                        {pageItems
                          .slice(rowIndex * RAIL.mobileColumns, (rowIndex + 1) * RAIL.mobileColumns)
                          .map((item, columnIndex) => {
                            const index = pageIndex * PER_PAGE + rowIndex * RAIL.mobileColumns + columnIndex;
                            return (
                              <button
                                key={item.image.src}
                                type="button"
                                tabIndex={pageIndex === page ? undefined : -1}
                                onClick={() => openSlide(index)}
                                aria-label={`Open behind the scenes media ${index + 1} of ${latestBtsMedia.length}`}
                                className="relative flex-1 cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal focus-visible:ring-offset-2"
                                style={{ height: RAIL.mobileCardHeight }}
                              >
                                <Image
                                  src={item.image.src}
                                  alt=""
                                  aria-hidden="true"
                                  fill
                                  sizes="50vw"
                                  className="object-cover"
                                />
                                {playDisc("card")}
                              </button>
                            );
                          })}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {pageCount > 1 && (
          <PaginationCard
            page={page}
            pageCount={pageCount}
            totalItems={latestBtsMedia.length}
            perPage={PER_PAGE}
            onPageChange={goTo}
            label="Behind the scenes pagination"
          />
        )}
      </div>

      <PhotoLightbox
        images={images}
        index={lightbox.index}
        onClose={lightbox.close}
        onNavigate={lightbox.navigate}
      />
    </>
  );
}
