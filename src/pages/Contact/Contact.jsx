import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

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

export default function Contact(props) {
  const classes = useStyles();
  return (
    <Box className={`About ${classes.root}`}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography component='h2' variant='h5' gutterBottom>
            Contact Information
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box m={1} p={3} component={Paper} className={classes.box}>
            <Typography component='p' variant='h6'>
              Github, linkedin, email,
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box m={1} p={3} component={Paper} className={classes.box}>
            <Typography component='p' variant='h6'>
              Resume download links
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography component='p' variant='h6'>
            Thank you for visiting my profile, have a nice day
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
