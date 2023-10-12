/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  distDir: "build",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
