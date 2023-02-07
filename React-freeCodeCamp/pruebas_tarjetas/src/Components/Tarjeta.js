import React from 'react';
import '../styles/Tarjeta.css';
import logo from '../assets/FoolMeOnce_crop.png';

function Tarjeta(props) {
  return (
    <div class="parent">
      <div class="imagen"><img src={logo} alt='logo' className='logo' /> </div>
      <div class="numero">{props.numero}</div>
      <div class="nombre">FoolMeOnce</div>
      <div class="info"> Loterias y no apuestas</div>
    </div>
  );
}

export default Tarjeta;

// <img src={logo} alt='logo' />border: 1px solid red;
//object - fit: cover;