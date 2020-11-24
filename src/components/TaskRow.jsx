import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { green } from '@material-ui/core/colors'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import CommentIcon from '@material-ui/icons/Comment'

const GreenCheckbox = withStyles({
  root: {
    // color: green[400],
    '&$checked': {
      color: green[600]
    }
  },
  checked: {}
})((props) => <Checkbox color='default' {...props} />)

const useStyles = makeStyles((theme) => ({
  completedTask: {
    // background: theme.palette.text.disabled
  }
  // root: {
  //   width: '100%',
  //   // maxWidth: 360,
  //   backgroundColor: theme.palette.background.paper
  // }
}))

export default function TaskRow({ taskData, toggleTaskCompleted }) {
  const labelId = `checkbox-list-label-${taskData.name}`
  const classes = useStyles()

  return (
    <ListItem
      role={undefined}
      dense
      button
      onClick={() => toggleTaskCompleted(taskData.id)}
      className={clsx({ [classes.completedTask]: taskData.completed })}
    >
      <ListItemIcon>
        <GreenCheckbox
          edge='start'
          checked={taskData.completed}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
          color='primary'
        />
      </ListItemIcon>
      <ListItemText id={taskData.id} primary={taskData.name} />
      <ListItemSecondaryAction>
        <IconButton edge='end' aria-label='comments'>
          <CommentIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
