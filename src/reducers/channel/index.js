import { combineReducers } from 'redux';
import bookings from './booking';
import drivers from './driver';
import vehicles from './vehicle';
export default combineReducers({
  bookings,
  drivers,
  vehicles
});
