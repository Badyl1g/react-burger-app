import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  console.log(props);
  let transformedIngredients = Object
    .keys(props.ingredients) // Transform props.ingredients to array of ingredient NAMES
    .map(igKey => { // For every ingredient NAME check how many of each should be on the burger
      return [...Array(props.ingredients[igKey])] // Return array of empty values (number of values indicates how many ingredients of each type user added)
        .map((_, i) => { // for every empty element in array return a BurgerIngredient
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;