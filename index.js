const colors = require('colors');
const moment = require('moment');
const timestamp = () => {
  return colors.white(`[${moment().format('DD/MM/YYYY hh:mm:ss')}] `);
};
const log = (message) => {
  process.stdout.write(message);
};

class Logger {
  constructor(prefix = '', debug = false) {
    this.prefix = prefix;
    this.doDebug = debug;
  }

  static raw(type, string) {
    log(`${timestamp()}${this.prefix === undefined ? '' : this.prefix} ${type} ${string} \n`);
  }

  static error(data, ...args) {
    const message = require('util').format(data, ...args);
    this.raw('ERROR '.bold.red, message.white);

    return this;
  }
  static warn(data, ...args) {
    const message = require('util').format(data, ...args);
    this.raw(' WARN '.bold.yellow, message.white);

    return this;
  }
  static info(data, ...args) {
    const message = require('util').format(data, ...args);
    this.raw(' INFO '.bold.white, message.white);

    return this;
  }
  static success(data, ...args) {
    const message = require('util').format(data, ...args);
    this.raw(' INFO '.bold.green, message.white);

    return this;
  }
  static debug(data, ...args) {
    if(this.doDebug || false) {
      const message = require('util').format(data, ...args);
      this.raw('DEBUG '.bold.white, message.white);
    }

    return this;
  }
}

module.exports = Logger;
