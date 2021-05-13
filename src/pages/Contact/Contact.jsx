import {
  Box,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  gridContainer: {
    paddingTop: "10vh",
    paddingBottom: "10vh",
    alignItems: "stretch",
  },
  list: {
    background: "red",
  },
  gridItem: {
    alignContent: "center",
    justifyContent: "center",
  },
  flexCtr: {
    textAlign: "left",
    justifySelf: "right",
    alignSelf: "center",
    padding: "2em",
  },
  box: {
    borderRadius: "15px",
    "&:hover": {
      boxShadow: `0 0  5px ${theme.palette.text.disabled}`,
    },
    transition:
      "background-color 0.5s linear, color 0.5s linear, box-shadow 0.5s linear",
  },
}));

const contact = {
  email: "mailto:th3dougler@gmail.com",
  linkedin: "https://www.linkedin.com/in/doug-jones2/",
  github: "https://github.com/th3dougler",
  instagram: "https://www.instagram.com/th3dougler/",
  resume: {
    pdf: "/resume/Doug Jones - Resume.pdf",
    txt: "/resume/Doug Jones - Resume.txt",
    png: "/resume/Doug Jones - Resume.png",
    canva:
      "https://www.canva.com/design/DAEZ5X52fdo/Sx6scF5Ouk5cdkJeGb9hlg/view?utm_content=DAEZ5X52fdo&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
  },
};
export default function Contact(props) {
  const classes = useStyles();

  const openInNewTab = (url) => {
    window.open(url, "_blank").focus();
  };
  return (
    <Box className={`About ${classes.root}`}>
      <Grid
        container
        spacing={4}
        className={`${classes.gridContainer} ${classes.root}`}>
        <Grid item xs={12}>
          <Typography component='h2' variant='h5' gutterBottom>
            Contact Information
          </Typography>
        </Grid>
        <Grid item container xs className={classes.gridItem}>
          <Box m={1} p={3} component={Paper} className={classes.box}>
            <Typography component='p' variant='h6'>
              Contact:
            </Typography>
            <List>
              <ListItem button onClick={() => openInNewTab(contact.linkedin)}>
                <ListItemIcon>
                  <i className='fab fa-linkedin fa-lg'></i>
                </ListItemIcon>
                <ListItemText primary='Linkedin' />
              </ListItem>
              <ListItem button onClick={() => openInNewTab(contact.email)}>
                <ListItemIcon>
                  <i className='far fa-paper-plane fa-lg'></i>
                </ListItemIcon>
                <ListItemText primary='E-Mail' />
              </ListItem>
              <ListItem button onClick={() => openInNewTab(contact.github)}>
                <ListItemIcon>
                  <i className='fab fa-github-alt fa-lg'></i>
                </ListItemIcon>
                <ListItemText primary='Github' />
              </ListItem>
              <ListItem button onClick={() => openInNewTab(contact.instagram)}>
                <ListItemIcon>
                  <i className='fab fa-instagram fa-lg'></i>
                </ListItemIcon>
                <ListItemText primary='Instagram' />
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item container xs className={classes.gridItem}>
          <Box m={1} p={3} component={Paper} className={classes.box}>
            <Typography component='p' variant='h6'>
              Resume:
            </Typography>
            <List>
              <ListItem button onClick={() => openInNewTab(contact.resume.pdf)}>
                <ListItemIcon>
                  <Icon>picture_as_pdf</Icon>
                </ListItemIcon>
                <ListItemText primary='PDF' />
              </ListItem>
              <ListItem button onClick={() => openInNewTab(contact.resume.txt)}>
                <ListItemIcon>
                  <Icon>description</Icon>
                </ListItemIcon>
                <ListItemText primary='Text' />
              </ListItem>
              <ListItem button onClick={() => openInNewTab(contact.resume.png)}>
                <ListItemIcon>
                  <Icon>image</Icon>
                </ListItemIcon>
                <ListItemText primary='PNG' />
              </ListItem>
              <ListItem
                button
                onClick={() => openInNewTab(contact.resume.canva)}>
                <ListItemIcon>
                  <Icon>filter_drama</Icon>
                </ListItemIcon>
                <ListItemText primary='Canva' />
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography component='p' variant='h6'>
            Thank you for visiting my profile, have a nice day
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
