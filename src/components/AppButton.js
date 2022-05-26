import React from 'react';

export const AppButton = props => (
    <div>
      <button {...props} type="submit" title={props.title}>{props.label}</button>
    </div>
  );
  