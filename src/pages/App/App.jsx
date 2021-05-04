import { Box, Container, CssBaseline } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import { scrollPosition } from "../../util/WindowUtils";
import About from "../../pages/About/About";
import "./App.css";
import "animate.css";

function App() {
  const scrollBreakpoint = 0.1;
  let [scrollPos, setScrollPos] = useState(scrollPosition(scrollBreakpoint));
  let updateScrollPos = () => {
    setScrollPos(scrollPosition(scrollBreakpoint));
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScrollPos);
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      transition: "color 0.5s linear",
    },
    navDown: {
      fontSize: scrollPos ? 100 : 300,
      position: "fixed",
      bottom: 0,
      width: "100%",
      transition: "font-size 1s ease-in-out, top 1s ease-in-out",
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
            scrollPos={scrollPos}
          />
          <Container maxWidth='sm'>
            <Switch>
              <Route to='/' render={(props) => <About {...props} />} />
            </Switch>
          </Container>

          <KeyboardArrowDownIcon
            className={
              scrollPos
                ? classes.navDown
                : `animate__animated animate__bounce animate__infinite ${classes.navDown}`
            }
          />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
