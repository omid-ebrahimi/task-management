import React from 'react'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Not Found!</h2>
    </div>
  )
}

export default NotFound
