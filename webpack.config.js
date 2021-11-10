// webpack.config.js
const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");
console.log("WD",process.cwd(),path.resolve(__dirname));
module.exports = {
  mode: 'development',
  bail: true,
  // devtool: "nosources-source-map",
  target: "node",
  entry: slsw.lib.entries,
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      api: path.resolve(__dirname, 'src/_httpHandler/api/'),
      core: path.resolve(__dirname, 'src/_core/'),
      models: path.resolve(__dirname, 'src/_models/'),
      repositories: path.resolve(__dirname, 'src/_repositories/'),
      types: path.resolve(__dirname, 'src/_types/'),
      lib: path.resolve(__dirname, 'src/_lib/'),
      test: path.resolve(__dirname, 'src/testsetup/'),
      pd: path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.csv$/,
        loader: "csv-loader",
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      },
    ],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, ".webpack"),
    filename: "[name].js",
    sourceMapFilename: "[file].map",
  },
  externals: [nodeExternals({
    modulesDir: path.resolve(__dirname, 'node_modules'),
  })],
};
