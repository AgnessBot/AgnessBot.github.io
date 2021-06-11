const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
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
