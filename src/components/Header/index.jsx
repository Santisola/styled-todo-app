/* eslint-disable react/prop-types */
import MoonIcon from "../Icons/MoonIcon"
import { NewTodo } from "../Todos/NewTodo"

export const Header = ({ handleAddTodo }) => {
  return (
    <header className="container mx-auto px-4 pt-8 pb-4">
        <div className="flex justify-between">
            <h1 className="uppercase text-3xl font-semibold text-white tracking-[7px]">Todo</h1>
            <button><MoonIcon /></button>
        </div>
        <NewTodo onAddTodo={handleAddTodo} />
    </header>
  )
}
