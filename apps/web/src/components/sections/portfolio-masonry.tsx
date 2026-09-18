"use client";

import Image from "next/image";
import { useMemo } from "react";

import { PhotoLightbox, usePhotoLightbox, type LightboxImage } from "@/components/media/photo-lightbox";
import { portfolioGridRows, portfolioMobileImages } from "@/content/portfolio-grid";
import { cn } from "@/lib/utils";

/**
 * The portfolio photo grid, reconstructed 1:1 from the Figma file.
 *
 * Desktop (node 154:917, `enquire-drawer-section`): 7 rows of varied-width cells
 * (215x310 / 429x206 / 207x298), 24px gaps, 40/48px padding, cells vertically
 * centered. `FILL` -> object-cover (centered crop), `STRETCH` -> object-fill.
 *
 * Mobile (node 344:2014, `Mobile_Grid`): a single column of 34 full-width
 * photos (563px portrait / 240px landscape), 12px gap.
 *
 * Clicking any photograph opens the full-screen viewer (nodes 390:4967 /
 * 390:5239). The viewer uses the desktop order as its canonical sequence.
 */
export function PortfolioMasonry({ interactive = true }: { interactive?: boolean }) {
  const desktopImages = useMemo<LightboxImage[]>(() => {
    const flat: LightboxImage[] = [];
    for (const row of portfolioGridRows) {
      for (const cell of row.cells) {
        flat.push({ src: cell.src, width: cell.width, height: cell.height });
      }
    }
    return flat;
  }, []);

  const lightbox = usePhotoLightbox(desktopImages.length);

  const openBySrc = (src: string) => {
    const index = desktopImages.findIndex((img) => img.src === src);
    if (index >= 0) lightbox.open(index);
  };

  return (
    <>
      {/* ---- Desktop: masonry rows ---- */}
      <div className="mx-auto hidden w-full max-w-[1360px] flex-col gap-6 lg:flex">
        {portfolioGridRows.map((row, rowIndex) => (
          <div key={`portfolio-row-${rowIndex}`} className="flex items-center justify-center gap-6">
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
                  <div key={cell.src} className="relative shrink-0 overflow-hidden" style={{ width: cell.width, height: cell.height }}>
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
        {portfolioMobileImages.map((item) => {
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
