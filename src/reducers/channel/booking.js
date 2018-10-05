export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_BOOKINGS':
      return { ...state, ...action.payload };
      break;
    default:
      return state;
  }
};
