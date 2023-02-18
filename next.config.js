/** @type {import('next').NextConfig} */
// const withPlugins = require("next-compose-plugins");
// const sass = require("@zeit/next-sass");
// const css = require("@zeit/next-css");

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    domains: ["https://comfi-blog-70fa24.ingress-daribow.ewp.live"],
  },
};

module.exports = nextConfig;
