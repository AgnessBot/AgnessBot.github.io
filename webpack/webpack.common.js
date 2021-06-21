const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './src/assets/agness.png',
            filename: 'index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: 'public/robots.txt', to: 'robots.txt' }],
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
                            sourceMap: true,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[contenthash][ext]'
                }
            },
        ],
    },
    stats: {
        all: false,
        assets: true,
        cachedAssets: true,
        chunks: false,
        chunkGroups: true,
        chunkGroupChildren: true,
        hash: true,
        ids: true,
        outputPath: true,
        publicPath: true,
    },
};
