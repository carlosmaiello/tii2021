const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/usuarios', routes);


app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500).send(err);
})

module.exports = app;
