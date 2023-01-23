const router = require('express').Router();
const { todoController } = require('../../controllers/index')

module.exports = routerToDo = () => {
    router   
    .get("/list", todoController.todoList)    
    .post("/save", todoController.todoSave) 
    .delete("/delete/:id", todoController.todoDeleteById)
    .delete("/delete", todoController.todoDeleteAll)
    .put("/update/:id", todoController.todoUpdate)
    return router;
};