const Sequelize = require("Sequelize");
const db = new Sequelize("postgres://localhost:5432/letsdoit", {
	logging: false
})

module.exports = db;