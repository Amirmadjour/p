/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  /* config options here */
  basePath: isProd ? "/p" : "",
  assetPrefix: isProd ? "/p" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
