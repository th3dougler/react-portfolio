import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "60vh",
    textAlign: "center",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Box className={`About ${classes.root}`}>
      
    </Box>
  );
}
