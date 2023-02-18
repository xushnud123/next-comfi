/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
// const withPlugins = require("next-compose-plugins");
// const sass = require("@zeit/next-sass");
// const css = require("@zeit/next-css");

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    domains: ["https://comfi-blog-70fa24.ingress-daribow.ewp.live"],
  },
  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? "";
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
