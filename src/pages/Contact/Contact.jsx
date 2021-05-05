import { Box, Slide, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

  flexCtr: {
    textAlign: "left",
    justifySelf: "right",
    alignSelf: "center",
    padding: "2em",
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  return <Box className={`Contact ${classes.root}`}>Contact</Box>;
}
