const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, '../src/client/index.js')
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'client.js',
        publicPath: '/',
        chunkFilename: '[name]-[hash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.less', '.css', '.ts', '.jsx']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    filename: "vendor.js",
                    priority: 10 // 优先级
                },
                common: {
                    name: "common",
                    test: /[\\/]src[\\/]/,
                    minSize: 1024,
                    chunks: "all",
                    filename: 'common.js',
                    priority: 5
                }
            }
        }
    }
};