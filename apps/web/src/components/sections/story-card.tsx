import Image from "next/image";
import Link from "next/link";

import type { WeddingStory } from "@/content/stories";

/**
 * A single story card (Figma node 178:738): image, title, couple + divider.
 * Links to the story detail page.
 */
export function StoryCard({ story }: { story: WeddingStory }) {
  return (
    <Link
      href={`/wedding-stories/${story.slug}`}
      className="group flex flex-col gap-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal focus-visible:ring-offset-2"
    >
      <div className="overflow-hidden">
        <Image
          src={story.cover.src}
          alt=""
          aria-hidden="true"
          width={story.cover.width}
          height={story.cover.height}
          sizes="(max-width: 1024px) 100vw, 384px"
          className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[344px]"
        />
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="font-display text-[24px] font-normal leading-[1.1] text-primary-systemcoal lg:text-[40px]">
          {story.title}
        </h3>
        <div className="flex flex-col gap-4">
          <p className="font-display text-[18px] font-normal leading-[1.35] text-primary-systemcoal">
            {story.couple}
          </p>
          <span aria-hidden="true" className="h-px w-10 bg-primary-systemwarm-gray" />
        </div>
      </div>
    </Link>
  );
}
