import React, { useState } from 'react';
import './style.css';
import Resume from '../../assets/files/ZacStowell.pdf';
import BigPic from '../../assets/images/Seattle-Brand-Headshot-Photographer-35.jpg';
import { Row, Col } from 'react-bootstrap';
import ReadmeModal from '../../components/ReadmeModal';


export default function Index() {

    const [modalShow, setModalShow] = useState(false);




    return (
        <div className="content-box">
            <Row className="row top-box" >
                <Col>
                    <p className="opening-blurb">Hello! My name is Zac and I'm a Full-Stack web developer with training from
                    the <a href="https://bootcamp.uw.edu/">UW Coding Bootcamp</a>, where I gained experience with HTML5,
                    CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, Database Theory, MongoDB/Mongoose,
                    MySQL/Sequelize, Command Line, and Git. I also like to dabble in a few other languages including
                    Python and ASL.
                </p>
                    <button className="btn btn-primary submit-btn" onClick={() => setModalShow(true)}>See my Resume</button>
                    <ReadmeModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    
                />
                    {/* <a href={Resume} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary submit-btn"
                        value="here">See my Resume</button></a> */}
                    <br />
                    <br />
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