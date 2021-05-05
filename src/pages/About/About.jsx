import { Box, Grid, Paper, Slide, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    height: "100vh",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    overflowY: "auto",
  },

  flexCtr: {
    textAlign: "left",
    justifySelf: "right",
    alignSelf: "center",
    padding: "2em",
  },
  box: {
    height: "100%",
    "&:hover": {
      boxShadow: `0 0  5px ${theme.palette.text.disabled}`,
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  return (
    <Box className={`About ${classes.root}`}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography component='h2' variant='h5' gutterBottom>
            a little bit about me...
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box m={1} p={3} component={Paper} className={classes.box}>
            <Typography component='p' variant='h6' paragraph>
              I am a full stack developer; here to find creative solutions to
              the world's problems, and learn everything I can along the way.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box m={1} p={3} component={Paper} className={classes.box}>
            <Typography component='p' variant='h6' paragraph>
              In my previous career as a chef and baker. I learned to work with
              a sense of urgency and to give 100% on every step involved in
              bringing a project to fruition. I developed strong communication
              skills and learned to work effectively in a team and as a leader.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box m={1} p={3} component={Paper} className={classes.box}>
            <Typography component='p' variant='h6' paragraph>
              I'm bringing that same focus and attention to detail to building
              beautiful, accessible front-ends and scalable, well-documented
              back-ends.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Typography component='p' variant='h6' paragraph>
            If you'd like to contact me, click here... otherwise, continue down
            to check out some of my projects
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
