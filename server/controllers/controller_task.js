const Task = require("../database/models/task");
const User = require("../database/models/user");

// Pass in userId from req.body
exports.loadTask = (req, res, next) => {
  console.log("Connected to API");
  console.log("req.body", req.params);
  const { userId } = req.params;
      Task.findAll({
        where: { userId }
      })
        .then(tasks => {
          res.json(tasks);
        })
        .catch(err => console.log(err));
};

exports.addtask = (req, res, next) => {
  const task = req.body.task;
  const userId = req.params.userId;
  console.log("req.params", req.params);
  console.log("userId", userId);
  // Find userID given username
  return Task.create({
    content: task,
    completed: false,
    userId
  })
    .then(task => {
      console.log(`Task: ${task} added`);
      res.send(task);
    })
    .catch(err => console.log(err));
  // Assign task parentID (userID) this ID
};

exports.completeTask = (req, res, next) => {
  console.log("CONTROLLER - completeTask");
  console.log("req.params", req.params);
  const { userId, taskId } = req.params;
  Task.update({ completed: true }, { where: { id: taskId } }).then(() =>
    res.send({ userId, taskId })
  );
};

exports.clearCompletedTasks = (req, res, next) => {
  const userId = req.params.user;
  return Task.destroy({
    where: {
      userId,
      completed: true
    }
  })
    .then(data => res.send("Successfully cleared"))
    .catch(err => console.log(err));
};

// Adjust task reducer to update Redux store to hold users states in 'tasks'

// Check componentDidMount property to ensure that initially loaded tasks will upload tasks to store

// Ensure rendered tasks are coming from store state
