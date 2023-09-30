import './App.css';
import ingenieroEnamnuel from './imagenes/IngenieroEnmanuel.jpg'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'


function App() {

  const [input, setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val)
  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert('por favor ingrese valores para realizar los calculos')
    }
  }

  const manejarClick = () => setInput('')





  return (
    <div className="App">
      <div className='freedcodecamp-logo-contenedor'  >
        <img 
        src={ingenieroEnamnuel} 
        className='ingeniero-Enmanuel'
        alt='Logo de freedCodeCamp' />
      </div>
      <div className='contenedor-calculadora'  >

        <Pantalla input={input}  />

        <div className='fila'  >
          <Boton manejarClic={agregarInput} >1</Boton>
          <Boton manejarClic={agregarInput} >2</Boton>
          <Boton manejarClic={agregarInput} >3</Boton>
          <Boton manejarClic={agregarInput} >+</Boton>
        </div>

        <div className='fila'  >
        <Boton manejarClic={agregarInput} >4</Boton>
        <Boton manejarClic={agregarInput} >5</Boton>
        <Boton manejarClic={agregarInput} >6</Boton>
        <Boton manejarClic={agregarInput} >-</Boton>
        </div>

        <div className='fila'  >
        <Boton manejarClic={agregarInput} >7</Boton>
        <Boton manejarClic={agregarInput} >8</Boton>
        <Boton manejarClic={agregarInput} >9</Boton>
        <Boton manejarClic={agregarInput} >*</Boton>
        </div>

        <div className='fila'  >
        <Boton manejarClic={calcularResultado} >=</Boton>
        <Boton manejarClic={agregarInput} >0</Boton>
        <Boton manejarClic={agregarInput} >.</Boton>
        <Boton manejarClic={agregarInput} >/</Boton>
        </div>

        <div className='fila'  >
          <BotonClear manejarClic={manejarClick} >
            Clear
            </BotonClear>
          
        </div>


      </div>

    </div>
  );
}

export default App;
