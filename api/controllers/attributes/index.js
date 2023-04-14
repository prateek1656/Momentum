const Sequelize = require("sequelize");
const db = require('../../models')


const ControllerAttributes = {
    removeTimestamp: {exclude: ["created_at", "updated_at"]},
}

module.exports = ControllerAttributes
