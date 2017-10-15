const Task = require('../database/models/task');


exports.addtask = function(req, res, next) {

	const task = req.body.task;
	const userId = '?';

	return Task.create({
		content: task,
		completed: false,
		userId: 1
	})
	.then((task) => {
		console.log(`Task: ${task} added`)
	})
}

// Adjust task reducer to update Redux store to hold users states in 'tasks'

// Check componentDidMount property to ensure that initially loaded tasks will upload tasks to store

// Ensure rendered tasks are coming from store state