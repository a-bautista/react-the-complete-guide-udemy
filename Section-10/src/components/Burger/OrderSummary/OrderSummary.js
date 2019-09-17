import React from "react";
import Aux from "../../../higher order component (hoc)/Auxiliary";
import Button from "../../UI/Button/Button";

/*
    The ingredientsSummary returns the ingredients in the following format 
    
    Salad: 0
    Bacon: 0
    Cheese: 0
    Meat: 0

    and we map each key (Salad or Bacon or Cheese or Meat) of the object with its respective value

    When you return a render in a component function, then you start and close with {}
*/

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(
    ingredientKey => {
      return (
        <li key={ingredientKey}>
          {ingredientKey}: {props.ingredients[ingredientKey]}
        </li>
      );
    }
  ); // ingredients in an object format

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to checkout?</p>
      <p>
        Your total price is: <strong>{props.price.toFixed(2)}</strong>
      </p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
