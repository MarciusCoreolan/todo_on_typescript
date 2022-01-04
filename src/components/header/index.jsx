import React from "react";
import Input from "../input/Input";

function Header(props) {
  return (
    <header>
      <div className="wrapper">
        <div className={"header__logo_container"}>
          <i className="material-icons header__logo">fact_check</i>
          Список Дел
        </div>
        <div className="header__search_container">
          <Input type={"text"} holder={"Найти"}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
