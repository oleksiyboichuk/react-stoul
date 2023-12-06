import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
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

export const Residencies = () => {
    return (
        <motion.section className='r-wrapper' id='residencies' initial='hidden' whileInView="visible" variants={articleAnimation} transition={{ duration: 0.4 }}>
            <div className="paddings innerWidth r-container">
                <div className='r-head flexColStart'>
                    <span className='orangeText'>Кращий Вибір</span>
                    <span className='primaryText'>Популярні Резиденції</span>
                </div>


                <Swiper {...sliderSettings}>
                    <SliderButton />
                    {data.map((card, index) => (
                        <SwiperSlide key={index + card}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />
                                <span className='secondaryText r-price'>
                                    <span style={{ color: 'orange' }}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
    )
}

const SliderButton = () => {
    const swipper = useSwiper();

    return (
        <motion.div className='flexCenter r-buttons' initial='hidden' whileInView="visible" variants={articleAnimation} transition={{ duration: 0.4 }}>
            <button onClick={() => swipper.slidePrev()}>&lt;</button>
            <button onClick={() => swipper.slideNext()}>&gt;</button>
        </motion.div>
    );
}