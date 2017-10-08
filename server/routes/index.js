const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    console.log("hello world")
    res.send('Getting from router')
});

router.get('/api/', function(req, res) {
    res.json({ hello: 'world' });
});


module.exports = router;
