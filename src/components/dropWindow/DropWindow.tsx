import React, { useState } from "react";
import Input from "../input/Input";
import { useDispatch } from "react-redux";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useRandomId} from "../../hooks/useRandomId";
import {ActionTypes} from "../../types/types";

function DropWindow() {
  const addNewTodo = useTypeSelector((state) => state.addNewTodo);
  const randomId = useRandomId;
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch({ type: ActionTypes.WINDOW_OPEN_CLOSE });
  };

  const handleAdd = () => {
    dispatch({
      type: ActionTypes.ADD_NEW_TODO,
      payload: {todo:newTodo, id:randomId()},
    })
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
