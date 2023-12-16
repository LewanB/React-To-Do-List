import React, { useEffect } from "react";
import "./Styles/ContainerBottomStyles.css";

//

function ContainerBottom({ toDos, clearToDo }) {

  let checkedToDos = []

  useEffect(() => {
    checkedToDos = toDos.filter((toDo) => !toDo.check);
  }, [toDos])


  return (
    <ul className="addContainerStyle" id="lastUl">
      <li id="lastLi">
        <span id="itemLeft">items left</span>
        <div className="select">
          <span className={toDos.length > 0 ? "categorySel" : ""}>All</span>
          <span id="active">Active</span>
          <span id="completed">Completed</span>
        </div>
        <span
          style={{ cursor: "pointer" }}
          className={checkedToDos.length > 0 ? "clearCompleted_active" : ""}
          onClick={clearToDo}>
          Clear Completed
        </span>
      </li>
    </ul>
  );
}

export default ContainerBottom;
