import './App.css';
import logo from './imagenes/logo.png';
import Boton from './Componentes/Boton'
function App() {
  return (
    <div className="App">
       <div className="logo-contenedor">
          <img
            src={logo}
            className="logo"
            alt="logo de app calculadora" />
       </div>
       <div className="contenedor-calculadora">
          <div className="fila">
            <Boton></Boton>
          </div>
          <div className="fila">1</div>
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
       </div>
    </div>
  );
}

export default App;
