import React from 'react'
import { Outlet } from 'react-router-dom'
import { usePathTitle } from 'src/lib/hooks'
import './App.css'
import { Header } from './components'
import { TasksContext, useTasksContextInitializer } from './TasksContext'

function App() {
  const { tasks, addTask, editTask } = useTasksContextInitializer()

  const pathTitle = usePathTitle()

  return (
    <TasksContext.Provider value={{ tasks, addTask, editTask }}>
      <main>
        <Header title={pathTitle} />
        <Outlet />
      </main>
    </TasksContext.Provider>
  )
}

export default App
