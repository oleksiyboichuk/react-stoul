import React from 'react'
import './Companies.css'
import { motion } from 'framer-motion'

const articleAnimation = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

export const Companies = () => {
    return (
        <motion.section className='c-wrapper' initial='hidden' whileInView="visible" variants={articleAnimation} transition={{ duration: 0.4 }}>
            <div className="paddings innerWidth flexCenter c-container">
                <img src="./images/prologis.png" alt="prologis" />
                <img src="./images/tower.png" alt="tower" />
                <img src="./images/equinix.png" alt="equinix" />
                <img src="./images/realty.png" alt="realty" />
            </div>
        </motion.section >
    )
}
