/**
 * Wedding stories - index cards + detail content.
 *
 * Story 1 ("john-paul & millicent") is verbatim from Figma nodes 178:1035 /
 * 344:2553. Stories 2-6 are placeholders so the index grid has six cards
 * (matching the design); TODO(content): replace them with real stories.
 */
import type { MediaAsset } from "./media";

const story = (file: string, width: number, height: number): MediaAsset => ({
  src: `/images/stories/${file}.webp`,
  width,
  height,
});

const portfolio = (file: string, width = 1600, height = 1600): MediaAsset => ({
  src: `/images/portfolio/${file}.webp`,
  width,
  height,
});

export interface StoryChapter {
  readonly label: string;
  readonly heading: string;
  readonly body: string;
}

export interface WeddingStory {
  readonly slug: string;
  readonly couple: string;
  readonly title: string;
  readonly intro: string;
  /** Index-card image. */
  readonly cover: MediaAsset;
  /** Full-bleed image at the top of the detail page. */
  readonly featured: MediaAsset;
  readonly gallery: readonly MediaAsset[];
  readonly chapters: readonly StoryChapter[];
}

export const weddingStoriesIntro = {
  heading: "Wedding Stories",
  subtitle: "ENGAGEMENTS - WEDDINGS - TRADITIONAL",
} as const;

export const weddingStories: readonly WeddingStory[] = [
  {
    slug: "john-paul-millicent",
    couple: "john-paul & millicent",
    title: "An Intimate Celebration Filled With Love And Quiet Moments.",
    intro:
      "Some love stories are loud, others are found in the smallest gestures. With these two, it was in the way they looked at each other — effortlessly, completely, and without needing to say a word.",
    cover: portfolio("19ebdd89"),
    featured: story("565db5fe", 1440, 760),
    gallery: [
      story("5f10838e", 1600, 2400),
      portfolio("19ebdd89"),
      portfolio("7425d24c"),
      portfolio("1e6534c0"),
      story("3bd60c20", 1600, 882),
      portfolio("ab890b35"),
      portfolio("2d356ffe"),
      story("39d60fa9", 1600, 2400),
      story("fd22c4b0", 1600, 2400),
    ],
    chapters: [
      {
        label: "reception",
        heading: "Dinner, Laughter, and That Perfect Sunset Glow",
        body: "As the sun started painting the sky in those famous Tuscan golden hues, everyone gathered in the farmhouse courtyard. There's something about eating incredible Italian food under string lights with people you love that just hits different. The conversation flowed as freely as the wine, and you could feel that special energy that happens when Americans and Italians come together to celebrate love.",
      },
    ],
  },
  {
    slug: "story-two",
    couple: "John-Paul & Millicent",
    title: "A dream come true, celebrating first loves",
    intro: "TODO(content): replace with the real story introduction.",
    cover: portfolio("7425d24c"),
    featured: portfolio("7425d24c"),
    gallery: [portfolio("ab890b35"), portfolio("2d356ffe")],
    chapters: [],
  },
  {
    slug: "story-three",
    couple: "John-Paul & Millicent",
    title: "A dream come true, celebrating first loves",
    intro: "TODO(content): replace with the real story introduction.",
    cover: portfolio("ab890b35"),
    featured: portfolio("ab890b35"),
    gallery: [portfolio("2d356ffe"), portfolio("1e6534c0")],
    chapters: [],
  },
  {
    slug: "story-four",
    couple: "John-Paul & Millicent",
    title: "A dream come true, celebrating first loves",
    intro: "TODO(content): replace with the real story introduction.",
    cover: portfolio("2d356ffe"),
    featured: portfolio("2d356ffe"),
    gallery: [portfolio("19ebdd89"), portfolio("7425d24c")],
    chapters: [],
  },
  {
    slug: "story-five",
    couple: "John-Paul & Millicent",
    title: "A dream come true, celebrating first loves",
    intro: "TODO(content): replace with the real story introduction.",
    cover: portfolio("308fb420"),
    featured: portfolio("308fb420"),
    gallery: [portfolio("1e6534c0"), portfolio("ab890b35")],
    chapters: [],
  },
  {
    slug: "story-six",
    couple: "John-Paul & Millicent",
    title: "A dream come true, celebrating first loves",
    intro: "TODO(content): replace with the real story introduction.",
    cover: portfolio("1db4f5de"),
    featured: portfolio("1db4f5de"),
    gallery: [portfolio("7425d24c"), portfolio("2d356ffe")],
    chapters: [],
  },
];

export function getWeddingStory(slug: string): WeddingStory | undefined {
  return weddingStories.find((story) => story.slug === slug);
}

export function getRelatedStories(slug: string, count = 2): readonly WeddingStory[] {
  return weddingStories.filter((story) => story.slug !== slug).slice(0, count);
}

/** Split a flat image list into gallery rows (two per row). */
export function toGalleryRows(
  images: readonly MediaAsset[],
  perRow = 2,
): readonly (readonly MediaAsset[])[] {
  const rows: MediaAsset[][] = [];
  for (let index = 0; index < images.length; index += perRow) {
    rows.push(images.slice(index, index + perRow));
  }
  return rows;
}
