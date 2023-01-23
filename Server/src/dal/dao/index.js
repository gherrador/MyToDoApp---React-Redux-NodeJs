const models = require('../../models/index')
const todoDao = require('./todo/todo')
const userDao = require("./user/user")
const {isValidPassword, createHash} = require('../../middleware/hasspass/hasspass')


module.exports = {
    todoDao: todoDao(models),
    userDao: userDao(models, isValidPassword, createHash)
}