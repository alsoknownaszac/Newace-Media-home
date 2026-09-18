const DEFAULT_SITE_URL = "https://www.newacemedia.com";

/**
 * Resolves the public origin used for canonical URLs, the sitemap, robots.txt,
 * Open Graph tags and structured data.
 *
 * Never throws: if NEXT_PUBLIC_SITE_URL is unset, empty, missing a protocol or
 * otherwise unparseable, it falls back to the default origin. This guards
 * `next build` (e.g. on Vercel) against `TypeError: Invalid URL`.
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configured) {
    return DEFAULT_SITE_URL;
  }

  try {
    const url = new URL(configured.includes("://") ? configured : `https://${configured}`);
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

/** Turns a site-relative path (e.g. "/images/foo.webp") into an absolute URL. */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}
