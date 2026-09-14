import { Navbar } from "@/components/Navbar";
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

export const Home = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#111111]">
      <Navbar />
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
