import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './auth-hook';
import '../styles/auth'

export default function Home() {
  return (
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
  );
}