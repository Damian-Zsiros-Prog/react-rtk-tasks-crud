import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    id: 1,
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Task 2 description",
    completed: true,
  },
]
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { payload } = action
      state.push(payload)
    },
    updateStateTask: (state, action) => {
      const { payload } = action
      const taskFound = state.find((task) => task.id === payload)
      if (taskFound) {
        state = state.map(function (task) {
          if (task == taskFound) {
            taskFound.completed = taskFound.completed ? false : true
          }
          return task
        })
      }
    },
    updateTask: (state, action) => {
      const { payload } = action
      const { id, title, description } = payload
      const taskFound = state.find((task) => task.id === id)
      state = state.map(function (task) {
        if (task == taskFound) {
          task.title = title
          task.description = description
        }
        return task
      })
    },
    deleteTask: (state, action) => {
      const { payload } = action
      const taskFound = state.find((task) => task.id === payload)
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1)
      }
    },
  },
})

export const { addTask, updateStateTask, updateTask, deleteTask } =
  taskSlice.actions

export default taskSlice.reducer
