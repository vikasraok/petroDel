export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_VEHICLES':
      return { ...state, ...action.payload };
      break;
    default:
      return state;
  }
};
