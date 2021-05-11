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
let data = {
  title: "Snake Byte",
  subheader: "Classic Snake Game in Vanilla JS",
  thumb: "/sb_thumb.png",
  content:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro assumenda officia beatae dolores veritatis!",
};
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
  },
  tr: {
    transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
  },
  media: {
    height: 300,
    filter: "grayscale(100%)",
    "&:hover": {
      filter: "grayscale(0%)",
    },
    transition: "filter .25s ease-in-out",
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <div>
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
    </div>
  );
}
