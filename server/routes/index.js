const express = require('express');
const router = express.Router();

// move tpo controllr
const User = require('../database/models/').User;
const Task = require('../database/models/').Task 


const Authentication = require('../controllers/authentication');

// Task seed data
const testJson = require('../test.json');

// router.use('/users', require('./users'));

// Will work differently when implementing user login function
// Will not grab user task data until login is successful
// Create more routes for specific users and tasks
// Add PUT, POST, GET, and DELETE

router.get('/', function(req, res) {
	console.log("Connected to API");
	Task.findAll()
		.then((data) => {
			console.log("Retrieivng user tasks")
		    res.json(data);
		})
});


module.exports = router;
