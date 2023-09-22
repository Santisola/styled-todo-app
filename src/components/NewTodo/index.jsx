export const NewTodo = () => {
  return (
    <form className="bg-white py-2 px-4 mt-7 rounded flex items-center gap-2">
        <span className="text-[0] block h-5 w-5 rounded-full border-2">O</span>
        <input
            type="text"
            name="newTodo"
            id="newTodo"
            placeholder="Crear nueva tarea..."
            className="block w-full outline-none text-gray-500"
        />
    </form>
  )
}
