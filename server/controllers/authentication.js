exports.signup = function(req, res, next) {
	// See if a user with the given email exists
	console.log("Requesting user data")
	console.log(req.body);
	res.send('Authentication')
	// If a user with email exists, return an error

	// If a user with email does not exist, create and save user record

	// Respond to request indicating the user was created
	// res.send({ success: true })
}