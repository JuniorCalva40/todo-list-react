import React from "react";
import './TodoCounter.css'

const TodoCounter = ({total,completed}) => (
    <h2 className="todo-counter">Tienes {completed} Tareas completadas de {total}</h2>
    
);

export {TodoCounter};
