/**
 * Image registry.
 *
 * `src` keeps the original Figma export file name so every asset stays
 * traceable back to the design file. `width` / `height` are the real intrinsic
 * pixel dimensions of the WebP files (read from the file headers, not guessed),
 * which is what next/image needs to reserve layout space and avoid CLS.
 *
 * Usage:
 *   import Image from "next/image";
 *   <Image {...media.gallery01} alt="..." sizes="25vw" className="object-cover" />
 *
 * The hand-rolled "-960" srcset twins from the Vite implementation were
 * dropped: next/image generates its own responsive variants on demand.
 */
export interface MediaAsset {
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

export const media = {
  /** Hero: portrait original (1277x1920) shown in a 760px tall, full-bleed band. */
  heroPortrait: { src: "/images/heroimage.webp", width: 1277, height: 1920 },

  /** "Love story" gallery - four rows, exactly as composed in Figma. */
  gallery01: { src: "/images/rectangle-1.webp", width: 1280, height: 1920 },
  gallery02: { src: "/images/rectangle-2.webp", width: 1280, height: 1920 },
  gallery03: { src: "/images/rectangle-3.webp", width: 1280, height: 1920 },
  gallery04: { src: "/images/rectangle-4.webp", width: 1280, height: 1920 },
  gallery05: { src: "/images/rectangle-1-1.webp", width: 1536, height: 1920 },
  gallery06: { src: "/images/rectangle-3-1.webp", width: 1280, height: 1920 },
  gallery07: { src: "/images/rectangle-4-1.webp", width: 1280, height: 1920 },
  gallery08: { src: "/images/rectangle-1-2.webp", width: 1920, height: 1280 },
  gallery09: { src: "/images/rectangle-4-2.webp", width: 1280, height: 1920 },
  gallery10: { src: "/images/rectangle-1-3.webp", width: 1277, height: 1920 },
  gallery11: { src: "/images/rectangle-2-1.webp", width: 1280, height: 1920 },
  gallery12: { src: "/images/rectangle-3-2.webp", width: 1281, height: 1920 },
  gallery13: { src: "/images/rectangle-4-3.webp", width: 1280, height: 1920 },

  /** Footer image strip. */
  gallery17: { src: "/images/rectangle-1-7.webp", width: 288, height: 162 },
  gallery22: { src: "/images/rectangle-2-2.webp", width: 1920, height: 1280 },
  gallery33: { src: "/images/rectangle-3-3.webp", width: 1920, height: 1277 },
  gallery44: { src: "/images/rectangle-4-4.webp", width: 288, height: 162 },
  gallery5: { src: "/images/rectangle-5.webp", width: 1920, height: 1280 },

  /** Founder portrait (About page + home bio). */
  founderPortrait: { src: "/images/rectangle-1-5.webp", width: 1280, height: 1920 },

  /** Square couple portrait used in the testimonial block. */
  testimonialPortrait: { src: "/images/rectangle-1-4.webp", width: 400, height: 400 },

  /** Full-bleed closing call-to-action backdrop. */
  ctaBackdrop: { src: "/images/rectangle-6.webp", width: 1440, height: 700 },

  /** About page banner + journal cards. */
  aboutBanner: { src: "/images/rectangle-15.webp", width: 1280, height: 1920 },
  journalPrimary: { src: "/images/rectangle-15.webp", width: 1280, height: 1920 },
  journalSecondary: { src: "/images/rectangle-15-1.webp", width: 598, height: 344 },

  /** Contact page - portrait beside the inquiry form. */
  contactCompanion: { src: "/images/rectangle-1-6.webp", width: 1280, height: 1920 },
} as const satisfies Record<string, MediaAsset>;

export type MediaKey = keyof typeof media;
