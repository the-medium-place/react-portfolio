import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

export default function index(props) {
    return (
        <motion.img src={props.screenshotURL} 
                    className="screenshot-img"
                    style={{'max-width': '85%'}} 
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "1px 1px 1em 1px darkslategray"
                    }}/>
    )
}
