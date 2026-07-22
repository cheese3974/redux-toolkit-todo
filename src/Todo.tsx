// import React from 'react'
import type { RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { add } from './todosSlices'

export function Todo() {
  const count = useSelector((state: RootState) => state.toDo.length)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <input type="text"/>
        <button
          onClick={() => dispatch(add())} //todo inputをreducerに反映させる必要あり addに引数を増やす
        >
          追加
        </button>
        <span>{count}</span>
      </div>
      <div>
        {/* ここにlistsの内容を表示 */}
      </div>
    </div>
  )
}