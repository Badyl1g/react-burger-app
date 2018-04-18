import React, { Component } from 'react';
import { connect } from 'react-redux'

import Aux from '../React-Aux/React-Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => { // this won't cause problems with asynchronous state changes
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar 
          isAuth={this.props.isAuthenticated}
          drawerToogleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
        <Footer />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
}

export default connect(mapStateToProps)(Layout);