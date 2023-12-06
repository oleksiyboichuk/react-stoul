import React from 'react'
import './Footer.css'
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

export const Footer = () => {
    return (
        <motion.section className='f-wrapper' initial='hidden' whileInView="visible" variants={articleAnimation} transition={{ duration: 0.4 }}>
            <div className="paddings innerWidth flexCenter f-container">
                {/* left side */}
                <div className='flexColStart f-left'>
                    <div className='flexCenter'><img src="https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/DOCUMENTS-256.png" alt="" className='logo' /><span className='text-footer'>Stoul</span></div>
                    <span className='secondaryText'>Наше бачення полягає в тому, щоб зробити<br /> квартиру комфортную саме для Вас</span>
                </div>

                <div className='flexColStart f-right'>
                    <span>Інформація</span>
                    <span>м. Чернівці, вул. Головна 007</span>
                </div>
            </div>
        </motion.section>
    )
}
