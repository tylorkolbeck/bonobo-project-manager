import React from 'react'
import {
  Grid,
  Card,
  Typography,
  Avatar,
  CardContent,
  CardHeader,
  IconButton,
  CardActions,
  Collapse,
  List
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import TaskRow from './TaskRow'

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  },
  expand: {
    marginLeft: theme.spacing(1)
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}))

export default function ProjectRow({ projectData }) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(true)
  const [taskList, setTaskList] = React.useState(projectData.tasks)
  console.log(projectData.tasks)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  function handleTaskToggleCompleted(taskId) {
    const newTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed
        return task
      } else {
        return task
      }
    })

    setTaskList(newTaskList)
  }

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Card className={classes.paper}>
          <CardHeader
            avatar={
              <Avatar
                aria-label={projectData.user.name}
                className={classes.orange}
                src=''
              />
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title={projectData.name}
            titleTypographyProps={{ variant: 'h6' }}
            subheader={projectData.description}
          />
          <CardActions disableSpacing>
            <AvatarGroup max={4}>
              {projectData.contributers.map((user) => {
                return (
                  <Avatar
                    alt={user.name}
                    key={`avatar_${projectData.id}_${user.id}`}
                    src='/static/images/avatar/1.jpg'
                  />
                )
              })}
            </AvatarGroup>
            <Typography style={{ marginLeft: 'auto' }}>
              {projectData.tasks.length} Tasks
            </Typography>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          {/* Tasks */}
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <List>
                {taskList.map((task) => {
                  return (
                    <TaskRow
                      key={task.id}
                      taskData={task}
                      toggleTaskCompleted={handleTaskToggleCompleted}
                    />
                  )
                })}
              </List>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </React.Fragment>
  )
}
