import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ProvideAuth } from '../utils/auth-hook';
import Login from './login';
import Signup from './signup';
import Home from './home';
import PrivateRoute from '../utils/private-route';

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          {/* <PrivateRoute> */}
            <Route exact path="/">
              <Home />
            </Route>
          {/* </PrivateRoute> */}

        </Switch>
      </Router>
    </ProvideAuth>
  );
};