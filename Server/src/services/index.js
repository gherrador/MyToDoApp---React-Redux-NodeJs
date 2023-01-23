const dao = require('../dal/dao')
const todoServices = require('./todo/todo')

module.exports = {
    todoServices: todoServices(dao)
}