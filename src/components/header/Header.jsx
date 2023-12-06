import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import ModalWindow from './modalwindow/ModalWindow';
import './Header.css';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const getMenuStyles = () => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: menuOpen ? '0' : '-100%' };
        }
        return {}; // Return empty object for other cases
    };

    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>
                <div className='flexCenter'>
                    <img
                        src='https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/DOCUMENTS-256.png'
                        alt=''
                        className='logo'
                    />
                    <span className='text-logo'>Stoul</span>
                </div>

                <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
                    <div className={`flexCenter h-menu ${menuOpen ? 'menu-open' : ''}`} style={getMenuStyles()}>
                        <div className={`close-icon ${menuOpen ? 'visible' : ''}`} onClick={() => setMenuOpen(false)}>
                            X
                        </div>
                        <a href='#residencies'>Резиденції</a>
                        <a href='#value'>Наша цінність</a>
                        <a href='#contact'>Зв'язатися з нами</a>
                        <a href='#getstarted'>Почати</a>
                        <button className='button' onClick={() => setShowModal(true)}>
                            Зателефонувати
                        </button>
                        {showModal && <ModalWindow onClose={() => setShowModal(false)} />}
                    </div>
                </OutsideClickHandler>

                <div className='menu-icon' onClick={() => setMenuOpen((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    );
};
