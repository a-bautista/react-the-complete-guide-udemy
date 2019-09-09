import React from "react";
import classes from "./Modal.css";
import Aux from "../../../higher order component (hoc)/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

/* The modal is the display window that holds the value of your ordered hamburger. 
    
*/
const modal = props => (
  <Aux>
    <Backdrop showModal={props.showModal} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.showModal ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.showModal ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
