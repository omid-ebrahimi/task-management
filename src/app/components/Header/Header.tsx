import React from 'react'
import { Box } from '@mui/material'
import styles from './Header.module.css'

interface Props {
  title: string
}

function Header({ title }: Props) {
  return (
    <Box className={styles.container} sx={{ backgroundColor: 'primary.main' }}>
      <h1>
        Task Management {'>'} {title}
      </h1>
    </Box>
  )
}

export default Header
