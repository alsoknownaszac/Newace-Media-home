/**
 * Home page content: hero, philosophy quote and the closing call to action.
 * Copy is verbatim from the corresponding Figma frames.
 */
import type { MediaAsset } from "./media";
import { media } from "./media";

export const hero = {
  eyebrow: "Premium wedding photography",
  heading: "We Capture The Moments You'll Cherish Forever.",
  summary:
    "Timeless imagery. Genuine connections. Stories beautifully told through sophisticated editorial lens.",
  /** Alternate crop for narrow viewports (same asset, art-directed sizes). */
  image: media.heroPortrait as MediaAsset,
  actions: [
    { label: "START A CONVERSATION", href: "/contact", variant: "primary" as const },
    { label: "VIEW OUR WORK →", href: "/portfolio", variant: "secondary" as const },
  ],
} as const;

export const philosophy = {
  eyebrow: "Our philosophy",
  quote:
    "A wedding is more than a collection of moments; it is a story unfolding in real time. We pay attention to the people, the atmosphere and the moments in between, knowing that years from now, the photographs should bring you back to how it all felt.",
  attribution: "Newace Media",
  divider: "/icons/line.svg",
} as const;

export const closingCta = {
  heading: "Every love story deserves to be captured",
  summary:
    "Your wedding deserves to be remembered exactly as it felt. We'd love to hear your plans and explore how we can tell your story.",
  action: { label: "capture my moments", href: "/contact" },
  image: { src: "/images/about/a7d0158c.webp", width: 2731, height: 4096 } as MediaAsset,
} as const;
