import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';

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
    extensions: ['.js']
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
        test: /\.(png|jpe?g|gif)$/i, // Regex to match image files
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images", // Directory where images will be placed
              name: "[name].[ext]", // Maintain the original file name and extension
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8000,
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      // Setting up proxy for '/api'
      devServer.app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:3030',
          changeOrigin: true,
          secure: false,
          pathRewrite: { '^/api': '' },
        })
      );

      // Setting up proxy for '/auth'
      devServer.app.use(
        '/auth',
        createProxyMiddleware({
          target: 'http://localhost:3030',
          changeOrigin: true,
          secure: false,
          pathRewrite: { '^/auth': '' },
        })
      );

      devServer.app.use(
        '/userPlant',
        createProxyMiddleware({
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
          pathRewrite: { '^/userPlant': '' },
        })
      );

      return middlewares; // Important to return the modified middlewares array
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
