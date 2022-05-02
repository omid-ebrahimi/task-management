import React, { useState } from 'react'
import { Params, useNavigate, useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import EditIcon from 'src/images/edit.svg'
import { useTasksContext } from 'src/app/TasksContext'
import { NotFound } from '../index'
import styles from './EditTask.module.css'
import { TaskState } from '../../App.types'

type RouteParams = Params<'taskId'>

function EditTask() {
  const navigate = useNavigate()
  const { taskId } = useParams<RouteParams>()

  const { tasks, editTask } = useTasksContext()

  const task = taskId ? tasks.find(({ id }) => taskId === id) : undefined
  if (!task) return <NotFound />

  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)

  function onEditClicked() {
    editTask({
      title,
      description,
      state: task?.state as TaskState,
      id: taskId as string
    })
    navigate(-1)
  }

  return (
    <div className={styles.container}>
      <h1>Edit Task</h1>
      <TextField
        label="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        required={true}
        className={styles.input}
        variant="filled"
      />
      <TextField
        label="Description"
        value={description}
        onChange={({ target }) => setDescription(target.value)}
        required={true}
        className={styles.input}
        multiline={true}
        minRows={3}
        variant="filled"
      />
      <div className={styles.footer}>
        <Button
          onClick={onEditClicked}
          startIcon={
            <img
              src={EditIcon}
              width={16}
              height={16}
              className={styles.editIcon}
              alt=""
            />
          }
          className={styles.button}
          variant="contained"
        >
          Edit
        </Button>
        <Button
          onClick={() => navigate(-1)}
          className={styles.button}
          variant="outlined"
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default EditTask
