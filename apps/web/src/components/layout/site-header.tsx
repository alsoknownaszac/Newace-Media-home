"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { primaryNavigation, site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Shared header.
 *
 * The Vite implementation scrolled to in-page anchors with
 * `document.getElementById(...).scrollIntoView()` and carried a module-level
 * `pendingSectionId` variable to survive a route change. Every navigation item
 * is now a real page, so all of that is gone - and the links are crawlable,
 * shareable and work with browser back/forward.
 */
const labelClassName =
  "flex h-[34px] items-center justify-center px-2 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] transition-colors [font-style:var(--web-label-s-font-style)]";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // A navigation always closes the mobile panel.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinks = primaryNavigation.map((item) => {
    const current = isCurrent(item.href);
    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={current ? "page" : undefined}
        className={cn(labelClassName, "text-primary-systemcoal hover:text-primary-systemwarm-gray")}
      >
        {item.label}
      </Link>
    );
  });

  return (
    <header className="relative z-50 flex h-20 w-full items-center bg-primary-systemivory">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-6 lg:px-20">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Image
            src="/icons/newace-logo-transparent-1--vectorized-.svg"
            alt={site.name}
            width={160}
            height={85}
            priority
            unoptimized
            className="h-[84.8px] w-40"
          />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label="Main navigation"
        >
          {navLinks}
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-none border-[#171615] bg-transparent px-8 py-[15px] font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal transition-colors hover:bg-primary-systemcoal hover:text-primary-systemivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [font-style:var(--web-label-s-font-style)]"
          >
            <Link href="/contact">ENQUIRE</Link>
          </Button>
        </nav>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center border border-primary-systemcoal text-primary-systemcoal lg:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 top-20 flex w-full flex-col items-stretch gap-1 border-t border-primary-systemwarm-gray bg-primary-systemivory px-6 py-6 shadow-lg lg:hidden"
        >
          {navLinks}
          <Button
            asChild
            className="mt-4 h-11 rounded-none bg-primary-systemcoal px-8 font-web-label-s text-xs text-primary-systemivory hover:bg-primary-systemcoal/90"
          >
            <Link href="/contact">ENQUIRE</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
