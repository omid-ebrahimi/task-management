import React from 'react'
import { Box, Button, Chip } from '@mui/material'
import { shrink } from 'src/utils'
import { TaskModel } from 'src/app/App.types'
import EditIcon from 'src/images/edit.svg'
import styles from './Task.module.css'

interface Props {
  task: TaskModel
}

function Task({ task }: Props) {
  const { title, description, state } = task
  return (
    <Box className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{shrink(description, 60)}</p>
      <div className={styles.footer}>
        <Chip label={state} color="primary" />
        <Button variant="text" className={styles.buttonEdit}>
          <img src={EditIcon} width={26} height={26} alt="" />
        </Button>
      </div>
    </Box>
  )
}

export default Task
