import React, { useState } from "react";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { useRandomId } from "../../hooks/useRandomId";

function DropWindow(props) {
  const addNewTodo = useSelector((state) => state.addNewTodo);
  const randomId = useRandomId;
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

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
  return (
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
  );
}

export default DropWindow;
