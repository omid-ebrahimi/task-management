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
        {tasks.length ? (
          tasks.map(task => <Task key={task.id} task={task} />)
        ) : (
          <div className={styles.emptyList}>
            <h1>You have nothing to do.</h1>
            <h1>Go get some sleep.</h1>
          </div>
        )}
      </Box>
    </Box>
  )
}

export default Tasks
