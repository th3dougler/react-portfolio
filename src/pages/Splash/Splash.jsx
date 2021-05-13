import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    height: "100vh",
  },
}));

export default function Splash(props) {
  const classes = useStyles();
  return <Box className={`Splash ${classes.root}`}></Box>;
}
