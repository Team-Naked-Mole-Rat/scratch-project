import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import { createProxyMiddleware } from "http-proxy-middleware";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, `dist`),
      publicPath: `dist`
    },
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        changeOrigin: true,
        secure: false,
        target: `http://localhost:3000/`,
        cookieDomainRewrite: "localhost",
      },
      {
        context: ['/auth'],
        changeOrigin: true,
        secure: false,
        target: `http://localhost:3000/`,
        cookieDomainRewrite: "localhost",
      },
      {
        context: ['/userPlant'],
        changeOrigin: true,
        secure: false,
        target: `http://localhost:3000/`,
        cookieDomainRewrite: "localhost",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
