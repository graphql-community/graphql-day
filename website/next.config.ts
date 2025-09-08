import nextBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
};

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
