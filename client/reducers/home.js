/**
 * @file 首页reducer
 * @Author wangjie19
 * @Date 2019-03-06 16:36:05
 * @Last Modified by: wangjie19
 * @Last Modified time: 2019-03-06 17:26:03
 */

import {ADD_TODO, FETCH_DATA} from '../actions/home';

const initialState = {
    age: 29
};

export function todo(state = initialState, action) {
    const newState = action.type === ADD_TODO ? Object.assign(
        {},
        state,
        {
            age: action.payload
        }
    ) : state;
    return newState;
}

export function fetchData(state = {list: []}, action) {
    const newState = action.type === FETCH_DATA ? Object.assign(
        {},
        state,
        action.payload
    ) : state;
    return newState;
}
