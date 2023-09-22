/* eslint-disable react/prop-types */
import { Todo } from "../Item"

export const TodoList = ({ todos, onDeleteTodos, onChangeStatus }) => {
  return (
    <>
    {
        todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onDeleteTodos={onDeleteTodos}
            onChangeStatus={onChangeStatus}
          />
        ))
    }
    </>
  )
}
