import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import authService from '../../services/auth-service';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/AuthModal',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
