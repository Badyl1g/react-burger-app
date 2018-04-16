import React from 'react';

// import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/React-Aux/React-Aux';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <Aux>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          {/* <Logo /> */}
          <h1>BurgerApp</h1>
        </div>
        <nav>
          <NavigationItems 
            isAuthenticated={props.isAuth}
            linkClicked={props.closed} />
        </nav>
      </div>
      <Backdrop 
        show={props.open} 
        clicked={props.closed} />
    </Aux>
  );
};

export default sideDrawer;