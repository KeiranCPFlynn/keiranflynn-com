import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// Pin the workspace root to this project directory. A stray package.json in a
// parent folder otherwise makes Turbopack infer the wrong root and fail to
// resolve dependencies like tailwindcss. Using the config file's own location
// keeps this correct regardless of where `next` is launched from.
const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "keiranflynn.com" }],
        destination: "https://www.keiranflynn.com/:path*",
        permanent: true,
      },
      {
        // The /blog section (legacy business-English content) was retired and
        // archived to archive/blog. Permanently send any old /blog URL to the
        // current /writing section. See archive/blog/README.md.
        source: "/blog/:path*",
        destination: "/writing",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/writing",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
