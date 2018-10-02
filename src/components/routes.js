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
import Channel from '../components/channel.js';
import Admin from '../components/admin.js';
/* auth */
const Async404 = Loadable({
  loader: () => import('../containers/notFound'),
  loading: Loading
});
const AsyncLogin = Loadable({
  loader: () => import('../containers/auth'),
  loading: Loading
});
/* channel  */
const AsyncAdmin = Loadable({
  loader: () => import('../containers/channel/admin'),
  loading: Loading
});
const AsyncBooking = Loadable({
  loader: () => import('../containers/channel/booking'),
  loading: Loading
});
const AsyncCustomer = Loadable({
  loader: () => import('../containers/channel/customer'),
  loading: Loading
});
const AsyncDriver = Loadable({
  loader: () => import('../containers/channel/driver'),
  loading: Loading
});
const AsyncVehicle = Loadable({
  loader: () => import('../containers/channel/vehicle'),
  loading: Loading
});
/* admin */
const AsyncSuper = Loadable({
  loader: () => import('../containers/admin'),
  loading: Loading
});
export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect from="/" to="/login" />
        </Route>
        <Admin path="/admin" component={AsyncSuper} exact />
        <Channel path="/channel" component={AsyncAdmin} exact />
        <Channel path="/channel/booking" component={AsyncBooking} exact />
        <Channel path="/channel/customer" component={AsyncCustomer} exact />
        <Channel path="/channel/driver" component={AsyncDriver} exact />
        <Channel path="/channel/vehicle" component={AsyncVehicle} exact />
        <Route path="/login" component={AsyncLogin} exact />
        <Route component={Async404} />
      </Switch>
    </Router>
  );
};
