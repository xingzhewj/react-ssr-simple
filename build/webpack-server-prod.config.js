const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        server: path.resolve(__dirname, '../src/server/index.js')
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.ejs$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'views'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            BUILDTYPE: JSON.stringify('server')
        })
    ],
    resolve: {
        extensions: ['.js', '.less', '.css', '.jsx']
    }
};
