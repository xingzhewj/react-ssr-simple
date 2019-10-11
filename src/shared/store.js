import {createStore} from 'redux';
import reducers from './reducers';

let store = {};
if (typeof window !== 'undefined') {
    store = createStore(reducers, window._INITIAL_STATE);
}
else {
    store = createStore(reducers, {});
}

export default store;
