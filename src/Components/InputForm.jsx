import React from "react";
import { useState } from "react";
import AddButton from "./AddButton";
import "./Styles/InputFormStyles.css";

function InputForm({ onAddButtonClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      onAddButtonClick({ text: inputValue, check: false });
      setInputValue("");
    }
  };

  const handleLocalAddButtonClick = () => {
    if (inputValue.trim() !== "") {
      onAddButtonClick({ text: inputValue });
      setInputValue("");
    }
  };

  return (
    <div className="form">
      <div className="circleIcon"></div>
      <input
        type="text"
        id="taskInput"
        className="inputClass"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeydown}
      />

      <AddButton
        isVisible={inputValue.trim() !== ""}
        onClick={handleLocalAddButtonClick}
      />
    </div>
  );
}

export default InputForm;
