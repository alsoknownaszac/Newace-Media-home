/**
 * Site-wide facts: brand, contact details, navigation and social links.
 * Copy and labels match the Figma file (Newace Media) verbatim.
 */
import type { MediaAsset } from "./media";
import { media } from "./media";

export const site = {
  name: "Newace Media",
  legalName: "NewAce Media Photography",
  /** Footer tagline - verbatim from the Figma home footer. */
  description:
    "Premium wedding photography for celebrations worth remembering. Rooted in Delta State| and Photographing weddings across Nigeria and beyond.",
  shortDescription:
    "Editorial photographs, candid moments, and a wedding day that still feels like yours.",
  coverage: "Delta State | Available across Nigeria & internationally",
  foundedNote: "Trusted by 500+ couples across Delta State and Nigeria",
  contact: {
    phone: "(+234) 7039948500",
    phoneHref: "tel:+2347039948500",
    email: "photos@newacemedia.com",
    emailHref: "mailto:photos@newacemedia.com",
    addressLines: ["100, Effurun Sapele Road, Delta State"],
    region: "Warri, Delta State, Nigeria",
  },
  copyright: `© ${new Date().getFullYear()} NewAce Media Photography. All rights reserved.`,
} as const;

export interface SiteLink {
  readonly label: string;
  readonly href: string;
}

export interface SiteSocialLink extends SiteLink {
  readonly icon: string;
  readonly iconWidth: number;
  readonly iconHeight: number;
  readonly external: boolean;
}

/**
 * Header navigation - all labels uppercase, per client instruction.
 */
export const primaryNavigation: readonly SiteLink[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "WEDDING STORIES", href: "/wedding-stories" },
  { label: "BEHIND THE SCENES", href: "/behind-the-scenes" },
  { label: "CONTACT US", href: "/contact" },
];

/** Footer navigation columns - order matches the Figma footer. */
export const footerNavigation: readonly (readonly SiteLink[])[] = [
  [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  [
    { label: "About", href: "/about" },
    { label: "Wedding Stories", href: "/wedding-stories" },
    { label: "Behind The Scenes", href: "/behind-the-scenes" },
  ],
];

/**
 * Social / map links. TODO(content): confirm the real profile URLs.
 */
export const socialLinks: readonly SiteSocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: "/icons/akar-icons-instagram-fill.svg",
    iconWidth: 24,
    iconHeight: 24,
    external: true,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: "/icons/basil-facebook-outline.svg",
    iconWidth: 24,
    iconHeight: 24,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:photos@newacemedia.com",
    icon: "/icons/ic-outline-email.svg",
    iconWidth: 21,
    iconHeight: 21,
    external: false,
  },
  {
    label: "Google Map",
    href: "https://maps.google.com/?q=NewAce+Media+Effurun-Sapele+Road,+Warri,+Delta+State,+Nigeria",
    icon: "/icons/basil-map-location-outline.svg",
    iconWidth: 24,
    iconHeight: 24,
    external: true,
  },
];

/** Footer image strip (287x162 each, 1px gap). */
export const footerStrip: readonly MediaAsset[] = [
  media.gallery17,
  media.gallery22,
  media.gallery33,
  media.gallery44,
  media.gallery5,
];

/** Social / map links grouped into the two columns shown in the Figma footer. */
export const socialLinkColumns: readonly (readonly SiteSocialLink[])[] = [
  socialLinks.slice(0, 2),
  socialLinks.slice(2, 4),
];
