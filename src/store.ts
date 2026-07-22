import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './slices'
import { toDoReducer } from './todosSlices'
// ...

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toDo: toDoReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch