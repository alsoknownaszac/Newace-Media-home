"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { useMemo } from "react";

import { PhotoLightbox, usePhotoLightbox, type LightboxImage } from "@/components/media/photo-lightbox";
import { btsFeatured, latestBtsHeading, latestBtsMedia } from "@/content/bts";

/**
 * Behind the Scenes media - Figma node 181:1478:
 * a full-width featured media on beige, then "Latest Behind the Scenes" with a
 * four-card grid. Every item is clickable and opens the photo viewer
 * (nodes 393:6961 / 393:6740). Play buttons are a visual cue for video.
 */
export function BtsGallery() {
  const images = useMemo<LightboxImage[]>(
    () => [
      { src: btsFeatured.src, width: btsFeatured.width, height: btsFeatured.height },
      ...latestBtsMedia.map((item) => ({ src: item.image.src, width: item.image.width, height: item.image.height })),
    ],
    [],
  );

  const lightbox = usePhotoLightbox(images.length);

  const playButtonClassName =
    "flex items-center justify-center rounded-full bg-white/90 text-primary-systemcoal";

  return (
    <>
      {/* Featured media - beige, full width */}
      <section className="bg-[#e7e3dc]">
        <button
          type="button"
          onClick={() => lightbox.open(0)}
          aria-label="Open featured behind the scenes media"
          className="relative block w-full cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal focus-visible:ring-inset"
        >
          <Image
            src={btsFeatured.src}
            alt=""
            aria-hidden="true"
            width={btsFeatured.width}
            height={btsFeatured.height}
            sizes="100vw"
            priority
            className="h-[360px] w-full object-cover lg:h-[550px]"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className={`${playButtonClassName} h-12 w-12 lg:h-14 lg:w-14`}>
              <Play className="ml-0.5 h-5 w-5 fill-current lg:h-6 lg:w-6" />
            </span>
          </span>
        </button>
      </section>

      {/* Latest Behind the Scenes */}
      <section className="px-5 py-12 lg:px-20 lg:py-20">
        <header className="mx-auto flex max-w-[1280px] items-center justify-between gap-6">
          <h2 className="font-display text-[28px] font-normal leading-[1.1] text-[#151414] lg:text-[36px]">
            {latestBtsHeading.heading}
          </h2>
          <span aria-hidden="true" className="flex shrink-0 items-center gap-2 text-primary-systemcoal">
            <ArrowRight className="h-8 w-8" />
          </span>
        </header>

        <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-2 gap-4 lg:gap-8">
          {latestBtsMedia.map((item, index) => (
            <button
              key={item.image.src}
              type="button"
              onClick={() => lightbox.open(index + 1)}
              aria-label={`Open behind the scenes media ${index + 1} of ${latestBtsMedia.length}`}
              className="relative block cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal focus-visible:ring-offset-2"
            >
              <Image
                src={item.image.src}
                alt=""
                aria-hidden="true"
                width={item.image.width}
                height={item.image.height}
                sizes="(max-width: 1024px) 50vw, 333px"
                className="h-[220px] w-full object-cover lg:h-[500px]"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className={`${playButtonClassName} h-10 w-10 lg:h-12 lg:w-12`}>
                  <Play className="ml-0.5 h-4 w-4 fill-current lg:h-5 lg:w-5" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <PhotoLightbox
        images={images}
        index={lightbox.index}
        onClose={lightbox.close}
        onNavigate={lightbox.navigate}
      />
    </>
  );
}
