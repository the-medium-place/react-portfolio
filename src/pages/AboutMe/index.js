import React from 'react';
import './style.css';
import BigPic from '../../assets/images/Seattle-Brand-Headshot-Photographer-35.jpg';
import { Row, Col, Card, Button } from 'react-bootstrap';


export default function Index() {


    return (
        <div className="content-box">
            <Row className="row top-box" >
                <Col>
                    <Card
                        className="bio-card">
                        <Card.Img variant="top" src={BigPic} className="bio-pic" alt="My most dramatic pose on the steps. So handsome!" />
                        <Card.Body>
                            <Card.Title className="text-center" >Hello!</Card.Title>
                            <Card.Text>
                                My name is Zac and I'm a Full-Stack web developer with training from
                                the <a href="https://bootcamp.uw.edu/">UW Coding Bootcamp</a>, where I gained experience with HTML5,
                                CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, Database Theory, MongoDB/Mongoose,
                                MySQL/Sequelize, Command Line, and Git. I also like to dabble in a few other languages including
                                Python and ASL.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>

                </Col>
                {/* <figure className="col-md-5">

                    <img alt="That's me!" src={BigPic} className="top-img" id="top-img" />
                    <br />
                    <figcaption>Photos by <a href="http://www.inspirebydanielle.com" rel="noopener noreferrer" target="_blank">Danielle Barnum Photography</a>
                    </figcaption>
                </figure> */}
            </Row>
        </div>
    )
}