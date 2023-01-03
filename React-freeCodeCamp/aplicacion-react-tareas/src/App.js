import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png';
import Tarea from './components/Tarea';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo FreeCodeCamp'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas:</h1>
        <Tarea texto="learn React" />
      </div>
    </div>
  );
}

export default App;
