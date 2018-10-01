import React from 'react';
const meta = {
  margin: '0 20px 20px 0',
  padding: '5px 20px',
  display: 'inline-block',
  border: '1px solid #cecece'
};
const value = {
  color: '#007bff'
};
const label = {
  color: '#444'
};
export default props => {
  return (
    <div style={meta}>
      <h2 style={value} className={`text-${props.class}`}>
        {props.value}
      </h2>
      <span style={label}>{props.label}</span>
    </div>
  );
};
