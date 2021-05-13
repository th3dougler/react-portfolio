import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
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
  },

  box: {
    height: "100%",
  },
  flexCtr: {
    textAlign: "left",
    justifySelf: "right",
    alignSelf: "center",
    padding: "2em",
  },
}));
let data = [
  {
    title: "Not Hot Dog",
    subheader: "Customer loyalty platform",
    dir: "/nhd",
    thumbs: 7,
    deployed: "https://hotnotdog.herokuapp.com/",
    github: "https://github.com/imaustinim/notHotDog",
    content:
      "MERN stack SPA.  This is a free, and easy-to-use loyalty rewards manager where users can manage cards, coupons, and tickets in one place. Using Material UI, Socket.io, and QR code libraries",
  },
  {
    title: "Spotter",
    subheader: "Crowdsourced free parking app",
    dir: "/spotter",
    thumbs: 7,
    deployed: "https://spotter-demo.herokuapp.com/",
    github: "https://github.com/th3dougler/freepark",
    content:
      "Python Django App built with Amazon RDS and S3.\n\n  Built and deployed in one week - collaboratively developed by myself, one other dev and two UX/UI students.\n\n Using client side JS library Leaflet, implemented Open Street Map api, as well as GeoCage api for location-based searching. I also created all database routes and controller functions.\n\n Using client side ajax/hooks, reduced page reloads and streamline interface and DOM manipulation.\n\nUsing Amazon AWS services, we configured a relational database for user data as well as an S3 bucket for fast and simple image storage.",
  },
  {
    title: "breadBox",
    subheader: "Bread recipe development tool",
    dir: "/breadbox",
    thumbs: 7,
    deployed: "https://breadbox.herokuapp.com/",
    github: "https://github.com/th3dougler/breadBox",
    content:
      "Created with Node, Express, Javascript and MongoDB - implements EJS templating and RESTful routes.\n\nDesigned for people who are very serious about bread recipes. This tool gives you the power to build complex bread recipes involving sourdough and all manner of prefermentswith no spreadsheet skills required.\n\nUsers can fuzzy search a comprehensive list of common baking ingredients, or add their own to the custom inventory for ease of search and access.  Uses Tabulator JS Library to manage data tables, calculate bakers percentages and determine yeild",
  },
  {
    title: "Snake Byte",
    subheader: "Classic Snake Game in Vanilla JS",
    dir: "/snakebyte",
    thumbs: 6,
    deployed: "https://dougjones.ca/snakeByte/",
    github: "https://github.com/th3dougler/snakeByte",
    content:
      "Built and deployed in one week, using vanilla JS, CSS3, and HTML5\n\nRather than using javascript canvas or other libraries, the project is meant to demonstrate DOM manipulation. I used CSS3 sprites and ES6 DOM manipulation exclusively to create smooth gameplay This is a simple snake game\n\n Designed to scale onto any device, supports touch displays as well as conventional keyboard input\n\n Collect 'bugs' and try not to trip over your own tail!",
  },
];
export default function Work(props) {
  const classes = useStyles();

  return (
    <Box className={`Work ${classes.root}`}>
      <Grid
        container
        spacing={4}
        className={`${classes.gridContainer} ${classes.root}`}>
        <Grid item xs={12}>
          <Typography component='h2' variant='h5' gutterBottom>
            Projects
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ProjectCard data={data[0]} />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <ProjectCard data={data[1]} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ProjectCard data={data[2]} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ProjectCard data={data[3]} />
        </Grid>
      </Grid>
    </Box>
  );
}
