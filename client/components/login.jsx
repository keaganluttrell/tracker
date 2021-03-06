import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './auth-hook';
import '../styles/auth'

export default function Login() {
  // const history = useHistory();
  // const location = useLocation();
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // let { from } = location.state || { from: { pathname: "/" } };
  const login = () => {
    auth.signin(email, password);
  };
  return (
    <div id="login" className="auth">
      <div className="form-title">Login</div>
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
      </form>
      <button onClick={login}>Login</button>
      <div className="auth-bottom-line">
        Not a member? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}