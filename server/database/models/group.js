const db = require('./db');
const Sequelize = require('sequelize');

const Group = db.define('group', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	creator: {
		type: Sequelize.STRING
	}
})


module.exports = Group;