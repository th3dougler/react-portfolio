import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  Typography,
  Zoom,
} from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useState, forwardRef } from "react";
import Carousel from "../../components/Carousel/Carousel";
const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    borderRadius: "15px",
    "&:hover": {
      transform: "translate(-7px, -7px)",
      boxShadow: `7px 7px  7px ${theme.palette.text.disabled}`,
    },
    transition:
      "background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow .25s ease-in-out, transform .25s ease-in-out",
  },

  content: {
    transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
  },
  tr: {
    transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
  },
  media: {
    height: 300,
  },
}));

export default function ProjectCard(props) {
  const [open, setOpen] = useState(false);

  let data = props.data;
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank").focus();
  };

  return (
    <>
      <ButtonBase onClick={handleClickOpen}>
        <Card className={classes.root}>
          <CardHeader
            title={data.title}
            subheader={data.subheader}
            subheaderTypographyProps={{
              className: classes.tr,
              variant: "subtitle1",
            }}
            
          />
          <CardMedia
            className={classes.media}
            image={`${data.dir}/thumb.png`}
          />
          <CardContent>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              className={classes.tr}
              noWrap>
              {data.content}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </ButtonBase>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}>
        <DialogTitle id='dialog-title'>{data.title}</DialogTitle>
        <DialogContent>
          <Carousel dir={data.dir} thumbs={data.thumbs} />
          <DialogContentText
            id='dialog-description'
            style={{ whiteSpace: "pre-line" }}>
            {data.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color='primary'
            startIcon={<KeyboardBackspaceIcon />}>
            Back
          </Button>
          <Button
            onClick={() => openInNewTab(data.github)}
            color='primary'
            startIcon={<i className='devicon-github-original'></i>}>
            Github
          </Button>
          <Button
            onClick={() => openInNewTab(data.deployed)}
            color='primary'
            startIcon={<OpenInNewIcon />}>
            Open in new Tab
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
