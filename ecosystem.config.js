module.exports = {
    apps: [
        {
            name: 'SERVER',
            script: './dist/server.js',
            log_date_format: 'YYYY-MM-DD HH:mm Z',
            error_file: './logs/err.log',
            out_file: './logs/out.log',
            log_file: './logs/combined.log',
            pid_file: './logs/pm_id.log',
            time: true,
            env: {
                COMMON_VARIABLE: 'true'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};
