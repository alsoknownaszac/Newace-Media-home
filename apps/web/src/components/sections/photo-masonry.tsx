"use client";

import Image from "next/image";
import { useMemo } from "react";

import { PhotoLightbox, usePhotoLightbox, type LightboxImage } from "@/components/media/photo-lightbox";
import type { GridRow, MobileGridItem } from "@/content/photo-grid";
import { cn } from "@/lib/utils";

/**
 * The Figma photo grid - every section the design names
 * `enquire-drawer-section`. Two pages share this exact construction, so the
 * renderer is data-driven:
 *   - /portfolio          nodes 154:917 (desktop) / 344:2014 (mobile)
 *   - /wedding-stories    nodes 178:743 (desktop) / 344:2544 (mobile)
 *
 * Desktop: a centred 1360px column of rows, each row a centred flex line of
 * fixed-size cells with 24px gaps. `FILL` -> object-cover (centred crop),
 * `STRETCH` -> object-fill.
 *
 * Mobile: a single column of full-bleed photos with 12px gaps.
 *
 * With `interactive` (the /portfolio grid, which the design pairs with the
 * viewer frames 390:4967 / 390:5239) every cell is a button that opens the
 * full-screen viewer, and the desktop order is the canonical sequence. The
 * Wedding Stories grid has no viewer frame in the file, so it renders as a
 * decorative image grid.
 */
export function PhotoMasonry({
  rows,
  mobileImages,
  interactive = false,
}: {
  rows: readonly GridRow[];
  mobileImages: readonly MobileGridItem[];
  interactive?: boolean;
}) {
  const desktopImages = useMemo<LightboxImage[]>(() => {
    const flat: LightboxImage[] = [];
    for (const row of rows) {
      for (const cell of row.cells) {
        flat.push({ src: cell.src, width: cell.width, height: cell.height });
      }
    }
    return flat;
  }, [rows]);

  const lightbox = usePhotoLightbox(desktopImages.length);

  const openBySrc = (src: string) => {
    const index = desktopImages.findIndex((img) => img.src === src);
    if (index >= 0) lightbox.open(index);
  };

  return (
    <>
      {/* ---- Desktop: masonry rows ---- */}
      <div className="mx-auto hidden w-full max-w-[1360px] flex-col gap-6 lg:flex">
        {rows.map((row, rowIndex) => (
          <div key={`photo-masonry-row-${rowIndex}`} className="flex items-center justify-center gap-6">
            {row.cells.map((cell) => {
              const inner = (
                <Image
                  src={cell.src}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes={`${cell.width}px`}
                  className={cn("h-full w-full", cell.scale === "STRETCH" ? "object-fill" : "object-cover")}
                />
              );

              if (!interactive) {
                return (
                  <div
                    key={cell.src}
                    className="relative shrink-0 overflow-hidden"
                    style={{ width: cell.width, height: cell.height }}
                  >
                    {inner}
                  </div>
                );
              }

              return (
                <button
                  key={cell.src}
                  type="button"
                  onClick={() => openBySrc(cell.src)}
                  aria-label={`Open photograph ${desktopImages.findIndex((i) => i.src === cell.src) + 1} of ${desktopImages.length}`}
                  className="relative shrink-0 cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal focus-visible:ring-offset-2"
                  style={{ width: cell.width, height: cell.height }}
                >
                  {inner}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* ---- Mobile / tablet: single column ---- */}
      <div className="flex w-full flex-col gap-3 lg:hidden">
        {mobileImages.map((item) => {
          const inner = (
            <Image
              src={item.src}
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className={cn("h-full w-full", item.scale === "STRETCH" ? "object-fill" : "object-cover")}
            />
          );

          if (!interactive) {
            return (
              <div key={item.src} className="relative w-full" style={{ height: item.height }}>
                {inner}
              </div>
            );
          }

          return (
            <button
              key={item.src}
              type="button"
              onClick={() => openBySrc(item.src)}
              aria-label={`Open photograph ${desktopImages.findIndex((i) => i.src === item.src) + 1} of ${desktopImages.length}`}
              className="relative w-full cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal focus-visible:ring-offset-2"
              style={{ height: item.height }}
            >
              {inner}
            </button>
          );
        })}
      </div>

      {interactive && (
        <PhotoLightbox
          images={desktopImages}
          index={lightbox.index}
          onClose={lightbox.close}
          onNavigate={lightbox.navigate}
        />
      )}
    </>
  );
}
