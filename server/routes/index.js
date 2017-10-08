const express = require('express');
const router = express.Router();
const testJson = require('../test.json');
console.log(testJson)
router.get('/', function(req, res) {
    console.log("hello world")
    res.send('Getting from router')
});

router.get('/api/', function(req, res) {
    res.json(testJson);
});


module.exports = router;
