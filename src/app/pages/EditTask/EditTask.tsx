import React, { useState } from 'react'
import { Params, useNavigate, useParams } from 'react-router-dom'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import EditIcon from 'src/images/edit.svg'
import { TaskState } from 'src/app/App.types'
import { nextTaskStates, useTasksContext } from 'src/app/TasksContext'
import { NotFound } from '../index'
import styles from './EditTask.module.css'

type RouteParams = Params<'taskId'>

function EditTask() {
  const navigate = useNavigate()
  const { taskId } = useParams<RouteParams>()

  const { tasks, editTask } = useTasksContext()

  const task = taskId && tasks.find(({ id }) => taskId === id)
  if (!task) return <NotFound />

  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [state, setState] = useState(task.state)

  function onEditClicked() {
    editTask({ title, description, state, id: taskId as string })
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
      <Select
        value={state}
        onChange={({ target }) => setState(target.value as TaskState)}
        variant="filled"
      >
        {[task.state, ...nextTaskStates[task.state]].map(taskState => (
          <MenuItem key={taskState} value={taskState}>
            {taskState}
          </MenuItem>
        ))}
      </Select>
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
