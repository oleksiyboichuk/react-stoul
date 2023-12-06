import React from 'react'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import './Contact.css'
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

export const Contact = () => {
    return (
        <motion.section className='c-wrapper' id='contact' initial='hidden' whileInView="visible" variants={articleAnimation} transition={{ duration: 0.4 }}>
            <div className='paddings innerWidth flexCenter c-container'>
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Наші Контакти</span>
                    <span className='primaryText'>Зв'язатися з нами</span>
                    <span className='secondaryText'>
                        Ми завжди готові допомогти, вірячи, що гарне місце для проживання може зробити ваше життя кращим</span>
                    <div className="flexColStart contactModes">
                        {/* 1 row */}
                        <div className="flexStart row">
                            <div className='flexColCenter mode'>
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Зателефонувати</span>
                                        <span className='secondaryText'>+123 456 789</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Зателефонувати зараз</div>
                            </div>
                            {/* 2 row*/}
                            <div className='flexColCenter mode'>
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Чат</span>
                                        <span className='secondaryText'>+123 456 789</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Написати зараз</div>
                            </div>
                        </div>
                        <div className="flexStart row">
                            <div className='flexColCenter mode'>
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Відео дзвінок</span>
                                        <span className='secondaryText'>+123 456 789</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Зателефонувати зараз</div>
                            </div>
                            {/* 2 row*/}
                            <div className='flexColCenter mode'>
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Повідомлення</span>
                                        <span className='secondaryText'>+123 456 789</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Написати зараз</div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./images/contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
