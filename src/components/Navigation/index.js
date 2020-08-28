import React from 'react';
import './style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import faceIcon from '../../assets/images/faceIcon.png';


export default function index(props) {
    return (
        // <div className="sidebar">
        // <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
        // <Navbar variant="dark" expand="md">
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {/* <Navbar.Toggle as={{<Button>}} /> */}

            <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand><img src={faceIcon} className="nav-icon" alt="face icon"/></Navbar.Brand>
            <Nav className="flex-column sidebar">
                {props.routes.map(route => (
                    <Nav.Link
                    key={route.path}
                    as={NavLink}
                    to={route.path}
                    activeClassName="active"
                    exact
                    >
                        {route.name}
                    </Nav.Link>
                ))}
            </Nav>
                </Navbar.Collapse>
        </Navbar>
        // </div>
    )
}

// TODO: make components for navbar(sidebar) links and 
//       map routes array with new component
// TODO: write function to make sidebar animate in and out 
