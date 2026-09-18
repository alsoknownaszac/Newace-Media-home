import type { GridRow, MobileGridItem } from "@/content/photo-grid";

/**
 * Wedding Stories photo grid - extracted verbatim from the Figma file.
 *
 * Desktop: node 178:743 `enquire-drawer-section` (1440x1062) - three rows of
 * varied-width cells (215x310 / 429x206 / 207x298), 24px gaps, 40px side /
 * 48px vertical padding, cells vertically centered.
 *
 * Mobile: node 344:2544 `Mobile_Grid` (390x1056) - four full-bleed 240px
 * photos with a 12px gap and 60px of padding below.
 *
 * It sits between the six-card story grid and the inquiry form on
 * /wedding-stories. Photos were re-encoded from the Figma originals into
 * public/images/stories/ (shared shots reuse the copies already shipped in
 * public/images/portfolio/).
 */
export const storyGridRows: readonly GridRow[] = [
  { width: 1360, height: 310, cells: [
    { src: "/images/stories/5f10838e.webp", width: 215, height: 310, scale: "FILL" },
    { src: "/images/portfolio/90466f7f.webp", width: 429, height: 206, scale: "FILL" },
    { src: "/images/portfolio/19ebdd89.webp", width: 215, height: 310, scale: "FILL" },
    { src: "/images/portfolio/254f461c.webp", width: 429, height: 206, scale: "FILL" },
  ]},
  { width: 1360, height: 298, cells: [
    { src: "/images/portfolio/7425d24c.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/1e6534c0.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/ab890b35.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/2d356ffe.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/stories/39d60fa9.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/stories/fd22c4b0.webp", width: 207, height: 298, scale: "FILL" },
  ]},
  { width: 1360, height: 310, cells: [
    { src: "/images/portfolio/552a4e59.webp", width: 429, height: 206, scale: "STRETCH" },
    { src: "/images/stories/e07877bc.webp", width: 215, height: 310, scale: "FILL" },
    { src: "/images/portfolio/35de701c.webp", width: 429, height: 206, scale: "FILL" },
    { src: "/images/stories/f1292321.webp", width: 215, height: 310, scale: "FILL" },
  ]},
];

export const storyGridMobileImages: readonly MobileGridItem[] = [
  { src: "/images/stories/fd22c4b0.webp", height: 240, scale: "FILL" },
  { src: "/images/stories/a3a6c23b.webp", height: 240, scale: "FILL" },
  { src: "/images/stories/aa391a36.webp", height: 240, scale: "FILL" },
  { src: "/images/stories/0fd91032.webp", height: 240, scale: "FILL" },
];
