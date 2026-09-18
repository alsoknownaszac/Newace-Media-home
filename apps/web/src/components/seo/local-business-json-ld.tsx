import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Organization / LocalBusiness structured data.
 *
 * Only facts that already exist in the site content are emitted - no invented
 * ratings, price ranges or opening hours. Update `site.contact` and the social
 * URLs and this markup follows.
 */
export function LocalBusinessJsonLd() {
  const siteUrl = getSiteUrl();

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: siteUrl,
    image: `${siteUrl}/images/heroimage.webp`,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.addressLines[0],
      addressLocality: "Warri",
      addressRegion: "Delta State",
      addressCountry: "NG",
    },
    areaServed: ["Delta State", "Nigeria", "International"],
    knowsAbout: [
      "Wedding photography",
      "Editorial wedding photography",
      "Traditional wedding photography",
    ],
    sameAs: [
      "https://instagram.com/",
      "https://facebook.com/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Structured data must be raw JSON; React escapes text children, so this
      // is injected as HTML. The payload is built from static content only.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
