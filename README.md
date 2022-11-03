### Install the dependency packages

```npm i```

### Start the server and start sending data to SigNoz

```node -r ./tracing.js index.js```

App will start on ```http://localhost:5555``` by default.

### Validate instrumentation by checking for traces

With your application running, you can verify that you’ve instrumented your application with OpenTelemetry correctly by confirming that tracing data is being reported to SigNoz.

To do this, you need to ensure that your application generates some data. Applications will not produce traces unless they are being interacted with, and OpenTelemetry will often buffer data before sending. So you need to interact with your application and wait for some time to see your tracing data in SigNoz.

Validate your traces in SigNoz:

- Trigger an action in your app that generates a web request. Hit the endpoint a number of times to generate some data. Then, wait for some time.
- In SigNoz, open the `Services` tab. Hit the Refresh button on the top right corner, and your application should appear in the list of Applications.
- Go to the Traces tab, and apply relevant filters to see your application’s traces.
