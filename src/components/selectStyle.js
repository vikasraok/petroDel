import React from 'react';
export default {
  container: base => ({
    ...base,
    'box-shadow': 'none',
    width: '200px',
    display: 'inline-block'
  }),
  control: base => ({
    ...base,
    'min-height': '40px',
    'background-color': 'rgba(0,0,0,0)',
    'box-shadow': 'none'
  }),
  option: base => ({
    ...base,
    'text-align': 'left'
  })
};
