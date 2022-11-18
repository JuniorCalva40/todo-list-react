import React from "react";
import "./TodoButton.css"
const onCLickButton = (msg) => {
    console.log("Hola");
}


const TodoButton = () => <button className="todo-button" onClick={onCLickButton}> Agregar </button>

export {TodoButton}