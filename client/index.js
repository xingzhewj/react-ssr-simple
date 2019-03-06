import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Main from './main';

if (module.hot) {
    module.hot.accept();
}
ReactDom.render(
    <AppContainer>
        <Main/>
    </AppContainer>,
    document.getElementById('root')
);