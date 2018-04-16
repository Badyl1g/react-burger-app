import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/React-Aux/React-Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show /*|| nextProps.children !== this.props.children*/;
  }

  componentWillUpdate() {
    console.log('[Modal] WillUpdate');
  }

  render() {
    let attachedClasses = [classes.Modal, classes.Hide];

    if(this.props.show) {
      attachedClasses = [classes.Modal, classes.Show];
    }

    return (
      <Aux>
        <div className={attachedClasses.join(' ')}>
          {this.props.children}
        </div>
        <Backdrop 
          show={this.props.show} 
          clicked={this.props.modalClosed} />
      </Aux>
    );
  }
}

export default Modal;