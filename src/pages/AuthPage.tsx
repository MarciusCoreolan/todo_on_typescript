import React, { useState } from "react";
import Input from "../components/input/Input";
import { useTypeSelector } from "../hooks/useTypeSelector";
import Button from "../components/button/Button";
import { useDispatch } from "react-redux";
import { startLogin } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const error = useTypeSelector((state) => state.user.error);
  const handleLogIn = () => {
    dispatch(startLogin(login, pass, navigate));
  };
  return (
    <div>
      <div className={"auth__page__authorization"}>
        <div className={"authorization__container"}>
          <div className={"input__login"}>
            <Input holder={"Логин"} onChange={setLogin} value={login} />
          </div>
          <div className={"input__pass"}>
            <Input
              type={"password"}
              holder={"Пароль"}
              onChange={setPass}
              value={pass}
            />
          </div>
          <div className={"error"}>{error}</div>
          <Button text={"Войти"} handleClick={handleLogIn} />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
