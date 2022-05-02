import { createContext, useContext, useState } from 'react'
import { TaskModel, TaskState } from './App.types'

interface TasksContextModel {
  tasks: TaskModel[]
  addTask: (task: TaskModel) => void
  editTask: (task: TaskModel) => void
}

export const nextTaskStates: Record<TaskState, TaskState[]> = {
  ToDo: ['InProgress'],
  InProgress: ['Blocked', 'InQA'],
  Blocked: ['ToDo'],
  InQA: ['ToDo', 'Done'],
  Done: ['Deployed'],
  Deployed: []
}

const doNoThing = () => {
  /* nothing */
}

export const TasksContext = createContext<TasksContextModel>({
  tasks: [],
  addTask: doNoThing,
  editTask: doNoThing
})

export function useTasksContextInitializer(): TasksContextModel {
  const [tasks, setTasks] = useState<TaskModel[]>([])

  const addTask = (task: TaskModel) => setTasks(tasks => [...tasks, task])

  const editTask = (task: TaskModel) =>
    setTasks(tasks => tasks.map(t => (t.id === task.id ? task : t)))

  return { tasks, addTask, editTask }
}

export function useTasksContext(): TasksContextModel {
  return useContext(TasksContext)
}
