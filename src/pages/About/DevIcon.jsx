import { Box, Grid, Typography } from "@material-ui/core";

export default function DevIcon(props) {
  return (
    <Grid
      item
      xs
      p={1}
      component={Box}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>
      <i className={props.className} style={{ fontSize: "4em" }} />
      <Typography variant='caption'>{props.caption}</Typography>
    </Grid>
  );
}
