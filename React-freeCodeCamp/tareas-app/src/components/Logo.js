import React from "react";
import freeCodeCampLogo from '../assets/freecodecamp-logo.png';
import "../styles/Logo.css";

function Logo() {
    return (
        <div className='freecodecamp-logo-contenedor'>
            <img
                src={freeCodeCampLogo}
                className='freecodecamp-logo'
                alt='Logo FreeCodeCamp'
            />
        </div>
    );
}

export default Logo;