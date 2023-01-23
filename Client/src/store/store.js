import { configureStore } from '@reduxjs/toolkit'
import { userReducer, todoReducer } from '../features'
export default configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer
  },
})