import React from 'react';
import './style.css';
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
            <motion.div className="port-card text-center"
                whileHover={{
                    scale: 1.1,
                    marginBottom: "30px"
                }}>
                <div className="repo-name-wrapper">
                    <a href={props.homepage} target="_blank" rel="noopener noreferrer"><h2 className="repo-name">{(props.name).toUpperCase()}</h2></a>
                </div>
                <p>
                    {(props.description) ? props.description : 'no description yet'}
                    <br />
                    {/* {(props.updated_at)} */}

                </p>
                <hr />
                <img src={screenshotURL} style={{'height': '200px'}} />
                <hr />
                {(props.languageObj) ? (
                    <h4>{Object.keys(props.languageObj).join(', ')}</h4>
                ) : console.log()}


            </motion.div>{/* // end of .port-card */}
            <div className="button-wrapper">
                <a href={props.html_url} target="_blank" rel="noopener noreferrer">
                    <motion.button
                        className="repo-link"
                        whileHover={{
                            scale: 1.2
                        }}>
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </motion.button>
                </a>
                {/* <motion.button
                    className="readme-link"
                    onClick={() => setModalShow(true)}
                    whileHover={{
                        scale: 1.2
                    }}>
                    View README
                </motion.button> */}

                {/* <ReadmeModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    repoName={props.name}
                    readmeURL={props.readmeURL}
                /> */}
            </div>
            <div>
            </div>
        </div>
    )
}
