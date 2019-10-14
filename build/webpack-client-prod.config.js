const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        client: path.resolve(__dirname, '../src/client/index.js'),
        vendors: ['react', 'react-dom', 'react-redux', 'redux', 'react-router-dom']
    },
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
    }
};