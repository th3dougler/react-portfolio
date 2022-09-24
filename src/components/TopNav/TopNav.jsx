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
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      opacity: props.atSplash() ? 0 : 1,
      transition: "opacity 300ms ease-in-out",
    },
    flexCtr: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();
  return (
    <div className={`TopNav  ${classes.root}`}>
      <Box className={classes.grow}>
        <Typography variant='h5' className={classes.heading}>
          Doug Jones
        </Typography>
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
