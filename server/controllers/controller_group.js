const Task = require('../database/models/task');
const User = require('../database/models/user');
const Group = require('../database/models/group');

// Pass in userId from req.body
exports.createGroup = (req, res, next) => {
	console.log('CONTROLLER - createGroup')
	const { name, creator } = req.body;
	Group.create({
		name,
		creator
	})
	.then(data => {
		console.log('createGroup was successful')
		res.send(data);
	})
	.catch(err => res.send(err))
}

// Adjust task reducer to update Redux store to hold users states in 'tasks'

// Check componentDidMount property to ensure that initially loaded tasks will upload tasks to store

// Ensure rendered tasks are coming from store state