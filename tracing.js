// tracing.js
'use strict'
const {
  // ConsoleSpanExporter,
  BatchSpanProcessor,
} = require('@opentelemetry/tracing')
const { Resource } = require('@opentelemetry/resources')
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions')
const { registerInstrumentations } = require('@opentelemetry/instrumentation')
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node')
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http')
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node')

const hostName = process.env.OTEL_TRACE_HOST || 'localhost'

const init = (serviceName, environment) => {

  // use OTLP exporter to send traces to the collector
  const exporter = new OTLPTraceExporter({
    // optional - url default value is http://localhost:4318/v1/traces
    url: `http://${hostName}:4318/v1/traces`,
    // optional - collection of custom headers to be sent with each request, empty by default
    headers: {},
  });

  const provider = new NodeTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: serviceName, // Service name that should be listed in SigNoz UI
      [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: environment,
    }),
  })

  // Use the BatchSpanProcessor to export spans in batches in order to more efficiently use resources.
  provider.addSpanProcessor(new BatchSpanProcessor(exporter))

  // Enable to see the spans printed in the console by the ConsoleSpanExporter
  // provider.addSpanProcessor(new BatchSpanProcessor(new ConsoleSpanExporter()))

  provider.register()

  console.log('tracing initialized')

  registerInstrumentations({
    instrumentations: [new getNodeAutoInstrumentations()],
  })

  const tracer = provider.getTracer(serviceName)
  return { tracer }
}

module.exports = {
  init: init,
}