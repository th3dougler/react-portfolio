import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";

export default function ProjectCard(props) {
  return (
    <Card>
      <CardHeader
        title='Snake Byte'
        subheader='Classic Snake Game in Vanilla JS'
      />
      <CardMedia image={"../../img/thumb/sb_thumb.png"} />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          porro assumenda officia beatae dolores veritatis!
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
