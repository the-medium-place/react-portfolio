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
  { path: '/', name: 'Home', Component: AboutMe },
  { path: '/home', name: 'Home', Component: AboutMe },
  { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
  { path: '/contactme', name: 'Contact Me', Component: ContactMe }
]


function App() {
  return (
    <Router>
        <Row>
          <Col md={2} >
            <Navigation routes={routes.slice(1, (routes.length))}/>
          </Col>
          <Col md={10} >
            <Container className="container">
              {/* MAP THE ROUTES ARRAY AND CAPTURE THE path AND Component KEYS/VALUES */}
              {routes.map(({ path, Component }) => (
                // CREATE ROUTE WITH EACH path FROM routes OBJECTS
                <Route key={path} exact path={path}>
                  {/* UTILIZE match PROPERTY IN Route FOR TRANSITION TIMING */}
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="page"
                      unmountOnExit
                    >
                      <div className="page">
                        {/* LOAD VALUE FOR EACH Component */}
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}
            </Container>
          </Col>
        </Row>
    </Router>
  )

}

export default App;
