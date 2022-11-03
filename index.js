const express = require("express");
const cors = require('cors')
const PORT = process.env.PORT || "5555";
const app = express();

app.use(cors());
app.use(express.json())

app.all("/", (req, res) => {
    res.json({ method: req.method, message: "Hello World", ...req.body });
});

app.get('/404', (req, res) => {
    res.sendStatus(404);
})

app.listen(parseInt(PORT, 10), () => {
    console.log(`Listening for requests on http://localhost:${PORT}`);
});