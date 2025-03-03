import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.pexels.com"], // Add Pexels to the allowed domains
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: "",
        pathname: '/**',
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
