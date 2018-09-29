import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/loading';
import Loadable from 'react-loadable';
/* routes */
import AppliedRoute from './components/routes/applied';
import AuthenticatedRoute from './components/routes/authenticated';
import UnauthenticatedRoute from './components/routes/unauthenticated';
/* containers */
import App from './containers';
import NotFound from './containers/notFound';
import Login from './containers/auth';

const Loading = props => {
  if (props.isLoading) {
    if (props.timedOut) {
      return <div>Loader timed out!</div>;
    } else if (props.pastDelay) {
      return <Loader trigger={true} />;
    } else {
      return null;
    }
  } else if (props.error) {
    return <div>Error! Component failed to load</div>;
  } else {
    return null;
  }
};

/* loadables */
const AsyncAdmin = Loadable({
  loader: () => import('./containers/admin'),
  loading: Loading
});
const AsyncBooking = Loadable({
  loader: () => import('./containers/booking'),
  loading: Loading
});
const AsyncCustomer = Loadable({
  loader: () => import('./containers/customer'),
  loading: Loading
});
const AsyncDriver = Loadable({
  loader: () => import('./containers/driver'),
  loading: Loading
});
const AsyncVehicle = Loadable({
  loader: () => import('./containers/vehicle'),
  loading: Loading
});

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <AuthenticatedRoute path="/admin" component={AsyncAdmin} exact />
        <AuthenticatedRoute path="/booking" component={AsyncBooking} exact />
        <AuthenticatedRoute path="/customer" component={AsyncCustomer} exact />
        <AuthenticatedRoute path="/driver" component={AsyncDriver} exact />
        <AuthenticatedRoute path="/vehicle" component={AsyncVehicle} exact />
        <UnauthenticatedRoute path="/login" component={Login} exact />
        <AppliedRoute component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
