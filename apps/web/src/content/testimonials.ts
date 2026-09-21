/**
 * Couple testimonials - "How our couples felt!" carousel.
 *
 * All entries below are real, provided couple quotes.
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
    couple: "Sophia & Emmanuel",
    quote:
      "Choosing NewAce Media to document our wedding was one of the best decisions we made.\n\nComing from the United States to Nigeria for our wedding, we wanted a team we could trust completely—and from our very first conversation, NewAce Media gave us exactly that confidence.\n\nFrom our first call, the team was warm, attentive, and intentional about understanding what we wanted. They took the time to listen to our vision, offer thoughtful recommendations, and walk us through every step with patience and ease.\n\nAnd our pre-wedding session? We honestly don’t have enough words for it. The experience was incredible. They brought so much creativity, energy, and direction to the shoot, making us feel completely comfortable in front of the camera while bringing our vision to life.\n\nNewAce Media is an exceptional team, and we are genuinely grateful that we chose them to document such an important chapter of our lives.\n\nIf you’re looking for one of the best media teams in Nigeria, look no further. We love you guys, and we’re rooting for you!",
    portrait: portrait("ts001"),
  },
  {
    couple: "Tega & Sylvester",
    quote:
      "From the very beginning of our pre-wedding shoot to our wedding day, NewAce Media was there every step of the way.\n\nThey made the entire experience feel effortless. From ensuring that every detail was just right to encouraging me whenever I felt tired, they were constantly reassuring me and reminding me just how beautiful I looked.\n\nThat encouragement made such a difference. Instead of feeling like I was simply being photographed, I felt seen, confident, and completely comfortable throughout the experience.\n\nNewAce Media made the entire process easy, enjoyable, and memorable, and we are so grateful for the beautiful photographs and the memories they created for us.\n\nThank you, NewAce Media, for making me feel beautiful and capturing our wedding day so perfectly. We would absolutely recommend you.",
    portrait: portrait("ts002"),
  },
  {
    couple: "Ufuoma & Onyeka",
    quote:
      "From our very first photoshoot, working with NewAce Media was such a beautiful experience.\n\nHe was warm, accommodating, and incredibly helpful throughout the entire process—recommending locations, guiding us through each session, and even demonstrating poses so we could get the very best from every shot.\n\nWhat stood out most was his patience and professionalism. He was always punctual, arriving early for our traditional wedding, impeccably dressed and fully prepared. Even when the rain came down and there were so many guests wanting photographs, he remained calm, patient, and attentive to everyone.\n\nAt one point, he was even shielding me from the rain with an umbrella while making sure the photography continued seamlessly. That level of thoughtfulness meant so much to me.\n\nI genuinely loved our experience with NewAce Media. They made us feel cared for, comfortable, and confident throughout the entire process.\n\nI would recommend NewAce Media anytime, any day.",
    portrait: portrait("ts003"),
  },
  {
    couple: "Lydia & Samson",
    quote:
      "When you want to look back at your wedding photographs and smile, NewAce Media is the team to choose.\n\nWe engaged NewAce Media for both our traditional and white wedding, and from start to finish, they delivered far beyond beautiful photographs.\n\nThey took the time to understand our vision and guided us thoughtfully through poses, styling, and creative direction, ensuring that every image felt intentional and true to us. Their punctuality, professionalism, and attention to detail were equally impressive.\n\nOur wedding day fell on an environmental sanitation day, when movement was restricted until 10 a.m. Yet, NewAce Media arrived at our hotel as early as 7 a.m. They even went the extra mile to arrange a room where we could prepare—an unexpected expense that was not part of our original plan.\n\nThat experience perfectly captured what we came to appreciate about NewAce Media: they don’t simply show up to take photographs. They anticipate needs, solve problems, and make sure their clients are taken care of.\n\nFor us, that is the kind of value that goes far beyond photography. We would recommend NewAce Media over and over again.",
    portrait: portrait("ts004"),
  },
  {
    couple: "Rita & Ovie",
    quote:
      "Some moments take years to arrive, and having NewAce Media document mine made it even more special.\n\nI had wanted NewAce to be my photographer since 2015, so finally having them capture such an important chapter of my life was truly a long-awaited dream come true.\n\nThank you for the wonderful photographs and for documenting my event exactly the way I had always imagined it.\n\nThroughout the entire experience, NewAce was incredibly patient, kind, calm, and genuinely caring. I never felt rushed or overwhelmed. Instead, I felt completely comfortable knowing that such an important moment was in the hands of someone who truly cared about getting it right.\n\nThank you, NewAce Media, for giving me photographs and memories that I will cherish for years to come.",
    portrait: portrait("ts005"),
  },
];
