import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../loadable';
/* routes */
import AppliedRoute from './applied';
import AuthenticatedRoute from './authenticated';
import UnauthenticatedRoute from './unauthenticated';
/* loadables */
const Async404 = Loadable({
  loader: () => import('../../containers/notFound'),
  loading: Loading
});
const AsyncLogin = Loadable({
  loader: () => import('../../containers/auth'),
  loading: Loading
});
const AsyncAdmin = Loadable({
  loader: () => import('../../containers/admin'),
  loading: Loading
});
const AsyncBooking = Loadable({
  loader: () => import('../../containers/booking'),
  loading: Loading
});
const AsyncCustomer = Loadable({
  loader: () => import('../../containers/customer'),
  loading: Loading
});
const AsyncDriver = Loadable({
  loader: () => import('../../containers/driver'),
  loading: Loading
});
const AsyncVehicle = Loadable({
  loader: () => import('../../containers/vehicle'),
  loading: Loading
});

export default () => {
  return (
    <Router>
      <Switch>
        <AuthenticatedRoute path="/admin" component={AsyncAdmin} exact />
        <AuthenticatedRoute path="/booking" component={AsyncBooking} exact />
        <AuthenticatedRoute path="/customer" component={AsyncCustomer} exact />
        <AuthenticatedRoute path="/driver" component={AsyncDriver} exact />
        <AuthenticatedRoute path="/vehicle" component={AsyncVehicle} exact />
        <UnauthenticatedRoute path="/login" component={AsyncLogin} exact />
        <AppliedRoute component={Async404} />
      </Switch>
    </Router>
  );
};
