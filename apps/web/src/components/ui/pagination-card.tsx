"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * The Figma pagination card - node 393:6565, drawn once for the Behind the
 * Scenes rail and reused by every paginated mobile grid.
 *
 *   Page 1 of 4                    1-6 of 20
 *   ------------------------------------------
 *   [ < ]      1   2   3   4      [ > ]
 *
 * "Page n of m" counts pages, the right-hand counter counts the items themselves,
 * the 32px squares are the design's `1 2 3 4 ... 10` window (coal for the active
 * page, beige otherwise) and previous/next are 40px beige squares. The design
 * clips that row, so the control keeps a fixed width at any number of pages.
 */

/** A run of pages around the current one, with `"gap"` standing in for the `...`. */
function pageWindow(current: number, count: number): readonly (number | "gap")[] {
  if (count <= 6) return Array.from({ length: count }, (_, index) => index);

  const keep = new Set<number>([0, count - 1, current]);
  if (current - 1 > 0) keep.add(current - 1);
  if (current + 1 < count - 1) keep.add(current + 1);

  const pages = [...keep].sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  let previous = -1;
  for (const page of pages) {
    if (previous >= 0 && page - previous > 1) out.push("gap");
    out.push(page);
    previous = page;
  }
  return out;
}

export interface PaginationCardProps {
  /** Zero-based current page. */
  readonly page: number;
  readonly pageCount: number;
  readonly totalItems: number;
  readonly perPage: number;
  readonly onPageChange: (page: number) => void;
  /** Announced to screen readers, e.g. "Wedding stories pagination". */
  readonly label?: string;
}

export function PaginationCard({
  page,
  pageCount,
  totalItems,
  perPage,
  onPageChange,
  label = "Pagination",
}: PaginationCardProps) {
  const firstItem = page * perPage + 1;
  const lastItem = Math.min(totalItems, (page + 1) * perPage);
  const isFirst = page === 0;
  const isLast = page === pageCount - 1;

  const controlClassName =
    "flex h-10 w-10 shrink-0 items-center justify-center bg-primary-systembeige text-primary-systemcoal transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal disabled:opacity-40";

  return (
    <nav aria-label={label} className="w-full bg-primary-systemivory">
      <div aria-live="polite" className="flex items-center justify-between px-5 py-5">
        <p className="font-body text-sm font-normal leading-[21px] text-primary-systemcoal">
          Page {page + 1} of {pageCount}
        </p>
        <p className="font-body text-sm font-normal leading-[21px] text-primary-systemcoal">
          {firstItem}-{lastItem} of {totalItems}
        </p>
      </div>

      <div className="h-px w-full bg-primary-systembeige" />

      <div className="flex items-center gap-3 px-5 py-5">
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={isFirst}
          aria-label="Previous page"
          className={controlClassName}
        >
          <ChevronLeft className="h-[18px] w-[18px]" />
        </button>

        <div className="flex flex-1 items-center gap-2 overflow-hidden">
          {pageWindow(page, pageCount).map((entry, index) =>
            entry === "gap" ? (
              <span
                key={`gap-${index}`}
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center bg-primary-systembeige font-body text-sm font-medium leading-[19.6px] text-primary-systemcoal"
              >
                ...
              </span>
            ) : (
              <button
                key={`page-${entry}`}
                type="button"
                onClick={() => onPageChange(entry)}
                aria-label={`Go to page ${entry + 1}`}
                aria-current={entry === page ? "page" : undefined}
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center font-body text-sm font-medium leading-[19.6px] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemcoal",
                  entry === page
                    ? "bg-primary-systemcoal text-primary-systemivory"
                    : "bg-primary-systembeige text-primary-systemcoal",
                )}
              >
                {entry + 1}
              </button>
            ),
          )}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={isLast}
          aria-label="Next page"
          className={controlClassName}
        >
          <ChevronRight className="h-[18px] w-[18px]" />
        </button>
      </div>
    </nav>
  );
}
