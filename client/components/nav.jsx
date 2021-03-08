import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/home';

export default function Nav() {
  return (
    <div id="nav">
      <ul>
        <li><Link to='/'>Dash</Link></li>
        <li><Link to='/tasks'>Tasks</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/teams'>Teams</Link></li>
      </ul>
    </div>
  );
}