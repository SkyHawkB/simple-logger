const logger = require('./index.js');

logger.enableDebug()
  .debug('sky-logger is great!')
  .info('sky-logger is great!')
  .success('sky-logger is great!')
  .warn('sky-logger is great!')
  .error('sky-logger is great!');
