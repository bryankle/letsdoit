const Task = require('../database/models/task');
const User = require('../database/models/User');

exports.addtask = (req, res, next) => {

	const task = req.body.task;
	const user = req.body.user;
	const userId = 1;
	// Find userID given username
	return User.findOne({
		where: {
			name: user
		}
	}).then((user) => {
		console.log('Creating a new task with this ID')
		console.log(user.dataValues.id);
		console.log(this);
		return Task.create({
			content: task,
			completed: false,
			userId: user.dataValues.id
		})
		.then((task) => {
			console.log(`Task: ${task} added`);
			res.send(task)
		})
	})

	// Assign task parentID (userID) this ID


	// return Task.create({
	// 	content: task,
	// 	completed: false,
	// 	userId: userId
	// })
	// .then((task) => {
	// 	console.log(`Task: ${task} added`);
	// 	res.send(task)
	// })
}

// Adjust task reducer to update Redux store to hold users states in 'tasks'

// Check componentDidMount property to ensure that initially loaded tasks will upload tasks to store

// Ensure rendered tasks are coming from store state