import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => {
  // props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null

  let attachedClasses = [classes.Backdrop, classes.Hide];

  if(props.show) {
    attachedClasses = [classes.Backdrop, classes.Show];
  }

  return (
    <div 
      className={attachedClasses.join(' ')}
      onClick={props.clicked}></div>
  );
};

export default backdrop;