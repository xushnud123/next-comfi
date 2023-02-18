/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const sass = require("@zeit/next-sass");
const css = require("@zeit/next-css");

const nextConfig = {
  reactStrictMode: true,
  // webpack: function (config) {
  //   config.experiments = {
  //     test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|mp4)$/,
  //     use: {
  //       loader: "url-loader",
  //       options: {
  //         limit: 100000,
  //         name: "[name].[ext]",
  //       },
  //     },
  //   };
  //   return config;
  // },
};

module.exports = nextConfig;

// module.exports = withPlugins(
//   [
//     [css],
//     [
//       sass,
//       {
//         cssModules: true,
//       },
//     ],
//   ],
//   nextConfig
// );
