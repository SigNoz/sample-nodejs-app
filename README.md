# Sample NodeJS App

1. Install dependencies

   ```
   yarn install

   # or with npm

   npm install
   ```

2. Run the app:

   2.1 If SigNoz is running locally on `localhost`

   ```
   yarn run start:local
   ```

   2.2 If not running locally, then

   ````
   OTEL_EXPORTER_OTLP_ENDPOINT="<IP of SigNoz>:4317" OTEL_RESOURCE_ATTRIBUTES=service.name=NAME_OF_SERVICE yarn run start:custom```
   ````
