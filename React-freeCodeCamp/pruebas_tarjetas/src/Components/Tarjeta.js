import React from 'react';
import '../styles/Tarjeta.css';

function Tarjeta(props) {
  return (
    <div className='tarjeta'>
      <p className='name'>{props.nombre}</p>
      <p className='texto'>{props.texto}</p>
    </div>
  );
}

export default Tarjeta;