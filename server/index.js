const express = require('express');
const path = require('path');
const routes = require('./routes');
const morgan = require('morgan');
const app = express();

const bodyParser = require('body-parser');

app.use(routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 3001;

app.listen(PORT, function() {
    console.log("Listening on port: ", PORT);
})