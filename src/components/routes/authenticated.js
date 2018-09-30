import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './style.scss';
export default ({ component: C, props: cProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      /* cProps.isAuthenticated */ true ? (
        <div className="App">
          <header className="App-header" />
          <C {...props} {...cProps} />
        </div>
      ) : (
        <Redirect
          to={`/login?redirect=${props.location.pathname}${
            props.location.search
          }`}
        />
      )
    }
  />
);
