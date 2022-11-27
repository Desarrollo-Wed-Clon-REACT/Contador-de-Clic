import React from "react";
import "../hojasDeEstilos/Button.css"

function Button({ nombre, esBotonClick, eventoClick }){
    return(
        <button 
        className={esBotonClick ? "boton-click" : "boton-limpiar"}
        onClick = {eventoClick} >
            { nombre }
        </button>

    );
};

export default Button;