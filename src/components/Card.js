import React from "react";
import "./card.css";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";

function Card(props) {
  const main = props?.city?.main;
  return (
    <div className="card">
      {!props?.city?.name ? (
        <div className="if-condition">
          <p className="nul-condition">No Data Found</p>
        </div>
      ) : (
        <div className="els-condition">
          <h2 className="lineHight">{props.city.name}</h2>
          <h1 className="lineHight">
            {main?.temp}
            <span>&#8451;</span>
          </h1>
          <CloudOutlinedIcon fontSize="large" />
          <p className="lineHight">
            Min : {main?.temp_min}
            <span>&#8451;</span> | Max : {main?.temp_max}
            <span>&#8451;</span>{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default Card;
