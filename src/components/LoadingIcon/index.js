import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

export default function index() {
    return (
        <motion.div
        className="loading"
        animate={{ rotate: 720 }}
        transition={{ duation: 100, yoyo: Infinity, duration: 10 }}>
            <p>test test test</p>
        </motion.div>
    )
}
