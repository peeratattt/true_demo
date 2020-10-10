import {createSlice} from '@reduxjs/toolkit'
import { ActionCreators } from 'redux-undo'

const storeSlice = createSlice({
  name: 'store',
  initialState: {
    list: [],
  },
  reducers: {
    add: (state, action) => {
      const data = {
        text: action.payload,
        status: 'Active',
      }
      state.list.push(data)
    },
    completed: (state, action) => {
      console.log('action: ', action)
      state.list[action.payload] = {
        text: state.list[action.payload].text,
        status: state.list[action.payload].status === 'Completed' ? 'Active' : 'Completed'
      }
    },
    undo: (state) => {
      ActionCreators.undo()
    },
    redo: (state) => {
      ActionCreators.redo()
    },
  }
})

export const {add, completed, undo, redo} = storeSlice.actions

export default storeSlice.reducer