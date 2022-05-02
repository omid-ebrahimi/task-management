import React from 'react'
import { Params, useParams } from 'react-router-dom'
import { useTasksContext } from 'src/app/TasksContext'
import { NotFound } from '../index'
import EditForm from './EditForm'

type RouteParams = Params<'taskId'>

function EditTask() {
  const { taskId } = useParams<RouteParams>()

  const { tasks, editTask } = useTasksContext()

  const task = taskId ? tasks.find(({ id }) => taskId === id) : undefined

  if (!task) {
    return <NotFound />
  }
  return <EditForm task={task} editTask={editTask} />
}

export default EditTask
