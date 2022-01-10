import React from "react";
import Input from "../input/Input";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import Button from "../button/Button";
import {ActionUserTypes} from "../../types/userTypes";
import {ActionTypes} from "../../types/todoTypes";

function Header() {
  const dispatch = useDispatch();
  const searchTodo = useTypeSelector((state) => state.todo.searchTodo);
  const user = useTypeSelector((state) => state.user.user);
  const handleSearch = (text: string) => {
    dispatch({
      type: ActionTypes.SEARCH_TODO,
      payload: text,
    });
  };
  const handleLogOut = () =>{
    dispatch({type: ActionUserTypes.USER_LOG_OUT,})
  }
  return (
    <header>
      <div className="wrapper">
        <div className={"header__logo_container"}>
          <i className="material-icons header__logo">fact_check</i>
          Список Дел
        </div>
        {user !== null && (
          <div className="header__search_container">
            <Input
              type={"text"}
              holder={"Найти"}
              value={searchTodo}
              onChange={handleSearch}
            />
            <Button text={'Выйти'} handleClick={handleLogOut}/>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
