const { withKumaUI } = require("@kuma-ui/next-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  output: "export",
  reactStrictMode: true,
};

module.exports = withKumaUI(nextConfig);
