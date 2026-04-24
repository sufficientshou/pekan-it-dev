import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Comment out untuk development
  basePath: "/pekan-it", // Comment out untuk development
  assetPrefix: "/pekan-it", // Comment out untuk development
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable strict mode untuk menghindari double render di development
  reactStrictMode: false,
};

export default nextConfig;
