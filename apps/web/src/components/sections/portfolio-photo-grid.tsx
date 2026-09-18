"use client";

import { PhotoMasonry } from "@/components/sections/photo-masonry";
import { PaginationCard } from "@/components/ui/pagination-card";
import { portfolioGridRows, portfolioMobileImages } from "@/content/portfolio-grid";
import { usePagedSection } from "@/hooks/use-paged-section";

/** Six photographs per page below `lg` - the count the studio asked for. */
const PER_PAGE = 6;

/**
 * The portfolio photo grid - Figma nodes 154:917 (desktop) / 344:2014 (mobile).
 *
 * Desktop is untouched: all seven masonry rows, no pagination. Below `lg` the
 * single-column list of 34 photographs is broken into pages of six with the
 * shared pagination card (393:6565) underneath it. Only the mobile list is
 * sliced - the desktop rows are identical on every page because the page is only
 * ever seen below `lg`.
 */
export function PortfolioPhotoGrid() {
  const total = portfolioMobileImages.length;
  const { page, pageCount, changePage, contentRef } = usePagedSection(total, PER_PAGE);
  const visibleImages = portfolioMobileImages.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  return (
    <>
      <section className="w-full py-12 lg:px-10">
        <div ref={contentRef} className="scroll-mt-24">
          <PhotoMasonry rows={portfolioGridRows} mobileImages={visibleImages} interactive />
        </div>
      </section>

      {pageCount > 1 && (
        <div className="lg:hidden">
          <PaginationCard
            page={page}
            pageCount={pageCount}
            totalItems={total}
            perPage={PER_PAGE}
            onPageChange={changePage}
            label="Portfolio pagination"
          />
        </div>
      )}
    </>
  );
}
