import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (

  <ul className={classes.NavigationItems}>
    <NavigationItem 
      link={"/"} 
      exact 
      linkClicked={props.linkClicked}>
      Burger Builder
    </NavigationItem>

    {props.isAuthenticated
      ? <NavigationItem 
          link={"/orders"} 
          linkClicked={props.linkClicked}>
          Orders
        </NavigationItem> 
      : null
    }
    
    {props.isAuthenticated 
      ? <NavigationItem 
          link={"/logout"} 
          linkClicked={props.linkClicked}>
          Logout
        </NavigationItem> 
      : <NavigationItem 
          link={"/auth"} 
          linkClicked={props.linkClicked}>
          Authenticate
        </NavigationItem>
    }
  </ul>

);

export default navigationItems;