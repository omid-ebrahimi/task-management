import { createContext, useContext, useState } from 'react'
import { TaskModel } from './App.types'

interface TasksContextModel {
  tasks: TaskModel[]
  addTask: (task: TaskModel) => void
}

const doNoThing = () => {
  /* nothing */
}

export const TasksContext = createContext<TasksContextModel>({
  tasks: [],
  addTask: doNoThing
})

export function useTasksContextInitializer(): TasksContextModel {
  const [tasks, setTasks] = useState<TaskModel[]>([])

  const addTask = (task: TaskModel) => setTasks(tasks => [...tasks, task])

  return { tasks, addTask }
}

export function useTasksContext(): TasksContextModel {
  return useContext(TasksContext)
}
