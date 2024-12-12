import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  /* config options here */

  images: {
    domains: ["via.placeholder.com"],
  },
};

export default nextConfig;
