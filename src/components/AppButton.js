import React from 'react';

export const AppButton = props => (
    <div>
      <button type="submit" title={props.title}>{props.label}</button>
    </div>
  );
  