// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require('bluebird');
var {
  db,
  User,
  Task
} = require('./database/models');

var data = {
  user: [
    {name: "bryan", password: "123password"}
    ],
  task: [
    {content: "haircut", completed: false}
  ]
};

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item);
    });
  });
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});
