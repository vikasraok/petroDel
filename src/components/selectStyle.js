const defaultStyle = {
  container: base => ({
    ...base,
    boxShadow: 'none',
    width: '180px',
    display: 'inline-block'
  }),
  control: base => ({
    ...base,
    minHeight: '40px',
    backgroundColor: 'rgba(0,0,0,0)',
    boxShadow: 'none',
    ':hover': {
      cursor: 'pointer'
    }
  }),
  option: base => ({
    ...base,
    textAlign: 'left'
  })
};
export const datePicker = {
  ...defaultStyle,
  container: base => ({
    ...base,
    width: '300px'
  })
};
export default defaultStyle;
