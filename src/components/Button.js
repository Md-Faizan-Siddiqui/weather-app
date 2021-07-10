import React from "react";
import "./button.css";

function Button(props) {
  return (
    <div className="btn-comp">
      <button className="btn" onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;
