import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './style/theme'
import NavBar from './components/NavBar'
import { Grid } from '@material-ui/core'
import ProjectRow from './components/ProjectRow'

import { __projects } from './utils/testData'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <NavBar />

      {/* Main Content */}
      <div className={classes.root}>
        {/* List of all Projects */}
        <Grid container spacing={1}>
          <ProjectRow />
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default App
