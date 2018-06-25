const colors = require('colors');
const moment = require('moment');
const timestamp = () => {
  return colors.white(`[${moment().format('DD/MM/YYYY hh:mm:ss')}] `);
};

class Logger {
  constructor() {
    this.prefix = '';
    this.doDebug = false;
  }

  setPrefix(prefix) {
    this.prefix = prefix;

    return this;
  }

  enableDebug() {
    this.doDebug = true;

    return this;
  }
  disableDebug() {
    this.doDebug = false;

    return this;
  }
  toggleDebug() {
    this.doDebug = !this.doDebug;

    return this;
  }

  error(message) {
    console.log(timestamp() + `${this.prefix} ${'ERROR '.bold.red} ${message.white}`);

    return this;
  }
  warn(message) {
    console.log(timestamp() + `${this.prefix} ${' WARN '.bold.yellow} ${message.white}`);

    return this;
  }
  info(message) {
    console.log(timestamp() + `${this.prefix} ${' INFO '.bold.white} ${message.white}`);

    return this;
  }
  success(message) {
    console.log(timestamp() + `${this.prefix} ${' INFO '.bold.green} ${message.white}`);

    return this;
  }
  debug(message) {
    if(this.doDebug) console.log(timestamp() + `${this.prefix} ${'DEBUG '.bold.white} ${message.white}`);

    return this;
  }
}

module.exports = new Logger();
module.exports.Logger = Logger;
