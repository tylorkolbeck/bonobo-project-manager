import React from "react";
import {
  Grid,
  Card,
  Typography,
  Avatar,
  Button,
  CardContent,
  CardHeader,
  IconButton,
  CardActions,
  Collapse
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  paper: {
    // padding: theme.spacing(2)
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  },
  expand: {
    marginLeft: theme.spacing(1)
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

export default function ProjectRow() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Card className={classes.paper}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.orange}>
                TK
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Front End Development"
            titleTypographyProps={{ variant: "h6" }}
          />
          <CardActions disableSpacing>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
            <Typography style={{ marginLeft: "auto" }}>5 / 10 tasks</Typography>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>Task One</Typography>
              <Typography>Task Two</Typography>
              <Typography>Task Three</Typography>
              <Typography>Task Four</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
