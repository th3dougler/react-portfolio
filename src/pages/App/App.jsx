import { Box, Container, CssBaseline, Icon } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import {
  Switch,
  Route,
  Link as RouterLink,
  useLocation,
} from "react-router-dom";
import { useMemo, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import "animate.css";
import TopNav from "../../components/TopNav/TopNav";
import About from "../../pages/About/About";
import Work from "../../pages/Work/Work";
import Contact from "../../pages/Contact/Contact";

import Splash from "../Splash/Splash";

function App() {
  let location = useLocation();

  let atSplash = () => {
    return location.pathname === "/";
  };
  let atBottom = () => {
    return getNext() === "/";
  };
  let getNext = () => {
    switch (location.pathname) {
      case "/":
        return "/about";
      case "/about":
        return "/work";
      case "/work":
        return "/contact";

      default:
        return "/";
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      transition: "color 0.5s linear",
    },
    container: {
      position: "fixed",
      top: "100%",
      left: "50%",
      transform: "translate(-50%,-80%)",
    },
    navDown: {
      fontSize: atSplash() ? 200 : 100,
      transition:
        "font-size 1s ease-in-out, top 1s ease-in-out,color 1s ease-in-out",
    },

    turnUp: {},
  }));
  const classes = useStyles();
  let [darkMode, setDarkMode] = useState(
    useMediaQuery("(prefers-color-scheme: dark)")
  );
  let toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
        typography: {
          fontFamily: "Quicksand, sans-serif",
        },
        overrides: {
          MuiCssBaseline: {
            "@global": {
              "@font-face": "Quicksand",
            },
          },
        },
      }),
    [darkMode]
  );
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Box className={`App ${classes.root}`}>
          <CssBaseline />
          <TopNav
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            atSplash={atSplash}
          />
          <Container maxWidth='lg'>
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames='fade'
                timeout={300}
                unmountOnExit>
                <Switch location={location}>
                  <Route exact path='/' component={Splash} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/work' component={Work} />
                  <Route exact path='/contact' component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Container>
          <RouterLink to={() => getNext()}>
            <div className={classes.container}>
              <Icon
                style={{ color: theme.palette.text.primary }}
                className={
                  atSplash()
                    ? `animate__animated animate__bounce animate__infinite ${classes.navDown}`
                    : classes.navDown
                }>
                {atBottom() ? "expand_less" : "expand_more"}
              </Icon>
            </div>
          </RouterLink>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
