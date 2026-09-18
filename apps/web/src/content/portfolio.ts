/**
 * Portfolio content.
 *
 * TODO(content): the Figma file only shipped one gallery composition plus one
 * summary paragraph. Per-category copy (ceremonies, traditions, portraits) is
 * still outstanding from the client - add it here, not in the components.
 */
import type { MediaAsset } from "./media";
import { media } from "./media";

export const portfolioIntro = {
  eyebrow: "Celebrations, captured with intention.",
  /** Rendered with the middle phrase in the "muted" grey from Figma. */
  heading: {
    lead: "Your ",
    emphasis: "love story",
    tail: ", beautifully framed.",
  },
  summary:
    "From grand celebrations and sophisticated contemporary ceremonies to intimate gatherings where every detail carries meaning.",
} as const;

/**
 * Four rows exactly as composed in the Figma gallery: 4 / 3 / 2 / 4.
 * The grid keeps those row groupings so the rhythm survives the port.
 */
export const galleryRows: readonly (readonly MediaAsset[])[] = [
  [media.gallery01, media.gallery02, media.gallery03, media.gallery04],
  [media.gallery05, media.gallery06, media.gallery07],
  [media.gallery08, media.gallery09],
  [media.gallery10, media.gallery11, media.gallery12, media.gallery13],
];

/** Flattened list, handy for a lightbox or a masonry variant. */
export const galleryImages: readonly MediaAsset[] = galleryRows.flat();
