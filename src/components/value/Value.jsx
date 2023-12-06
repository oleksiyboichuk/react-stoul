import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion';
import './Value.css';
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

export const Value = () => {
    return (
        <motion.section className='v-wrapper' id='value' initial='hidden' whileInView="visible" variants={articleAnimation} transition={{ duration: 0.4 }}>
            <div className='paddings innerWidth flexCenter v-container'>
                {/* left side */}
                <div className='v-left'>
                    <div className='image-container'>
                        <img src="./images/value.png" alt="" />
                    </div>
                </div>

                {/* right side */}
                <div className='flexColStart v-right'>
                    <span className='orangeText'>Наша цінність</span>
                    <span className='primaryText'>Що ви отримаєте співпрацюючи з нами</span>
                    <span className='secondaryText'>
                        Ми завжди готові допомогти, надавши вам найкращі послуги
                        <br />
                        <span>Ми віримо, що гарне місце для проживання може зробити ваше життя кращим</span>
                    </span>

                    <Accordion
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                        className='acordion'
                    >
                        {data.map((item, index) => (
                            <AccordionItem className={`acordionItem ${item.expanded ? 'expanded' : 'collapsed'}`} key={index.toString()} uuid={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter acordionButton'>
                                        <AccordionItemState>
                                            {({ expanded }) => (
                                                <>
                                                    <div className='flexCenter icon'>{item.icon}</div>
                                                    <span className='primaryText'>{item.heading}</span>
                                                    <div className='flexCenter icon'>
                                                        <MdOutlineArrowDropDown size={20} />
                                                    </div>
                                                </>
                                            )}
                                        </AccordionItemState>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='secondaryText'>{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </motion.section>
    );
};
