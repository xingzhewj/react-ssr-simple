import chokidar from 'chokidar';
import config from './config';

function client(cb) {
    chokidar
    .watch(config.client.dir, config.client.options)
    .on('change', path => {
        console.log(`${path} changed`);
        cb();
    });
}

function server(cb) {
    chokidar
        .watch(config.server.dir, config.server.options)
        .on('change', path => {
            console.log(`${path} changed`);
            cb();
        });
}

export default {
    client,
    server
}