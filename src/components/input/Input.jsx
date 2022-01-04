import React from "react";

function Input({ holder = "Текст", type = "text", onChange, value }) {
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
