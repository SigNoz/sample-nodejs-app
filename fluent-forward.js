const winston = require('winston');
var config = {
  host: 'stagingapp.signoz.io',
  port: 5454,
  timeout: 3.0,
  requireAckResponse: true, // Add this option to wait response from Fluentd certainly
};
var fluentTransport = require('fluent-logger').support.winstonTransport();
var fluent = new fluentTransport('test', config);
// Initialize Winston Logger

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'test-service' },
  transports: [
    fluent,
    new winston.transports.Console({
      format: winston.format.json(),
    }),
  ],
});

data = {
    "serviceName": "expressApp",
    "type": "test",
    "body": "testing winstonY http forwarder"
}

logger.info(data)