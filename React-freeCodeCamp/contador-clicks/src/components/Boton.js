import React from 'react';
import '../style/Boton.css';

// en vez de props --> cogemos el parametro que queremos{texto}
function Boton({ texto, isAClickButton, manejarClick }) {
  return (
    <button
      className={isAClickButton ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;