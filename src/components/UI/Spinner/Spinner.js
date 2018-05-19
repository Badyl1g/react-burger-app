import React from 'react';

import classes from './Spinner.css';
// import Spinner from 'react-spinkit';

const spinner = (props) => (
  <div className={classes.Loader}>Loading...</div>
  
  // <div className={classes.skFoldingCube}>
  //   <div className="sk-cube1 sk-cube"></div>
  //   <div className="sk-cube2 sk-cube"></div>
  //   <div className="sk-cube4 sk-cube"></div>
  //   <div className="sk-cube3 sk-cube"></div>
  // </div>
);

export default spinner;