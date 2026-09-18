/**
 * "Behind the lens" journal entries - featured on the home page as a two-card
 * teaser and listed in full on /behind-the-scenes.
 *
 * Source: the Figma "Behind the Lens" frame. Both cards share the same title
 * and couple name in the design; that duplication is preserved here so the port
 * stays faithful. TODO(content): supply the real story titles, couples, dates
 * and slugs, then the list can drive /behind-the-scenes/[slug] detail pages.
 */
import type { MediaAsset } from "./media";
import { media } from "./media";

export interface JournalEntry {
  readonly title: string;
  readonly couple: string;
  readonly image: MediaAsset;
  /** TODO(content): confirm story dates + slugs with the client. */
  readonly slug?: string;
  readonly date?: string;
}

export const journalIntro = {
  eyebrow: "Our philosophy",
  heading: {
    lead: "Behind ",
    emphasis: "the ",
    tail: "Lens",
  },
  summary:
    "The people, the atmosphere and the moments in between - a closer look at how a Newace wedding day unfolds.",
} as const;

export const journalEntries: readonly JournalEntry[] = [
  {
    title: "A dream come true, celebrating first loves",
    couple: "John-Paul & Millicent",
    image: media.journalPrimary,
  },
  {
    title: "A dream come true, celebrating first loves",
    couple: "John-Paul & Millicent",
    image: media.journalSecondary,
  },
];
