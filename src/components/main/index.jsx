import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../todo";
import Input from "../input/Input";
import {useRandomId} from "../../hooks/useRandomId";

function Main(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const addNewTodo = useSelector((state) => state.addNewTodo);
  const randomId = useRandomId
  const [newTodo, setNewTodo] = useState("");

  const handleOpen = () => {
    dispatch({ type: "window/open/close" });
  };

  const handleAdd = () => {
    dispatch({
      type: "add/new/todo",
      payload: newTodo,
      id: randomId(),
    });
    setNewTodo("");
  };

  const handleDelete = (text) =>{
    dispatch({
      type: "delete/todo",
      delete: text,
    });
  }
  const handleCompleted = (id) =>{
    dispatch({
      type: "completed/todo",
      id: id
    });
  }

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
          {todos.map((todo, index) => (
            <Todo todo={todo} key={todo.todoText + index} handleDelete={handleDelete} handleCompleted={handleCompleted}/>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
