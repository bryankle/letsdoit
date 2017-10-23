const User = require('../database/models/User');
const jwt = require('jwt-simple'); // Generates JWT token for user
const config = require('../config'); // File containing secret key for generating token

// Generates JWT token for user
function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
	// User has already had their name and password authorized
	// We just need to give them a token
	console.log('User has successfully signed in')
	res.send({ token: tokenForUser(req.user) })
}

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
		.then((user) => {
			console.log('User created')
			res.json({ token: tokenForUser(user) })
		})
		.catch((err) => res.status(422).send({ error: 'That username is has already been taken!' }))

}