import { configureStore } from '@reduxjs/toolkit'
import ToDoSlice from '../Slices/ToDoSlice'

export const store = configureStore({
  reducer: {
      todo:ToDoSlice
  },
})