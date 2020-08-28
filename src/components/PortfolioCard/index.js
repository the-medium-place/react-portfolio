import React, { useState } from 'react';
import './style.css';
import { motion } from 'framer-motion';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import ReadmeModal from '../ReadmeModal';

library.add(fab, fas);

export default function Index(props) {

    // testing for modal
    const [modalShow, setModalShow] = useState(false);

    // const handleClose = () => setModalShow(false);
    // const handleShow = () => setModalShow(true);


    // console.log(props)
    return (
        <div className="card-wrapper">
            <motion.div className="port-card text-center"
                whileHover={{
                    scale: 1.1,
                    marginBottom: "30px"
                }}>
                <div className="repo-name-wrapper">
                    <a href={props.homepage}><h2 className="repo-name" target="_blank" rel="noopener noreferrer">{(props.name).toUpperCase()}</h2></a>
                </div>
                <p>
                    {(props.description) ? props.description : 'no description yet'}
                    <br />{(props.updated_at)}

                </p>
                <br />
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
                <motion.button
                    className="readme-link"
                    onClick={() => setModalShow(true)}
                    whileHover={{
                        scale: 1.2
                    }}>
                    View README
                </motion.button>

                <ReadmeModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    repoName={props.name}
                    readmeURL={props.readmeURL}
                />
            </div>
            <div>
            </div>
        </div>
    )
}
