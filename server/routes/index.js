const express = require('express');
const router = express.Router();

const User = require('../database/models/').User;
const Task = require('../database/models/').Task;


// Task seed data
const testJson = require('../test.json');

// router.get('/', function(req, res) {
//     console.log("hello world")
//     res.send('Getting from router')
// });

router.get('/', function(req, res) {
	console.log("HELLO GETTING THE API");
	// User.findAll()
	// 	.then((res) => {
	// 		console.log("GRABBING USER DATA")
	// 		console.log(res);
	// 	})
	Task.findAll()
		.then((data) => {
			console.log("GRABBING USER TASKS")
			// console.log(data);
		    res.json(data);
		})
    // res.json(testJson);
});


module.exports = router;
