const Task = require('../models/task');

module.exports = (newTask) => {
	Task.create({
		content: newTask
	})
}