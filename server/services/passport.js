const passport = require('passport');
const User = require('../database/models/User');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField: 'name' } // Set default usernameField to look at 'name' field
const localLogin = new LocalStrategy(localOptions, function(name, password, done) {
	// Verify this username and password, call done with user
	User.findOne({where: {name}})
	.then((user) => {

		user.comparePassword(password, function(err, isMatch) {
			if (err) { return done(err); }
			if (!isMatch) { return done(null, false); }

			return done(null, user)
		})
	})
	.catch(() => done(null, false))
	// If it is the correct username,
	// Otherwise, call done with false
})

// Setup options for JWT strateagy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	// Payload is decoded JWT token
	// See if the user Id in te payload exists in our database
	// Otherwise, call done without a user object
	User.findById(payload.sub)
		.then(function(user) {
			done(null, user)
		})
		.catch(() => done(null, false))


	// return User.findById(payload.sub, function(err, user) {
	// 	if (err) { return done(err, false) }
	// 	if (user) {
	// 		console.log('hello')
	// 		done(null, user);
	// 	}
	// 	else {
	// 		console.log('goodbye')
	// 		done(null, false);
	// 	}
	// })
})

// Tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin);

