const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

dotenv.config();

module.exports = {
  entry: `${path.resolve(__dirname, '../src')}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|ico)$/,
        use: 'file-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname, '../public')}/index.html`,
      favicon: './public/favicon.ico',
    }),
    new FaviconsWebpackPlugin({
      logo: 'public/logo192.png',
      manifest: 'public/manifest.json',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new InterpolateHtmlPlugin({ PUBLIC_URL: '' }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    fallback: {
      crypto: false,
    },
  },
};
