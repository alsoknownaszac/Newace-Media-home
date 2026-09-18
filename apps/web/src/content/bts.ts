/**
 * "Behind the Lens" (Behind the Scenes) page content - Figma node 181:1478 /
 * 344:3243.
 */
import type { MediaAsset } from "./media";

export const btsIntro = {
  eyebrow: "Behind the Scenes",
  heading: "Beyond the Finished Photographs",
  intro:
    "A real look at the people, process and beautiful chaos that make every wedding unique.",
} as const;

/** The full-width featured media (click to open). */
export const btsFeatured: MediaAsset = {
  src: "/images/stories/7aae8665.webp",
  width: 2821,
  height: 3950,
};

export const latestBtsHeading = {
  heading: "Latest Behind the Scenes",
} as const;

export interface BtsMediaItem {
  readonly image: MediaAsset;
}

/**
 * The four "Latest Behind the Scenes" media cards. The design repeats the same
 * two thumbnails, so four distinct portfolio photos are used instead.
 * TODO(content): replace with the real video thumbnails / titles.
 */
export const latestBtsMedia: readonly BtsMediaItem[] = [
  { image: { src: "/images/portfolio/19ebdd89.webp", width: 1200, height: 1600 } },
  { image: { src: "/images/portfolio/7425d24c.webp", width: 1200, height: 1600 } },
  { image: { src: "/images/portfolio/ab890b35.webp", width: 1200, height: 1600 } },
  { image: { src: "/images/portfolio/2d356ffe.webp", width: 1200, height: 1600 } },
];
