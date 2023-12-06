// ModalWindow.js
import React, { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './ModalWindow.css';

const ModalWindow = ({ onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [calling, setCalling] = useState(false);
    const [timer, setTimer] = useState(30);
    const [isEmptyError, setIsEmptyError] = useState(false);

    const handleCall = () => {
        if (!phoneNumber.trim()) {
            setIsEmptyError(true);
            return;
        }

        setCalling(true);

        // Simulate a 30-second timer
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        setTimeout(() => {
            setCalling(false);
            setTimer(30);
            setIsEmptyError(false);
            clearInterval(interval);
            onClose();
        }, 30000);
    };

    useEffect(() => {
        if (calling) {
            document.title = `Calling in ${timer} seconds...`;
        } else {
            document.title = 'Stoul';
        }
    }, [calling, timer]);

    return (
        <div className={`modal-overlay ${calling ? 'calling' : ''}`}>
            <OutsideClickHandler onOutsideClick={onClose}>
                <div className="modal-content">
                    <div>
                        {!calling ? (
                            <>
                                <p className='modal-text'>Хочете ми зателефонуємо Вам за 30 секунд?</p>
                                <input
                                    type="text"
                                    placeholder="Номер телефону..."
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className='input-modal'
                                />
                                <button onClick={handleCall} className='call-button'>OK</button>
                                {isEmptyError && <p className='wrong-text'>Заповніть поле з номером телефону!</p>}
                            </>
                        ) : (
                            <>
                                <p className='secondaryText'>Телефонуємо...</p>
                                <p>Ми зателефонуємо протягом <span className='timer'>{timer}</span> секунд.</p>
                            </>
                        )}
                    </div>
                    <div >
                        <button className="close-button" onClick={onClose}>Закрити</button>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
};

export default ModalWindow;
