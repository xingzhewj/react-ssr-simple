## 问题汇总
-------
1. redux中的reducer的函数返回值必须为新的state对象，不可在原有state对象上修改数据，否则不会引起ui的重渲染。因为redux进行数据比对的时候用的是state的引用，如果在原state基础上修改，会导致引用比对相同而不进行ui重绘。
2. Object.assgin方法切记第一个参数是target对象，要注意此方法的使用方法。