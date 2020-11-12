import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import './App.css';

const routes = [
  { path: '/', name: '', Component: AboutMe },
  { path: '/home', name: 'About Me', Component: AboutMe },
  { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
  { path: '/contactme', name: 'Contact Me', Component: ContactMe }
]


function App() {
  return (
    <>
    <AboutMe />
    </>
  )

}

export default App;
