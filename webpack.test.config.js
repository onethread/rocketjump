const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: {
    test: "mocha!./entries/tests.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "test.bundle.js",
    publicPath: "http://localhost:7357/dist/",
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
      }, {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
      },
    ],
  },
  externals: {
    cheerio: "window",
    "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
    mocha: "window",
  },
  devServer: {
    host: "localhost",
    port: 7357,
  },
};
