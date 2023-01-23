const todoControllers = (service) => {
    const { todoServices } = service
    return {
        todoList: async (req, res) => {      
            const user = req.user.username             
            const todos = await todoServices.todoList(user) 
            if (todos !== undefined) {
                res.status(200).json(todos)
            } else {
                res.status(404).json("documents not found")
            }
        },
        todoSave: async (req, res) => {
            const user  = req.user.username
            const text = req.body.text     
            try {
                const newToDo = await todoServices.todoSave(text, user)
                res.status(200).json(newToDo)
            } catch {
                res.status(404).json("save failed")
            }
        },
        todoDeleteById: async(req, res) => {
            const id = req.params.id
            try{
                const todoDelete = await todoServices.todoDelete(id)
                res.status(200).json(todoDelete)
            }catch{
                res.status(404).json("delete failed")
            }
        },
        todoDeleteAll: async(req, res) => {
            try{
                const todoDelete = await todoServices.todoDeleteAll()
                res.status(200).json(todoDelete)
            }catch{
                res.status(404).json("delete failed")
            }
        },
        todoUpdate: async(req, res) => {
            const id = req.params.id
            try{
                const todoUpdate = await todoServices.todoUpdate(id)
                res.status(200).json(todoUpdate)
            }catch{
                res.status(404).json("update failed")
            }
        }

    }
}

module.exports = todoControllers