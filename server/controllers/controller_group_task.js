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

exports.completeTask = (req, res, next) => {
    console.log('CONTROLLER - completeTask');
    console.log('req.params', req.params);
    const { groupId, taskId } = req.params;
    Task.update(
        { completed: true },
        { where: { id: taskId }}
    )
    .then(() => res.send({ groupId, taskId }))
}


// exports.completeTask = (req, res, next) => {
//     console.log('CONTROLLER - completeTask');
//     console.log('req.params', req.params);
//     const { userId, taskId } = req.params;
//     Task.update(
//         { completed: true },
//         { where: { id: taskId } }
//     )
//     .then(() => res.send({ userId, taskId }))
// }
