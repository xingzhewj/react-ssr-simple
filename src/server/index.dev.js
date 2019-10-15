import path from 'path';
import Koa from 'koa';
import koaStatic from 'koa-static';
import Router from 'koa-router';
import render from 'koa-ejs';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../shared/store';
import App from '../shared/app';
// webpack编译
import webpack from 'webpack';
import koaWebpack from 'koa-webpack';
import webpackConfig from '../../build/webpack-client-dev.config';

const app = new Koa();
const router = new Router();

render(app, {
    root: path.resolve(__dirname, './views'),
    layout: 'template',
    viewExt: 'ejs'
});

async function clientHot() {
    const webpackCompiler = webpack(webpackConfig);
    const webpackMiddleware = await koaWebpack({compiler: webpackCompiler});
    app.use(webpackMiddleware);
    app.use(koaStatic(path.resolve(__dirname, './dist')));
}
clientHot();

router.get('/', async (ctx, next) => {
    const context = {};
    const htmlMarkup = renderToString(
        <Provider store={store}>
            <StaticRouter
                location={ctx.request.url}
                context={context}
            >
                <App/>
            </StaticRouter>
        </Provider>
    );
    ctx.type = 'text/html';
    await ctx.render(
        'template',
        {
            title: '宿舍人',
            htmlMarkup: htmlMarkup,
            initialState: JSON.stringify(store.getState())
        }
    );
});
app.use(router.routes())
    .use(router.allowedMethods());

app.listen(7070, '0.0.0.0', () => {
    console.log('http://0.0.0.0:7070');
});
