/**
 * @file redux的store
 * @Author wangjie19
 * @Date 2019-03-06 17:27:03
 * @Last Modified by: wangjie19
 * @Last Modified time: 2019-03-06 17:28:51
 */

import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

export default store;
