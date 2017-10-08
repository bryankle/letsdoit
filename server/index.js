const express = require('express');
const path = require('path');
const routes = require('./routes');
const morgan = require('morgan');
const app = express();

const bodyParser = require('body-parser');

app.use(routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3000, function() {
    console.log("Listening on port 3000")
})