import type { NextConfig } from "next";
import nextBundleAnalyzer from "@next/bundle-analyzer";
const nextConfig: NextConfig = {
  output: "export",
};

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
