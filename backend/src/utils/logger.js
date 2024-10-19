'use strict';

const { createLogger, config, transpors } = require('winston');

const transportConsole = new transports.Console({
    handleExceptions: true,
});

const transportFile = new transports.File({
    filename: 'tmp/backend.log',
    handleExceptions: true,
});

class Logger {
    constructor() {
        this.logger = createLogger({
            levels: config.syslog.levels,
            levl: 'info',
            exitOnError: false,
        });
        this.logger.add(transportConsole);
        this.logger.add(transportFile);
    }
        
    info(msg, meta) {
        this.logger.info(msg, meta);
    }

    debug(msg, meta) {
        this.logger.debug(msg, meta);
    }

    warning(msg, meta) {
        this.logger.warning(msg, meta);
    }

    error(msg, meta) {
        this.logger.error(msg, meta);
    }

}

module.exports = new Logger();
