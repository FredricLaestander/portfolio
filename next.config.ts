import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cdn.sanity.io/images/7xghh627/production/**"),
    ],
  },
  /* config options here */
};

export default nextConfig;
