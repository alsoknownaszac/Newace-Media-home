import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { StoryCard } from "@/components/sections/story-card";
import { getRelatedStories, getWeddingStory, weddingStories } from "@/content/stories";
import { absoluteUrl } from "@/lib/site-url";

/**
 * WEDDING STORY DETAIL - rebuilt 1:1 from Figma node 178:1035 (desktop) /
 * 344:2553 (mobile): featured image → title/intro → gallery → chapter(s) →
 * "More Love Stories".
 */
interface WeddingStoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return weddingStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: WeddingStoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getWeddingStory(slug);

  if (!story) {
    return { title: "Story not found", robots: { index: false, follow: false } };
  }

  return {
    title: story.title,
    description: story.intro,
    alternates: { canonical: `/wedding-stories/${story.slug}` },
    openGraph: {
      type: "article",
      title: story.title,
      description: story.intro,
      url: `/wedding-stories/${story.slug}`,
      images: [{ url: absoluteUrl(story.featured.src), width: story.featured.width, height: story.featured.height }],
    },
  };
}

function Gallery({ images }: { images: readonly { src: string; width: number; height: number }[] }) {
  if (images.length === 0) return null;
  return (
    <section className="px-5 py-6 lg:px-10 lg:py-12">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-6 sm:grid-cols-2">
        {images.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt=""
            aria-hidden="true"
            width={image.width}
            height={image.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full object-cover"
          />
        ))}
      </div>
    </section>
  );
}

export default async function WeddingStoryPage({ params }: WeddingStoryPageProps) {
  const { slug } = await params;
  const story = getWeddingStory(slug);

  if (!story) notFound();

  const related = getRelatedStories(slug);
  const firstGallery = story.gallery.slice(0, 4);
  const restGallery = story.gallery.slice(4);

  return (
    <div className="flex w-full flex-col bg-[#faf7f2]">
      {/* Featured image - node 178:1035 "enquire-drawer-section" (beige) */}
      <section className="bg-[#e7e3dc]">
        <Image
          src={story.featured.src}
          alt=""
          aria-hidden="true"
          width={story.featured.width}
          height={story.featured.height}
          sizes="100vw"
          priority
          className="h-[360px] w-full object-cover lg:h-[640px]"
        />
      </section>

      {/* Title block - node 178:1035 "Hero Section" */}
      <section className="px-5 py-16 lg:px-[100px] lg:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6">
          <p className="font-body text-xs font-medium text-primary-systemmid-gray">{story.couple}</p>
          <h1 className="max-w-[877px] font-display text-[32px] font-normal leading-[1.05] text-primary-systemcoal lg:text-[64px] lg:leading-[64px]">
            {story.title}
          </h1>
          <p className="max-w-[826px] font-body text-[14px] font-normal leading-[1.6] text-primary-systemmid-gray lg:text-[20px]">
            {story.intro}
          </p>
        </div>
      </section>

      {/* First gallery - node 178:1035 "enquire-drawer-section" */}
      <Gallery images={firstGallery} />

      {/* Chapters - node 178:1035 "About Brand Section" */}
      {story.chapters.map((chapter) => (
        <section key={chapter.heading} className="bg-[#e7e3dc] px-5 py-16 lg:px-[105px] lg:py-24">
          <div className="flex max-w-[544px] flex-col gap-8">
            <p className="font-body text-xs font-medium text-primary-systemmid-gray">{chapter.label}</p>
            <h2 className="font-display text-[32px] font-normal leading-[1.05] text-primary-systemcoal lg:text-[64px] lg:leading-[64px]">
              {chapter.heading}
            </h2>
            <p className="font-body text-[14px] font-normal leading-[1.6] text-primary-systemmid-gray lg:text-[18px]">
              {chapter.body}
            </p>
          </div>
        </section>
      ))}

      {/* Second gallery */}
      <Gallery images={restGallery} />

      {/* More love stories - node 178:1035 "manifesto-section" */}
      {related.length > 0 && (
        <section className="px-5 pb-20 pt-16 lg:px-[100px] lg:pb-20 lg:pt-24">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-11">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="font-display text-[32px] font-normal leading-[1.05] text-primary-systemcoal lg:text-[64px] lg:leading-[64px]">
                More Love Stories
              </h2>
              <p className="font-body text-sm font-normal leading-[21px] text-primary-systemmid-gray lg:text-[18px] lg:leading-[28.8px]">
                ENGAGEMENTS - WEDDINGS - TRADITIONAL
              </p>
            </div>
            <div className="grid grid-cols-1 gap-11 sm:grid-cols-2">
              {related.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
