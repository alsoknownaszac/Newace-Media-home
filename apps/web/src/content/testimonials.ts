/**
 * Couple testimonials - "How our couples felt!" carousel.
 *
 * The first entry is verbatim from the Figma home frame (66:152). The remaining
 * five are placeholders so the carousel has six slides (matching the six
 * indicator dots in the design). Each slide uses a DIFFERENT portrait so the
 * image visibly changes as you step through. TODO(content): replace entries 2-6
 * with the real couple names, quotes and portraits.
 */
import type { MediaAsset } from "./media";

/** The portraits are re-encoded Figma photos (portrait crops). */
const portrait = (file: string): MediaAsset => ({
  src: `/images/portfolio/${file}.webp`,
  width: 1200,
  height: 1600,
});

export interface Testimonial {
  readonly couple: string;
  readonly quote: string;
  readonly portrait: MediaAsset;
}

export const testimonialsIntro = {
  heading: "How our couples felt!",
} as const;

export const testimonials: readonly Testimonial[] = [
  {
    couple: "Susan & John",
    quote:
      "Geoff exceeded every expectation with artistry, warmth, planning expertise, and breathtaking photos that left us, friends, and family completely amazed.",
    portrait: portrait("1db4f5de"),
  },
  {
    couple: "Chidi & Amara",
    quote:
      "From the first conversation to the final gallery, the process felt effortless - and the photographs took us straight back to the day.",
    portrait: portrait("19ebdd89"),
  },
  {
    couple: "Tunde & Folake",
    quote:
      "He noticed the small, quiet moments we would have missed and turned them into the images we treasure most.",
    portrait: portrait("7425d24c"),
  },
  {
    couple: "Emeka & Ngozi",
    quote:
      "Every frame feels honest and considered. We felt completely at ease in front of the camera.",
    portrait: portrait("ab890b35"),
  },
  {
    couple: "David & Sarah",
    quote:
      "Our gallery tells the whole story of our wedding - the laughter, the tears, the people we love.",
    portrait: portrait("2d356ffe"),
  },
  {
    couple: "Ibrahim & Aisha",
    quote:
      "Worth every moment. The images are refined, timeless and unmistakably ours.",
    portrait: portrait("308fb420"),
  },
];
