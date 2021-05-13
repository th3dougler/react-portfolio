import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box, Icon, IconButton } from "@material-ui/core";
import "./TopNav.css";
import ContextMenu from "./ContextMenu";

export default function TopNav(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      top: 0,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      background: `#${theme.palette.background.default.split("#")[1]}80`,
      color: theme.palette.text.primary,
      transition: "background-color 0.5s linear, color 0.5s linear",
      height: "auto",
      zIndex: 2,
    },
    grow: {
      flexGrow: 1,
    },
    heading: {
      width: "100%",
      position: "fixed",
      textAlign: "center",
      left: "50%",
      top: props.atSplash() ? "50%" : 5,
      transform: props.atSplash()
        ? "translate(-50%,-50%)"
        : "translate(-50%,0%)",
      transition:
        "font-size 300ms ease-in-out, top 300ms ease-in-out,transform 300ms ease-in-out",
    },
    animateOpacity: {
      paddingTop: "1em",
      opacity: props.atSplash() ? "100%" : 0,
      fontSize: props.atSplash() ? "2.5em" : 0,
      transition: "opacity 300ms ease-in-out,font-size 300ms ease-in-out",
    },
    animateFontSize: {
      lineHeight: "1",
      transition: "font-size 0.8s ease-in-out",
      fontSize: props.atSplash() ? "4em" : "2em",
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
          <Typography className={classes.animateFontSize}>
            Doug Jones
          </Typography>
          <Typography className={classes.animateOpacity}>
            Software Developer - Toronto
          </Typography>
        </Box>
      </Box>
      <Box className={classes.flexCtr}>
        <IconButton onClick={props.toggleDarkMode} edge='start' disableRipple>
          {props.darkMode ? <Icon>light_mode</Icon> : <Icon>dark_mode</Icon>}
        </IconButton>
        <ContextMenu />
      </Box>
    </div>
  );
}
