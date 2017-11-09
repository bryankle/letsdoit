const db = require('./db');
const User = require('./user');
const Task = require('./task');
const Group = require('./group');

User.hasMany(Task, { as: 'tasks' });
Group.hasMany(Task, { as: 'tasks' }); 
Task.belongsTo(Group, { as: 'group' })
Task.belongsTo(User, { as: 'user' })

User.belongsToMany(Group, {through: 'user_group'});
Group.belongsToMany(User, {through: 'user_group'});

module.exports = {
	db,
	User,
	Task,
	Group
}
