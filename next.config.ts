/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  turbopack: {
    root: __dirname, // ensures correct root
  },
};

module.exports = nextConfig;
