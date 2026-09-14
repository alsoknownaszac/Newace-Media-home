import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { BehindTheLensShowcaseSection } from "./sections/BehindTheLensShowcaseSection";
import { CoupleTestimonialsSection } from "./sections/CoupleTestimonialsSection";
import { CustomWeddingPackagesSection } from "./sections/CustomWeddingPackagesSection";
import { LoveStoryGallerySection } from "./sections/LoveStoryGallerySection";
import { PhotographerPortfolioSection } from "./sections/PhotographerPortfolioSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";
import { WeddingInquiryFormSection } from "./sections/WeddingInquiryFormSection";
import { WeddingPhilosophyQuoteSection } from "./sections/WeddingPhilosophyQuoteSection";
import { WeddingPhotographyHeroSection } from "./sections/WeddingPhotographyHeroSection";
import { WeddingStoryCallToActionSection } from "./sections/WeddingStoryCallToActionSection";

const navigationItems = [
  { label: "HOME", id: "hero" },
  { label: "ABOUT", id: "about", href: "/about" },
  { label: "PORTFOLIO", id: "portfolio" },
  { label: "WEDDING STORIES", id: "wedding-stories" },
  { label: "BEHIND THE SCENES", id: "behind-the-scenes" },
  { label: "CONTACT US", id: "contact" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Home = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#111111]">
      <header className="flex h-20 w-full items-center bg-primary-systemivory">
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-6 lg:px-20">
          <img
            className="h-[84.8px] w-40 shrink-0"
            alt="Newace LOGO"
            src="/figmaAssets/newace-logo-transparent-1--vectorized-.svg"
          />
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-8">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <button
                      type="button"
                      onClick={() =>
                        item.href
                          ? (window.location.href = item.href)
                          : scrollToSection(item.id)
                      }
                      data-testid={`nav-link-${item.id}`}
                      className="flex h-[34px] items-center justify-center px-2 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal [font-style:var(--web-label-s-font-style)] transition-colors hover:text-primary-systemwarm-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {item.label}
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  data-testid="nav-enquire-desktop"
                  className="h-11 rounded-none border-[#171615] bg-transparent px-8 py-[15px] font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal transition-colors hover:bg-primary-systemcoal hover:text-primary-systemivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [font-style:var(--web-label-s-font-style)]"
                >
                  ENQUIRE
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            type="button"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            data-testid="nav-enquire-mobile"
            className="h-11 rounded-none border-[#171615] bg-transparent px-6 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemcoal transition-colors hover:bg-primary-systemcoal hover:text-primary-systemivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:hidden [font-style:var(--web-label-s-font-style)]"
          >
            ENQUIRE
          </Button>
        </div>
      </header>
      <main className="flex w-full flex-col">
        <WeddingPhotographyHeroSection />
        <LoveStoryGallerySection />
        <WeddingPhilosophyQuoteSection />
        <BehindTheLensShowcaseSection />
        <PhotographerPortfolioSection />
        <CustomWeddingPackagesSection />
        <CoupleTestimonialsSection />
        <WeddingInquiryFormSection />
        <WeddingStoryCallToActionSection />
      </main>
      <SiteFooterSection />
    </div>
  );
};
