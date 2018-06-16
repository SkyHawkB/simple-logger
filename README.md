# sky-logger

My version of a simple logger for different logging levels.

## usage

### installation
```
npm i -S sky-logger
```
or
```
yarn add sky-logger
```

### example

```js
const logger = require('sky-logger');

logger.debug('sky-logger is great!');
logger.info('sky-logger is great!');
logger.warn('sky-logger is great!');
logger.error('sky-logger is great!');
```
will output
![](example.png?raw=true)
