/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  allowedContentTypes: ["image/jpeg", "image/png", "image/gif", "image/webp"],
  trailingSlash: false,
  experimental: {
    forceSwcTransforms: true,
  },
  devIndicators: {
    buildActivity: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    user: process.env.NEXT_PUBLIC_USER,
    code: process.env.NEXT_PUBLIC_CODE,
  },
};

module.exports = nextConfig;
