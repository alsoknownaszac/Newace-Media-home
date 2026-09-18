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
 * The "Latest Behind the Scenes" media - twenty items, the count the design's
 * pagination is written against ("1-4 of 20", node 393:6568).
 *
 * TODO(content): replace with the real video thumbnails and titles. The design
 * repeats a single placeholder photo across every slide (nodes 181:1522 /
 * 344:3309), so the studio's own photographs are used until the real media
 * arrives; `5d81f6d0` is the one thumbnail the design actually specifies.
 */
export const latestBtsMedia: readonly BtsMediaItem[] = [
  { image: { src: "/images/bts/5d81f6d0.webp", width: 1066, height: 1600 } },
  { image: { src: "/images/portfolio/9695b3d8.webp", width: 1066, height: 1600 } },
  { image: { src: "/images/stories/7aae8665.webp", width: 1371, height: 1920 } },
  { image: { src: "/images/stories/5f10838e.webp", width: 1280, height: 1920 } },
  { image: { src: "/images/stories/39d60fa9.webp", width: 1280, height: 1920 } },
  { image: { src: "/images/stories/fd22c4b0.webp", width: 1280, height: 1920 } },
  { image: { src: "/images/stories/0fd91032.webp", width: 1280, height: 1920 } },
  { image: { src: "/images/stories/a3a6c23b.webp", width: 1280, height: 1920 } },
  { image: { src: "/images/stories/aa391a36.webp", width: 1280, height: 1920 } },
  { image: { src: "/images/portfolio/19ebdd89.webp", width: 1095, height: 1600 } },
  { image: { src: "/images/portfolio/7425d24c.webp", width: 1128, height: 1600 } },
  { image: { src: "/images/portfolio/ab890b35.webp", width: 1113, height: 1600 } },
  { image: { src: "/images/portfolio/2d356ffe.webp", width: 1150, height: 1600 } },
  { image: { src: "/images/portfolio/1db4f5de.webp", width: 1067, height: 1600 } },
  { image: { src: "/images/portfolio/1e6534c0.webp", width: 1067, height: 1600 } },
  { image: { src: "/images/portfolio/2a536fac.webp", width: 1067, height: 1600 } },
  { image: { src: "/images/portfolio/7e1cf1de.webp", width: 1067, height: 1600 } },
  { image: { src: "/images/portfolio/858bf795.webp", width: 1064, height: 1600 } },
  { image: { src: "/images/portfolio/af2c8a14.webp", width: 1064, height: 1600 } },
  { image: { src: "/images/portfolio/c0d7124f.webp", width: 1067, height: 1600 } },
];

/**
 * Carousel geometry, read straight off the design.
 *
 * Desktop (181:1515): the section is 1440x783 with 80px padding and 48px
 * between the header and the rail; `BigFeaturedGrid` is a 1280x500 rail holding
 * four 333x500 slides 32px apart, so the fifth slide is clipped by the frame -
 * the rail is a window onto an endless line of slides.
 *
 * Mobile (344:3309): three rows of two 167x251 cards, 16px apart across and
 * 24px between rows, inside a 390x890 ivory section. The pagination card
 * (393:6565) sits directly below it and drives it.
 */
export const latestBtsCarousel = {
  desktopSlideWidth: 333,
  desktopSlideHeight: 500,
  desktopGap: 32,
  desktopVisible: 4,
  /** Seconds for the rail to travel one full copy of the slides. */
  desktopDurationSeconds: 72,
  mobileCardHeight: 251,
  mobileGap: 16,
  mobileRowGap: 24,
  mobileColumns: 2,
  mobileRows: 3,
} as const;

