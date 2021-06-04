const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isDev ? 'bundle.js' : '[contenthash].js',
        publicPath: '/',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${isDev ? '[name]' : '[contenthash]'}.css`,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },
    optimization: {
        minimizer: ['...', ...(isDev ? [] : [new CssMinimizerPlugin()])],
    },
};
