import { combineReducers } from 'redux';
import bookings from './booking';
import drivers from './driver';
export default combineReducers({
  bookings,
  drivers
});
