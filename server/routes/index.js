const express = require('express');

const TaskController = require('../controllers/controller_task');
const Authentication = require('../controllers/controller_authentication');
const GroupController = require('../controllers/controller_group');
const GroupTaskController = require('../controllers/controller_group_task');
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

	// Remove after correlating tasks to user

	// Replace this with a new route and controller


	app.get('/api/user/:userId/tasks/', TaskController.loadTask);
	app.post('/api/user/:userId/tasks/', TaskController.addtask);
	app.put('/api/user/:userId/tasks/:taskId', TaskController.completeTask);
	app.delete('/api/tasks/:user', TaskController.clearCompletedTasks)

	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/signup', Authentication.signup);

	// Get all groups belonging to logged in user
	app.get('/api/groups/', GroupController.loadGroups);
	// Get group page by ID
	app.get('/api/groups/:groupId');
	// Create a group
	app.post('/api/groups/', GroupController.createGroup)
	// Delete a group page
	app.delete('/api/group/:groupId', GroupController.deleteGroup);
	// Add a user to a group
	app.post('/api/group/:groupId/add/user/:userId', GroupController.addToGroup);

	// Retrieve all group tasks
	app.get('/api/group/:groupId/tasks', GroupTaskController.loadTasks);
	// Create new group task
	app.post('/api/group/:groupId/tasks', GroupTaskController.addTask);
	// Complete group task
	app.put('/api/group/:groupId/tasks/:taskId', GroupTaskController.completeTask);
	// Remove all completed tasks
	app.delete('/api/group/:groupId/tasks')

	// Test route
	app.get('/', requireAuth, function(req, res) {
		console.log('auth success')
		res.send({ 'hi': 'there' })
	})
}
