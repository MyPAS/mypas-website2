import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Brand + team imagery is served from /public, so no remote loaders are needed.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
