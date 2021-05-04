import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import { Box, Icon, IconButton } from "@material-ui/core";
import "./TopNav.css";

export default function TopNav(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      top: 0,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      background: "transparent",
      color: theme.palette.text.primary,
      transition: "background-color 0.5s linear, color 0.5s linear",
      height: "auto",
    },
    grow: {
      flexGrow: 1,
    },
    heading: {
      position: "fixed",
      textAlign: "center",
      left: "50%",
      top: props.scrollPos ? 0 : "30%",
      transform: "translate(-50%,0)",
      transition:
        "font-size 1s ease-in-out, top 1s ease-in-out,transform 1s ease-in-out",
    },
    animateOpacity: {
      paddingTop: "3em",
      opacity: props.scrollPos ? 0 : "100%",
      fontSize: props.scrollPos ? 0 : theme.typography.body1.fontSize,
      transition: "opacity 1s ease-in-out,font-size 1s ease-in-out",
    },
    animateFontSize: {
      transition: "font-size 1s ease-in-out",
    },

    flexCtr: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.grow}>
        <Box className={classes.heading}>
          <Typography
            className={classes.animateFontSize}
            variant={props.scrollPos ? "h4" : "h1"}
            component='h1'>
            Doug Jones
          </Typography>
          <Typography className={classes.animateOpacity} variant='body1'>
            Software Developer // Toronto
          </Typography>
        </Box>
      </Box>
      <Box className={classes.flexCtr}>
        <IconButton onClick={props.toggleDarkMode} edge='start' disableRipple>
          {props.darkMode ? <Icon>light_mode</Icon> : <Icon>dark_mode</Icon>}
        </IconButton>
        <IconButton onClick={props.toggleDarkMode} edge='start' disableRipple>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </div>
  );
}
