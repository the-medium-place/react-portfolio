import React from 'react';
import './style.css';
import PortCardImg from '../PortCardImg';
import { motion } from 'framer-motion';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import ReadmeModal from '../ResumeModal';

library.add(fab, fas);

export default function Index(props) {

    const screenshotURL = `https://raw.githubusercontent.com/the-medium-place/${props.name}/master/public/assets/images/screenshot.png`

    return (
        <div className="card-wrapper">
            <div className="port-card text-center">
                <div className="repo-name-wrapper">
                    <a href={props.homepage} target="_blank" rel="noopener noreferrer"><h2 className="repo-name">{(props.name).toUpperCase()}</h2></a>
                </div>
                <p>
                    {(props.description) ? props.description : 'no description yet'}
                    <br />
                </p>
                <hr />

                <a href={props.homepage} target="_blank" rel="noopener noreferrer">

                    <PortCardImg screenshotURL={screenshotURL} />
                    {/* <motion.img src={screenshotURL} 
                    className="screenshot-img"
                    style={{'max-width': '85%'}} 
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "1px 1px 1em 1px darkslategray"
                    }}/> */}
                </a>


                <hr />
                {(props.languageObj) ? (
                    <h4>{Object.keys(props.languageObj).join(', ')}</h4>
                ) : console.log()}


            </div>{/* // end of .port-card */}
            <div className="button-wrapper">
                <a href={props.html_url} target="_blank" rel="noopener noreferrer">
                    <motion.button
                        className="repo-link"
                        whileHover={{
                            scale: 1.1
                        }}>
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </motion.button>
                </a>
            </div>
        </div>
    )
}
