import chokidar from 'chokidar';
import chalk from 'chalk';
import path from 'path';
import cluster from 'cluster';
import watch from './watch';

/**
 * 替换缓存种模块
 * @param {string} modulePath 模块路径（绝对路径）
 */
function updateModule(modulePath) {
    const moduleCache = require.cache[modulePath];
    if (moduleCache.parent) {
        moduleCache.parent.children.splice(moduleCache.parent.children.indexOf(moduleCache), 1);
    }
    require.cache[modulePath] = null; 
    require(modulePath.toString());
}

function restartApp() {
    if (cluster.isMaster) {
        let worker = cluster.fork();
        watch.server(() => {
            worker.kill();
            worker = cluster.fork();
        });
    }
    else {
        require('../src/server/index.dev');
    }
}

function hotServer(app) {
    chokidar
        .watch(['src/server/', 'src/shared/'])
        .on('change', filePath => {
            app.app.close();
            require('../src/server/index.dev');
        });
}

restartApp();
