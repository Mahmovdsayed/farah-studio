import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  compress: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  // cookies: {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  // },
};

export default nextConfig;
