/**
 * /about page content - verbatim from Figma node 154:764 (desktop) / 336:1714
 * (mobile). The founder is Samuel Orieka; the studio is NewAce Media.
 */

export const aboutBrand = {
  eyebrow: "MEET NEWACE MEDIA",
  heading: "A Decade Of Documenting True Celebration.",
  summary:
    "NewAce Media is a Nigerian wedding photography studio capturing celebrations with intention, artistry and precision. For over a decade, we've documented 500+ weddings across Nigeria and beyond, creating timeless visual stories that preserve the emotion, culture and elegance of every celebration.",
  /** Banner image (1240x400 in the design, landscape, stretched). */
  banner: { src: "/images/portfolio/35de701c.webp", width: 1920, height: 1280 },
  stats: [
    { value: "500+", label: "WEDDINGS PHOTOGRAPHED" },
    { value: "10", label: "years of documenting" },
  ],
} as const;

export const aboutPromise = {
  eyebrow: "Our promise",
  quote:
    "A wedding lasts a day. The photographs become part of the family history. We approach every celebration with that responsibility in mind. Because for us, a photograph is more than an image. It is a memory you get to return to.",
  attribution: "NewAce",
} as const;

export const aboutFounder = {
  eyebrow: "LED BY SAMUEL ORIEKA",
  heading: "A Storyteller at Heart",
  subheading: "Trusted by 500+ couples across Delta state and Nigeria",
  paragraphs: [
    "After more than a decade of photographing weddings, I've learned that the moments you'll remember most aren't always the ones you planned.",
    "They happen in the seconds between them; the look across the room, a parent's reaction, the laughter that takes over the dance floor, the quiet moment before everything begins.",
    "My approach is simple: understand the day, pay attention, and know when to step in. I'll guide you when a photograph calls for it, and step back when the moment is better left alone.",
    "The goal isn't to direct every second or turn your wedding into a photoshoot. It's to be present enough to notice what's happening and experienced enough to know what to do with it.",
    "Because good wedding photography shouldn't just show you what happened. Years from now, it should make you feel like you were there all over again.",
  ],
  name: "SAMUEL ORIEKA",
  title: "Founder & Lead Photographer, Newace Media",
  portrait: { src: "/images/about/7726f3ec.webp", width: 2730, height: 4096 },
} as const;

export const aboutExperience = {
  eyebrow: "THE NEWACE EXPERIENCE",
  heading: "Uniquely Custom. Entirely Effortless.",
  summary:
    "From our first conversation to the final delivery of your images, every detail is considered with intention, creating a seamless, elevated experience from beginning to end.",
  steps: [
    {
      number: "01",
      title: "Understand & Prepare",
      description:
        "Your story comes first. We take the time to get to know you, understand your vision and the character of your celebration. With thoughtful preparation, we make sure we're ready to capture what matters.",
    },
    {
      number: "02",
      title: "Observe & Capture",
      description:
        "We let the moments unfold naturally. With patience, careful observation and gentle direction, we document the day as it happens, from refined portraits and meaningful details to the laughter, emotion and fleeting connections in between.",
    },
    {
      number: "03",
      title: "Preserve the feeling",
      description:
        "We bring everything together to create a timeless visual story that feels authentic to you. Years from now, we want your photographs to do more than show you how the day looked, we want them to take you back to how it felt.",
    },
  ],
} as const;

export const aboutClosingCta = {
  heading: "Every love story deserves to be captured",
  summary:
    "Your wedding deserves to be remembered exactly as it felt. We'd love to hear your plans and explore how we can tell your story.",
  action: "capture my moments",
  image: { src: "/images/about/a7d0158c.webp", width: 2731, height: 4096 },
} as const;
