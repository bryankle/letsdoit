const CreateUser = require('../database/queries/CreateUser');

exports.signup = function(req, res, next) {
	// See if a user with the given email exists
	const name = req.body.name;
	const password = req.body.password;

	console.log("Requesting user data")

	console.log("The name you entered was:", name);
	console.log("The password you entered was:", password);

	CreateUser(name, password);

	res.send('Authentication')
	// If a user with email exists, return an error

	// If a user with email does not exist, create and save user record

	// Respond to request indicating the user was created
	// res.send({ success: true })
}