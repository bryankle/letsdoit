const CreateUser = require('../database/queries/CreateUser');
const User = require('../database/models/User');

exports.signup = function(req, res, next) {
	// See if a user with the given email exists
	const name = req.body.name;
	const password = req.body.password;

	if (!name || !password) {
		console.log("error: 'You must provide email and password'")
		return res.status(422).send({ error: 'You must provide email and password' })
	}

	console.log("Requesting user data");

	return User.create({
			name: name,
			password: password
		})
		.then(() => {
			console.log('User created')
			res.json({ success: true })
		})
		.catch((err) => console.log('Username already exists'))


	console.log("The name you entered was:", name);
	console.log("The password you entered was:", password);

	// CreateUser(name, password);

	// If a user with email exists, return an error

	// If a user with email does not exist, create and save user record

	// Respond to request indicating the user was created
	// res.send({ success: true })
}