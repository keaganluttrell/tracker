import React, { useState } from 'react';
import { Link, Redirect, useLocation, useHistory } from 'react-router-dom';
import { useAuth } from './auth-hook';
import '../styles/auth'

export default function Signup() {
  const history = useHistory();
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [msg, setMsg] = useState('');
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const signup = () => {
    history.replace(from);
    if (password === confirm) {
      auth.signup(email, password);
      <Redirect to={{ pathname: "/", state: { from: location } }} />
      // catch errors here
    } else {
      setMsg('Passwords do not match');
      setEmail('');
      setPassword('');
      setConfirm('');
      setTimeout(function () {
        setMsg('');
      }, 3000)
    }
  };

  return (
    <div id="login" className="auth">
      <div className="form-title">Sign Up</div>
      <div id="error-msg">{msg}</div>
      <form>
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
      </form>
      <button onClick={signup}>Sign Up</button>
      <div className="auth-bottom-line">
        Already a member? <Link to="/login">Login</Link>
      </div>
    </div>
  )
}