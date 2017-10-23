const Task = require('../database/models/task');
const User = require('../database/models/User');


// Pass in userId from req.body
exports.loadTask = (req, res, next) => {
	console.log("Connected to API");
	console.log('req.body', req.params);
	const { user } = req.params;
	User.findOne({ where: { name: user } })
	.then(user => user.id)
	.then(userId => {
		Task.findAll({
			where: { userId }
		})
		.then(tasks => {
			console.log('tasks', tasks);
			console.log('userId', userId)
			console.log("Retrieving user tasks")
		    res.json(tasks);
		})
		.catch(err => res.send(err))
	})
}

exports.addtask = (req, res, next) => {
	const task = req.body.task;
	const user = req.params.user;
	const userId = 1;
	// Find userID given username
	return User.findOne({
		where: {
			name: user
		}
	}).then((user) => {
		console.log('Creating a new task with this ID')
		console.log(user);
		console.log(user.dataValues.id);
		return Task.create({
			content: task,
			completed: false,
			userId: user.dataValues.id
		})
		.then(task => {
			console.log(`Task: ${task} added`);
			res.send(task)
		})
	})
	// Assign task parentID (userID) this ID
}



exports.completeTask = (req, res, next) => {
	console.log('CONTROLLER - completeTask');
	console.log('req.params', req.params);
	const { userId, taskId } = req.params;
	Task.update(
		{ completed: true },
		{ where: { id: taskId } }
	)
	.then(task => res.send(task))
}

// Adjust task reducer to update Redux store to hold users states in 'tasks'

// Check componentDidMount property to ensure that initially loaded tasks will upload tasks to store

// Ensure rendered tasks are coming from store state