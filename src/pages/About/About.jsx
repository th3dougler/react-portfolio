import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import DevIcon from "./DevIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    height: "100vh",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    overflowY: "auto",
    overflowX: "hidden",
  },
  link: {
    color: theme.palette.text.secondary,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.text.primary,
      textShadow: `2px 2px 5px ${theme.palette.text.secondary}`,
    },
    transition: "color 0.5s linear, text-shadow 0.5s linear",
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
    transition:
      "background-color 0.5s linear, color 0.5s linear, box-shadow 0.5s linear",
  },
}));

export default function About(props) {
  const classes = useStyles();
  return (
    <Box className={`About ${classes.root}`}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography component='h2' variant='h5' gutterBottom>
            a little bit about me...
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box m={1} p={3} component={Paper} className={classes.box}>
            <Typography component='p' variant='h6'>
              I am a full stack developer; here to find creative solutions to
              the world's problems, and learn everything I can along the way.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box m={1} p={3} component={Paper} className={classes.box}>
            <Typography component='p' variant='h6'>
              In my previous career as a chef and baker. I learned to work with
              a sense of urgency and to give 100% on every step involved in
              bringing a project to fruition. I developed strong communication
              skills and learned to work effectively in a team and as a leader.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box m={1} p={3} component={Paper} className={classes.box}>
            <Typography component='p' variant='h6'>
              I'm bringing that same focus and attention to detail to building
              beautiful, accessible front-ends and scalable, well-documented
              back-ends.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container m={1} p={3} component={Paper} className={classes.box}>
            <DevIcon
              className={`devicon-postgresql-plain`}
              caption='Postgresql'
            />
            <DevIcon className={`devicon-mongodb-plain`} caption='Mongodb' />
            <DevIcon
              className={`devicon-amazonwebservices-original`}
              caption='AWS'
            />
            <DevIcon
              className={`devicon-googlecloud-plain`}
              caption='Google Cloud'
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container m={1} p={3} component={Paper} className={classes.box}>
            <DevIcon className={`devicon-python-plain`} caption='Python' />
            <DevIcon
              className={`devicon-javascript-plain`}
              caption='Javascript'
            />
            <DevIcon className={`devicon-html5-plain`} caption='HTML5' />
            <DevIcon className={`devicon-css3-plain`} caption='CSS' />
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container m={1} p={3} component={Paper} className={classes.box}>
            <DevIcon className={`devicon-django-plain`} caption='Django' />
            <DevIcon className={`devicon-react-original`} caption='React' />
            <DevIcon className={`devicon-express-original`} caption='Express' />
            <DevIcon className={`devicon-nodejs-plain`} caption='NodeJS' />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography component='p' variant='h6'>
            If you'd like to contact me,{" "}
            <RouterLink className={classes.link} to='/contact'>
              click here...
            </RouterLink>{" "}
            otherwise, continue down to check out some of my projects
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
