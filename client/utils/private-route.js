import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/auth-hook';

export default function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  console.log('Private Route', auth.user)
  const location = useLocation();
  return (
    <Route {...rest} render={() => {
      return auth.user ? (children) :
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
    }}
    />
  );
}