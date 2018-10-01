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
    'box-shadow': 'none',
    ':hover': {
      cursor: 'pointer'
    }
  }),
  option: base => ({
    ...base,
    'text-align': 'left'
  })
};
