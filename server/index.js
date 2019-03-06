/**
 * @file 服务器启动脚本
 * @Author wangjie19
 * @Date 2019-03-05 17:05:10
 * @Last Modified by: wangjie19
 * @Last Modified time: 2019-03-06 17:14:32
 */

import Koa from 'koa';
import webpack from 'webpack';
import {devMiddleware, hotMiddleware} from 'koa-webpack-middleware';
import devConfig from '../build/webpack.dev.config';
import router from './routers';

const app = new Koa();
const compile = webpack(devConfig);

app.use(devMiddleware(compile, {
    writeToDisk: true,
    noInfo: false,
    quiet: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    publicPath: devConfig.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(hotMiddleware(compile));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
