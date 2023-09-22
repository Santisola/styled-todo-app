/* eslint-disable react/prop-types */
import { Todo } from "../Item"

export const TodoList = ({ todos }) => {
  return (
    <>
    {
        todos.map(todo => <Todo key={todo.id} todo={todo} />)
    }
    </>
  )
}
