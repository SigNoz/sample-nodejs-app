const express = require("express");
const cors = require('cors')
const PORT = process.env.PORT || "5555";
const app = express();
const { trace, SpanStatusCode } = require("@opentelemetry/api");

app.use(cors());
app.use(express.json())

app.all("/", (req, res) => {
    // Get the current span from the tracer
    const span = trace.getActiveSpan();

    err = new Error("This is a test error");
    // recordException converts the error into a span event. 
    span.recordException(err);
    span.setAttribute('attribute1', 'value1');
    // Update the span status to failed.
    span.setStatus({ code: SpanStatusCode.ERROR, message: String(err) });
    res.json({ method: req.method, message: "Hello World", ...req.body });
});

app.get('/404', (req, res) => {
    res.sendStatus(404);
})

app.listen(parseInt(PORT, 10), () => {
    console.log(`Listening for requests on http://localhost:${PORT}`);
});