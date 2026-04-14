import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["192.168.0.17"],
  pageExtensions: ["ts", "tsx", "mdx"], // add this
};

export default nextConfig;