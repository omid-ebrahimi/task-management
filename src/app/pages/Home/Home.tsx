import React from 'react'
import { Tasks } from './Tasks'
import { AddTask } from './AddTask'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <AddTask />
      <Tasks />
    </div>
  )
}

export default Home
