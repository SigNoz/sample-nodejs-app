

data = {
    "serviceName": "expressApp",
    "type": "test",
    "body": "testing winstonY http forwarder"
}
data_string = JSON.stringify(data)

// var net = require('net');

// var client = new net.Socket();
// client.connect(5454, '3.137.3.42', function() {
// 	console.log('Connected');
//     console.log(data_string)
// 	client.write(data_string);
//     client.destroy();
// });

// client.on('data', function(data) {
// 	console.log('Received: ' + data);
// 	client.destroy(); // kill client after server's response
// });

// client.on('close', function() {
// 	console.log('Connection closed');
// });




const winston = require('winston');
// const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     // defaultMeta: { service: 'user-service' },
//   });

// logger.add(new winston.transports.Console({
//     json: true,
// }));

// httpTransport = new winston.transports.Http({
//     host: 'stagingapp.signoz.io',
//     port: 5454,
//     batch: true,
//     batchCount: 1,
//     batchInterval: 1,
// })


// logger.add(httpTransport);


// var ElasticsearchTransport = require('winston-elasticsearch');

// var esTransportOpts = {
//   level: 'info',
//   flushInterval: 1,
//   clientOpts: {
//     node: 'http://stagingapp.signoz.io:5454'
//   }

// };
// var logger = winston.createLogger({
//   transports: [
//     new winston.transports.Elasticsearch(esTransportOpts)
//   ]
// });



const logdna = require('@logdna/logger')
const options = {
    app: 'myAppName',
    url: 'http://stagingapp.signoz.io:5454',
    flushLimit:1,
    level: 'debug' // set a default for when level is not provided in function calls
  }
// const logger = logdna.createLogger('<YOUR INGESTION KEY>', options)
const logger = logdna.setupDefaultLogger('<YOUR INGESTION KEY>', options)




logger.log('This is an INFO statement', 'info')

logger.log('This will be a DEBUG statement, based on the default')

logger.log('This is an INFO statement with an options object', {
  level: 'info'
, meta: {
    somekey: 'Arbitrary message'
  , anotherkey: 'Another arbitrary message or data point'
  }
})

logger.info('This is an INFO statement using a convenience method')

// Objects can be logged, too, but they're just serialized
logger.info({
  message: 'Got some user data'
, userId: 'userId' // This assumes `req.params` comes from some HTTP framework
})


process.on('exit', function () {
    console.log('Your process is exiting');
});
  
logger.on('finish', function () {
    console.log("Finish received ...")
});