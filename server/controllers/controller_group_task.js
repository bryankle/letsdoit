const Task = require('../database/models/task');
const User = require('../database/models/user');
const Group = require('../database/models/group');

exports.loadTasks = (req, res, next) => {
    const { groupId } = req.params;
    console.log('CONTROLLER - loadTasks')
    Group.findOne({
        where: { id: 1 },
        include: [{
            model: Task,
            as: 'tasks'
        }]
    })
    .then(group => res.send(group))
}
