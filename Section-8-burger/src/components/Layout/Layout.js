import React from "react";
import Aux from "../../higher order component (hoc)/Auxiliary";
import classes from "./Layout.css";

/*
    This is a functional component and we can return a json object, a div or an array (but you need to return a key).
    The alternative to these options is to wrap everythin in an auxiliary component.  
*/

const layout = props => (
  <Aux>
    <div>toolbar, sidedrawer, backdrop!</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
