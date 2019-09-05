import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

/*
  The ingredients from the BurgerBuilder are passed to this function component and those ingredients are in an 
  object, so we need to transform that object into an array, so we can loop through it. 
*/

/*
  The function from below convert the ingredients object into an array.
*/
const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(
    ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    }
  );
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
