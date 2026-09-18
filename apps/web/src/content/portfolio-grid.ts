/**
 * Portfolio grid - extracted verbatim from the Figma file (Newace Media).
 * Desktop: node 154:917 `enquire-drawer-section` - 7 rows of varied-width cells.
 * Mobile: node 344:2014 `Mobile_Grid` - a single column of 34 full-width photos.
 * Photos were re-encoded from the Figma originals into public/images/portfolio/.
 */

import type { GridRow, MobileGridItem } from "@/content/photo-grid";

export type { GridCell, GridRow, MobileGridItem, ScaleMode } from "@/content/photo-grid";

export const portfolioGridRows: readonly GridRow[] = [
  { width: 1360, height: 310, cells: [
    { src: "/images/portfolio/1db4f5de.webp", width: 215, height: 310, scale: "FILL" },
    { src: "/images/portfolio/90466f7f.webp", width: 429, height: 206, scale: "FILL" },
    { src: "/images/portfolio/19ebdd89.webp", width: 215, height: 310, scale: "FILL" },
    { src: "/images/portfolio/254f461c.webp", width: 429, height: 206, scale: "FILL" },
  ]},
  { width: 1360, height: 298, cells: [
    { src: "/images/portfolio/7425d24c.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/1e6534c0.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/ab890b35.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/8cc14ab3.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/a93c9b6e.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/b707a0a5.webp", width: 207, height: 298, scale: "FILL" },
  ]},
  { width: 1360, height: 310, cells: [
    { src: "/images/portfolio/552a4e59.webp", width: 429, height: 206, scale: "STRETCH" },
    { src: "/images/portfolio/c0d7124f.webp", width: 215, height: 310, scale: "FILL" },
    { src: "/images/portfolio/35de701c.webp", width: 429, height: 206, scale: "FILL" },
    { src: "/images/portfolio/3ffe3528.webp", width: 215, height: 310, scale: "FILL" },
  ]},
  { width: 1360, height: 298, cells: [
    { src: "/images/portfolio/aa79b82e.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/f930c494.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/2d356ffe.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/d49bd33b.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/2a536fac.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/a29a8ef8.webp", width: 207, height: 298, scale: "FILL" },
  ]},
  { width: 1360, height: 310, cells: [
    { src: "/images/portfolio/308fb420.webp", width: 215, height: 310, scale: "FILL" },
    { src: "/images/portfolio/858bf795.webp", width: 429, height: 206, scale: "STRETCH" },
    { src: "/images/portfolio/31012515.webp", width: 215, height: 310, scale: "FILL" },
    { src: "/images/portfolio/0dada008.webp", width: 429, height: 206, scale: "FILL" },
  ]},
  { width: 1360, height: 298, cells: [
    { src: "/images/portfolio/aa7028dc.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/5368200d.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/2c83a922.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/79e33ddd.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/2769e1c7.webp", width: 207, height: 298, scale: "FILL" },
    { src: "/images/portfolio/af2c8a14.webp", width: 207, height: 298, scale: "FILL" },
  ]},
  { width: 1360, height: 310, cells: [
    { src: "/images/portfolio/11d6a9b7.webp", width: 215, height: 310, scale: "FILL" },
    { src: "/images/portfolio/e39a4b72.webp", width: 429, height: 206, scale: "STRETCH" },
    { src: "/images/portfolio/7e1cf1de.webp", width: 215, height: 310, scale: "FILL" },
    { src: "/images/portfolio/9695b3d8.webp", width: 429, height: 206, scale: "STRETCH" },
  ]},
];

export const portfolioMobileImages: readonly MobileGridItem[] = [
  { src: "/images/portfolio/1db4f5de.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/90466f7f.webp", height: 240, scale: "FILL" },
  { src: "/images/portfolio/19ebdd89.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/254f461c.webp", height: 240, scale: "FILL" },
  { src: "/images/portfolio/7425d24c.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/552a4e59.webp", height: 240, scale: "FILL" },
  { src: "/images/portfolio/1e6534c0.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/35de701c.webp", height: 240, scale: "FILL" },
  { src: "/images/portfolio/ab890b35.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/8cc14ab3.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/b707a0a5.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/a93c9b6e.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/3ffe3528.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/aa79b82e.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/f930c494.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/858bf795.webp", height: 240, scale: "STRETCH" },
  { src: "/images/portfolio/2d356ffe.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/d49bd33b.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/a29a8ef8.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/2a536fac.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/308fb420.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/31012515.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/0dada008.webp", height: 240, scale: "FILL" },
  { src: "/images/portfolio/aa7028dc.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/5368200d.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/2c83a922.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/79e33ddd.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/2769e1c7.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/af2c8a14.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/11d6a9b7.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/c0d7124f.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/e39a4b72.webp", height: 240, scale: "FILL" },
  { src: "/images/portfolio/7e1cf1de.webp", height: 563, scale: "FILL" },
  { src: "/images/portfolio/9695b3d8.webp", height: 240, scale: "FILL" },
];
