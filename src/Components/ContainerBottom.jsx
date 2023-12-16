import React from "react";
import "./Styles/ContainerBottomStyles.css";

//

function ContainerBottom({ toDos, setToDos, getToDoStateFromChildCB }) {
  const checkedToDos = toDos.filter((toDo) => toDo.check !== false);

  const handleClearing = () => {
    const newToDos = toDos.filter((toDo) => !toDo.check);
    setToDos(newToDos);
  };

  getToDoStateFromChildCB();

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
          className={checkedToDos.length > 0 ? "clearCompleted_active" : ""}
          onClick={handleClearing}>
          Clear Completed
        </span>
      </li>
    </ul>
  );
}

export default ContainerBottom;
