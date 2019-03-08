## 问题汇总
-------
1. redux中的reducer的函数返回值必须为新的state对象，不可在原有state对象上修改数据，否则不会引起ui的重渲染。因为redux进行数据比对的时候用的是state的引用，如果在原state基础上修改，会导致引用比对相同而不进行ui重绘。
2. Object.assgin方法切记第一个参数是target对象，要注意此方法的使用方法。
3. redux-thunk可以允许action作为函数形式被dispatch，如：dispach(() => ({type: 'type', payload: data})),函数返回值依旧遵照redux规范返回一个带type的对象。
4. redux-promise可以允许action作为promise形式被dispatch，如：dispatch(new Promise(resolve) => ({type: 'type', payload: data})),promise的resolve数据依旧遵照redux规范返回一个带type的对象。