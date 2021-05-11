import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
// import Carousel from "../../components/Carousel/Carousel";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    // overflow: "hidden",
  },
  box: {
    height: "100%",
  },
  flexCtr: {
    textAlign: "left",
    justifySelf: "right",
    alignSelf: "center",
    padding: "2em",
  },
  carouselContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
}));
let data = [
  {
    title: "Not Hot Dog",
    subheader: "Customer loyalty and rewards platform",
    thumb: "/nhd_thumb.png",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro assumenda officia beatae dolores veritatis!",
  },
  {
    title: "Spotter",
    subheader: "Crowdsourced free parking app",
    thumb: "/sp_thumb.png",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro assumenda officia beatae dolores veritatis!",
  },
  {
    title: "breadBox",
    subheader: "Advanced bread recipe development tool",
    thumb: "/bb_thumb.png",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro assumenda officia beatae dolores veritatis!",
  },
  {
    title: "Snake Byte",
    subheader: "Classic Snake Game in Vanilla JS",
    thumb: "/sb_thumb.png",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro assumenda officia beatae dolores veritatis!",
  },
];
export default function Work(props) {
  const classes = useStyles();

  return (
    <Box className={`Work ${classes.root}`}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography component='h2' variant='h5' gutterBottom>
            Projects
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg>
          <ProjectCard data={data[0]} />
        </Grid>

        <Grid item xs={12} sm={6} lg>
          <ProjectCard data={data[1]} />
        </Grid>
        <Grid item xs={12} sm={6} lg>
          <ProjectCard data={data[2]} />
        </Grid>
        <Grid item xs={12} sm={6} lg>
          <ProjectCard data={data[3]} />
        </Grid>
      </Grid>
    </Box>
  );
}
