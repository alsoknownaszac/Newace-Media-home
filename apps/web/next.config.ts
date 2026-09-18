import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // AVIF first (smallest) with WebP fallback; the source assets are WebP.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 960, 1080, 1200, 1440, 1920],
  },
};

export default nextConfig;
