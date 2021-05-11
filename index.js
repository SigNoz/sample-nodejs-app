const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
 res.status(200).send('Hello World');
});

app.listen(9000);
