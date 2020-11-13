import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import { Container } from '@material-ui/core';
import NavDrawer from './components/NavDrawer';
import NoMatch from './pages/NoMatch';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import LaptopIcon from '@material-ui/icons/LaptopMac';

import './App.css';

const routes = [
  { path: '/', name: '', Component: AboutMe },
  { path: '/home', name: 'About Me', Component: AboutMe },
  { path: '/portfolio', name: 'Portfolio', Component: Portfolio, Icon: LaptopIcon },
  { path: '/contact', name: 'Contact Me', Component: ContactMe, Icon: MailIcon },
  { path: '*', name: '', Component: NoMatch }
]


function App() {
  return (
    <Router>
      <NavDrawer routes={routes}/>
      <Container>
        <Switch>
          {routes.map(route => {
            return (
              <Route exact path={route.path}>
                <route.Component />
              </Route>
            )
          })}
        </Switch>
      </Container>
    </Router>
  )

}

export default App;
