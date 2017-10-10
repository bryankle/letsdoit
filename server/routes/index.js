const express = require('express');
const router = express.Router();

const User = require('../models/').User;


// Task seed data
const testJson = require('../test.json');

// router.get('/', function(req, res) {
//     console.log("hello world")
//     res.send('Getting from router')
// });

router.get('/', function(req, res) {
	console.log("HELLO GETTING THE API");
	User.findAll()
		.then((res) => {
			console.log("GRABBING USER DATA")
			console.log(res);
		})
    res.json(testJson);
});


module.exports = router;
