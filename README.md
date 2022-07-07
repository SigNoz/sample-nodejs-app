Install the dependency packages

```npm i```

Start the server and start sending data to SigNoz

```OTEL_EXPORTER_OTLP_ENDPOINT="<IP of SigNoz>:4317" OTEL_RESOURCE_ATTRIBUTES=service.name=nodeJsApp node -r ./tracing.js index.js```
