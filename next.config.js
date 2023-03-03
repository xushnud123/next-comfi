/** @type {import('next').NextConfig} */
// const sass = require("@zeit/next-sass");
// const css = require("@zeit/next-css");

const nextConfig = {
  reactStrictMode: true,
  distDir: "build/_next/static",
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
  // async rewrites() {
  //   return [
  //     {
  //       source: "/blog/:path*",
  //       destination: "localhost",
  //     },
  //   ];
  // },
};

const widthBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = widthBundleAnalyzer(nextConfig);
