import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
    taskId: 0
  },
  reducers: {
    addTodo: (state , action) => {
      state.todoList.push({task : action.payload, taskId : state.taskId + 1 })
      state.taskId =  state.taskId + 1
    },
    updateTodo: (state , action) => {
       state.todoList = state.todoList.map(item => {
        if (item.taskId === action.payload.taskId) {
          return {
            ...item,
            task: action.payload.task,
          };
        } else {
          return item;
        }
      })
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(todo => todo.taskId !== action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer