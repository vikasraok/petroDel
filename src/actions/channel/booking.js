export const init = data => dispatch => {
  dispatch({ type: 'SET_ORDER_DATA', payload: data });
};
