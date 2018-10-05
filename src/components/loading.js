import React from 'react';
const loading = {
  position: 'absolute',
  left: '50%',
  top: 'calc(50% - 50px)',
  borderBottom: '3px solid #008be7',
  borderLeft: '3px solid #008be7',
  borderRight: '3px solid #008be7',
  borderTop: '3px solid #d1e0ea',
  borderRadius: '100%',
  height: '40px',
  width: '40px',
  animation: 'rot 1.5s infinite linear',
  marginLeft: ' -20px'
};
const Loading = data => {
  return data.trigger ? <div style={loading} /> : null;
};
export default Loading;
