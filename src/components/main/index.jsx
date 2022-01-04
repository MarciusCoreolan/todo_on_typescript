import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../todo";
import Input from "../input/Input";

function Main(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const addNewTodo = useSelector((state) => state.addNewTodo);

  const [newTodo, setNewTodo] = useState("");

  const handleOpen = () => {
    dispatch({ type: "window/open/close" });
  };
  const handleAdd = () => {
    dispatch({
      type: "add/new/todo",
      payload: newTodo,
    });
    setNewTodo("");
  };

  return (
    <main>
      <div
        className={`drop__menu__window 
        ${addNewTodo ? "menu__opened" : "menu__closed"}`}
      >
        <div className={"drop__menu__window_content"}>
          <Input
            type={"text"}
            holder={"Новое задание"}
            onChange={setNewTodo}
            value={newTodo}
          />
          <button onClick={handleAdd}>Добавить</button>
        </div>
        <div className="drop__menu_button" onClick={handleOpen}>
          <span
            className={`material-icons 
            ${addNewTodo ? "button_up" : "button_down"}`}
          >
            expand_more
          </span>
        </div>
      </div>

      <div className="wrapper">
        <ul>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.todoText} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
