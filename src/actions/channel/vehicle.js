export const setVehicles = data => dispatch => {
  dispatch({ type: 'SET_VEHICLES', payload: data });
};
