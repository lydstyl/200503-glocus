import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export function PrivateRoute({ children, ...rest }) {
  const email = useSelector((state) => state.firebase.auth.email);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        // fakeAuth.isAuthenticated ? (
        email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
