/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import MoonIcon from "../Icons/MoonIcon"
import { NewTodo } from "../Todos/NewTodo"
import SunIcon from "../Icons/SunIcon"

export const Header = ({ handleAddTodo }) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light'
    }
  }, [darkMode])
  
  return (
    <header className="container mx-auto px-4 pt-8 pb-4 md:max-w-xl">
        <div className="flex justify-between">
            <h1 className="uppercase text-3xl font-semibold text-white tracking-[7px]">Todo</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? 
              <SunIcon />
              : <MoonIcon />
              }
            </button>
        </div>
        <NewTodo onAddTodo={handleAddTodo} />
    </header>
  )
}
