/**
 * @file 首页redux的action
 * @Author wangjie19
 * @Date 2019-03-06 16:30:45
 * @Last Modified by: wangjie19
 * @Last Modified time: 2019-03-06 16:35:53
 */

const ADD_TODO = 'ADD_TODO';

export function addTodo(payload) {
    return {
        type: ADD_TODO,
        payload
    };
}
