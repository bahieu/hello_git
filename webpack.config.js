const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: [
      "./assets/javascript/buyTicket.js",
      "./assets/javascript/modal.js",
      "./assets/javascript/style.js",
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpeg|gif|svg|jpg)$/i,
        loader: "file-loader",
        options: {
          name: "[name][hash:6].[ext]",
          outputPath: 'images',
          publicPath: 'images',
          emitFile: true,
          esModule: false
        },
        exclude: [/node_modules/],
      },
      
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
