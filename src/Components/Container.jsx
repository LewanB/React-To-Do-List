import React from "react";
import { useState } from "react";
import FormHeading from "./FormHeading";
import InputForm from "./InputForm";
import ToDoElement from "./ToDoElement";
import ContainerBottom from "./ContainerBottom";
import "./Styles/ContainerStyles.css";

function Container() {
  // Styling
  const dragDropStyle = {
    display: "block",
    textAlign: "center",
    whiteSpace: "nowrap",
    marginTop: "10%",
    color: "rgba(255, 255, 255, 0.25)",
    fontSize: "14px",
    transition: "opacity ease-in 500ms",
  };
  //

  function getToDoStateFromChildCB() {}

  const [toDos, setToDos] = useState([]);

  const handleAddButtonClick = (newTodo) => {
    setToDos([...toDos, newTodo]);
  };

  return (
    <>
      <div className="toDoContainer">
        <FormHeading toDos={toDos} />

        <InputForm onAddButtonClick={handleAddButtonClick} />

        <ul className="addContainerStyle" id="addContainer">
          {toDos.map((toDo, index) => (
            <ToDoElement key={index} text={toDo.text} />
          ))}
        </ul>

        <ContainerBottom
          toDos={toDos}
          setToDos={setToDos}
          getFromChild={getToDoStateFromChildCB}
        />

        <p style={toDos.length > 2 ? dragDropStyle : { opacity: "0" }}>
          Drag and drop to reorder list
        </p>
      </div>
    </>
  );
}

export default Container;
