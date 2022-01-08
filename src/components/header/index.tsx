import React from "react";
import Input from "../input/Input";
import { useDispatch } from "react-redux";
import {useTypeSelector} from "../../hooks/useTypeSelector";

function Header() {
  const dispatch = useDispatch();
  const searchTodo = useTypeSelector((state) => state.searchTodo);
  const handleSearch = (text:string) => {
    dispatch({
      type: "search/todo",
      payload: text,
    });
  };

  return (
    <header>
      <div className="wrapper">
        <div className={"header__logo_container"}>
          <i className="material-icons header__logo">fact_check</i>
          Список Дел
        </div>
        <div className="header__search_container">
          <Input
            type={"text"}
            holder={"Найти"}
            value={searchTodo}
            onChange={handleSearch}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
