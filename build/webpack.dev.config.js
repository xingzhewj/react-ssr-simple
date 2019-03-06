/**
 * @file 开发环境webpack配置
 * @Author wangjie19
 * @Date 2019-03-05 16:37:26
 * @Last Modified by: wangjie19
 * @Last Modified time: 2019-03-05 17:49:59
 */

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        main: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            path.resolve(__dirname, '../client/index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist/assets'),
        filename: 'main-[hash:4].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, '../client/components/'),
            Pages: path.resolve(__dirname, '../client/pages/')
        },
        extensions: ['.js', '.jsx', '.json', '.less', '.css']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../client/index.html'),
            filename: 'index.html',
            chunks: ['main']
        })
    ]
};
