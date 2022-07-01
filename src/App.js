import './App.css';
import logo from './imagenes/logo.png';
import Boton from './Componentes/Boton'
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/BotonClear';
import {useState} from 'react'

function App() {

  const [input, setInput] = useState(""); 

  const agregarInput = val =>{
     setInput(input + val);
  }

  return (
    <div className="App">
       <div className="logo-contenedor">
          <img
            src={logo}
            className="logo"
            alt="logo de app calculadora" />
       </div>
       <div className="contenedor-calculadora">
          <Pantalla input={input}/>
          <div className="fila">
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className="fila">
            <BotonClear>Clear</BotonClear>
          </div>
       </div>
    </div>
  );
}

export default App;
