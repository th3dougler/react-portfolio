import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "../../components/Carousel/Carousel";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    overflow: "hidden",
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

export default function Work(props) {
  const classes = useStyles();

  return (
    <Box className={`Work ${classes.root}`}>
      <Grid container>
        <Grid item xs={12}>
          <Typography component='h2' variant='h5' gutterBottom>
            Projects
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.carouselContainer}>
          <Carousel />
        </Grid>
      </Grid>
    </Box>
  );
}
