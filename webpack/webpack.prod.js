const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, {
    mode: 'production',
    output: {
        uniqueName: 'Agness',
        path: path.resolve(__dirname, '../dist'),
        filename: '[contenthash].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[contenthash].css',
            chunkFilename: '[id].css',
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            name: false,
        },
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
            '...',
        ],
    },
});
