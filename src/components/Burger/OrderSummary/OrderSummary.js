import React, { Component } from 'react';

import Aux from '../../../hoc/React-Aux/React-Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This should be a functional component
  render() {
    const ingredientSummary = Object
      .keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>
              {igKey}
            </span>
            : {this.props.ingredients[igKey]}
          </li>
        );
      });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicius burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button 
          btnType={"Danger"} 
          clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button 
          btnType={"Success"} 
          clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;