import Image from "next/image";

import type { MediaAsset } from "@/content/media";
import { galleryRows } from "@/content/portfolio";

/**
 * Home page portfolio preview grid: the four rows from the original export
 * (4 / 3 / 2 / 4), uniform height, `object-cover`. This is the approved home
 * composition and is intentionally separate from the full masonry grid used on
 * /portfolio and /wedding-stories (see photo-masonry.tsx).
 */
export function PortfolioGallery({
  rows = galleryRows,
  priorityFirstRow = false,
}: {
  rows?: readonly (readonly MediaAsset[])[];
  priorityFirstRow?: boolean;
}) {
  return (
    <div className="flex w-full flex-col gap-4" aria-label="Wedding photography gallery">
      {rows.map((row, rowIndex) => (
        <div
          key={`gallery-row-${rowIndex}`}
          className="flex h-[120px] w-full gap-4 sm:h-[220px] lg:h-[336px]"
        >
          {row.map((image, imageIndex) => (
            <Image
              key={image.src}
              src={image.src}
              alt=""
              aria-hidden="true"
              width={image.width}
              height={image.height}
              sizes="(max-width: 640px) 25vw, 33vw"
              priority={priorityFirstRow && rowIndex === 0 && imageIndex < 2}
              className="min-w-0 flex-1 object-cover"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
