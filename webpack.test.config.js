var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: {
    test: "mocha!./entries/tests.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "test.bundle.js",
    publicPath: "http://localhost:7357/dist/test.bundle",
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
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
