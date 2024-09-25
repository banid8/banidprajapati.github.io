// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "" : undefined,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true, // Allow images to be used without optimization for easier export
  },
  reactStrictMode: true,
};

export default nextConfig;
