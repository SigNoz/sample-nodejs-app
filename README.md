# Sample NodeJS App

This is Sample NodeJS App for sending traces to SigNoz.

## Prerequisites

- [NodeJS](https://nodejs.org/en/download/) (v12 or above)
- [SigNoz](https://signoz.io/docs/install/)
## Running the code

Start the SigNoz server following the instructions:

```bash
git clone -b main https://github.com/SigNoz/signoz.git
cd signoz/deploy/
./install.sh
```

_*Note:* Replace OTEL_EXPORTER_OTLP_ENDPOINT environment variable with SigNoz OTLP endpoint, if SigNoz not running on host machine._

### Using `docker-compose`

```bash
docker-compose up -d
```

Go to http://localhost:5555 to generate telemetry data.
View traces and metrics at http://localhost:3301.

### Using Source

To install the dependency packages:

```bash
npm install
```

To start the server and start sending data to SigNoz:

```bash
export OTEL_TRACES_EXPORTER="otlp"
export OTEL_EXPORTER_OTLP_ENDPOINT="your_signoz_endpoint"
export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"
export OTEL_SERVICE_NAME="sample-node-app"
export NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"
export OTEL_EXPORTER_OTLP_HEADERS="signoz-access-token=[your-token-here]"
node app.js
```

App will start on `http://localhost:5555` by default.

### Validate instrumentation by checking for traces

With your application running, you can verify that you’ve instrumented your application with OpenTelemetry correctly by confirming that tracing data is being reported to SigNoz.

To do this, you need to ensure that your application generates some data. Applications will not produce traces unless they are being interacted with, and OpenTelemetry will often buffer data before sending. So you need to interact with your application and wait for some time to see your tracing data in SigNoz.

Validate your traces in SigNoz:

- Trigger an action in your app that generates a web request. Hit the endpoint a number of times to generate some data. Then, wait for some time.
- In SigNoz, open the `Services` tab. Hit the Refresh button on the top right corner, and your application should appear in the list of Applications.
- Go to the Traces tab, and apply relevant filters to see your application’s traces.
