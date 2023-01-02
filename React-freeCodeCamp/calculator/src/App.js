import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png';
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');
  const agregarInput = val => {
    setInput(input + val)
  };
  // 4:59:30
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp' />
      </div>
      <div className="contendor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarCLic={agregarInput}>1</Boton>
          <Boton manejarCLic={agregarInput}>2</Boton>
          <Boton manejarCLic={agregarInput}>3</Boton>
          <Boton manejarCLic={agregarInput}>+</Boton>
        </div>
        <div cla manejarCLic={agregarInput} ssName="fila">
          <Boton manejarCLic={agregarInput}>4</Boton>
          <Boton manejarCLic={agregarInput}>5</Boton>
          <Boton manejarCLic={agregarInput}>6</Boton>
          <Boton manejarCLic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarCLic={agregarInput}>7</Boton>
          <Boton manejarCLic={agregarInput}>8</Boton>
          <Boton manejarCLic={agregarInput}>9</Boton>
          <Boton manejarCLic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarCLic={agregarInput}>=</Boton>
          <Boton manejarCLic={agregarInput}>0</Boton>
          <Boton manejarCLic={agregarInput}>.</Boton>
          <Boton manejarCLic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;