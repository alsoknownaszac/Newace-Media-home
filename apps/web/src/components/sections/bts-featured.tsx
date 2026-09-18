"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useMemo } from "react";

import { PhotoLightbox, usePhotoLightbox, type LightboxImage } from "@/components/media/photo-lightbox";
import { btsFeatured } from "@/content/bts";

/**
 * The full-bleed featured media - Figma node 190:1398, the section directly
 * beneath the Behind the Scenes hero: a 550px photograph on beige (the design
 * draws it at 1440x550) that opens in the shared viewer when clicked.
 *
 * The "Latest Behind the Scenes" rail that follows it lives in
 * latest-bts-carousel.tsx (nodes 181:1515 / 344:3309 + 393:6565).
 */
export function BtsFeatured() {
  const images = useMemo<LightboxImage[]>(
    () => [{ src: btsFeatured.src, width: btsFeatured.width, height: btsFeatured.height }],
    [],
  );

  const lightbox = usePhotoLightbox(images.length);

  return (
    <>
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
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary-systemcoal lg:h-14 lg:w-14">
              <Play className="ml-0.5 h-5 w-5 fill-current lg:h-6 lg:w-6" />
            </span>
          </span>
        </button>
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
