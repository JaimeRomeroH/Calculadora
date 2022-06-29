import './App.css';
import logo from './imagenes/logo.png';
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
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
       </div>
    </div>
  );
}

export default App;
