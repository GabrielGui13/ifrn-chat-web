import React from 'react';

export const AppInput = ({ label, type, title, ...props }) => (
  <div>
    <label>{label}</label>
    <input type={type} title={title} {...props}/>
  </div>
);
