Install the dependency packages

```npm i```

Start the server and start sending data to SigNoz

```OTEL_EXPORTER_OTLP_SPAN_ENDPOINT="http://<IP of SigNoz Backend>:55681/v1/trace" LS_SERVICE_NAME=<service name> node server_init.js```