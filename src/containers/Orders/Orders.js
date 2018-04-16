import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import classes from './Orders.scss';

function order(order) {
  let sortOrder = 1
  if (order === 'desc') {
    sortOrder = -1;
  }
  return (a,b) => {
    if (new Date(a.date).getTime() < new Date(b.date).getTime())
      return -1 * sortOrder;
    if (new Date(a.date).getTime() > new Date(b.date).getTime())
      return 1 * sortOrder;
    return 0;
  }
}

class Orders extends Component {
  state = {
    sort: 'newest'
  }

  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  inputChangedHandler(event) {
    // const sort = event.target.value;
    console.log(event.target.value);
    this.setState({ sort: event.target.value });
  }

  render() {
    let orders = <Spinner />;

    if (!this.props.loading) {
      if (this.state.sort === 'newest') {
        orders = (
          this.props.orders
            .sort(order('ascending'))
            .map((order, i) => (
            <Order 
              key={order.id}
              ingredients={order.ingredients}
              price={+order.price}
              date={order.date}
              last={i === 0} />
          ))
        );
      } else if (this.state.sort === 'oldest') {
        orders = (
          this.props.orders
            .sort(order('desc'))
            .map((order, i) => (
              <Order 
                key={order.id}
                ingredients={order.ingredients}
                price={+order.price}
                date={order.date}
                last={i === 0} />
            ))
        );
      }
    }
    
    return (
      <div className={classes.Orders}>
        <div className={classes.Sorting}>
          <Input 
            elementType="select"
            elementConfig={{
              options: [
                {value: 'newest', displayValue: 'Newest'},
                {value: 'oldest', displayValue: 'Oldest'}
              ]
            }}
            value={this.state.sort}
            changed={(event) => this.inputChangedHandler(event)} />
        </div>

        {orders}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));