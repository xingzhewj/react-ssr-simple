/**
 * @file reducer入口脚本
 * @Author wangjie19
 * @Date 2019-03-06 17:23:33
 * @Last Modified by: wangjie19
 * @Last Modified time: 2019-03-06 17:24:58
 */

import {combineReducers} from 'redux';
import {todo} from './home';

export default combineReducers({
    todo
});
