/**
 * @file 服务端路由
 * @Author wangjie19
 * @Date 2019-03-06 17:10:30
 * @Last Modified by: wangjie19
 * @Last Modified time: 2019-03-06 17:18:10
 */

import Router from 'koa-router';

let router = new Router({
    prefix: '/api'
});

router.get('/list', (ctx, next) => {
    ctx.body = {
        list: [
            {
                user: 'fuck',
                address: 'china'
            }
        ]
    };
}).get('/list/:id', (ctx, next) => {
    ctx.body = {
        id: ctx.params.id
    };
});

export default router;
