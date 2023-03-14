const logdna = require('@logdna/logger');
logDNAKey = 'wergwegewgeg'
const logger=  logdna.createLogger(logDNAKey, {
    app: 'demo',
    level: 'debug',
    env: 'prod',
    hostname: 'backend-express',
    url: 'http://stagingapp.signoz.io:5454',
});

data = {
    "serviceName": "expressApp",
    "type": "test",
    "body": "testing winston9 http forwarder"
}

logger.debug(data)
