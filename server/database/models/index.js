const db = require('./db');
const User = require('./user');
const Task = require('./task');
const Group = require('./group');

User.hasMany(Task);
Group.hasMany(Task); 
User.belongsToMany(Group, {through: 'user_group'});
Group.belongsToMany(User, {through: 'user_group'});

// Group.hasMany(User);

module.exports = {
	db,
	User,
	Task,
	Group
}
