const {Sequelize} = require("sequelize")
const dbconfig = require("../config/config")
const User = require("../model/User")
const Address = require("../model/Address")
const Tech = require("../model/Tech")

const connection = new Sequelize(dbconfig)

User.init(connection)
Address.init(connection)
Tech.init(connection)
User.associate(connection.models)
Address.associate(connection.models)
Tech.associate(connection.models)


module.exports = connection
