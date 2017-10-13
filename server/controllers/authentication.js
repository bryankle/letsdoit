const CreateUser = require('../database/queries/CreateUser');
const User = require('../database/models/User');

exports.signup = function(req, res, next) {
	// See if a user with the given email exists
	const name = req.body.name;
	const password = req.body.password;

	console.log("Requesting user data");

	return User.create({
		name: name,
		password: password
	}).then(() => console.log('Success!'))
		.catch((err) => console.log('Username already exists'))

	// return User.findOne({
	// 	where: {
	// 		name: 'bryankle'
	// 	}
	// }).then(function(res) {
	// 	// If user already exists
	// 	if (res) console.log('User already exists')
	// 	// If user does not exist
	// 	else console.log("Creating new user")
	// })

	console.log("The name you entered was:", name);
	console.log("The password you entered was:", password);

	// CreateUser(name, password);

	// If a user with email exists, return an error

	// If a user with email does not exist, create and save user record

	// Respond to request indicating the user was created
	// res.send({ success: true })
}