import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './loadable';
/* routes */
import Main from '../containers/';
/* loadables */
const Async404 = Loadable({
  loader: () => import('../containers/notFound'),
  loading: Loading
});
const AsyncLogin = Loadable({
  loader: () => import('../containers/auth'),
  loading: Loading
});
const AsyncAdmin = Loadable({
  loader: () => import('../containers/admin.js'),
  loading: Loading
});
const AsyncBooking = Loadable({
  loader: () => import('../containers/booking.js'),
  loading: Loading
});
const AsyncCustomer = Loadable({
  loader: () => import('../containers/customer.js'),
  loading: Loading
});
const AsyncDriver = Loadable({
  loader: () => import('../containers/driver.js'),
  loading: Loading
});
const AsyncVehicle = Loadable({
  loader: () => import('../containers/vehicle.js'),
  loading: Loading
});

export default () => {
  return (
    <Router>
      <Switch>
        <Main path="/admin" component={AsyncAdmin} exact />
        <Main path="/booking" component={AsyncBooking} exact />
        <Main path="/customer" component={AsyncCustomer} exact />
        <Main path="/driver" component={AsyncDriver} exact />
        <Main path="/vehicle" component={AsyncVehicle} exact />
        <Main path="/login" component={AsyncLogin} exact />
        <Route component={Async404} />
      </Switch>
    </Router>
  );
};
