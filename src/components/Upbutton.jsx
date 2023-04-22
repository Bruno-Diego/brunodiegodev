import React from "react";
import { styles } from '../styles';

const Upbutton = () => {
    const handleOnClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={handleOnClick}
            className={`fixed right-4 bottom-4 z-50 p-4 rounded-full ${styles.primaryGradient} hover:${styles.secondaryGradient} focus:outline-none transition-all duration-300 ease-in-out`}
        >
            <i className="fa-solid fa-circle-arrow-up fa-2xl"></i>
        </button>
    )
};

export default Upbutton;