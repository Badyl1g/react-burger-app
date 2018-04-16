import React from 'react';
import ReactMorph from 'react-morph';

import classes from './Order.scss';

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return <span className={classes.ingredient}
      // style={{
      //   textTransform: 'capitalize',
      //   display: 'inline-block',
      //   margin: '0 8px',
      //   border: '1px solid #ccc',
      //   borderRadius: '3px',
      //   background: 'lightgrey',
      //   padding: '5px 10px'
      // }}
      key={ig.name}>{ig.name} ({ig.amount})</span>
  })

  let attachedClasses = [classes.Order];

  if (props.last) {
    attachedClasses = [classes.Order, classes.newest];
  }

  return (
    // <div className={attachedClasses.join(' ')}>
    //   <p>Ingredients: {ingredientOutput}</p>
    //   <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
    //   <p>Ordered: {new Date(props.date).toLocaleDateString()}</p>
    // </div>
    <ReactMorph>
      {({from, to, fadeIn, fadeOut, hide, go}) => (

        <div className={classes.OrderWrapper}>

          <div 
            className={classes.Order} 
            onClick={() => go(1)}
            {...from('order')}>
            <div>
              <p {...from('price')}>
                Price: <strong>USD {props.price.toFixed(2)}</strong>
              </p>
              <p {...from('ordered')}>
                Ordered: {new Date(props.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div 
            className={[classes.Order, classes.Details].join(' ')}
            onClick={() => go(0)}
            {...to('order')}>

            <div>
              <p {...to('price')}>
                Price: <strong>USD {props.price.toFixed(2)}</strong>
              </p>
              <p {...fadeIn()}>Ingredients: {ingredientOutput}</p>
              <p {...to('ordered')}>
                Ordered: {new Date(props.date).toLocaleDateString()}
              </p>
            </div>
          </div>

        </div>

      )}
      
    </ReactMorph>

    // <ReactMorph>
    //   {({from, to, go}) => (

    //     <div className={classes.Order} onClick={() => go(1)}>
    //       <p>Ingredients: {ingredientOutput}</p>
    //       <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
    //       <p>Ordered: {new Date(props.date).toLocaleDateString()}</p>
    //     </div>

    //   )}
    // </ReactMorph>
  );
};

export default order;