const Task = require('../database/models/task');
const User = require('../database/models/user');
const Group = require('../database/models/group');

exports.loadTasks = (req, res, next) => {
    const { groupId } = req.params;
    console.log('CONTROLLER - loadTasks')
    Group.findOne({
        where: { id: groupId },
        include: [{
            model: Task,
            as: 'tasks'
        }]
    })
    .then(group => res.send(group))
}

exports.addTask = (req, res, next) => {
    const { groupId } = req.params;
    const { task } = req.body;
        return Task.create({
                content: task,
                completed: false,
                groupId
        })
        .then(task => {
            console.log('Group task added');
            res.send(task)
        })
        .catch(err => console.log(err))
}
// REFERENCE FROM USER TASK CONTROLLER
// exports.addtask = (req, res, next) => {
//     const task = req.body.task;
//     const user = req.params.user;
//     const userId = 1;
//     // Find userID given username
//     return User.findOne({
//         where: {
//             name: user
//         }
//     }).then((user) => {
//         console.log('Creating a new task with this ID')
//         console.log(user);
//         console.log(user.dataValues.id);
//         return Task.create({
//             content: task,
//             completed: false,
//             userId: user.dataValues.id
//         })
//         .then(task => {
//             console.log(`Task: ${task} added`);
//             res.send(task)
//         })
//     })
//     .catch(err => console.log(err))
//     // Assign task parentID (userID) this ID
// }