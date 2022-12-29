import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  let [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    console.log("Click");
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    console.log("Reiniciar");
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton
          texto='Clic'
          isAClickButton={true}
          manejarClick={manejarClick} />
        <Boton
          texto='Reiniciar'
          isAClickButton={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
