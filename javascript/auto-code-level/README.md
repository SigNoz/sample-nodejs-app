# OpenTelemetry Auto Instrumentation for SigNoz Cloud

## Setup Instructions

### Step 1: Configure the Tracing File

Your sample app already includes a `tracing.js` or `tracing.ts` file. Update the following variables in the file:

1. **Set the SigNoz Cloud Ingestion URL**
   - Replace `<region>` with your SigNoz Cloud region.
   ```js
   const exporterOptions = {
     url: 'https://ingest.<region>.signoz.cloud:443/v1/traces'
   };
   ```

2. **Set the Ingestion Key**
   - Replace `<your-ingestion-key>` with your SigNoz ingestion key.
   ```js
   headers: { "signoz-access-token": "<your-ingestion-key>" }
   ```

3. **Set the Service Name**
   - Replace `<service_name>` with the name of your service.
   ```js
   resource: new Resource({
     [SemanticResourceAttributes.SERVICE_NAME]: '<service_name>'
   })
   ```

### Step 2: Run the Application

#### JavaScript (Node.js)
Run the application with OpenTelemetry tracing:
```bash
node -r ./tracing.js index.js
```

#### TypeScript
Import the tracing file in your main entry file (`main.tsx` or `index.ts`):
```ts
import './tracing';
```
Run the app:
```bash
node ts-node src/index.ts
```

### Step 3: Validate Traces in SigNoz Cloud
Check the SigNoz Cloud dashboard to verify that your application is sending traces. If the application does not appear in the services section, refer to the troubleshooting guide in the SigNoz documentation.

---

Your OpenTelemetry instrumentation is now set up! 🚀

