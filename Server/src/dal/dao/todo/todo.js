const todoDao = (model) => {
    const { todoModel } = model
    return {
        todoList: async (user) => {
            try {
                const todos = await todoModel.find({username: user}).lean()                
                return todos
            } catch (err) {
                throw new Error("an error has ocurrend during the process.", err)
            }
        },
        todoSave: async (todo, user) => {   
            try {
                const newTodo =  new todoModel({
                    username: user,
                    text: todo,
                })
                await newTodo.save()               
                return newTodo
            } catch (err) {
                throw new Error("an error has ocurrend during the process.", err)
            }
        },
        todoDelete: async (id) => {
            try{
                let response = await todoModel.findOneAndRemove({ _id: id })
                return response
            }catch(err){
                throw new Error("an error has ocurrend during the process.", err)
            }
        },
        todoDeleteAll: async () => {
            try{
                let response = await todoModel.deleteMany({});
                return response
            }catch(err){
                throw new Error("an error has ocurrend during the process.", err)
            }
        },
        todoUpdate: async (id) => {
            try{
                let todo = await todoModel.findById(id)
                todo.complete = !todo.complete
                let saveUpdate = todo.save()
                return saveUpdate
            }catch(err){
                throw new Error("an error has ocurrend during the process.", err)
            }
        }

    }
}

module.exports = todoDao