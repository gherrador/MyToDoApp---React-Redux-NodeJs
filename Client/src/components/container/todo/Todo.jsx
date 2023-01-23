import { useEffect, useState } from "react"
import { TodoPanel } from "../../view"
import { useDispatch, useSelector } from 'react-redux'
import { getToDos, updateToDo, deleteToDo, addNewTodo, deleteAllTodos } from '../../../features'

export const TodoContainer = ({ user, closeSession}) => {
    const [popupActive, setPopupActive] = useState(false)
    const todo = useSelector((state) => state.todo)
    const [newTodo, setNewTodo] = useState()
    const dispatch = useDispatch()

    const update = (id) => {
        dispatch(updateToDo(id))
    }

    const deleteTodoOfList = (id, evt) => {
        evt.stopPropagation();
        dispatch(deleteToDo(id))
    }

    const deleteTodos = () => {
        dispatch(deleteAllTodos())
    }

    const addNew = (evt) => {
        if (evt.key === "Enter" || evt.target.className === "button") {
            dispatch(addNewTodo(newTodo))
            setPopupActive(false)
            setNewTodo("")
        }
    }
    useEffect(() => {
        dispatch(getToDos())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])  

    const props = { addNew, setNewTodo, update, deleteTodoOfList, popupActive, setPopupActive, todo, user, newTodo, deleteTodos, closeSession }

    return (
        <>
            {!todo.loading ? <TodoPanel props={props} /> : null}
        </>
    )
}

