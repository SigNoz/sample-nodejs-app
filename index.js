const express = require("express");
const cors = require('cors')
const PORT = process.env.PORT || "5555";
const app = express();
const dbo = require('./mongoDB')
app.use(cors());
app.use(express.json())

app.all("/", (req, res) => {
    res.json({ method: req.method, message: "Hello World", ...req.body });
});

app.get('/404', (req, res) => {
    res.sendStatus(404);
})

app.post('/mongoDBInsert', (req, res) => {
    const dbConnect = dbo.getDb();
    const reqBody = req.body

    dbConnect
        .collection("signoz")
        .insertOne(reqBody, function (err, result) {
            if (err) {
                res.status(400).send("Error inserting matches!");
            } else {
                console.log(`Added a new match with id ${result.insertedId}`);
                res.status(204).send();
            }
        });

})

app.get('/mongoDBError', (req, res) => {

    const dbConnect = dbo.getDb();

    dbConnect
        .createCollection("signoz", function (err, result) {
            console.log(err)
            if (err) {
                res.status(400).send("Error creating collection");
            } else {
                console.log(`Collection created successfully`);
                res.status(204).send();
            }
        })

})
dbo.connectToServer((err) => {
    console.log(err)
    app.listen(parseInt(PORT, 10), () => {
        console.log(`Listening for requests on http://localhost:${PORT}`);
    });
})