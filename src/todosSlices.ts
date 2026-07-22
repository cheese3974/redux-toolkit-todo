import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// todo 大困りごと toDoStateじゃなくてtoDosStateとしてtodoリストの中身を配列にしたいけどinterfaceの書き方わからん

export type toDosState = {
  id: number,
  name: string,
  complete: boolean
}[]

export type toDoState = toDosState[number]


const initialState: toDosState = [
  {
    id: 1,
    name: '初期',
    complete: false,
  }
]

export const toDosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state) => {
      // todo 仮コード
      const nextId: toDoState['id'] = 1
      const nextName: toDoState['name'] = 'test'
      const newTodo: toDoState = {
        id: nextId,
        name: nextName,
        complete: false
      }
      state.push(
        newTodo
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { add } = toDosSlice.actions
export const toDoReducer = toDosSlice.reducer