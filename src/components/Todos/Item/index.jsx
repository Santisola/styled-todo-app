/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react"
import { CrossIcon } from "../../Icons/CrossIcon"
import { Check } from "../../Icons/Check"
import './styles.css'

const Todo = React.forwardRef(({ todo, onDeleteTodos, onChangeStatus, ...props }, ref) => {
  
  return (
      <article {...props} ref={ref} className={`${todo.completed ? 'completed' : ''} todoItem flex items-center gap-2 p-4 border-b border-b-gray-200 dark:border-[#2f3146]`}>
          <button
            className={`${todo.completed ? 'completed' : 'noCompleted'} todoStatus text-[0] flex-shrink-0 block h-5 w-5 rounded-full border-2 dark:border-[#2f3146]`}
            onClick={() => onChangeStatus(todo)}
          >{todo.completed ? <Check /> : 'Completar'}</button>
          <p className="task dark:text-[#b4b6cd]">{todo.task}</p>
          <button className="ml-auto" onClick={() => onDeleteTodos(todo)} ><CrossIcon /></button>
      </article>
  )
})

export default Todo
