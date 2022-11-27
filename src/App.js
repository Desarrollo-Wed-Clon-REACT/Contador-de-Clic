import React from "react";
import './App.css';
import Button from "./componentes/Button.js"
import Contador from "./componentes/contador.js"
import { useState } from "react";


function App() {

  const [numClicks, setNumClicks] = useState(0);

  const botonClick = ()=>{
    setNumClicks(numClicks + 1); 
  };

  const limpiarClick = ()=>{
    setNumClicks(0);
  };

  return (
    <div className="App">
        <Contador 
        numClicks = {numClicks} />
        <Button 
        nombre = "Enviar" 
        esBotonClick = {true} 
        eventoClick = {botonClick} />
        <Button 
        nombre = "Limpiar" 
        esBotonClick = {false} 
        eventoClick = {limpiarClick} />
    </div>
  );
}

export default App;
