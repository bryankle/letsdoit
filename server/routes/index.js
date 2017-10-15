const express = require('express');

// move tpo controllr
// const User = require('../database/models/').User;
const Task = require('../database/models/').Task 


const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');
// Passport middleware
const requireAuth = passport.authenticate('jwt', { session: false }); //prevents passport from using cookies and to use jwt tokens
const requireSignin = passport.authenticate('local', { session: false });
// Task seed data
const testJson = require('../test.json');


// Will work differently when implementing user login function
// Will not grab user task data until login is successful
// Create more routes for specific users and tasks
// Add PUT, POST, GET, and DELETE

module.exports = function(app) {

	app.get('/api', function(req, res) {
	console.log("Connected to API");
	Task.findAll()
		.then((data) => {
			console.log("Retrieving user tasks")
		    res.json(data);
		})
	});

	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/signup', Authentication.signup);
	app.get('/', requireAuth, function(req, res) {
		console.log('auth success see message')
		res.send({ 'message': 'there' })
	})


}
