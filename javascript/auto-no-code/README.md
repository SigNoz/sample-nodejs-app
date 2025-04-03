## Instrumenting JavaScript with No-Code Instrumentation

### Send Traces Directly to SigNoz Cloud - No Code Automatic Instrumentation (Recommended)

### Step 1: Install OpenTelemetry Packages
```sh
npm install --save @opentelemetry/api
npm install --save @opentelemetry/auto-instrumentations-node
```

### Step 2: Run the Application
```sh
export OTEL_TRACES_EXPORTER="otlp"
export OTEL_EXPORTER_OTLP_ENDPOINT="https://ingest.<region>.signoz.cloud:443"
export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"
export OTEL_SERVICE_NAME="<APP_NAME>"
export OTEL_EXPORTER_OTLP_HEADERS="signoz-ingestion-key=<your-ingestion-key>"
export NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"

<your_run_command>
```

- Set `<region>` to match your SigNoz Cloud region.
- Replace `<your-ingestion-key>` with your SigNoz ingestion key.
- `<APP_NAME>` is the name of your service.
- Replace `<your_run_command>` with the run command of your application.
