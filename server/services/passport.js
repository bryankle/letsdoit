const passport = require('passport');
const User = require('../database/models/User');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT strateagy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// Create JWT strategy
const JwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	// Payload is decoded JWT token
	// See if the user Id in te payload exists in our database
	// Otherwise, call done without a user object
	User.findById(payload.sub)
		.then(function(user) {

		})
		.catch((err) => console.log(err))
	// User.findById(payload.sub, function(err, user) {
	// 	if (err) { return done(err, false) }
	// 	if (user) {
	// 		done(null, user);
	// 	}
	// 	else {
	// 		done(null, false);
	// 	}
	// })
})

// Tell passport to use this strategy
passport.use(jwtLogin)