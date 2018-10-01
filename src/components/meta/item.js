import React from 'react';
const meta = {
  margin: '0 20px 20px 0',
  padding: '5px 20px',
  display: 'inline-block',
  border: '1px solid #cecece',
  borderRadius: '4px'
};
const label = {
  color: '#444'
};
export default props => {
  return (
    <div style={meta}>
      <h2 className={`text-${props.class}`}>
        {props.type === 'currency' ? (
          <span>
            &#8377;
            {props.value}
          </span>
        ) : (
          props.value
        )}
      </h2>
      <span style={label}>{props.label}</span>
    </div>
  );
};
