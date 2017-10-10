const db = require('./db');
const Sequelize = require('sequelize');

const Task = db.define('task', {
	content: {
		type: Sequelize.STRING,
		allowNull: false
	},
	password: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
	}
});


module.exports = Task;