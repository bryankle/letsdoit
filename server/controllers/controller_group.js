const Task = require('../database/models/task');
const User = require('../database/models/user');
const Group = require('../database/models/group');

// Pass in userId from req.body
exports.createGroup = (req, res, next) => {
	console.log('CONTROLLER - createGroup')
		console.log('GROUP', Group)
		console.log('USER', User);
	const { name, creator } = req.body;
	console.log('req.body');
	console.log('name', name);
	console.log('creator', creator);
	return Group.create({
		name: name,
		creator: creator
	})
	.then((group) => {
		return User.findOne({where: { name: 'bryan' }})
			.then(user => {
				console.log('user.dataValues', user.dataValues)
				group.addUser(user)
			})
		// group.addUser()
		// console.log('createGroup was successful')
		// res.send(group);
	})
	.catch(err => res.send(err))
}

// exports.loadGroups = (req, res, next) => {
// 	console.log('CONTROLLER - loadGroups')
// 	Group.find({

// 	})
// }

// Adjust task reducer to update Redux store to hold users states in 'tasks'

// Check componentDidMount property to ensure that initially loaded tasks will upload tasks to store

// Ensure rendered tasks are coming from store state