# Sample NodeJS App

1. Install dependencies

   ``` bash
   npm install
   ```

2. Run the app:

   2.1 If SigNoz is running locally on `localhost`

   ``` bash
   OTEL_EXPORTER_OTLP_ENDPOINT=\"http://localhost:4318/v1/traces\" OTEL_RESOURCE_ATTRIBUTES=service.name=node-js-sample-app node -r ./tracing.js index.js
   ```

   2.2 If not running locally and sending to SigNoz Cloud, then

   ```` bash
   OTEL_EXPORTER_OTLP_ENDPOINT="https://ingest.<data-region>.signoz.cloud:443" OTEL_RESOURCE_ATTRIBUTES=service.name=NAME_OF_SERVICE OTEL_EXPORTER_OTLP_HEADERS="signoz-access-token=<ingestion-token>" node -r ./tracing.js index.js```
   ````

   Replace `<data-region>` with data region of your signoz instance and `<ingestion-token>` with your SigNoz ingestion token. You can find both of these in the SigNoz UI.
