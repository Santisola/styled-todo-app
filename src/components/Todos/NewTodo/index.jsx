/* eslint-disable react/prop-types */
import { useState } from "react"

export const NewTodo = ({onAddTodo}) => {
  const [task, setTask] = useState('')

  const [error, setError] = useState(false)
  
  const handleChange = (ev) => {
    const { value } = ev.target
    setTask(value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setError(false)
    if (!task){
      setError(true)
      return
    }
    onAddTodo({
      id: Date.now(),
      task,
      completed: false
  });
    setTask('')
  }
  
  return (
    <>
    <form
      className="bg-white py-2 px-4 mt-7 rounded flex items-center gap-2"
      onSubmit={handleSubmit}
    >
        <span className="text-[0] block h-5 w-5 rounded-full border-2">O</span>
        <input
            type="text"
            name="newTodo"
            id="newTodo"
            placeholder="Crear nueva tarea..."
            className="block w-full outline-none text-gray-500"
            value={task}
            onChange={handleChange}
        />
    </form>
    {
      error && <p className="font-bold text-red-200">La tarea no puede estar vacía</p>
    }
    </>
  )
}
