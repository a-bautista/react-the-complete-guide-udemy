import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

/*
    What you do in the function from below is to map every control into the CSS 
*/

const buildControls = props => (
  <div>
    <div className={classes.BuildControls} />
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)} // ingredientAdded comes from the BurgerBuilder
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
  </div>
);

export default buildControls;
