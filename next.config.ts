import type { NextConfig } from "next";

const repo = "nibi"
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // enables static export (replaces `next export`)
  basePath: process.env.NODE_ENV === 'production' ? `/${repo}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
