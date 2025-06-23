/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // This reduces unnecessary files
  experimental: {
    outputFileTracingRoot: "./",
  },
};

module.exports = nextConfig;
