import React from 'react';
import './style.css';
import { motion } from 'framer-motion';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

export default function index(props) {
    const sorted = [typeof (props)];
    console.log(sorted)
    return (
            // {(props.homepage) ? (
        <div className="card-wrapper">
            {/* LOAD ONLY REPOS WITH HOMEPAGE VALUE */}
            <motion.div className="port-card text-center"
                whileHover={{
                    scale: 1.2
                }}>
                <a href={props.homepage}><h3>{(props.name).toUpperCase()}</h3></a>
                <p>
                    {(props.description) ? props.description : 'no description yet'}
                    <br />{(props.updated_at)}
                </p>

            </motion.div>{/* // end of .port-card */}
            {/* <div className="button-wrapper"> */}
                <a href={props.html_url}>
                    <motion.button
                        className="repo-link"
                        whileHover={{
                            scale: 1.2,
                            backgroundColor: 'rgb(177, 177, 0)',
                            // boxShadow: '8px 8px 12px 6px inset rgb(120, 120, 0)'
                        }}>
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </motion.button>
                </a>
            {/* </div>  */}
        </div> 
            // ) : ()}
    // }

    )
}
