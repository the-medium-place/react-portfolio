import React, { useState } from 'react';
import './style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import faceIcon from '../../assets/images/faceIcon.png';
import ReadmeModal from '../ReadmeModal';


export default function Index(props) {
    const [modalShow, setModalShow] = useState(false);




    return (
        // <div className="sidebar">
        // <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
        // <Navbar variant="dark" expand="md">
        <Navbar collapseOnSelect expand="lg" 
        // variant="light" 
        >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {/* <Navbar.Toggle as={{<Button>}} /> */}

            <Navbar.Collapse id="responsive-navbar-nav">
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
                <Nav.Link
                // as={NavLink}
                onClick={() => setModalShow(true)}
                to="#"
                >
                Resume
                </Nav.Link>
                <ReadmeModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    
                />
            </Nav>
                </Navbar.Collapse>
        </Navbar>
        // </div>
    )
}

// TODO: make components for navbar(sidebar) links and 
//       map routes array with new component
// TODO: write function to make sidebar animate in and out 
