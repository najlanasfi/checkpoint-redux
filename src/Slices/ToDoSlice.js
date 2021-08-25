import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todolist:[
     { id:Math.random(),title:'todo Item n1',description:'todo description n1',isDone:false},
      { id:Math.random(),title:'todo Item n2',description:'todo description n2',isDone:false},
      { id:Math.random(),title:'todo Item n3',description:'todo description n3',isDone:false},
      { id:Math.random(),title:'todo Item n4',description:'todo description n4',isDone:false}
 ]
}

export const ToDoSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    AddTodo: (state,action) => {
    state.todolist.push(action.payload)
    },
    DeleteTodo:(state,action) => {
    state.todolist=state.todolist.filter(el=>el.id!==action.payload.id )
  },
  DoneTodo:(state,action)=>{
  let i=state.todolist.findIndex(el=>el.id==action.payload.id)
state.todolist[i]={...state.todolist[i],isDone:!state.todolist[i].isDone} 
},
EditTodoItem:(state,action)=>{
    let i =state.todolist.findIndex(el=>el.id==action.payload.id)
    state.todolist[i]={...state.todolist[i],description:action.payload.description}
}
},
})

// Action creators are generated for each case reducer function
export const { AddTodo, DeleteTodo,DoneTodo ,EditTodoItem} = ToDoSlice.actions

export default ToDoSlice.reducer