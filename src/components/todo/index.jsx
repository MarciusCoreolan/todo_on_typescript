import React from "react";

function Todo({ todo }) {
  return (
    <li className={"todo__item"} draggable={true} >
      <div className={"todo__text"}>{todo.todoText}</div>

      <div className="todo__completed">
        <input type="checkbox" className={"todo__checkbox"} />
        <button className="material-icons todo__button">delete_forever</button>
      </div>
    </li>
  );
}

export default Todo;
