export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_ORDER_DATA':
      return { ...state, ...action.payload };
      break;
    default:
      return state;
  }
};
