import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
    overflowY: "auto",
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
}));

export default function Work(props) {
  const classes = useStyles();

  return (
    <Box className={`Work ${classes.root}`}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography component='h2' variant='h5' gutterBottom>
            Projects
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Carousel />
        </Grid>
      </Grid>
    </Box>
  );
}
