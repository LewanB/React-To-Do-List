import React, { useEffect } from "react";

export default function ToDoElement({ check, text, index, checkToDo }) {

  return (
    <li className="liItem" id="totalItems">
      <label className="container">
        
        <input
          className="checkBox"
          type="checkbox"
          checked={check}
          onChange={() => checkToDo(index)}
        />
        <span className="checkmark"></span>
      </label>
      
      <span className={check ? "toDoSpanDone" : "toDoSpan"}>{text}</span>
    </li>
  );
}
