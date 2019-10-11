import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '../shared/app';
import {Provider} from 'react-redux';
import store from '../shared/store';

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// 热更新为可选功能，加入了热更新就需要在模块中实现热更新接口，以便在发生热更新后如何去处理模块的变化
// 如果一个模块没有 HMR 处理函数，更新就会冒泡,知道最顶层模块树，如果依旧没有就会更新整个页面
// 在组件最顶层实现热更新接口，处理自身或者冒泡上来的模块更新变化
if (module.hot) {
    module.hot.accept(() => {
        console.warn('occure error');
    });
}
