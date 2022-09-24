import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    height: "100vh",
    justifyContent: "center",
  },
}));

export default function Splash(props) {
  const classes = useStyles();
  return (
    <Box className={`Splash ${classes.root}`}>
      <Typography component='h1' variant='h2'>
        Doug Jones
      </Typography>
      <Typography component='h2' variant='h4'>
        Software Developer - Toronto
      </Typography>
    </Box>
  );
}
