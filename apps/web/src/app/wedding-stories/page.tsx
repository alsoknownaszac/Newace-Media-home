import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { PhotoMasonry } from "@/components/sections/photo-masonry";
import { StoryCard } from "@/components/sections/story-card";
import { weddingStories, weddingStoriesIntro } from "@/content/stories";
import { storyGridMobileImages, storyGridRows } from "@/content/stories-grid";

/**
 * WEDDING STORIES index - rebuilt 1:1 from Figma node 178:738 (desktop) /
 * 344:2312 (mobile): "Wedding Stories" wordmark + six-card grid + photo grid +
 * form + footer.
 */
export const metadata: Metadata = {
  title: "Wedding Stories",
  description: "Engagements, weddings and traditional celebrations - captured with intention.",
  alternates: { canonical: "/wedding-stories" },
  openGraph: {
    title: "Wedding Stories",
    description: "Engagements, weddings and traditional celebrations - captured with intention.",
    url: "/wedding-stories",
  },
};

export default function WeddingStoriesPage() {
  return (
    <div className="flex w-full flex-col bg-[#faf7f2]">
      {/* Hero - node 178:738 "Hero Section" */}
      <section className="flex w-full flex-col items-center gap-5 px-5 pb-10 pt-6 lg:gap-6 lg:px-20 lg:pb-16 lg:pt-24">
        <h1 className="text-center font-display text-[48px] font-normal leading-[1.05] tracking-[-0.48px] text-primary-systemcoal lg:text-[128px] lg:leading-[140.8px] lg:tracking-[-1.28px]">
          {weddingStoriesIntro.heading}
        </h1>
        <p className="text-center font-body text-sm font-normal leading-[21px] text-primary-systemmid-gray lg:text-[18px] lg:leading-[28.8px]">
          {weddingStoriesIntro.subtitle}
        </p>
      </section>

      {/* Story grid - node 178:738 "manifesto-section" (100/80 padding, 44px gaps) */}
      <section className="px-5 pb-20 lg:px-[100px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-11 sm:grid-cols-2 lg:grid-cols-3">
          {weddingStories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>

      {/* Photo grid - node 178:743 "enquire-drawer-section"
          (desktop 40px sides / 48px vertical; mobile full-bleed with 60px below) */}
      <section className="w-full pb-[60px] lg:px-10 lg:pb-12 lg:pt-12">
        <PhotoMasonry rows={storyGridRows} mobileImages={storyGridMobileImages} />
      </section>

      {/* Start a conversation - node 178:738 "enquire-drawer-section" */}
      <ContactSection />
    </div>
  );
}
