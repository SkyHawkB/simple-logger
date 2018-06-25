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

logger.enableDebug()
  .debug('sky-logger is great!')
  .info('sky-logger is great!')
  .success('sky-logger is great!')
  .warn('sky-logger is great!')
  .error('sky-logger is great!');
```
will output
![](example.png?raw=true)
