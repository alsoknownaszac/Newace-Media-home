/**
 * Shared vocabulary for the Figma "photo grid" sections.
 *
 * Two sections in the Newace Media file use the exact same construction - a
 * vertical stack of rows, each row a horizontal stack of fixed-size photo
 * cells. Extracting the shapes here keeps the portfolio grid
 * (content/portfolio-grid.ts) and the Wedding Stories grid
 * (content/stories-grid.ts) in sync, and lets a single component
 * (components/sections/photo-masonry.tsx) render both.
 */

/** `FILL` -> object-cover (centered crop). `STRETCH` -> object-fill. */
export type ScaleMode = "FILL" | "STRETCH";

export interface GridCell {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly scale: ScaleMode;
}

export interface GridRow {
  readonly width: number;
  readonly height: number;
  readonly cells: readonly GridCell[];
}

export interface MobileGridItem {
  readonly src: string;
  readonly height: number;
  readonly scale: ScaleMode;
}
