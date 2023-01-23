import axios from 'axios'


export const getToDosList = async () => {
    const url = `/todos/list/`;
    let query = await axios.get(url)
    return query.data
}

export const updateStateTodo = async (id) => {
    const url = `/todos/update/${id}`;
    let query = await axios.put(url)
    return query.data
}

export const deleteTodoOfList = async(id) => {
    const url = `/todos/delete/${id}`
    let query = await axios.delete(url)    
    return query.data
}

export const addNewTodoList = async(todo) => {
    const url = `/todos/save`;
    let query = await axios.post(url, {text: todo})
    return query.data
}

export const deleteAllTodosList = async(todo) => {
    const url = `/todos/delete`;
    let query = await axios.delete(url)
    return query.data
}




