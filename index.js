
const express = require("express");
const cors = require('cors')
const PORT = process.env.PORT || "5555";
const app = express();

app.use(cors());
app.use(express.json())

app.all("/", (req, res) => {

    sleep()
    res.json({ method: req.method, message: "Hello World", ...req.body });
});

// synchronous sleep function which sleeps for random time between 0 and 5 seconds
function sleep() {
    const sleepTime = Math.floor(Math.random() * 5000);
    const start = Date.now();
    console.log(`Sleeping for ${sleepTime} ms`);
    while (Date.now() < start + sleepTime);
}

app.get('/404', (req, res) => {
    res.sendStatus(404);
})

app.listen(parseInt(PORT, 10), () => {
    console.log(`Listening for requests on http://localhost:${PORT}`);
});