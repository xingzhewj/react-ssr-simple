/**
 * @file 项目启动脚本
 * @Author wangjie19
 * @Date 2019-03-05 17:21:44
 * @Last Modified by: wangjie19
 * @Last Modified time: 2019-03-05 17:24:58
 */

const fs = require('fs');
require('@babel/polyfill');
const babelrc = JSON.parse(fs.readFileSync('./.babelrc'));
require('@babel/register')(babelrc);

require('./server/index');
