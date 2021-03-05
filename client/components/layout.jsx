import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../styles/layout';
import Login from './login';
import Signup from './signup';

export default function Layout() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
          <div id="home">
            HOME
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </ul>
            </div>

          </div>
        </Route> */}

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Signup />
        </Route>

      </Switch>
    </Router>
  );
};