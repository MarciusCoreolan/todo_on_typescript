import React from "react";
import { Iinput } from "../../types/componentTypes";

function Input({ holder = "Текст", type = "text", onChange, value }: Iinput) {
  return (
    <input
      className={`input`}
      placeholder={holder}
      type={type}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      value={value}
    />
  );
}

export default Input;
