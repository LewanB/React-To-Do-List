import React from "react";
import "./Styles/FormHeadingStyles.css";

function FormHeading({ toDos }) {
  return (
    <div className="formHeadingContainer">
      <div className="formHeadlineContainer">
        <h2>TODO</h2>
      </div>
      <div id="formIconContainer">
        <div id={toDos.length > 0 ? "formIconFiller" : ""}></div>
      </div>
    </div>
  );
}

export default FormHeading;
