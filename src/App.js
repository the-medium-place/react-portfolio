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
      <>
        <Row>
          <Col md={2} >
            <Navigation routes={routes}/>
          </Col>
          <Col md={10} >
            <Container className="container">
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
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
            </Container>
          </Col>
        </Row>
      </>
    </Router>
  )

}

export default App;
