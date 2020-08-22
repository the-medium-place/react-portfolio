import React from 'react';
import './style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


export default function index(props) {
    return (
        // <div className="sidebar">
        // <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
        <Navbar variant="dark" expand="md">
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="col-md-12 d-block sidebar">
                <Nav.Link to="/home" as={NavLink} className="closebtn" exact>x</Nav.Link>
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
                {/* </Navbar.Collapse> */}
        </Navbar>
        // </div>
    )
}

// TODO: make components for navbar(sidebar) links and 
//       map routes array with new component
// TODO: write function to make sidebar animate in and out 
