"use client";

import { StoryCard } from "@/components/sections/story-card";
import { PaginationCard } from "@/components/ui/pagination-card";
import type { WeddingStory } from "@/content/stories";
import { usePagedSection } from "@/hooks/use-paged-section";
import { cn } from "@/lib/utils";

/** Three stories per page - the count the studio asked for. */
const PER_PAGE = 3;

/**
 * The Wedding Stories index grid - Figma node 178:738 `manifesto-section`
 * (1240px wide, 44px gaps, up to three columns).
 *
 * Below `lg` the cards sit one or two to a row, so the grid is paginated three
 * stories at a time with the shared pagination card (393:6565). From `lg` up all
 * of them are on screen at once, exactly as the desktop frame draws it, and
 * nothing is paginated.
 *
 * Every card is rendered and the out-of-page ones are hidden rather than sliced,
 * so the stories stay in the document for crawlers.
 */
export function StoryGrid({ stories }: { stories: readonly WeddingStory[] }) {
  const { page, pageCount, changePage, contentRef } = usePagedSection(stories.length, PER_PAGE);

  const isOnPage = (index: number) => index >= page * PER_PAGE && index < (page + 1) * PER_PAGE;

  return (
    <>
      <section className="px-5 pb-20 lg:px-[100px]">
        <div
          ref={contentRef}
          className="mx-auto grid max-w-[1240px] scroll-mt-24 grid-cols-1 gap-11 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stories.map((story, index) => (
            <div key={story.slug} className={cn(!isOnPage(index) && "hidden lg:block")}>
              <StoryCard story={story} />
            </div>
          ))}
        </div>
      </section>

      {pageCount > 1 && (
        <div className="lg:hidden">
          <PaginationCard
            page={page}
            pageCount={pageCount}
            totalItems={stories.length}
            perPage={PER_PAGE}
            onPageChange={changePage}
            label="Wedding stories pagination"
          />
        </div>
      )}
    </>
  );
}
