import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { useAuth } from '../utils/auth-hook';
import '../styles/home';
import Nav from './nav';
import Projects from './projects';
import Tasks from './tasks';
import Teams from './teams';
import Dash from './dash/dash';

export default function Home() {
  const auth = useAuth();
  console.log('HOME', auth);
  return (
    <div id="home">
      <Router>
        <div id="head"></div>
      <Nav />
        <Switch>
          <Route path="/projects" >
            <Projects />
          </Route>

          <Route path="/tasks">
            <Tasks />
          </Route>

          <Route path="/teams">
            <Teams />
          </Route>

          <Route exact path="/">
            <Dash />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}