import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../higher order component (hoc)/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

/* The modal is the display window that holds the value of your ordered hamburger. 
    
*/
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUpdate() {
    console.log("[Modal] wil update");
  }

  render() {
    return (
      <Aux>
        <Backdrop
          showModal={this.props.showModal}
          clicked={this.props.modalClosed}
        />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.showModal
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.showModal ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
