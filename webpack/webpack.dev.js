const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    devServer: {
        open: true,
        port: 5000,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        publicPath: '/',
        hot: true,
        quiet: true,
        overlay: false,
    },
    devtool: 'eval-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CleanWebpackPlugin({ dry: true, verbose: true }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new WebpackBar(),
    ],
    optimization: {
        minimize: false,
    },
    target: 'web',
});
