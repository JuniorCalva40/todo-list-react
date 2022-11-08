import React from "react";
import "./TodoItem.css"


const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <span className="check"><input type="checkbox"></input></span>
      <p className="task">{props.text}</p>
      <span className="edit"><i class="fa-solid fa-pen-to-square"></i></span>
      <span className="delete"><i class="fa-solid fa-delete-left"></i></span>
    </li>
  );
}

export {TodoItem}
