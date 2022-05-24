import React from 'react';

export const AppInput = ({ label, type, title }) => (
  <div>
    <label>{label}</label>
    <input type={type} title={title} />
  </div>
);
