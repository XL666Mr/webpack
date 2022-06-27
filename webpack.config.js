const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", 'vue-style-loader', "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        //webpack5版本
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: "asset",
        generator: {
          filename: "[hash:6][ext]",
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], 
          },
        },
      },
    ],
  },
};
