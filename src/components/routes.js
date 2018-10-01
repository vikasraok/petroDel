import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './loadable';
/* routes */
import Customer from '../containers/';
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
        <Route path="/" exact>
          <Redirect from="/" to="/login" />
        </Route>
        <Customer path="/channel/admin" component={AsyncAdmin} exact />
        <Customer path="/channel/booking" component={AsyncBooking} exact />
        <Customer path="/channel/customer" component={AsyncCustomer} exact />
        <Customer path="/channel/driver" component={AsyncDriver} exact />
        <Customer path="/channel/vehicle" component={AsyncVehicle} exact />
        <Route path="/login" component={AsyncLogin} exact />
        <Route component={Async404} />
      </Switch>
    </Router>
  );
};
