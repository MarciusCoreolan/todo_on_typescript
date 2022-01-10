import React from "react";
import { Ibutton } from "../../types/componentTypes";

function Button({ text, handleClick }: Ibutton) {
  return (
    <button className={"button"} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
