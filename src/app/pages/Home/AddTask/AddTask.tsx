import { v4 as uuid } from 'uuid'
import React, { useState } from 'react'
import { Add } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import { TaskState } from 'src/app/App.types'
import { useTasksContext } from 'src/app/TasksContext'
import styles from './AddTask.module.css'

function AddTask() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const { addTask } = useTasksContext()

  function onAddClicked() {
    if (!title || !description) {
      return alert('Please enter a title and description')
    }
    addTask({ title, description, state: TaskState.ToDo, id: uuid() })
  }

  return (
    <div className={styles.container}>
      <h2>Add a new Task</h2>
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
      <Button onClick={onAddClicked} startIcon={<Add />} variant="contained">
        Add
      </Button>
    </div>
  )
}

export default AddTask
