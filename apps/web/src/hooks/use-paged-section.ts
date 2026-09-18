"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Page state for a paginated block, plus the scroll handling that has to go with
 * it: every one of these pagers sits *below* the content it drives, so switching
 * page would otherwise swap in content the reader cannot see. The content is
 * scrolled back into view on each change - attach `contentRef` to it and give it
 * `scroll-mt-*` so it clears the header.
 */
export function usePagedSection(totalItems: number, perPage: number) {
  const [page, setPage] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const pageCount = Math.max(1, Math.ceil(totalItems / perPage));
  const currentPage = Math.min(page, pageCount - 1);

  const changePage = useCallback(
    (next: number) => {
      setPage(Math.min(pageCount - 1, Math.max(0, next)));
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [pageCount],
  );

  return { page: currentPage, pageCount, changePage, contentRef };
}
