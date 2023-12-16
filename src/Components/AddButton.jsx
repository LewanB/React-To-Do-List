import React from "react";

function AddButton({ onClick, isVisible }) {
  const buttonStyle = {
    display: "block",
    height: "80px",
    width: isVisible ? "18%" : "0",
    marginLeft: isVisible ? "15px" : "0px",
    color: isVisible ? "rgba(255, 255, 255, 0.7)" : "transparent",
    backgroundColor: "#25273c",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    lineHeight: "80px",
    fontSize: "18px",
    fontWeight: "400",
    paddingTop: "3px",
    visibility: isVisible ? "visible" : "hidden",
    opacity: isVisible ? "1" : "0",
    transition:
      "width 500ms, color ease-in-out 300ms, margin-left 500ms, visibility 500ms, opacity 500ms",
  };

  return (
    <button id="addButton" style={buttonStyle} onClick={onClick}>
      Add
    </button>
  );
}

export default AddButton;
