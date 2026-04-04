import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["10.25.194.53"],
  pageExtensions: ["ts", "tsx", "mdx"], // add this
};

export default nextConfig;