import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './components/routes';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
