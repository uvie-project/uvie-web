import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH when deploying under a sub-path
// (e.g. "/uvie-web" for a project page). Empty for the org site
// https://uvie-project.github.io
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
