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

  const [toDos, setToDos] = useState([]);

  const handleAddButtonClick = (newTodo) => {
    setToDos([...toDos, newTodo]);
  };

  const checkToDo = (index) => {
    const toDoChecked = [...toDos];
    toDoChecked[index].check = !toDoChecked[index].check;
    setToDos(toDoChecked)

  };


  function clearToDo() {
    setToDos((toDos) => toDos.filter((toDo) => !toDo.check));
  }

  return (
    <>
      <div className="toDoContainer">
        <FormHeading toDos={toDos} />

        <InputForm onAddButtonClick={handleAddButtonClick} />

        <ul className="addContainerStyle" id="addContainer">
          {toDos.map((toDo, index) => (
            <ToDoElement key={index} check={toDo.check} text={toDo.text} index={index} checkToDo={checkToDo} />
          ))}
        </ul>

        <ContainerBottom
          toDos={toDos}
          clearToDo={clearToDo}
        />

        <p style={toDos.length > 2 ? dragDropStyle : { opacity: "0" }}>
          Drag and drop to reorder list
        </p>
      </div>
    </>
  );
}

export default Container;
