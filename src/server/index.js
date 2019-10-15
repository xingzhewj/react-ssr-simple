import Koa from 'koa';
import Router from 'koa-router';
import koaStatic from 'koa-static';
import render from 'koa-ejs';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../shared/store';
import App from '../shared/app';
import './views/template.ejs';

const app = new Koa();
const router = new Router();
// 静态资源服务
app.use(koaStatic(
    'dist',
    {
        gzip: true,
        maxAge: 0
    }
));
// 模板引擎设置
render(app, {
    root: 'dist/views',
    layout: 'template',
    viewExt: 'ejs'
});

router.get('/*', async (ctx, next) => {
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
