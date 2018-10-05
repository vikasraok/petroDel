export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_DRIVERS':
      return { ...state, ...action.payload };
      break;
    default:
      return state;
  }
};
