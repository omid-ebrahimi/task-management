import React from 'react'
import { Box } from '@mui/material'
import { useTasksContext } from 'src/app/TasksContext'
import { Task } from './Task'
import styles from './Tasks.module.css'

function Tasks() {
  const { tasks } = useTasksContext()

  return (
    <Box className={styles.container} sx={{ backgroundColor: 'primary.main' }}>
      <h2 className={styles.tasksTitle}>Tasks</h2>
      <Box
        className={styles.tasksContainer}
        sx={{ backgroundColor: 'secondary.main' }}
      >
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </Box>
    </Box>
  )
}

export default Tasks
