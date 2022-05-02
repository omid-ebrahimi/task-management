import { v4 as uuid } from 'uuid'
import { createContext, useContext, useState } from 'react'
import { TaskModel, TaskState } from './App.types'

interface TasksContextModel {
  tasks: TaskModel[]
  addTask: (task: Omit<TaskModel, 'id' | 'history'>) => void
  editTask: (task: Partial<TaskModel> & Pick<TaskModel, 'id'>) => void
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

  const addTask: TasksContextModel['addTask'] = task => {
    setTasks(tasks => [...tasks, { ...task, id: uuid(), history: [] }])
  }

  const editTask: TasksContextModel['editTask'] = task => {
    setTasks(tasks =>
      tasks.map(t => (t.id === task.id ? { ...t, ...task } : t))
    )
  }

  return { tasks, addTask, editTask }
}

export function useTasksContext(): TasksContextModel {
  return useContext(TasksContext)
}
