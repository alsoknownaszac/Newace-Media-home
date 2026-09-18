import type { Metadata } from "next";

import { BtsGallery } from "@/components/sections/bts-gallery";
import { ClosingCtaSection } from "@/components/sections/closing-cta-section";
import { StoryCard } from "@/components/sections/story-card";
import { btsIntro } from "@/content/bts";
import { weddingStories } from "@/content/stories";

/**
 * BEHIND THE SCENES (Behind the Lens) - rebuilt 1:1 from Figma node 181:1478
 * (desktop) / 344:3243 (mobile): hero → featured media → "Latest Behind the
 * Scenes" grid → "Wedding Stories" teaser → closing CTA.
 */
export const metadata: Metadata = {
  title: "Behind the Scenes",
  description: btsIntro.intro,
  alternates: { canonical: "/behind-the-scenes" },
  openGraph: {
    title: "Behind the Scenes",
    description: btsIntro.intro,
    url: "/behind-the-scenes",
  },
};

export default function BehindTheScenesPage() {
  const featuredStories = weddingStories.slice(0, 3);

  return (
    <div className="flex w-full flex-col bg-[#faf7f2]">
      {/* Hero - node 181:1478 "Hero Section" */}
      <section className="flex w-full flex-col items-center gap-6 px-5 pb-10 pt-6 lg:gap-6 lg:px-20 lg:pb-16 lg:pt-24">
        <p className="font-body text-xs font-medium text-[#6e6a66]">{btsIntro.eyebrow}</p>
        <h1 className="max-w-[742px] text-center font-display text-[40px] font-normal leading-[1.05] text-primary-systemcoal lg:text-[64px] lg:leading-[64px]">
          {btsIntro.heading}
        </h1>
        <p className="max-w-[827px] text-center font-body text-[14px] font-normal leading-[1.6] text-primary-systemmid-gray lg:text-[20px]">
          {btsIntro.intro}
        </p>
      </section>

      {/* Featured media + Latest Behind the Scenes (click to open viewer) */}
      <BtsGallery />

      {/* Wedding Stories teaser - node 181:1478 "Hero Section" + "manifesto-section" */}
      <section className="flex w-full flex-col items-center gap-5 px-5 pb-10 pt-6 lg:gap-6 lg:px-20 lg:pb-16 lg:pt-24">
        <h2 className="text-center font-display text-[48px] font-normal leading-[1.05] tracking-[-0.48px] text-primary-systemcoal lg:text-[128px] lg:leading-[140.8px] lg:tracking-[-1.28px]">
          Wedding Stories
        </h2>
        <p className="text-center font-body text-sm font-normal leading-[21px] text-primary-systemmid-gray lg:text-[18px] lg:leading-[28.8px]">
          ENGAGEMENTS - WEDDINGS - TRADITIONAL
        </p>
      </section>

      <section className="px-5 pb-20 lg:px-[100px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-11 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>

      {/* Closing CTA - node 181:1478 "hero-section" */}
      <ClosingCtaSection />
    </div>
  );
}
