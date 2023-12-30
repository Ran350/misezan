const { withKumaUI } = require("@kuma-ui/next-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
};

module.exports = withKumaUI(nextConfig);
