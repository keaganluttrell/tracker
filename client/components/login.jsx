import React, { useState } from 'react';
import { Link, Redirect, useLocation, useHistory } from 'react-router-dom';
import { useAuth } from '../utils/auth-hook';
import '../styles/auth';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const { from } = location.state || { from: { pathname: "/" } };

  const resetFields = () => {
    setEmail('');
    setPassword('');
  }

  const onEnter = k => {
    if (k.code === 'Enter') login();
  }

  const login = async () => {
    const result = await auth.signin(email, password);
    if (result.code) {
      resetFields();
      setMsg('Invalid Email or Password');
      setTimeout(function () {
        setMsg('');
      }, 3000);
    } else {
      <Redirect to={{ pathname: "/", state: { from: location } }} />
      history.replace(from);
      history.push('/');
    }
  };

  return (
    <div id="login" className="auth" >
      <div className="form-title">Login</div>
      <div id="error-msg-login">{msg}</div>
      <form>
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={onEnter}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={onEnter}
        />
      </form>
      <button onClick={login}>
        Login
      </button>
      <div className="auth-bottom-line">
        Not a member? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}