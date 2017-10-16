const Task = require('../database/models/task');
const User = require('../database/models/User');

exports.addtask = (req, res, next) => {

	const task = req.body.task;
	const user = req.body.user;
	const userId = 1;
	// Find id of current logged user
	return User.findOne({
		where: {
			name: user
		}
	// Use user id to associate newly created task
	}).then((user) => {
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

}