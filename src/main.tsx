import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
// import { Counter } from './Counter.tsx'
import { Todo } from './Todo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Todo />
      {/* <App /> */}
    </Provider>
  </StrictMode>,
)
