/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  transpilePackages: ["@repo/misezan", "@repo/make10"],
};

export default nextConfig;
