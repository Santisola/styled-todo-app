import { useEffect, useMemo, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { TodoList } from "./components/Todos/List";
import { NavbarBottom } from "./components/NavbarBottom";
import { Header } from "./components/Header";

const inicialTodos = JSON.parse(localStorage.getItem('todos')) || []

const reorder = (list, startIndex, endIndex) => {
  const oldTodos = [...list];
  const [removedItem] = oldTodos.splice(startIndex, 1);
  oldTodos.splice(endIndex, 0, removedItem);
  
  return oldTodos;
}

const App = () => {
  const [todos, setTodos] = useState([...inicialTodos])
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState ('todas')

  const unCompleted = useMemo(() => {
    return todos.filter(td => !td.completed).length;
  }, [todos])

  const filteredTodos = useMemo(() => {
    switch (page) {
      case 'pendientes':
        return todos.filter(td => !td.completed);
      case 'completadas':
        return todos.filter(td => td.completed);
      default:
        return todos
    }
  }, [page, todos])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  const handleNav = (page) => {
    //ev.preventDefault();
    setPage(page);
  }
  
  const handleAddTodo = todo => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  const handleDeleteTodo = todo => {
    const newTodos = todos.filter(td => td.id !== todo.id);
    setTodos(newTodos);
  }

  const handleDeleteCompleted = () => {
    setTodos(todos.filter(td => !td.completed));
  }

  const handleChangeStatus = todo => {
    const newTodos = todos.map(td => {
      if (td.id === todo.id) td.completed = !td.completed
      return td
    })
    setTodos(newTodos)
  }

  const handleDragTodos = result => {
    const {source, destination} = result
    
    if (!destination) return;

    if (source.index === destination.index &&
       source.droppableId === destination.droppableId) return

    setTodos((oldTodos) => reorder(oldTodos, source.index, destination.index));
  }
  
  return (
    
      <div className="header bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-no-repeat bg-contain">
        <Header handleAddTodo={handleAddTodo} />
        
        <main className="container mx-auto px-4 md:max-w-xl">
          <div className="bg-white dark:bg-[#25273c] rounded">
            <DragDropContext onDragEnd={handleDragTodos}>
              <TodoList
                todos={filteredTodos}
                onDeleteTodos={handleDeleteTodo}
                onChangeStatus={handleChangeStatus}
              />
            </DragDropContext>
            <section className="py-3 px-4 flex justify-between items-center text-xs text-slate-400">
              <span className="dark:text-[#595a77]">{unCompleted} items restantes</span>
              <button className="dark:text-[#595a77]" onClick={() => handleDeleteCompleted()}>Borrar items completados</button>
            </section>
          </div>
        </main>

        <NavbarBottom page={page} onNav={handleNav} />
      </div>
  )
}

export default App;