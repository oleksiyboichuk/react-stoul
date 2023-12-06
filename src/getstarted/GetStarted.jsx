import React from 'react'
import './GetStarted.css'
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

export const GetStarted = () => {
    return (
        <motion.section className='g-wrapper' id='getstarted' initial='hidden' whileInView="visible" variants={articleAnimation} transition={{ duration: 0.4 }}>
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className='primaryText'>Почніть разом з <span className='logo-start'>Stoul</span></span>
                    <span className='secondaryText'>Долучайтеся та знайдіть у нас те, що вам подобається.<br />Долучайтеся до нас у цьому захопливому шляху в пошуках вашого ідеального дому.</span>
                    <button className='button'>
                        <a href="mailto:oleskiy.boichuk.v@gmail.com">Почати</a>
                    </button>
                </div>
            </div>
        </motion.section>
    )
}
