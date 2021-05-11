import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderRadius: "15px",
    "&:hover": {
      transform: "translate(-7px, -7px)",
      boxShadow: `7px 7px  7px ${theme.palette.text.disabled}`,
    },
    transition:
      "background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow .25s ease-in-out, transform .25s ease-in-out",
  },
  tr: {
    transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
  },
  media: {
    height: 300,
  },
}));

export default function ProjectCard(props) {
  let data = props.data;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={data.title}
        subheader={data.subtitle}
        subheaderTypographyProps={{ className: classes.tr }}
      />
      <CardMedia className={classes.media} image={data.thumb} />
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          className={classes.tr}>
          {data.content}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
