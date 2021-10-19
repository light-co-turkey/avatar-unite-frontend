import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';

//Views
import NotFound from "./views/NotFound"
import CNavbar from './views/CNavbar';
import CFooter from './views/CFooter';
import Landing from './views/Landing';

//Styles
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./utils/toggleTheme/UseDarkMode"
import { GlobalStyles } from "./utils/toggleTheme/GlobalStyles";
import { lightTheme, darkTheme } from "./utils/toggleTheme/Themes"
import './global.scss'

const appBody = {
  position: "relative",
  top: "112px",
  maxWidth: "1200px",
  minHeight: "calc(100% - 118px - 10rem)",
  padding: "1rem",
  margin: "auto"
}


const App = () => {
  const location = useLocation()
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <div className="App">
          <CNavbar theme={theme} toggleTheme={themeToggler} location={location} />
          <div style={appBody}>
            <Switch>
              <Route exact path='/'><Landing/></Route>
              <Switch>
                <Route><NotFound/></Route>
              </Switch>
            </Switch>
          </div>
          <CFooter />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
