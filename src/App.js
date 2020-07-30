import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Navigation from './components/Navigation';
import { Container, Col, Row } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './App.css';

const routes = [
  { path: '/home', name: 'Home', Component: AboutMe },
  { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
  { path: '/contactme', name: 'Contact Me', Component: ContactMe }
]


function App() {
  return (
    <Router>

      <Container fluid>
        <Row>
          <Col md={2} id="sidebar-wrapper">
            <Navigation />
          </Col>
          <Col md={10} id="content-wrapper">
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={600}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
