const colors = require('colors');
const moment = require('moment');
const timestamp = () => {
  return colors.white(`[${moment().format('DD/MM/YYYY hh:mm:ss')}] `);
};

module.exports = {
  error: (message) => {
    console.log(timestamp() + `${'ERROR '.bold.red} ${message.white}`);
  },
  warn: (message) => {
    console.log(timestamp() + `${' WARN '.bold.yellow} ${message.white}`);
  },
  info: (message) => {
    console.log(timestamp() + `${' INFO '.bold.white} ${message.white}`);
  },
  debug: (message) => {
    console.log(timestamp() + `${'DEBUG '.bold.white} ${message.white}`);
  }
}
