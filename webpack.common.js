const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    clean: true,
    path: path.join(__dirname, "docs"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(pdf|png|jpg|jpeg|gif|ico|mp3|fbx)$/,
        type: "javascript/auto",
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      // patterns: [{ from: "src", to: "docs" }],
      patterns: [path.join(__dirname, "src", "pia_leung_resume.pdf")],
      // patterns: [path.join(__dirname, "src", "*.pdf")],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src", "template.html"),
      inject: true,
      containerId: "root",
      title: "Pia Leung resume",
    }),
  ],
};
