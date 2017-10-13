const User = require('../models/User');

module.exports = (name, password) => {
	User.create({
		name: name,
		password: password
	})
}