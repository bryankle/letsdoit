const db = require('./db');
const User = require('./user');
const Task = require('./task');

User.hasMany(Task);

module.exports = {
	db,
	User,
	Task
}
