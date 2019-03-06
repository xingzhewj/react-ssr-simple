/**
 * @file 首页reducer
 * @Author wangjie19
 * @Date 2019-03-06 16:36:05
 * @Last Modified by: wangjie19
 * @Last Modified time: 2019-03-06 17:26:03
 */

import {combineReducers} from 'redux';
import {} from '../actions/home';

const initialState = {
    age: 29
};

export function todo(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            state = Object.assign(state, {age: action.payload});
            console.log(state);
            break;
    }
    return state;
}
