const services = require('../services')
const todoController = require('./todo/todo')
const userControllers = require('./user/user')


module.exports = {
    todoController: todoController(services),
    userControllers: userControllers(),

}