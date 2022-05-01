import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: '#2075B9'
    },
    secondary: {
      main: '#A2CEED'
    }
  }
})

export default theme
