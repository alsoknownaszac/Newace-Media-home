import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * On-brand 404.
 *
 * The Figma implementation shipped the shadcn placeholder card that says "Did
 * you forget to add the page to the router?" - developer copy, on a light grey
 * background with an unstyled red icon. It is also marked noindex so a wrong URL
 * never competes with the real pages.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-8 bg-primary-systemivory px-6 py-24 text-center">
      <p className="font-web-label-s text-xs font-medium uppercase tracking-[2px] text-primary-systemwarm-gray">
        404
      </p>
      <h1 className="max-w-[720px] font-web-display-XXL text-[40px] leading-[1] text-primary-systemcoal sm:text-6xl">
        We could not find that page.
      </h1>
      <p className="max-w-[520px] font-web-body-s text-base leading-[1.6] text-primary-systemmid-gray">
        The link may be out of date, or the story may have moved. Explore the portfolio or start a
        conversation instead.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <Button
          asChild
          className="h-11 rounded-none bg-primary-systemcoal px-8 font-web-label-s text-xs font-medium uppercase text-primary-systemivory hover:bg-primary-systemcoal/90"
        >
          <Link href="/portfolio">VIEW PORTFOLIO</Link>
        </Button>
        <Button asChild variant="ghost" className="h-11 rounded-none px-0 text-primary-systemcoal">
          <Link href="/">BACK TO HOME →</Link>
        </Button>
      </div>
    </section>
  );
}
