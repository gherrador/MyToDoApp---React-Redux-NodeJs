const todoServices = (dao) =>{

    const {todoDao} = dao
    return{
        todoList: async(user) => {
            return await todoDao.todoList(user)
        },

        todoSave: async(todo, user) => {
            return await todoDao.todoSave(todo, user)
        },
        todoDelete: async (id) => {
            return await todoDao.todoDelete(id)

        },
        todoDeleteAll: async () => {
            return await todoDao.todoDeleteAll()
        },
        todoUpdate: async (id) => {
            return await todoDao.todoUpdate(id)
        }

    }
}

module.exports = todoServices