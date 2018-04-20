import React from 'react';

import classes from './BuildControl.scss';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <div className={classes.buttons}>
      <button 
        className={classes.Less} 
        onClick={props.removed} 
        disabled={props.disabled}>
        {/* - */}
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect width="60" height="15" x="21" y="45"></rect>
        </svg>
      </button>
      <button 
        className={classes.More} 
        onClick={props.added}>
        {/* + */}
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect width="60" height="15" x="21" y="45"></rect>
          <rect width="15" height="60" x="45" y="21"></rect>
        </svg>
      </button>
    </div>
  </div>
);

export default buildControl;