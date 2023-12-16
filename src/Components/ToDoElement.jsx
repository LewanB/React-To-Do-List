import React from "react";
import { useState } from "react";

export default function ToDoElement({ index, text }) {
  const [check, setCheck] = useState(false);

  const handleCheckChange = () => {
    const newCheck = !check;
    setCheck(newCheck);
  };

  return (
    <li className="liItem" id="totalItems">
      <label className="container">
        <input
          className="checkBox"
          type="checkbox"
          checked={check}
          onChange={handleCheckChange}
        />
        <span className="checkmark"></span>
      </label>
      <span className={check ? "toDoSpanDone" : "toDoSpan"}>{text}</span>
    </li>
  );
}
