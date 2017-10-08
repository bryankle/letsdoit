const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    res.send('Getting from router')
})


module.exports = router;
