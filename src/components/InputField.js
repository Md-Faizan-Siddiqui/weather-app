import React from "react";
import "./inputField.css"

function InputField(props) {
  return (
    <div className="input-comp">
      <input type={props.type} className={props.className} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    </div>
  );
}

export default InputField;
