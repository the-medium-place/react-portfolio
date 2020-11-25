import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import { Container } from '@material-ui/core';
import NavDrawer from './components/NavDrawer';
import NoMatch from './pages/NoMatch';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import LaptopIcon from '@material-ui/icons/LaptopMac';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Splash from './pages/Splash';
import Background from './assets/images/background90s.png';


import './App.css';

// TODO: create custom color themes!!
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EEF2D0'// offwhite - used to be '#7986cb'
    },
    secondary: {
      main: '#4D7343'// green - used to be #bdbdbd
    },
    terciary: {
      main: '#A67D65'//brownish - used to be "#bada55"
    },
    text: {
      primary: '#080B0D', // nearly black
      secondary: '#F2F2F2'
    }
  }
})


const useStyles = makeStyles((theme) => ({
  root: {
    // background: `url('${Background}') no-repeat center fixed`,
    // backgroundSize: '100vw 100vh'
  }

}))

const routes = [
  { path: '/', name: 'Home', Component: Splash, Icon: HomeIcon },
  { path: '/home', name: 'About Me', Component: AboutMe },
  { path: '/portfolio', name: 'Portfolio', Component: Portfolio, Icon: LaptopIcon },
  { path: '/contact', name: 'Contact Me', Component: ContactMe, Icon: MailIcon },
  { path: '*', name: '', Component: NoMatch }
]


function App() {
  const classes = useStyles();



  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container className={classes.root}>
        <NavDrawer routes={routes} />
          <Switch>
            {routes.map((route, i) => {
              return (
                <Route exact path={route.path} key={i}>
                  <route.Component />
                </Route>
              )
            })}
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  )

}

export default App;
