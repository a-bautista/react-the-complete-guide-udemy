import React from "react";
import classes from "./Button.css";

/*
    Because we are not rendering then we start and close our function with (). 
    The props.children allows us to pass the continue and cancel options. 
*/

const button = props => (
  <button
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
