import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add these two lines below:
  basePath: '/dillion-bird',
  assetPrefix: '/dillion-bird',
};

export default nextConfig;
