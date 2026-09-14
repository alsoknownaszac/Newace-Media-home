import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const sectionItems = [
  { label: "PORTFOLIO", sectionId: "portfolio" },
  { label: "WEDDING STORIES", sectionId: "wedding-stories" },
  { label: "BEHIND THE SCENES", sectionId: "behind-the-scenes" },
  { label: "CONTACT US", sectionId: "contact" },
];

let pendingSectionId: string | null = null;

const linkClassName =
  "flex h-[34px] items-center justify-center px-2 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal [font-style:var(--web-label-s-font-style)] transition-colors hover:text-primary-systemwarm-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export const Navbar = (): JSX.Element => {
  const [location, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (location !== "/" || !pendingSectionId) return;

    const sectionId = pendingSectionId;
    pendingSectionId = null;
    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "auto" });
    });
  }, [location]);

  const closeMenu = () => setMobileMenuOpen(false);

  const prepareHomeNavigation = () => {
    pendingSectionId = "hero";
    closeMenu();
  };

  const goToSection = (sectionId: string) => {
    closeMenu();

    if (location === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    pendingSectionId = sectionId;
    navigate("/");
  };

  const routeLinks = (
    <>
      <Link href="/" onClick={prepareHomeNavigation} className={linkClassName}>
        HOME
      </Link>
      <Link href="/about" onClick={closeMenu} className={linkClassName}>
        ABOUT
      </Link>
    </>
  );

  const sectionLinks = sectionItems.map((item) => (
    <button
      key={item.sectionId}
      type="button"
      onClick={() => goToSection(item.sectionId)}
      data-testid={`nav-link-${item.sectionId}`}
      className={linkClassName}
    >
      {item.label}
    </button>
  ));

  return (
    <header className="relative z-50 flex h-20 w-full items-center bg-primary-systemivory">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-6 lg:px-20">
        <Link href="/" onClick={prepareHomeNavigation} aria-label="Newace home">
          <img
            className="h-[84.8px] w-40 shrink-0"
            alt="Newace logo"
            src="/figmaAssets/newace-logo-transparent-1--vectorized-.svg"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {routeLinks}
          {sectionLinks}
          <Button
            type="button"
            variant="outline"
            onClick={() => goToSection("contact")}
            data-testid="nav-enquire-desktop"
            className="h-11 rounded-none border-[#171615] bg-transparent px-8 py-[15px] font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal transition-colors hover:bg-primary-systemcoal hover:text-primary-systemivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [font-style:var(--web-label-s-font-style)]"
          >
            ENQUIRE
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
          className="absolute left-0 top-20 flex w-full flex-col items-stretch border-t border-primary-systemwarm-gray bg-primary-systemivory px-6 py-6 shadow-lg lg:hidden"
        >
          {routeLinks}
          {sectionLinks}
          <Button
            type="button"
            onClick={() => goToSection("contact")}
            data-testid="nav-enquire-mobile"
            className="mt-4 h-11 rounded-none bg-primary-systemcoal px-8 font-web-label-s text-xs text-primary-systemivory hover:bg-primary-systemcoal/90"
          >
            ENQUIRE
          </Button>
        </nav>
      )}
    </header>
  );
};