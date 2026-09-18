/**
 * Founder bio ("Behind the lens") - shown on the home page next to the
 * portrait, and reused as the /about "Meet the founder" intro.
 *
 * TODO(content): CONFLICT TO RESOLVE WITH THE CLIENT. This section names the
 * photographer "Samuel Orieka" (7 years, 500+ weddings, based in Delta State),
 * while the About page says "Hi, I'm Newace" and quotes 8+ years, 250+ weddings
 * and 10+ destinations. Both versions were carried over unchanged so nothing is
 * lost; exactly one of them has to win before launch.
 */
import { media } from "./media";

export const founderBio = {
  eyebrow: "Behind the lens",
  name: "Samuel Orieka",
  credentials: "Trusted by 500+ couples across Delta State and Nigeria",
  paragraphs: [
    "For over a decade, I've photographed weddings and celebrations across Nigeria and beyond, documenting 500+ weddings along the way.",
    "From traditional weddings in the South-South to contemporary celebrations across Nigeria, that experience has taught me something simple: No two weddings unfold the same way.",
    "I pay attention to the things that happen between the planned moments; the anticipation before the ceremony, the movement of a dress, the people watching from the edges of the room, the laughter between friends and the quiet exchanges that can easily go unnoticed.",
  ],
  /** Rendered with the trailing phrase in bold, as in Figma. */
  closing: {
    lead: "My approach is straightforward: ",
    emphasis: "observe, understand and capture",
  },
  cta: "LEARN MORE",
  portrait: media.founderPortrait,
} as const;
