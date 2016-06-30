var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "webpack-hot-middleware/client",
    "./index",
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/",
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"],
    modulesDirectories: ["node_modules"],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        query: {
          presets: [
            "react",
            "es2015",
            "stage-2",
          ],
        },
        exclude: /node_modules/,
        include: __dirname,
      },
    ],
  },
};
