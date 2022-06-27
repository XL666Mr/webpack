const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      //   { //webpack4版本
      //     test: /\.(png|jpg|gif|jpeg)$/i,
      //     use: [
      //       {
      //         loader: 'url-loader',
      //         options: {
      //           limit: 8 * 1024,
      //         },
      //       },
      //     ],
      //   }
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
