/* eslint-disable react/prop-types */
import { CrossIcon } from "../../Icons/CrossIcon"

export const Todo = ({ todo }) => {
  return (
    <article className="flex items-center gap-2 p-4 border-b border-b-gray-200">
        <button className="text-[0] block h-5 w-5 rounded-full border-2">Completar</button>
        <p>{todo.task}</p>
        <button className="ml-auto"><CrossIcon /></button>
    </article>
  )
}
