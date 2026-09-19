"use client";

import Image from "next/image";
import { useMemo } from "react";

import {
  PhotoLightbox,
  usePhotoLightbox,
  type LightboxImage,
} from "@/components/media/photo-lightbox";
import { Card, CardContent } from "@/components/ui/card";
import { journalEntries } from "@/content/journal";

/**
 * The "Behind the Lens" journal cards.
 *
 * Client component because /behind-the-scenes needs the click-to-overlay
 * behaviour (Figma nodes 393-6740 / 393-6961) while the home page teaser shows
 * the same cards without it - hence the `interactive` flag rather than two
 * copies of the markup.
 *
 * Card geometry is unchanged from the Figma export.
 */
export function JournalCards({
  interactive = false,
}: {
  interactive?: boolean;
}) {
  const images = useMemo<LightboxImage[]>(
    () =>
      journalEntries.map((entry) => ({
        ...entry.image,
        caption: `${entry.title} - ${entry.couple}`,
      })),
    [],
  );

  const lightbox = usePhotoLightbox(images.length);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-11">
        {journalEntries.map((entry, index) => (
          <Card
            key={`${entry.title}-${entry.couple}-${index}`}
            className="border-0 bg-transparent p-0 shadow-none"
          >
            <CardContent className="flex flex-col items-start gap-6 p-0 pb-6 sm:gap-10 sm:pb-11">
              {interactive ? (
                <button
                  type="button"
                  onClick={() => lightbox.open(index)}
                  aria-label={`Open photograph ${index + 1} of ${images.length}`}
                  className="block w-full cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal focus-visible:ring-offset-2"
                >
                  <Image
                    src={entry.image.src}
                    alt=""
                    aria-hidden="true"
                    width={entry.image.width}
                    height={entry.image.height}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-[220px] w-full object-cover sm:h-[344px]"
                  />
                </button>
              ) : (
                <Image
                  src={entry.image.src}
                  alt=""
                  aria-hidden="true"
                  width={entry.image.width}
                  height={entry.image.height}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[220px] w-full object-cover sm:h-[344px]"
                />
              )}

              <div className="flex flex-col items-start justify-center gap-4 sm:gap-8">
                <h3 className="w-full max-w-[385px] font-web-display-l text-[18px] font-[number:var(--web-display-l-font-weight)] leading-[var(--web-display-l-line-height)] tracking-[var(--web-display-l-letter-spacing)] text-primary-systemcoal [font-style:var(--web-display-l-font-style)] sm:text-[length:var(--web-display-l-font-size)]">
                  {entry.title}
                </h3>
                <div className="flex flex-col items-start gap-2 sm:gap-4">
                  <p className="font-web-heading-h4 text-[12px] font-[number:var(--web-heading-h4-font-weight)] leading-[var(--web-heading-h4-line-height)] tracking-[var(--web-heading-h4-letter-spacing)] text-primary-systemcoal [font-style:var(--web-heading-h4-font-style)] sm:text-[length:var(--web-heading-h4-font-size)]">
                    {entry.couple}
                  </p>
                  <Image
                    src="/icons/line.svg"
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={1}
                    unoptimized
                    className="h-px w-6 sm:w-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {interactive && (
        <PhotoLightbox
          images={images}
          index={lightbox.index}
          onClose={lightbox.close}
          onNavigate={lightbox.navigate}
        />
      )}
    </>
  );
}
