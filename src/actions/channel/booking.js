export const setBookings = data => dispatch => {
  dispatch({ type: 'SET_BOOKINGS', payload: data });
};
