import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser, getUser } from '../../api';
import { alertLogError } from '../../utils';


const initialState = {
    loading: false,
    user: [],
    error: ''
}

export const logUser = createAsyncThunk('LOGIN_USER', async(user) => {
    return await loginUser(user) 
})

export const regUser = createAsyncThunk('REGISTER_USER', async(user) => {
    return await registerUser(user)
})

export const logOut = createAsyncThunk('LOGOUT_USER', async() => {
    return await logoutUser()
})

export const getLogin = createAsyncThunk('GET_USER', async() => {
    return await getUser()
})

const todosSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(logUser.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(logUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = [action.payload]
            state.error = ''
        })
        builder.addCase(logUser.rejected, (state, action) => {
            state.loading = false
            state.user = []
            state.error = alertLogError()
        })
        
        builder.addCase(regUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = [action.payload]
            state.error = ''
        })
        builder.addCase(regUser.rejected, (state, action) => {
            state.loading = false
            state.todos = []
            state.error = action.error.message
        })       
        builder.addCase(logOut.fulfilled, (state, action) => {
            state.loading = false
            state.user = []
            state.error = ''
        })
        builder.addCase(logOut.rejected, (state, action) => {
            state.loading = false
            state.user = [...state.user]
            state.error = action.error.message
        })
        builder.addCase(getLogin.pending, (state) =>{
            state.loading = true
            state.user = []
            state.error = ''
        })
        builder.addCase(getLogin.fulfilled, (state, action) => {
            state.loading = false
            state.user = [action.payload]
            state.error = ''
        })
        builder.addCase(getLogin.rejected, (state, action) => {
            state.loading = false
            state.user = []
            state.error = 'there is no logged in user'
        })
    }
})

export const userReducer = todosSlice.reducer
