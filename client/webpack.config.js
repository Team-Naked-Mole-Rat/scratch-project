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
    historyApiFallback: true,
    port: 8000,
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      devServer.app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:3030',
          changeOrigin: true,
          secure: false,
          pathRewrite: { '^/api': '' },
        })
      );

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

      return middlewares;
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
