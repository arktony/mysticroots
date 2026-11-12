import type { NextConfig } from "next";

// Static export: the site is plain HTML served by GitHub Pages at the custom
// domain mysticrootshealing.org (see public/CNAME).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
