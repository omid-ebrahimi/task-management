import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components'
import { TasksContext, useTasksContextInitializer } from './TasksContext'

function App() {
  const { tasks, addTask, editTask } = useTasksContextInitializer()

  return (
    <TasksContext.Provider value={{ tasks, addTask, editTask }}>
      <main>
        <Header title="Home" />
        <Outlet />
      </main>
    </TasksContext.Provider>
  )
}

export default App
