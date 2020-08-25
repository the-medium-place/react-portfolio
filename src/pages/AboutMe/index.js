import React from 'react';
import './style.css';
import Resume from '../../assets/files/ZacStowell.pdf';
import BigPic from '../../assets/images/Seattle-Brand-Headshot-Photographer-35.jpg';

export default function index() {
    return (
        <>
            <div class="row top-box" style={{ marginBottom: "60vh" }}>
                <div class="col-md-5">
                    <p class="opening-blurb">Hello! My name is Zac and I'm a Full-Stack web developer with training from
                    the <a href="https://bootcamp.uw.edu/">UW Coding Bootcamp</a>, where I gained experience with HTML5,
                    CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, Database Theory, MongoDB/Mongoose,
                    MySQL/Sequelize, Command Line, and Git. I also like to dabble in a few other languages including
                    Python and ASL.
                </p>
                    <a href={Resume} target="_blank" rel="noopener noreferrer"><button class="btn btn-primary submit-btn"
                        value="here">See my Resume</button></a>
                    <br />
                    <br />
                </div>
                <figure class="col-md-7">

                    <img alt="That's me!" src={BigPic} class="grayscale top-img" id="top-img" />
                    <figcaption>Photos by <a href="http://www.inspirebydanielle.com" rel="noopener noreferrer" target="_blank">Danielle Barnum Photography</a>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}