const {
    lightstep,
    opentelemetry,
   } = require('lightstep-opentelemetry-launcher-node');
   
   const sdk = lightstep.configureOpenTelemetry();
   
   sdk.start().then(() => {
    require('./index');
   });
   
   function shutdown() {
    sdk.shutdown().then(
      () => console.log("SDK shut down successfully"),
      (err) => console.log("Error shutting down SDK", err),
    ).finally(() => process.exit(0))
   };
   
   process.on('exit', shutdown);
   process.on('SIGINT', shutdown);
   process.on('SIGTERM', shutdown);