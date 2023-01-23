import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getToDosList, updateStateTodo, deleteTodoOfList, addNewTodoList, deleteAllTodosList } from '../../api';


const initialState = {
    loading: false,
    todos: [],
    error: ''
}

export const getToDos = createAsyncThunk('GET_TODOS_LIST', async() => {
    return await getToDosList() 
})

export const updateToDo = createAsyncThunk('UPDATE_TODO', async(id) => {
    return await updateStateTodo(id)
})

export const deleteToDo = createAsyncThunk('DELETE_TODO', async(id) => {
    return await deleteTodoOfList(id)
})

export const addNewTodo = createAsyncThunk('ADD_TODO', async(todo) => {
    return await addNewTodoList(todo)
})

export const deleteAllTodos = createAsyncThunk('DELETE_ALL_TODOS', async() => {
    return await deleteAllTodosList()
})

const todosSlice = createSlice({
    name: 'todo',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(getToDos.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(getToDos.fulfilled, (state, action) => {
            state.loading = false
            state.todos = action.payload
            state.error = ''
        })
        builder.addCase(getToDos.rejected, (state, action) => {
            state.loading = false
            state.todos = []
            state.error = action.error.message
        })
        
        builder.addCase(updateToDo.fulfilled, (state, action) => {
            state.loading = false 
            state.todos = state.todos.map(todo => todo._id === action.payload._id ? { ...todo, complete: action.payload.complete } : todo);
            state.error = ''
        })
        builder.addCase(updateToDo.rejected, (state, action) => {
            state.loading = false
            state.todos = [...state.todos]
            state.error = action.error.message
        })       
        builder.addCase(deleteToDo.fulfilled, (state, action) => {
            state.loading = false  
            state.todos = state.todos.filter(todo => todo._id !== action.payload._id)
            state.error = ''
        })
        builder.addCase(deleteToDo.rejected, (state, action) => {
            state.loading = false
            state.todos = [...state.todos]
            state.error = action.error.message
        })
        builder.addCase(addNewTodo.fulfilled, (state, action) => {
            state.loading = false   
            state.todos = [...state.todos, action.payload]
            state.error = ''
        })
        builder.addCase(addNewTodo.rejected, (state, action) => {
            state.loading = false
            state.todos = [...state.todos]
            state.error = action.error.message
        })       
        builder.addCase(deleteAllTodos.fulfilled, (state, action) => {
            state.loading = false
            state.todos = []
            state.error = ''
        })
        builder.addCase(deleteAllTodos.rejected, (state, action) => {
            state.loading = false
            state.todos = [...state.todos]
            state.error = action.error.message
        })

    }
})

export const todoReducer =  todosSlice.reducer