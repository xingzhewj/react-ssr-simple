import Koa from 'koa';
import Router from 'koa-router';
import koaStatic from 'koa-static';
import path from 'path';
import ejs from 'ejs';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../shared/store';
import App from '../shared/app';
import template from './views/template';

const app = new Koa();
const router = new Router();

app.use(koaStatic(
    (typeof BUILDTYPE !== 'undefined' && BUILDTYPE === 'server') ? 'dist' : path.resolve(__dirname, '../../dist'),
    {
        gzip: true,
        maxAge: 0
    }
));

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
    const htmlstr = await ejs.render(
        template,
        {
            title: '宿舍人',
            htmlMarkup: htmlMarkup,
            initialState: JSON.stringify(store.getState())
        }
    );
    ctx.body = htmlstr;
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(7070, '0.0.0.0', () => {
    console.log('http://0.0.0.0:7070');
});
