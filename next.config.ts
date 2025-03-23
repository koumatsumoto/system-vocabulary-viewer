import type { NextConfig } from "next";

/**
 * GitHub Pages (https://koumatsumoto.github.io/system-vocabulary-viewer/) 用の設定
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/system-vocabulary-viewer" : "",
};

export default nextConfig;
