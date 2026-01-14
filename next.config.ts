import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Enables the 'out' folder required by your GitHub Action
  images: {
    unoptimized: true,   // Required because GitHub Pages is a static host
  },
  /* You can add other config options here */
};

export default nextConfig;
