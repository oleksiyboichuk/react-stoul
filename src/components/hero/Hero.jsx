import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


export const Hero = () => {
    const [text] = useTypewriter({
        words: ['Помешкання!'],
        loop: true, // Set loop to true if you want it to loop continuously
        typeSpeed: 250,
        deleteSpeed: 100,
        pauseTime: 2000
    });



    return (
        <section className='hero-wrapper'>
            <div className="paddings innerWidth flexCenter hero-container">
                {/* Left side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1
                            initial={{ y: '2rem', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 6, type: 'spring' }}
                            className='h1-hero'
                        >
                            Знайдіть <br />Найбільш Підходяще<br /><div className='flex-text'><div className='orange-text'>{text}</div><Cursor /></div>

                        </motion.h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span className='secondaryText'>Давайте разом відкриємо різноманіття пропозицій</span>
                        <span className='secondaryText'>Забудьте про всі труднощі з пошуком місця проживання</span>
                    </div>

                    <div className='flexCenter search-bar'>
                        <HiLocationMarker color='var(--blue)' size={25} />
                        <input type="text" />
                        <button className='button'>Шукати</button>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <motion.span initial={{ fontSize: '3rem', y: -50, opacity: 0, color: 'black' }} animate={{ fontSize: '2rem', y: 0, opacity: 1, color: 'white' }} transition={{ duration: 2 }}>
                                <CountUp start={8800} end={9000} duration={4} style={{ fontWeight: 'bold' }} />
                                <span>+</span>
                            </motion.span>
                            <span className='secondaryText'>Преміальних продуктів</span>
                        </div>
                        <div className="flexColCenter stat">
                            <motion.span initial={{ fontSize: '3rem', y: -50, opacity: 0, color: 'black' }} animate={{ fontSize: '2rem', y: 0, opacity: 1, color: 'white' }} transition={{ duration: 2 }}>
                                <CountUp start={1900} end={2000} duration={4} style={{ fontWeight: 'bold' }} />
                                <span>+</span>
                            </motion.span>
                            <span className='secondaryText'>Задоволених клієнтів</span>
                        </div>
                        <div className="flexColCenter stat">
                            <motion.span initial={{ fontSize: '3rem', y: -50, opacity: 0, color: 'black' }} animate={{ fontSize: '2rem', y: 0, opacity: 1, color: 'white' }} transition={{ duration: 2 }}>
                                <CountUp end={15} style={{ fontWeight: 'bold' }} />
                                <span>+</span>
                            </motion.span>
                            <span className='secondaryText'>Нагород</span>
                        </div>
                    </div>

                </div>
                {/* Right side */}
                <div className="flexCenter hero-right">
                    <div initial={{ x: '7rem', opacity: 0 }}
                        animate={{ x: '0', opacity: 1 }}
                        transition={{ duration: 2, type: 'spring' }}
                    >
                        <motion.div className="image-container"
                            initial={{ y: 0 }}
                            animate={{ y: [-10, 10, -10], transition: { repeat: Infinity, duration: 5 }, type: 'spring' }}
                        >
                            <img src="./images/hero-image.png" alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    )
}
