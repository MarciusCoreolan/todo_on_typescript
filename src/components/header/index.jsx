import React from "react";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";

function Header(props) {
  const dispatch = useDispatch();
  const searchTodo = useSelector((state) => state.searchTodo);
  const handleSearch = (text) => {
    dispatch({
      type: "search/todo",
      text: text,
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
