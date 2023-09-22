import { useEffect, useState } from "react";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/Todos/List";
import MoonIcon from "./components/Icons/MoonIcon";
import { NavbarBottom } from "./components/NavbarBottom";

const inicialTodos = JSON.parse(localStorage.getItem('todos')) || [
  {
    id: 1,
    task: 'Terminar maquetado',
    completed: false
  },
  {
    id: 2,
    task: 'Implementar localStorage',
    completed: false
  },
  {
    id: 3,
    task: 'Agregar funcionalidades',
    completed: false
  }
]

const App = () => {
  const [todos, setTodos] = useState([...inicialTodos])
  console.log('settodos', setTodos);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  return (
    <>
      <div className="header bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain">
        <header className="container mx-auto px-4 pt-8 pb-4">
          <div className="flex justify-between">
            <h1 className="uppercase text-3xl font-semibold text-white tracking-[7px]">Todo</h1>
            <button><MoonIcon /></button>
          </div>
          <NewTodo />
        </header>
        
        <main className="container mx-auto px-4">
          <div className="bg-white rounded">
            <TodoList todos={todos} />
            <section className="py-3 px-4 flex justify-between items-center text-xs text-slate-400">
              <span>5 items restantes</span>
              <button>Borrar items completados</button>
            </section>
          </div>
        </main>

        <NavbarBottom />
      </div>
    </>
  )
}

export default App;