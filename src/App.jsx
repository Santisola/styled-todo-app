import { useEffect, useState } from "react";
import { TodoList } from "./components/Todos/List";
import { NavbarBottom } from "./components/NavbarBottom";
import { Header } from "./components/Header";

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
  
  const handleAddTodo = todo => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  const handleDeleteTodo = todo => {
    const newTodos = todos.filter(td => td.id !== todo.id);
    setTodos(newTodos);
  }

  const handleChangeStatus = todo => {
    const newTodos = todos.map(td => {
      if (td.id === todo.id) td.completed = !td.completed
      return td
    })
    setTodos(newTodos)
  }
  
  return (
    <>
      <div className="header bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain">
        <Header handleAddTodo={handleAddTodo} />
        
        <main className="container mx-auto px-4">
          <div className="bg-white rounded">
            <TodoList
              todos={todos}
              onDeleteTodos={handleDeleteTodo}
              onChangeStatus={handleChangeStatus}
            />
            <section className="py-3 px-4 flex justify-between items-center text-xs text-slate-400">
              <span>{todos.length} items restantes</span>
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