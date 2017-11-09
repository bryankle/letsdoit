const db = require('./db');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');
const Groups = require('./group')

const User = db.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

User.prototype.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  })
}

// On save hook, encrypt password
User.beforeCreate(function(user, options) {
    return cryptPassword(user.password)
      .then(success => {
        user.password = success;
      })
      .catch(err => {
        if (err) console.log(err);
      });
  });

function cryptPassword(password) {
  console.log("cryptPassword" + password);
  return new Promise(function(resolve, reject) {
    bcrypt.genSalt(10, function(err, salt) {
      // Encrypt password using bycrpt module
      if (err) return reject(err);

      bcrypt.hash(password, salt, null, function(err, hash) {
        if (err) return reject(err);
        return resolve(hash);
      });
    });
  });
}

// User.beforeSave(function(user) {
// 	return function(next) {
// 		bcrypt.genSalt(10, function(err, salt) {
// 		if (err) { return next(err); }

// 		bcrypt.hash(user.password, salt, null, function(err, hash) {
// 			if (err) { return next(err); }

// 			user.password = hash;
// 		})
// 	})
// 	}

// })

module.exports = User;