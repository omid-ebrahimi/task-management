import React from 'react'
import './App.css'
import { Home } from './pages'
import { Header } from './components'
import { TasksContext, useTasksContextInitializer } from './TasksContext'

function App() {
  const { tasks, addTask } = useTasksContextInitializer()

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      <main>
        <Header title="Home" />
        <Home />
      </main>
    </TasksContext.Provider>
  )
}

export default App
